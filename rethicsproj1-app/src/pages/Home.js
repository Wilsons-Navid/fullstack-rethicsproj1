import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import emailjs from "@emailjs/browser"; 

const Home = () => {
  const features = [
    {
      title: "Report Cybercrimes",
      description: "Report any suspicious activity or cybercrime incidents.",
      link: "/incident-report",
    },
    {
      title: "Scan for Vulnerabilities",
      description: "Check your website for potential security vulnerabilities.",
      link: "/vulnerability-scanner",
    },
    {
      title: "Learn Cybersecurity",
      description: "Access educational resources to stay safe online.",
      link: "/user-education",
    },
    {
      title: "Engage Youth",
      description:
        "Discover programs to empower youth and redirect them from cybercrime.",
      link: "/youth-engagement",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "CTO, SecureTech",
      quote:
        "RETHICS has transformed how we handle cybersecurity. Highly recommended!",
      image:
        "https://i.postimg.cc/brg1NZ5s/black-professional-4334648-1920.jpg", //image URLs
    },
    {
      name: "Jane Smith",
      role: "Founder and CEO, SafeStartup",
      quote: "The platform is intuitive and packed with valuable resources.",
      image: "https://i.postimg.cc/HnwB0Whg/PIC4.webp",
    },
    {
      name: "Mike Johnson",
      role: "Cybersecurity Analyst",
      quote: "A must-have tool for anyone serious about digital security.",
      image: "https://i.postimg.cc/Fs2DTfPy/male-7275437-1280.jpg",
    },
    {
      name: "Sarah Lee",
      role: "Lead IT Manager, TechCorp",
      quote:
        "RETHICS has made cybersecurity management effortless for our team.",
      image: "https://i.postimg.cc/KYbQy6h4/PIC1.jpg",
    },
    {
      name: "David Brown",
      role: "Developer, CodeSecure",
      quote: "The vulnerability scanner is a game-changer for our workflow.",
      image: "https://i.postimg.cc/1zy0dDDq/smile-5047506.jpg",
    },
    {
      name: "Emily Davis",
      role: "Lead Security Consultant",
      quote: "The educational resources are top-notch and easy to follow.",
      image: "https://i.postimg.cc/FsZ0L7MF/image-final.jpg",
    },
  ];

  // Settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of testimonials to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

   // Handle form submission
   const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS credentials
    const serviceID = "service_pe7bbap"; // From EmailJS
    const templateID = "template_dirtk6a"; // From EmailJS
    const userID = "mFrq3naWubvwusK85"; // From EmailJS

    // Send the form data via EmailJS
    emailjs
      .sendForm(serviceID, templateID, e.target, userID)
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          alert("Thank you for booking a consultation! We will contact you soon.");
          e.target.reset(); // Reset the form
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send the form. Please try again.");
        }
      );
  };



  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to RETHICS</h1>
          <p className="hero-description">
            Built for security awareness, management, and monitoring, RETHICS
            aims to enhance the security needs of individuals and
            businesses/startups on the continent.
          </p>

          <br />
          <a href="/Signup" className="btn btn-primary hero-cta">
            Get Started
          </a>
        </div>
      </section>

      <section className="mission-section">
        <h1>The State of Cybersecurity in Africa: Challenges and Opportunities</h1>
        <div className="mission-contents">
          <div className="mission-text">
            <p>
              "With the fast pace of digitalization in Africa, cybersecurity has
              suffered a tremendous setback, particularly in the face of the
              rising tide of cyberattacks. While some African startups and
              companies have embraced integrated, eff ective strategies for the
              protection of PII and financial details, a majority still rely on
              this outdated practice of allowing sensitive data to simply fl oat
              free. Such fl awed security measures, coupled with limited
              awareness of and close monitors on youth activity, facilitate the
              very development of cybercriminal activities and scam campaigns.
              This has increased the risk of fi nancial loss and identity theft,
              further calling for improvements in the cybersecurity policy and
              awareness across the continent."
            </p>
          </div>
          <div className="mission-image">
            <img src="https://i.postimg.cc/T12NrZ3p/picas-removebg-preview.png" alt="Loading..."/>
          </div>
        </div>
      </section>
      <br />

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose RETHICS?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <a href={feature.link} className="btn btn-secondary">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <p className="testimonial-author">
                <strong>{testimonial.name}</strong>, {testimonial.role}
              </p>
            </div>
          ))}
        </Slider>
      </section>
     
      <section className="consultation-section">
        <h2>Book a Consultation Session</h2>
        <form onSubmit={handleSubmit} className="consultation-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="userType">I am a</label>
            <select id="userType" name="userType" required>
              <option value="">Select an option</option>
              <option value="Startupper">Startupper</option>
              <option value="NGO">NGO</option>
              <option value="Individual">Individual</option>
              <option value="CTO">CTO</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Preferred Consultation Date</label>
            <input type="date" id="date" name="date" required />
          </div>
          <button type="submit" className="btn btn-primary">
            Book Now
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
