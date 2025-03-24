import React from "react";


const SecurePasswordPractices = () => {
  return (
    <div className="password-container">
      <h2 className="password-header">Secure Password Practices</h2>

      

      {/* Section 1: Why Are Strong Passwords Important? */}
      <div className="password-section">
        <h3>Why Are Strong Passwords Important?</h3>
        <p>
          Weak passwords are easy for hackers to guess. A strong password protects
          your accounts from being hacked. For example, passwords like "123456" or
          "password" are very common and easy to crack.
        </p>
      </div>

      {/* Video at the Top */}
      <div className="password-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IhlXtBNNuKs" // Example video
          title="Secure Password Practices Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Section 2: How to Create a Strong Password */}
      <div className="password-section">
        <h3>How to Create a Strong Password</h3>
        <div className="password-flex">
          <ul>
            <li>
              <strong>Use a Mix of Characters:</strong> Combine letters, numbers,
              and symbols (e.g., "P@ssw0rd!2023").
            </li>
            <li>
              <strong>Make It Long:</strong> Use at least 12 characters.
            </li>
            <li>
              <strong>Avoid Common Words:</strong> Don’t use easy-to-guess words
              like "password" or "admin."
            </li>
          </ul>
          <img
            src="https://i.postimg.cc/FHhJxThm/make-strong-passwords.png"
            alt="Strong Password Example"
            className="password-image"
          />
        </div>
      </div>

      {/* Section 3: Password Management Tips */}
      <div className="password-section">
        <h3>Password Management Tips</h3>
        <ul>
          <li>
            <strong>Use a Password Manager:</strong> It stores all your passwords
            securely (e.g., LastPass, Dashlane).
          </li>
          <li>
            <strong>Enable Two-Factor Authentication (2FA):</strong> Adds an extra
            layer of security to your accounts.
          </li>
          <li>
            <strong>Don’t Reuse Passwords:</strong> Use a unique password for each
            account.
          </li>
        </ul>
      </div>


      {/* Video at the End */}
      <div className="password-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pwO7AtCtXcE" // Example video
          title="Secure Password Practices Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      
      {/* Quiz Button */}
      <div className="password-section">
        <h3>Test Your Knowledge</h3>
        <p>
          Now that you’ve learned about secure passwords, take this quick quiz to
          see how well you can create and manage strong passwords!
        </p>
        <button
          className="password-quiz-btn"
          onClick={() => alert("Quiz coming soon!")}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default SecurePasswordPractices;