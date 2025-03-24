![webtask-1](https://github.com/user-attachments/assets/e34f9808-b8f3-4a92-a2c4-d1ea2993239e)




# Rethics App

Rethics is a **full-stack application** designed to empower individuals, organizations, and communities with tools and resources to combat cybercrime and promote cybersecurity awareness. The app includes features like **incident reporting**, **cyber mentorship**, **vulnerability scanning**, and **community campaigns**.

---

## Features
- **Incident Reporting**: Report cybercrime incidents with detailed descriptions and locations.
- **Cyber Mentorship**: Access cybersecurity education and mentorship for individuals, NGOs, startups, and enterprises.
- **Dashboard**: Visualize reported incidents and access quick actions like reporting incidents or scanning websites.
- **Community Campaigns**: Participate in cybersecurity awareness initiatives across schools, hospitals, and social media.
- **Nuclei Integration**: Scan websites for vulnerabilities using the powerful **Nuclei** tool.

---

## Technologies Used
- **Frontend**: React, CSS
- **Backend**: Express.js, Node.js
- **Database**: MongoDB
- **Vulnerability Scanning**: [Nuclei](https://github.com/projectdiscovery/nuclei)
- **Authentication**: JSON Web Tokens (JWT)
- **Charting**: Chart.js (for dashboard visualizations)

---

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- MongoDB (local or MongoDB Atlas)
- Nuclei (installed on the backend server)

---

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Wilsons-Navid/fullstack-rethicsproj1.git
   cd rethics-app

2. **Install Frontend Dependencies**:
   ```bash
   cd rethicsproj1-app
   npm install
   ```

3. **Install Backend Dependencies**:
   ```bash
   cd ../rethicsproj1-backend
   pip install node
   ```

4. **Set Up Environment Variables**:
   - Create a `.env` file in the `/rethicsproj1-backend` folder:
     ```env
     MONGODB_URI=mongodb://localhost:27017/rethics
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```

5. **Install Nuclei**:
   - Install Nuclei on your backend server:
     ```bash
     go install -v github.com/projectdiscovery/nuclei/v3/cmd/nuclei@latest
     ```
   - Update Nuclei templates:
     ```bash
     nuclei -update-templates
     ```

---

### Running the Application

1. **Start the Backend**:
   ```bash
   cd rethicsproj1-backend
  node server.js
   ```
   The backend will run on `http://localhost:5000`.

2. **Start the Frontend**:
   ```bash
   cd ..//rethicsproj1-app
   npm start
   ```
   The frontend will run on `http://localhost:3000`.

3. **Access the App**:
   Open your browser and navigate to `http://localhost:3000`.

---

## Features in Detail

### Incident Reporting
- **Report Cybercrime**: Users can report incidents like phishing, data breaches, or online scams.
- **Track Reports**: View and track reported incidents in the dashboard.

### Cyber Mentorship
- **For Individuals**: Learn about social media privacy, personal device security, and online identity protection.
- **For NGOs**: Secure donor data, fieldwork communications, and humanitarian data compliance.
- **For Startups**: Get guidance on secure MVP development, cloud configuration audits, and founder account protection.
- **For Enterprises**: Implement compliance frameworks, incident response planning, and security culture development.

### Dashboard
- **Visualize Data**: View monthly reported cyber incidents using interactive charts.
- **Quick Actions**:
  - Report an incident.
  - Scan a website for vulnerabilities.
  - Access cybersecurity education resources.

### Community Campaigns
- **School Cyber Safety Program**: Teach digital literacy to students across Africa.
- **Healthcare Data Protection**: Secure patient records in hospitals.
- **#SecureOurSocials**: Promote social media safety through workshops and challenges.

### Nuclei Integration
- **Scan Websites**: Use Nuclei to scan websites for vulnerabilities.
- **View Results**: Display scan results in the frontend.

---

## Folder Structure

```
fullstack-rethicsproj1/
├── rethicsproj1-app/       # React frontend
│   ├── public/             # Static assets
│   ├── src/                # React components
│   ├── package.json        # Frontend dependencies
│   └── ...
├── rethicsproj1-backend/   # Express backend
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── app.js              # Express app
│   ├── package.json        # Backend dependencies
│   └── ...
├── .gitignore              # Files to ignore in Git
└── README.md               # This file
```

---

## Deployment

### Frontend
- Deploy the frontend to **Vercel**, **Netlify**, or **GitHub Pages**:
  ```bash
  cd frontend
  npm run build
  ```
  Follow the deployment instructions for your chosen platform.

### Backend
- Deploy the backend to **Heroku**, **AWS**, or **DigitalOcean**:
  ```bash
  cd backend
  git push heroku main
  ```

### Database
- Use **MongoDB Atlas** for a cloud-based database.

---

## Third-Party Tools

### Nuclei
- **Description**: Fast and customizable vulnerability scanner.
- **Usage**: Integrated into the backend to scan websites.
- **Documentation**: [Nuclei Docs](https://nuclei.projectdiscovery.io/)

### MongoDB
- **Description**: NoSQL database for storing incident reports, scan results, and user data.
- **Usage**: Integrated into the backend using Mongoose.
- **Documentation**: [MongoDB Docs](https://docs.mongodb.com/)

### JSON Web Tokens (JWT)
- **Description**: Secure user authentication.
- **Usage**: Used for user login and session management.
- **Documentation**: [JWT Docs](https://jwt.io/)

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

---

---

## Acknowledgments
- [Nuclei](https://github.com/projectdiscovery/nuclei) for vulnerability scanning.
- [React](https://reactjs.org/) and [Express](https://expressjs.com/) for building the app.
- [MongoDB](https://www.mongodb.com/) for data storage.

---

## Contact

For questions or feedback, contact [Your Name](mailto:your-email@example.com).
```

---

### **Key Changes**
1. **Combined Repository**: Frontend and backend are now in a single folder (`rethics-app`).
2. **Updated README**: Reflects the new folder structure and provides clear instructions for setup, running, and deployment.
3. **Simplified Workflow**: Easier to manage and deploy as a single project.

---

### **How to Use**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/rethics-app.git
   cd rethics-app
   ```

2. **Install Dependencies**:
   - Frontend:
     ```bash
     cd frontend
     npm install
     ```
   - Backend:
     ```bash
     cd ../backend
     npm install
     ```

3. **Run the Application**:
   - Backend:
     ```bash
     cd backend
     npm start
     ```
   - Frontend:
     ```bash
     cd ../frontend
     npm start
     ```

4. **Access the App**:
   Open your browser and navigate to `http://localhost:3000`.
