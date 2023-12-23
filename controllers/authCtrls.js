const bcrypt = require('bcrypt')
const User = require('../models/User.js')

const register = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.create({ username, password });
      res.json({ message: 'Registration successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });

        if (user && bcrypt.compareSync(password, user.password)) {
            req.session.user = user;
            res.json({message: 'Login Successful'})
        } else {
            res.status(401).json({ message: "Invalid Login"})
        }
    } catch(error) {
        res.status(500).json({ message: "Internal server error"})
    }
}

const logout = (req, res) => {
    // Destroy the user session
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.json({ message: 'Logout successful' });
      }
    });
  };

  const requireAuth = (req, res, next) => {
    if (req.session.user) {
      // User is authenticated, proceed to the next middleware or route handler
      next();
    } else {
      // User is not authenticated, send a 401 Unauthorized response
      res.status(401).json({ message: 'Unauthorized' });
    }
  };

module.exports = {
    login,
    logout,
    register,
    requireAuth
}