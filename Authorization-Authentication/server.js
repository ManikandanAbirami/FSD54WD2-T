// server.js
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

//Connect to MongoDB
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB."))
  .catch((err) => console.error("Could not connect to MongoDB", err));

//Middleware
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

//Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port 3000."));
