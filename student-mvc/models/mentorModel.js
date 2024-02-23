const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  name: String,
  speciality: String,
});

module.exports = mongoose.model("Mentor", mentorSchema);
