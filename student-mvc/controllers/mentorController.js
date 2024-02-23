const Mentor = require("../models/mentorModel");

// Create a new mentor
exports.createMentor = async (req, res) => {
  try {
    await Mentor.create(req.body);
    res.status(201).send("Mentor created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
