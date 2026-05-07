require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/* =========================
   Middleware
========================= */

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://phone-saas.vercel.app",
    ],
    credentials: true,
  })
);

/* =========================
   Routes
========================= */

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.use(
  "/api/contact",
  require("./routes/contactRoutes")
);

/* =========================
   MongoDB Connection
========================= */

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log(
      "❌ MongoDB Error:",
      err.message
    );
  });

/* =========================
   Test Route
========================= */

app.get("/", (req, res) => {
  res.send("Phone SaaS API Running");
});

/* =========================
   Server
========================= */

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server Running On Port ${PORT}`
  );
});