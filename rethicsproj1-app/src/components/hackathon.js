import React from "react";

const HackathonForGood = () => {
  return (
    <div className="hackathon-container">
      <div className="hackathon-hero">
        <h1 className="hackathon-title">🚀 Hackathon for Good</h1>
        <p className="hackathon-tagline">
          Code. Protect. Innovate. - Join cybersecurity competitions to make the
          digital world safer!
        </p>
      </div>

      {/* Inspiration Video */}
      <div className="hackathon-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KEkrWRHCDQU"
          title="Hackathon Inspiration"
          allowFullScreen
        ></iframe>
      </div>

      <div className="hackathon-content">
        {/* Why Participate Section */}
        <div className="hackathon-card neon-card">
          <h2>💡 Why Join Cybersecurity Competitions?</h2>
          <div className="grid-2col">
            <div className="benefit-box">
              <h3>🛡️ Real-World Experience</h3>
              <p>Solve actual security vulnerabilities used by attackers</p>
            </div>
            <div className="benefit-box">
              <h3>🏆 Build Your Reputation</h3>
              <p>Showcase skills to potential employers & universities</p>
            </div>
            <div className="benefit-box">
              <h3>🤝 Network with Experts</h3>
              <p>Connect with industry professionals & white-hat hackers</p>
            </div>
            <div className="benefit-box">
              <h3>🎯 Learn Cutting-Edge Tech</h3>
              <p>
                Work with AI security tools, blockchain protection, and more
              </p>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="hackathon-card">
          <h2>📅 Notable Competitions</h2>
          <div className="event-timeline">
            <div className="event">
              <h3>⚔️ Global CTF Challenge</h3>
              <p>24-hour capture-the-flag • All skill levels • $50k prizes</p>
            </div>
            <div className="event">
              <h3>🌐 Hack the Planet</h3>
              <p>Climate-focused security solutions • IoT/SCADA systems</p>
            </div>
            <div className="event">
              <h3>👶 SafeNet Youth Cup</h3>
              <p>Under-18 cybersecurity competition • School teams</p>
            </div>
          </div>
        </div>

        {/* How to Start */}
        <div className="hackathon-card gradient-card">
          <h2>🔑 Getting Started</h2>
          <div className="step-guide">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Build Basic Skills</h3>
              <p>
                Learn networking, cryptography, and ethical hacking fundamentals
              </p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Join Practice CTFs</h3>
              <p>Try platforms like Hack The Box or TryHackMe</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Form Your Team</h3>
              <p>Combine skills - coders, puzzle solvers, & presenters</p>
            </div>
          </div>
        </div>

        {/* Featured Event Highlight */}
        <div className="featured-event">
          <img
            src="https://i.postimg.cc/rFRLPTFN/hacker-mascot-for-sports-and-esports-logo-free-vector.jpg"
            alt="CTF Competition"
            className="event-image"
          />
          <div className="event-highlight">
            <h2>🔥 Featured Event: CyberGuard 2024</h2>
            <p>48-hour hybrid hackathon focusing on:</p>
            <ul className="event-themes">
              <li>🩺 Healthcare Data Protection</li>
              <li>🏦 Financial Fraud Prevention</li>
              <li>🤖 AI Security Auditing</li>
            </ul>
            <button className="cta-button">Register Now ➔</button>
          </div>
        </div>

        {/* Closing Video */}
        <div className="hackathon-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3QnD2c4Xovk"
            title="CTF Competition Highlights"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HackathonForGood;
