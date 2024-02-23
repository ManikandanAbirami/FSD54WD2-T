// controllers/authController.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user already exists
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create a new user
    user = new User({ username, password });

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

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user already exists
    let user = await User.findOne({ username });
    if (!user) {
      return res
        .status(400)
        .json({ msg: "Username or password is incorrect." });
    }

    //Validate password
    const isMath = await bcrypt.compare(password, user.password);
    if (!isMath) {
      return res
        .status(400)
        .json({ msg: "Username or password is incorrect." });
    }

    //Generate JWT token
    const payload = {
      user: {
        id: user.id,
        role: "mentor",
        hash: user.password,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );

    // res.status(201).json({ msg: "User Logged in successfully." });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
};
