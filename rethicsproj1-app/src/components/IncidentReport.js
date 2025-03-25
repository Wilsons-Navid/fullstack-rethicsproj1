

import React, { useState } from "react";
import axios from "axios";
const AUTH_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api/incidents`;


const IncidentReport = () => {
  const [formData, setFormData] = useState({
    type: "",
    description: "",
    location: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login to report incidents");
        return;
      }

      const response = await axios.post(
        `${AUTH_BASE_URL}/incidents`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);

      alert("Incident reported successfully!");
      setFormData({ type: "", description: "", location: "" });
    } catch (error) {
      console.error("Error reporting incident:", error);
      alert(error.response?.data?.message || "Error submitting report");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Report a Cybercrime Incident</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Type of Incident</label>
          <input
            type="text"
            className="form-control"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            placeholder="e.g., Phishing, Data Breach, Online Scam"
            required
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <textarea
            className="form-control"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Provide detailed information about the incident..."
            required
            rows="5"
          />
        </div>

        <div className="mb-3">
          <label>Location</label>
          <input
            type="text"
            className="form-control"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            placeholder="City/Region where incident occurred"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default IncidentReport;
