import React from "react";


const SocialEngineeringAwareness = () => {
  return (
    <div className="social-engineering-container">
      <h2 className="social-engineering-header">Social Engineering Awareness</h2>

    

      {/* Section 1: What is Social Engineering? */}
      <div className="social-engineering-section">
        <h3>What is Social Engineering?</h3>
        <p>
          Social engineering is when hackers trick people into giving away
          sensitive information, like passwords or credit card numbers. Instead of
          breaking into systems, they manipulate people into handing over the
          information willingly.
        </p>
      </div>
        {/* Video at the Top */}
        <div className="social-engineering-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/uvKTMgWRPw4" // Example video
          title="Social Engineering Awareness Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Section 2: Common Social Engineering Attacks */}
      <div className="social-engineering-section">
        <h3>Common Social Engineering Attacks</h3>
        <div className="social-engineering-flex">
          <ul>
            <li>
              <strong>Phishing:</strong> Fake emails or messages that look real,
              asking you to click on a link or share personal information.
            </li>
            <li>
              <strong>Pretexting:</strong> Creating a fake scenario to gain your
              trust and trick you into sharing information.
            </li>
            <li>
              <strong>Baiting:</strong> Offering something tempting, like free
              software, to trick you into downloading malware.
            </li>
          </ul>
          <img
            src="https://i.postimg.cc/VvLkCVjH/Social-engineering-attacks.png"
            alt="Social Engineering Example"
            className="social-engineering-image"
          />
        </div>
      </div>

      {/* Section 3: How to Protect Yourself */}
      <div className="social-engineering-section">
        <h3>How to Protect Yourself</h3>
        <ul>
          <li>
            <strong>Be Skeptical:</strong> Don’t trust unsolicited messages or
            offers, even if they seem legitimate.
          </li>
          <li>
            <strong>Verify Requests:</strong> If someone asks for sensitive
            information, verify their identity through a trusted channel.
          </li>
          <li>
            <strong>Use Strong Passwords:</strong> Protect your accounts with
            strong, unique passwords and enable two-factor authentication (2FA).
          </li>
        </ul>
      </div>

      {/* Video at the End */}
      <div className="social-engineering-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/erSVVGQw1TQ" // Example video
          title="Social Engineering Prevention Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      
      {/* Quiz Button */}
      <div className="social-engineering-section">
        <h3>Test Your Knowledge</h3>
        <p>
          Now that you’ve learned about social engineering, take this quick quiz
          to see how well you can recognize and avoid these attacks!
        </p>
        <button
          className="social-engineering-quiz-btn"
          onClick={() => alert("Quiz coming soon!")}
        >
          Start Quiz
        </button>
      </div>

    </div>
  );
};

export default SocialEngineeringAwareness;