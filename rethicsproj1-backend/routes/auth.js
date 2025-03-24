const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = express.Router();


//signup routes

router.post('/signup', async (req, res) => {
  const { name, email, password} = req.body; // Destructure role from req.body

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user with the role
    const user = new User({ name, email, password});
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ id: user._id}, 'Rethicsec-key', {
      expiresIn: '1h',
    });

   
    res.status(201).json({ 
      token, 
      user: { 
        id: user._id, 
        name: user.name, 
        email: user.email, 
      } 
      
      
    });
    
  } 
  catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



//Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, 'Rethicsec-key', {
      expiresIn: '1h',
    });

    res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email,} });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;