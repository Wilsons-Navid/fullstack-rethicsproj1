import React from "react";

const PhishingEducation = () => {
  return (
    <div className="phishing-education">
      <h2 className="education-header">Preventing Phishing Attacks</h2>
      <p className="education-intro">
        Phishing is a type of online scam where attackers try to trick you into
        giving away your personal information, like passwords or credit card
        numbers. Let's learn how to spot and avoid phishing attacks!
      </p>
  {/* Section 4: Video Embed */}
      {/* <div className="education-section"> */}
      <h3>Watch This Video to Learn More</h3>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Y7zNlEMDmI4"
            title="Phishing Education Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        {/* </div> */}
      </div>
      {/* Section 1: What is Phishing? */}
      <div className="education-section">
        <h3>What is Phishing?</h3>
        <div className="phishing-flex">
          <p>
            Phishing is when cybercriminals send fake emails, messages, or
            websites that look real to trick you into sharing sensitive
            information.
            <strong>Example:</strong> A fake email that looks like it's from
            your bank, asking you to click a link and enter your password.
            <ul>
              <li>
                <strong>Fake Social Media Login:</strong> An email or message
                claiming to be from a social media platform (e.g., Facebook or
                Instagram) saying your account has been compromised. It includes
                a link to a fake login page where you're asked to enter your
                username and password.
              </li>
              <li>
                <strong>Fake Package Delivery Notification:</strong> A text
                message or email pretending to be from a delivery service (e.g.,
                FedEx or UPS) saying there's an issue with your package. It
                includes a link to a fake website where you're asked to provide
                personal information or pay a "delivery fee."
              </li>
              <li>
                <strong>Fake Job Offer:</strong> An email claiming to be from a
                well-known company offering you a job opportunity. It asks you
                to click a link to "complete your application," which leads to a
                fake website designed to steal your personal information.
              </li>
            </ul>
          </p>
          <img
            src="https://i.postimg.cc/sfGq9gfG/Example-bank-phishing-email-svg.png"
            alt="Phishing Email Example"
            className="education-image"
          />
        </div>
      </div>

      {/* Section 2: How to Spot Phishing */}
      <div className="education-section">
        <h3>How to Spot Phishing</h3>
        <div className="phishing-flex">
          <ul>
            <li>
              <strong>Check the sender's email address:</strong> Does it look
              suspicious or different from the official email?
            </li>
            <li>
              <strong>Look for spelling and grammar mistakes:</strong> Phishing
              messages often have errors.
            </li>
            <li>
              <strong>Don't click on suspicious links:</strong> Hover over links
              to see where they lead before clicking.
            </li>
            <li>
              <strong>Be cautious of urgent requests:</strong> Phishing messages
              often create a sense of urgency to pressure you.
            </li>
          </ul>
          <img
            src="https://i.postimg.cc/2jdfs7M7/Phishing-Attempt-Example1-2019.png"
            alt="How to Spot Phishing"
            className="education-image"
          />
        </div>
      </div>

      {/* Section 3: How to Protect Yourself */}
      <div className="education-section">
        <h3>How to Protect Yourself</h3>
        <div className="phishing-flex">
          <ul>
            <li>
              <strong>Use strong, unique passwords:</strong> Don't reuse
              passwords across different accounts.
            </li>
            <li>
              <strong>Enable two-factor authentication (2FA):</strong> This adds
              an extra layer of security to your accounts.
            </li>
            <li>
              <strong>Keep your software updated:</strong> Updates often include
              security fixes.
            </li>
            <li>
              <strong>Report phishing attempts:</strong> If you receive a
              phishing email, report it to your email provider.
            </li>
          </ul>
          <img
            src="https://i.postimg.cc/T2L2LbKz/narutotest-345-removebg-preview.png"
            alt="Protect Yourself from Phishing"
            className="education-image"
          />
        </div>
      </div>

    

      {/* Section 5: Interactive Quiz */}
      {/* <div className="education-section"> */}
        <h3>Test Your Knowledge</h3>
        <p>Take this quick quiz to see if you can spot phishing attempts!</p>
        <button
          className="quiz-button"
          onClick={() => alert("Quiz coming soon!")}
        >
          Start Quiz
        </button>
      {/* </div> */}
    </div>
  );
};

export default PhishingEducation;
