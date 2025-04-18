const Hotel = require('../Models/hotels.model.js');
const express = require('express');
const router = express.Router();


//Create a new hotel
router.post('/createHotel', async (req, res) => {
    try {
        const Hotel = new Hotel(req.body);
        await Hotel.save();
        res.status(201).json(Hotel);
    } catch {
        res.status(400).json(error);
    }
});

//list all hotels
router.get('/hotels', async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json(error);
    }
});






module.exports = Hotel;