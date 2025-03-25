

import React from 'react';
// import PhishingEducation from './Phishing';

const UserEducation = () => {
  const tutorials = [
    {
      title: 'Introduction to Cybersecurity',
      description: 'Learn the basics of cybersecurity and how to protect yourself online.',
      link: 'user-education/Cybersecintro',
    },
    {
      title: 'Preventing Phishing Attacks',
      description: 'Understand how phishing works and how to avoid falling victim to it.',
      link: '/user-education/Phishing',
    },
    {
      title: 'Secure Password Practices',
      description: 'Learn how to create and manage strong passwords.',
      link: 'user-education/passwords',
    },
    {
      title: 'Social Engineering Awareness',
      description: 'Learn how to recognize and avoid social engineering attacks.',
      link: 'user-education/social-engineering',
    },
  ];

  return (
    <div className="user-education">
      <div className="module-header">
        <h2>User Education</h2>
        <p className="lead">
          Access a wide range of educational resources and tutorials to enhance your cybersecurity knowledge and skills.
        </p>
      </div>
      <div className="modules-grid">
        {tutorials.map((tutorial, index) => (
          <div className="module-card" key={index}>
            <h3>{tutorial.title}</h3>
            <p>{tutorial.description}</p>
            <a href={tutorial.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserEducation;