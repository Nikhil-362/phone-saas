const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    userId: String,

    name: String,

    mobile: String,

    description: String,

    material: String,

    date: String,

    discount: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Contact",
  contactSchema
);  