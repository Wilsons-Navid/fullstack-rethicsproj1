const express = require("express");
const router = express.Router();
const Scan = require("../models/Scan");
const { exec } = require("child_process");
const auth = require("../middleware/auth");

// Start new scan
router.post("/scans", auth, async (req, res) => {
  try {
    const { targetUrl } = req.body;

    // Basic validation
    if (!targetUrl || !isValidUrl(targetUrl)) {
      return res.status(400).json({ error: "Invalid URL" });
    }

    // Create scan record
    const scan = await Scan.create({
      targetUrl,
      status: "queued",
      initiatedBy: req.user?.id, // If using authentication
    });

    // Start scan in background
    exec(
      `nuclei -u ${targetUrl} -crawl -crawl-max-depth 5 -silent -json`,
      { timeout: 3000000 },
      async (error, stdout, stderr) => {
        try {
          await Scan.findByIdAndUpdate(scan._id, { status: "in-progress" });

          const vulnerabilities = parseNucleiOutput(stdout);

          await Scan.findByIdAndUpdate(scan._id, {
            status: "completed",
            vulnerabilities,
          });
        } catch (err) {
          await Scan.findByIdAndUpdate(scan._id, { status: "failed" });
        }
      }
    );

    res.status(202).json({ scanId: scan._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get scan results
router.get("/:id", async (req, res) => {
  try {
    const scan = await Scan.findById(req.params.id);
    if (!scan) return res.status(404).json({ error: "Scan not found" });
    res.json(scan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Helper functions
const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const parseNucleiOutput = (stdout) => {
  return stdout
    .split("\n")
    .filter((line) => line.trim())
    .map((line) => {
      try {
        const data = JSON.parse(line);
        return {
          templateId: data.template_id,
          name: data.info?.name || "Unknown",
          severity: data.info?.severity || "info",
          description: data.info?.description || "No description",
          matchedUrl: data.matched_at,
        };
      } catch {
        return null;
      }
    })
    .filter(Boolean);
};

module.exports = router;
