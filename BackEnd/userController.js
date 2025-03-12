const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const bcrypt = require("bcryptjs"); // Uncomment if using bcrypt for password hashing
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Mock user data (replace with your actual data or database)
const mockUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "password123", // In a real app, store hashed passwords
    userType: "user",
  },
  {
    id: 2,
    name: "Admin User",
    email: "admin@example.com",
    password: "admin123",
    userType: "admin",
  },
];

// Register endpoint
app.post("/register", async (req, res) => {
  const { name, email, password, userType } = req.body;

  // Check if user already exists
  const userExists = mockUsers.find((user) => user.email === email);
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash the password (if using bcrypt)
  // const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const newUser = {
    id: mockUsers.length + 1,
    name,
    email,
    password, 
    userType,
  };

  mockUsers.push(newUser);
  res.status(201).json({ message: "User Registered Successfully", user: newUser });
});

// Login endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = mockUsers.find((user) => user.email === email);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Compare passwords (if using bcrypt)
  // const isPasswordValid = await bcrypt.compare(password, user.password);
  const isPasswordValid = password === user.password; // Simple comparison for demo purposes

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Return success response with user details (excluding password)
  const { password: _, ...userWithoutPassword } = user;
  res.status(200).json({ message: "Login Successful", user: userWithoutPassword });
});
app.get("/users", (req, res) => {
    // Exclude passwords from the response
    const usersWithoutPasswords = mockUsers.map((user) => {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });
  
    res.status(200).json({ message: "Users retrieved successfully", users: usersWithoutPasswords });
  });
  //Admin privilage
  app.delete("/deleteuser" , (req,res) => {
    const {email} = req.body;
    const userIndex = mockUsers.findIndex((user) => user.email === email); // 0
    const user  = mockUsers.find((user) => user.email === email);
    if (userIndex !== -1) {
       mockUsers.splice(user,1);
       res.status(200).json({ message: "user deleted succssfully"});
    }
    else{
      res.status(401).json({ message: "user doesn't exist"})

    }

  });
  app.put("/updatepass",(req,res) =>{
    const{email,password} = req.body;
    const user  = mockUsers.find((user) => user.email === email);
    if(user.password ===password){
      res.status(401).json({ message: "choose a new password"});

    }else{
      user.password = password;
      res.status(200).json({ message: "password changed successfully"});

    }


    

    

  });



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});