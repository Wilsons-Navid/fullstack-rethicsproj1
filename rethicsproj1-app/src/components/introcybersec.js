import React from "react";

const CybersecurityIntroduction = () => {
  return (
    <div className="cybersecurity-education">
      <h2 className="education-header">Introduction to Cybersecurity</h2>
      <p className="education-intro">
        Cybersecurity is the practice of protecting systems, networks, and data
        from digital attacks. Let's learn the basics of cybersecurity and how to
        stay safe online!
      </p>
      <h2>what is cybersecurity</h2>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/inWWhr5tnEA" 
          title="Cybersecurity Basics Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Section 2: Why is Cybersecurity Important? */}
      <div className="education-section">
        <h3>Why is Cybersecurity Important?</h3>
        <div className="cybersecurity-flex">
          <ul>
            <li>
              <strong>Protects Personal Information:</strong> Prevents identity
              theft and financial fraud.
            </li>
            <li>
              <strong>Safeguards Business Data:</strong> Ensures the integrity
              and confidentiality of sensitive business information.
            </li>
            <li>
              <strong>Maintains Privacy:</strong> Keeps your online activities
              and communications private.
            </li>
            <li>
              <strong>Prevents Financial Loss:</strong> Reduces the risk of
              financial damage from cyberattacks.
            </li>
          </ul>
        </div>
      </div>

      {/* Section 3: Basic Cybersecurity Practices */}
      <div className="education-section">
        <h3>Basic Cybersecurity Practices</h3>
        <div className="cybersecurity-flex">
          <ul>
            <li>
              <strong>Use Strong Passwords:</strong> Create complex passwords
              and avoid reusing them across accounts.
            </li>
            <li>
              <strong>Enable Two-Factor Authentication (2FA):</strong> Add an
              extra layer of security to your accounts.
            </li>
            <li>
              <strong>Keep Software Updated:</strong> Regularly update your
              operating system, apps, and antivirus software.
            </li>
            <li>
              <strong>Be Cautious of Suspicious Links:</strong> Avoid clicking
              on unknown links or downloading attachments from untrusted
              sources.
            </li>
            <li>
              <strong>Backup Your Data:</strong> Regularly back up important
              files to an external drive or cloud storage.
            </li>
          </ul>
        </div>
      </div>

      {/* Section 4: Video Embed */}
      <div className="education-section">
        <h3>Watch This Video to Learn More</h3>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yrln8nyVBLU" 
            title="Cybersecurity Basics Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Section 5: Interactive Quiz */}
      <div className="education-section">
        <h3>Test Your Knowledge</h3>
        <p>
          Take this quick quiz to see how much you've learned about
          cybersecurity!
        </p>
        <button
          className="quiz-button"
          onClick={() => alert("Quiz coming soon!")}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default CybersecurityIntroduction;
