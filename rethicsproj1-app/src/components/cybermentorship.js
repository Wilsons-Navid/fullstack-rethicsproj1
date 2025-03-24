

import React from "react";

const CyberMentorship = () => {
  return (
    <div className="cyber-mentorship">
      <header className="program-header">
        <h1>🛡️ Cyber Shield Mentorship Program</h1>
        <p>
          Universal cybersecurity education for individuals, organizations, and
          social impact groups
        </p>
      </header>
      {/* Inspiration Video */}
      <div className="mentor-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/up863eQKGUI"
          title="Cybersecurity Fundamentals Video"
          allowFullScreen
        ></iframe>
      </div>
      {/* Target Groups Section */}
      <section className="audience-section">
        <h2>Who We Mentor</h2>
        <div className="audience-grid">
          {/* Youth/Individuals Card */}
          <div className="audience-card youth-card">
            <div className="group-icon">🎓</div>
            <h3>Students & Individuals</h3>
            <ul>
              <li>Social media privacy</li>
              <li>Personal device security</li>
              <li>Online identity protection</li>
            </ul>
          </div>

          {/* NGO Card - New Section */}
          <div className="audience-card ngo-card">
            <div className="group-icon">🌍</div>
            <h3>NGOs & Non-Profits</h3>
            <ul>
              <li>Donor data protection</li>
              <li>Fieldwork communication security</li>
              <li>Humanitarian data compliance</li>
              <li>Activist protection</li>
            </ul>
          </div>

          {/* Startup Card */}
          <div className="audience-card startup-card">
            <div className="group-icon">🚀</div>
            <h3>Startups</h3>
            <ul>
              <li>Secure MVP development</li>
              <li>Cloud configuration audits</li>
              <li>Founder account protection</li>
            </ul>
          </div>

          {/* Enterprise Card */}
          <div className="audience-card enterprise-card">
            <div className="group-icon">🏢</div>
            <h3>Enterprises</h3>
            <ul>
              <li>Compliance frameworks</li>
              <li>Incident response planning</li>
              <li>Security culture development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* NGO-Specific Content */}
      <section className="specialized-section ngo-section">
        <h2>NGO Security Essentials</h2>
        <div className="ngo-content">
          <div className="ngo-protection">
            <h3>🌐 NGO Protection Program</h3>
            <div className="protection-grid">
              <div className="protection-item">
                <h4>Field Security</h4>
                <p>Secure communications for remote teams</p>
              </div>
              <div className="protection-item">
                <h4>Beneficiary Privacy</h4>
                <p>Anonymization of sensitive case data</p>
              </div>
              <div className="protection-item">
                <h4>Donor Trust</h4>
                <p>PCI-DSS compliance for donations</p>
              </div>
            </div>
          </div>

          <div className="ngo-testimonial">
            <blockquote>
              "The Rethics helped us secure refugee data across 3 conflict
              zones"
            </blockquote>
            <p>- International Relief NGO Director</p>
          </div>
        </div>
      </section>

      {/* Universal CTA */}
      <div className="universal-cta">
        <h2>Start Your Security Journey</h2>
        <div className="cta-grid">
          <button className="cta-button individual-cta">
            Personal Protection ➔
          </button>
          <button className="cta-button ngo-cta">NGO Programs ➔</button>
          <button className="cta-button business-cta">
            Business Solutions ➔
          </button>
        </div>
      </div>
    </div>
  );
};

export default CyberMentorship;
