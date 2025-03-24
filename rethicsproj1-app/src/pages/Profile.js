import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const userData = JSON.parse(localStorage.getItem("user"));
      if (!userData) {
        navigate("/login"); // Redirect to login if user is not authenticated
      } else {
        setUser(userData);
        setFormData(userData); // Initialize form data with user data
      }
    };
    fetchUser();
  }, [navigate]);

  const handleEditClick = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveChanges = () => {
    localStorage.setItem("user", JSON.stringify(formData)); // Update localStorage
    setUser(formData); // Update state
    setShowEditModal(false); // Close the modal
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-container">
      <h2 className="profile-header">Welcome, {user.name}</h2>
      <div className="profile-card">
        <div className="profile-picture-section">
          <img
            src="https://i.postimg.cc/kg0f9vFs/love56t.jpg"
            alt="Profile"
            className="profile-picture"
          />
          <h4 className="profile-name">{user.name}</h4>
          <p className="profile-bio">{user.bio || "No bio available."}</p>
          <Button
            variant="primary"
            onClick={handleEditClick}
            className="edit-button"
          >
            Edit Profile
          </Button>
        </div>

        <div className="profile-details-section">
          <div className="profile-section">
            <h5>Personal Information</h5>
            <hr />
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone || "Not provided"}
            </p>
            <p>
              <strong>Address:</strong> {user.address || "Not provided"}
            </p>
          </div>

          <div className="profile-section">
            <h5>Social Media</h5>
            <hr />
            <p>
              <strong>LinkedIn:</strong> {user.linkedin || "Not provided"}
            </p>
            <p>
              <strong>Twitter:</strong> {user.twitter || "Not provided"}
            </p>
            <p>
              <strong>GitHub:</strong> {user.github || "Not provided"}
            </p>
          </div>

          <div className="profile-section">
            <h5>About Me</h5>
            <hr />
            <p>{user.about || "No additional information provided."}</p>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Modal
        show={showEditModal}
        onHide={handleCloseEditModal}
        className="edit-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <p>Edit</p> */}
          <Form>
            <div className="modal-form-grid">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone || ""}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address || ""}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Bio</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="bio"
                  value={formData.bio || ""}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control
                  type="text"
                  name="linkedin"
                  value={formData.linkedin || ""}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Twitter</Form.Label>
                <Form.Control
                  type="text"
                  name="twitter"
                  value={formData.twitter || ""}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>GitHub</Form.Label>
                <Form.Control
                  type="text"
                  name="github"
                  value={formData.github || ""}
                  onChange={handleInputChange}
                />
              </Form.Group>
              {/* 
              <Form.Group className="mb-3">
                <Form.Label>About Me</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="about"
                  value={formData.about || ""}
                  onChange={handleInputChange}
                />
              </Form.Group> */}
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Profile;
