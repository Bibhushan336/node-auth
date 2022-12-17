// import express from "express";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Route
const user = require("./routes/user");


// Database
const connectDB = require("./config/db");

// parse application/json body parser
app.use(bodyParser.json());

// Enable cors
app.use(cors());

// Mount routers
app.use("/api/v1/user", user);

app.get("/", (req, res) => {
   res.send("This is home page.");
});

app.post("/", (req, res) => {
   res.send("This is home page with post request.");
});

// Connect to database
connectDB();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});