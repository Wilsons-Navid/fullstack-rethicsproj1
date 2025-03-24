import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Reported Incidents',
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Reported Cyber Incidents',
      },
    },
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Incident Reports</h3>
          <Bar data={data} options={options} />
        </div>
        <div className="dashboard-card">
          <h3>Quick Actions</h3>
          <ul className="list-group">
            <li className="list-group-item"><a href="/incident-report">Report an Incident</a></li>
            <li className="list-group-item"><a href="/vulnerability-scanner">Scan a Website</a></li>
            <li className="list-group-item"><a href="/user-education">Learn Cybersecurity</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;