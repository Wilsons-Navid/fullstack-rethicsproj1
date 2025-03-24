const mongoose = require("mongoose");

const VulnerabilitySchema = new mongoose.Schema({
  templateId: String,
  name: String,
  severity: {
    type: String,
    enum: ["info", "low", "medium", "high", "critical"],
    default: "info"
  },
  description: String,
  matchedUrl: String
});

const ScanSchema = new mongoose.Schema({
  targetUrl: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ["queued", "in-progress", "completed", "failed"],
    default: "queued"
  },
  vulnerabilities: [VulnerabilitySchema],
  initiatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User" // Link to your existing User model
  }
}, { timestamps: true });

module.exports = mongoose.model("Scan", ScanSchema);