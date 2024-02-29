const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const config = require("../../config/config");
const jwt = require("jsonwebtoken");

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user already exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Email or password is incorrect." });
    }

    //Validate password
    const isMath = await bcrypt.compare(password, user.password);
    if (!isMath) {
      return res.status(400).json({ msg: "Email or password is incorrect." });
    }

    //Generate JWT token
    const payload = {
      user: {
        id: user.id,
        email: user.email,
        role: "user",
        hash: user.password,
      },
    };

    jwt.sign(payload, config.jwtSecret, { expiresIn: "1h" }, (err, token) => {
      if (err) throw err;
      res.json({ token, userId: user.id });
    });

    // res.status(201).json({ msg: "User Logged in successfully." });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
};
const signout = async (req, res) => {
  try {
    return res.status(200).json({
      message: "signed out",
    });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

module.exports = { signin, signout };
