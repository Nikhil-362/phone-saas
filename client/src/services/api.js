const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb://127.0.0.1:27017/phoneSaaS"
);

// Models
const User = mongoose.model("User", {
  email: String,
  password: String,
});

const Contact = mongoose.model("Contact", {
  userId: String,
  name: String,
  mobile: String,
  description: String,
  material: String,
  date: String,
  discount: String,
});

// Register
app.post("/register", async (req, res) => {
  const hash = await bcrypt.hash(
    req.body.password,
    10
  );

  await User.create({
    email: req.body.email,
    password: hash,
  });

  res.send("Registered");
});

// Login
app.post("/login", async (req, res) => {

  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user)
    return res.status(400).send("User not found");

  const ok = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!ok)
    return res.status(400).send("Wrong password");

  const token = jwt.sign(
    { id: user._id },
    "secret"
  );

  res.json({ token });
});

// Auth Middleware
const auth = (req, res, next) => {

  const token = req.headers.authorization;

  if (!token)
    return res.sendStatus(401);

  const decoded = jwt.verify(token, "secret");

  req.userId = decoded.id;

  next();
};

// Add Contact
app.post("/add", auth, async (req, res) => {

  await Contact.create({
    ...req.body,
    userId: req.userId,
  });

  res.send("Added");
});

app.listen(5000, () =>
  console.log("Server Running")
);