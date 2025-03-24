

import React from 'react';

const YouthEngagement = () => {
  const programs = [
    {
      title: 'Cyber Mentorship Program',
      description: 'Join our mentorship program to learn cybersecurity skills from experts.',
      link: 'youth-engagement/cybermentorship',
    },
    {
      title: 'Hackathon for Good',
      description: 'Participate in hackathons to solve real-world cybersecurity challenges.',
      link: 'hackathon-for-good',
    },
    {
      title: 'Youth Cybersecurity Workshops',
      description: 'Attend workshops to learn about ethical hacking and cybersecurity careers.',
      link: 'youth-engagement/youth-workshops',
    },
    {
      title: 'Cyber Awareness Campaigns',
      description: 'Join campaigns to spread awareness about cybersecurity in your community.',
      link: 'youth-engagement/campaigns',
    },
  ];

  return (
    <div className="youth-engagement">
      <div className="module-header">
        <h2>Youth Engagement</h2>
        <p className="lead">
          Discover programs designed to empower youth and redirect them from cybercrime to constructive contributions in the digital economy.
        </p>
      </div>
      <div className="modules-grid">
        {programs.map((program, index) => (
          <div className="module-card" key={index}>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
            <a href={program.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouthEngagement;