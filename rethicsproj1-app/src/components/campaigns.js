import React from "react";


const CyberAwareness = () => {
  return (
    <div className="awareness-container">
      <h1 className="awareness-header">🌍 Cyber Awareness Initiatives</h1>
      
      {/* Current Campaigns */}
      <section className="campaign-section">
        <h2>🚨 Active Community Campaigns</h2>
        <div className="campaign-grid">
          <div className="campaign-card school-campaign">
            <h3>🏫 School Cyber Safety Program</h3>
            <p>Teaching digital literacy to 1M+ students across 15 African countries</p>
            <ul>
              <li>Child online protection workshops</li>
              <li>Secure e-learning platform training</li>
              <li>Teacher cybersecurity certification</li>
            </ul>
          </div>

          <div className="campaign-card hospital-campaign">
            <h3>🏥 Healthcare Data Protection</h3>
            <p>Securing patient records in 200+ hospitals</p>
            <ul>
              <li>Medical device security audits</li>
              <li>Ransomware prevention training</li>
              <li>Emergency response protocols</li>
            </ul>
          </div>

          <div className="campaign-card social-campaign">
            <h3>📱 #SecureOurSocials</h3>
            <p>Nationwide social media safety initiative</p>
            <ul>
              <li>Fact-checking workshops</li>
              <li>Influencer-led security challenges</li>
              <li>Report &amp; Response hotlines</li>
            </ul>
          </div>
        </div>
      </section>

      {/* African Cybercrime Statistics */}
      <section className="stats-section">
        <h2>📊 African Cybersecurity Landscape (2023)</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>$4.1B</h3>
            <p>Estimated annual loss to cybercrime in Africa</p>
          </div>
          <div className="stat-card">
            <h3>+62%</h3>
            <p>Increase in phishing attacks across Nigeria</p>
          </div>
          <div className="stat-card">
            <h3>78%</h3>
            <p>Of Kenyan SMEs lacking basic cyber protection</p>
          </div>
        </div>

        <div className="country-focus">
          <h3>🇳🇬 Nigeria - Financial Fraud Hub</h3>
          <p>Lost ₦5 billion to bank fraud in Q1 2023</p>
          
          <h3>🇿🇦 South Africa - Ransomware Target</h3>
          <p>63% of companies experienced ransomware attacks</p>
          
          <h3>🇰🇪 Kenya - Mobile Money Threats</h3>
          <p>2M+ mobile wallet scams reported annually</p>
        </div>
      </section>

      {/* Critical Infrastructure Protection */}
      <section className="critical-section">
        <h2>🛡️ Protecting Vital Services</h2>
        <div className="infrastructure-grid">
          <div className="infra-card">
            <h3>💉 Vaccine Cold Chain Security</h3>
            <p>Monitoring temperature control systems against cyber sabotage</p>
          </div>
          
          <div className="infra-card">
            <h3>🏠 Elder Care Systems</h3>
            <p>Securing IoT devices in 150+ care homes</p>
          </div>
          
          <div className="infra-card">
            <h3>⚡ National Grid Defense</h3>
            <p>Preventing infrastructure attacks in 8 power-deficient nations</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="awareness-cta">
        <h2>Become a Cyber Guardian</h2>
        <div className="cta-content">
          <p>Join our pan-African network of 25,000+ digital volunteers</p>
          <button className="cta-button">
            Register for Training ➔
          </button>
          <div className="social-cta">
            <p>Spread awareness: #AfriCyberShield #DigitalBoma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberAwareness;