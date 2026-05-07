const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

/* Middleware */
// app.use(cors());
app.use(
  cors({
    origin:
      "https://phone-saas.vercel.app",
  })
);

app.use(express.json());

/* Routes */
app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.use(
  "/api/contact",
  require("./routes/contactRoutes")
);

/* MongoDB */
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

/* Server */
app.listen(process.env.PORT, () => {
  console.log(
    `Server Running On ${process.env.PORT}`
  );
});