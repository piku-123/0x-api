const express = require("express");
const app = express();

// Routes Import
const ytmusicRoute = require("../routes/ytmusic");

app.use(express.json());

// Root route for testing
app.get("/", (req, res) => {res.send("API is running...");});

// API Routes setup
app.use("/api/ytmusic", ytmusicRoute);

// Export the app for Vercel
module.exports = app;
