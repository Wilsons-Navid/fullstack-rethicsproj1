const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Incident = require("../models/Incident");
const User = require("../models/User");

// @route   POST api/incidents
router.post("/incidents", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const newIncident = new Incident({
      type: req.body.type,
      description: req.body.description,
      location: req.body.location,
      reportedBy: req.user.id,
      reporterName: user.name, // ✅ From User model
      reporterEmail: user.email,
    });

    const incident = await newIncident.save();
    res.json(incident);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/incidents
router.get("/incidents", auth, async (req, res) => {
  try {
    const incidents = await Incident.find().sort({ createdAt: -1 });
    res.json(incidents);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
