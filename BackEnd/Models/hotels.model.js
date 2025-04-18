const mongoose = require('mongoose');
 const hotelSchema = new mongoose.Schema({
    name : {
        type:String ,
        required : true ,
        max:11
    },
    city:{
        type:String ,
        required:true ,

    },
    location :{
        type:String ,
        required : true
    },
    stars : {
        type:Number,
        required:true,
        min:0 ,
        max : 5
    },
    roomsAvailable:{
        type:Number ,
        default:0
    },
    pricePerNight:{
        type:Number ,
        required:true
    }
 });

 const Hotel = mongoose.model('Hotel' , hotelSchema);
 module.exports = Hotel;