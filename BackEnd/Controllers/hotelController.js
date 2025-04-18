const Hotel = require('../Models/hotels.model.js');
const express = require('express');
const router = express.Router();

// Create a new hotel
router.post('/createHotel', async (req, res) => {
  try {
    const hotel = new Hotel(req.body); // ✅ استخدم اسم متغير مختلف
    await hotel.save();
    res.status(201).json({message: 'Success' ,hotel});
  } catch (error) {
    res.status(400).json({ message: 'Error creating hotel', error: error.message });
  }
});

// List all hotels
router.get('/hotels', async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving hotels', error: error.message });
  }
});

//delete hotel
router.delete('/hotels/:name', async (req, res) => {
    const hotelName = req.params.name;
  
    try {
      const deletedHotel = await Hotel.findOneAndDelete({ name: hotelName });
  
      if (!deletedHotel) {``
        return res.status(404).json({ message: 'Hotel not found with this name' });
      }
  
      res.status(200).json({ message: 'Hotel deleted successfully', hotel: deletedHotel });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting hotel', error: error.message });
    }
  });




//search hotel



module.exports = router; // ✅ ضروري جدًا
