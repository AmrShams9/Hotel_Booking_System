const express = require('express');
const router = express.Router();

// Mock user data
const mockUsers = [{
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        password: "password123",
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

// Register
router.post("/register", (req, res) => {
    const {
        name,
        email,
        password,
        userType
    } = req.body;

    const userExists = mockUsers.find((user) => user.email === email);
    if (userExists) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const newUser = {
        id: mockUsers.length + 1,
        name,
        email,
        password,
        userType,
    };

    mockUsers.push(newUser);
    res.status(201).json({
        message: "User Registered Successfully",
        user: newUser
    });
});

// Login
router.post("/login", (req, res) => {
    const {
        email,
        password
    } = req.body;
    const user = mockUsers.find((user) => user.email === email);
    if (!user || user.password !== password) {
        return res.status(401).json({
            message: "Invalid email or password"
        });
    }

    const {
        password: _,
        ...userWithoutPassword
    } = user;
    res.status(200).json({
        message: "Login Successful",
        user: userWithoutPassword
    });
});

// Get all users
router.get("/users", (req, res) => {
    const usersWithoutPasswords = mockUsers.map(({
        password,
        ...rest
    }) => rest);
    res.status(200).json({
        message: "Users retrieved successfully",
        users: usersWithoutPasswords
    });
});

// Delete user (admin only)
router.delete("/deleteuser", (req, res) => {
    const {
        email
    } = req.body;
    const userIndex = mockUsers.findIndex((user) => user.email === email);
    if (userIndex !== -1) {
        mockUsers.splice(userIndex, 1);
        return res.status(200).json({
            message: "User deleted successfully"
        });
    }
    res.status(404).json({
        message: "User doesn't exist"
    });
});

// Update password
router.put("/updatepass", (req, res) => {
    const {
        email,
        password
    } = req.body;
    const user = mockUsers.find((user) => user.email === email);
    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }
    if (user.password === password) {
        return res.status(400).json({
            message: "Choose a new password"
        });
    }
    user.password = password;
    res.status(200).json({
        message: "Password changed successfully"
    });
});

// Update name
router.put("/updatename", (req, res) => {
    const {
        email,
        password,
        newName
    } = req.body;
    const user = mockUsers.find((user) => user.email === email);
    if (user && user.password === password) {
        user.name = newName;
        res.status(200).json({
            message: "Name changed successfully"
        });
    } else {
        res.status(401).json({
            message: "Invalid credentials"
        });
    }
});

module.exports = router;