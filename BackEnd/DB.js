const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const bcrypt = require("bcryptjs");
const users = require("./data");
const port = 3000


// const UserSchema = new mongoose.Schema({
//     id : Number ,
//     name : String ,
//     email : String,
//     password :String , 
//     balance : Number ,
//     booked_rooms : Array ,
//     userType: {
//         type: String,
//         enum: ["user", "admin"], // Allowed values
//         default: "user" // Default role
//     } 

// })
// const User = mongoose.model("User" , UserSchema);

app.post("/register" , async(req,res) =>{
    const {name , email , password ,userType} =req.body;
    // const hashedPassword = await bycript.hash(password , 10);
    const newUser = {id : users.length + 1 , name , email , password ,userType}
    
    userType.push(newUser);
    res.status(201).json({message:"User Registered Successfully" , user :newUser});


});
app.post("/login" , async(req,res) =>{



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })