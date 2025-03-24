const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const incidentRoutes = require('./routes/incidents');
const scanRoutes = require('./routes/scans');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes); // Ensure this line is present
app.use('/api/incidents', incidentRoutes);
app.use('/api/scans', scanRoutes); 

module.exports = app;