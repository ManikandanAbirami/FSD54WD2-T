const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const create = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    let user = await User.findOne({ name });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create a new user
    user = new User({ name, email, password });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.status(201).json({ msg: "User registered successfully." });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
};
const list = async (req, res) => {
  try {
    let users = await User.find().select("name email updated created");
    res.json(users);
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};
const userByID = async (req, res, next, id) => {};
const read = async (req, res) => {
  try {
    const userId = req.params.userId;
    let user = await User.findById(userId);
    if (!user)
      return res.status(400).json({
        error: "User not found",
      });
    res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};
const update = async (req, res) => {
  try {
    const { name, updated = Date.now() } = req.body;
    await User.findByIdAndUpdate(req.params.userId, { name, updated });
    return res.status(200).json({
      message: "Successfully updated!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
const remove = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    return res.status(200).json({
      message: "Successfully deleted!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { create, list, userByID, read, update, remove };
