const express = require('express');
const cors = require('cors');  // Middleware to handle CORS
app.use(cors({
  origin: 'https://user-registeration-application.vercel.app'  // Replace with your frontend domain
}));


// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS for all origins (you can restrict it for specific origins)
app.use(cors());

// POST /api/register endpoint
app.post('/api/register', (req, res) => {
  const { username } = req.body;

  // Simple validation and response
  if (username === 'Abu Abdullah') {
    res.status(201).json({ message: `Welcome, ${username}` });
  } else {
    res.status(400).json({ error: 'Invalid user name provided' });
  }
});

moudle.export =app
