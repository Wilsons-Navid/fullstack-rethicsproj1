import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Dashboard from "./components/Dashboard";
import IncidentReport from "./components/IncidentReport";
import VulnerabilityScanner from "./components/VulnerabilityScanner";
import UserEducation from "./components/UserEducation";
import YouthEngagement from "./components/YouthEngagement";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import { Navigate } from "react-router-dom";
import PhishingEducation from "./components/Phishing";
import CybersecurityIntroduction from "./components/introcybersec";
import SecurePasswordPractices from "./components/passwords";
import SocialEngineeringAwareness from "./components/socialengineering";
import HackathonForGood from "./components/hackathon";
import CyberMentorship from "./components/cybermentorship";
import CyberAwareness from "./components/campaigns";
import WorkshopComponent from "./components/workshops";


function App() {
  return (
    <Router>
      {/* Navbar at the top of every page */}
      <Navbar />

      {/* Main content area with routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/incident-report" element={<IncidentReport />} />
          <Route
            path="/user-education/Phishing"
            element={<PhishingEducation />}
          />
           <Route
            path="/user-education/Cybersecintro"
            element={<CybersecurityIntroduction />}
          />
          <Route
            path="/user-education/passwords"
            element={<SecurePasswordPractices />}
          />
             <Route
            path="/user-education/social-engineering"
            element={<SocialEngineeringAwareness />}
          />
           <Route
            path="/hackathon-for-good"
            element={<HackathonForGood />}
          />
            <Route
            path="youth-engagement/cybermentorship"
            element={<CyberMentorship />}
          />
             <Route
            path="youth-engagement/campaigns"
            element={<CyberAwareness />}
          />

<Route
            path="youth-engagement/youth-workshops"
            element={<WorkshopComponent />}
          />
          <Route
            path="/vulnerability-scanner"
            element={<VulnerabilityScanner />}
          />
          
          <Route path="/user-education" element={<UserEducation />} />
          <Route path="/youth-engagement" element={<YouthEngagement />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* Footer at the bottom of every page */}
      <Footer />
    </Router>
  );
}

export default App;
