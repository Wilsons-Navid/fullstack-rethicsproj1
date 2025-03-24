const mongoose = require("mongoose");

const IncidentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, "Please enter the incident type"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
  location: {
    type: String,
    required: [true, "Please provide a location"],
  },
  reportedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "reported",
  },
  reporterName: {
    type: String,
    required: [true, "Please provide reporter's name"],
  },
  reporterEmail: {
    type: String,
    required: [true, "Please provide reporter's email"],
  },
});

module.exports = mongoose.model("Incident", IncidentSchema);
