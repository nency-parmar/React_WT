const express = require('express');
const Trip = require('../models/Trip');
const router = express.Router();

// Create Trip
router.post('/create', async (req, res) => {
  const { title, description, destination, budget, startDate, endDate, userId } = req.body;
  try {
    const trip = new Trip({ title, description, destination, budget, startDate, endDate, user: userId });
    await trip.save();
    res.status(201).json(trip);
  } catch (error) {
    res.status(500).json({ message: 'Error creating trip' });
  }
});

// Get User Trips
router.get('/:userId', async (req, res) => {
  try {
    const trips = await Trip.find({ user: req.params.userId });
    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trips' });
  }
});

module.exports = router;
