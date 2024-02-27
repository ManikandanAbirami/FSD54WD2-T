require("dotenv").config();
const config = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_SECRET_KEY",
  mongoUri: process.env.DB_URL || "mongodb://localhost:27017/merntemplate",
};

module.exports = config;
