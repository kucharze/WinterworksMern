const mongoose = require("mongoose");

const Orders = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phonenumber: { type: String, required: true },
  item: { type: String, required: true },
  design: { type: String, required: true },
});

module.exports = mongoose.model("Orders", Orders);
