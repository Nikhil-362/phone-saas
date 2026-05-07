const router = require("express").Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

/* Register */
router.post(
  "/register",
  async (req, res) => {

    try {

      const { email, password } =
        req.body;

      const existingUser =
        await User.findOne({ email });

      if (existingUser) {
        return res
          .status(400)
          .json({
            message:
              "User already exists",
          });
      }

      const hash =
        await bcrypt.hash(
          password,
          10
        );

      await User.create({
        email,
        password: hash,
      });

      res.status(201).json({
        message:
          "Registration Successful",
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message:
          "Server Error",
      });

    }
  }
);

/* Login */
router.post(
  "/login",
  async (req, res) => {

    try {

      const { email, password } =
        req.body;

      const user =
        await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({
            message:
              "User Not Found",
          });
      }

      const isMatch =
        await bcrypt.compare(
          password,
          user.password
        );

      if (!isMatch) {
        return res
          .status(400)
          .json({
            message:
              "Wrong Password",
          });
      }

      const token = jwt.sign(
        {
          id: user._id,
        },
        process.env.JWT_SECRET
      );

      res.json({ token });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message:
          "Server Error",
      });

    }
  }
);

module.exports = router;