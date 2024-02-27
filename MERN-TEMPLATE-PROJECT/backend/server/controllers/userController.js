const User = require("../models/userModel");

const create = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    return res.status(200).json({
      message: "Successfully signed up!",
    });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};
const list = (req, res) => {};
const userByID = (req, res) => {};
const read = (req, res) => {};
const update = (req, res) => {};
const remove = (req, res) => {};

module.exports = { create, list, userByID, read, update, remove };
