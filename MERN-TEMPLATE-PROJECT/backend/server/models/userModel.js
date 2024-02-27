const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: "Name is required" },
  email: {
    type: String,
    trim: true,
    unique: "Email already exists",
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    required: "Name is required",
  },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  password: { type: String, required: "Password is required" },
});

module.exports = mongoose.model("User", userSchema);
