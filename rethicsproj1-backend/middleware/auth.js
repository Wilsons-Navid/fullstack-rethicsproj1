
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'Authorization token required' });
    }

    // Verify token with your actual secret key
    const decoded = jwt.verify(token, 'Rethicsec-key'); 
    // Find user with token verification
    const user = await User.findOne({
      _id: decoded.id,
    });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Attach essential user information
    req.user = user;
  

    next();
  } catch (error) {
    console.error('Authentication error:', error);
    
    const message = error.name === 'JsonWebTokenError' 
      ? 'Invalid authentication token'
      : 'Authentication failed';

    res.status(401).json({ message });
  }
};

module.exports = auth;