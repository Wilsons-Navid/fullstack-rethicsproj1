import React from "react";


const WorkshopComponent = () => {
  return (
    <div className="workshop-container">
      <header className="workshop-header">
        <h1>🛠️ Cybersecurity Workshop Forge</h1>
        <p>Shape your digital armor through hands-on learning experiences</p>
        <div className="header-glow"></div>
      </header>

      {/* Workshop Matrix */}
      <div className="workshop-matrix">
        {/* Beginner Track */}
        <div className="track-card beginner-track">
          <div className="track-badge">🔐 Level 1</div>
          <h2>Digital Self-Defense Basics</h2>
          <ul className="workshop-list">
            <li>
              <h3>🛡️ Password Blacksmithing</h3>
              <p>Forge unbreakable credentials</p>
              <div className="workshop-meta">
                <span>⏳ 2 hrs</span>
                <span>👥 25 seats</span>
              </div>
            </li>
            <li>
              <h3>📡 WiFi Warrior Training</h3>
              <p>Secure public network usage</p>
              <div className="workshop-meta">
                <span>⏳ 1.5 hrs</span>
                <span>👥 30 seats</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Intermediate Track */}
        <div className="track-card intermediate-track">
          <div className="track-badge">🔍 Level 2</div>
          <h2>Cyber Threat Hunting</h2>
          <ul className="workshop-list">
            <li>
              <h3>🎣 Phishing Forensic Lab</h3>
              <p>Analyze & counter email scams</p>
              <div className="workshop-meta">
                <span>⏳ 3 hrs</span>
                <span>👥 20 seats</span>
              </div>
            </li>
            <li>
              <h3>🕵️♂️ Social Engineering Dojo</h3>
              <p>Recognize & resist manipulation</p>
              <div className="workshop-meta">
                <span>⏳ 2.5 hrs</span>
                <span>👥 15 seats</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Expert Track */}
        <div className="track-card expert-track">
          <div className="track-badge">💻 Level 3</div>
          <h2>Cyber Warfare Simulation</h2>
          <div className="simulation-container">
            <div className="simulation-card red-team">
              <h3>⚔️ Red Team Bootcamp</h3>
              <p>Penetration testing fundamentals</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '70%'}}>70% full</div>
              </div>
            </div>
            <div className="simulation-card blue-team">
              <h3>🛡️ Blue Team Drills</h3>
              <p>Incident response simulations</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '45%'}}>45% full</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Workshop Feed */}
      <div className="live-feed">
        <h2>🔴 Live Workshop Arena</h2>
        <div className="live-grid">
          <div className="live-card">
            <div className="live-badge">LIVE</div>
            <h3>🦠 Ransomware Dissection Lab</h3>
            <p>Analyzing live malware samples</p>
            <div className="viewer-count">👁️ 142 watching</div>
          </div>
          <div className="live-card">
            <div className="live-badge">NEXT</div>
            <h3>🔓 Cryptography Challenge</h3>
            <p>Starting in 25:00</p>
            <div className="viewer-count">✅ 89 registered</div>
          </div>
        </div>
      </div>

      {/* Workshop Calendar */}
      <div className="calendar-section">
        <h2>📅 Workshop Timeline</h2>
        <div className="calendar-grid">
          <div className="calendar-event">
            <div className="event-date">15 OCT</div>
            <div className="event-details">
              <h3>IoT Security Deep Dive</h3>
              <p>Smart home protection workshop</p>
            </div>
            <button className="calendar-cta">Remind Me</button>
          </div>
          <div className="calendar-event">
            <div className="event-date">22 OCT</div>
            <div className="event-details">
              <h3>Cyber Range Tournament</h3>
              <p>Capture-the-flag competition</p>
            </div>
            <button className="calendar-cta">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopComponent;