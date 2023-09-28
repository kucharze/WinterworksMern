const mongoose = require("mongoose");

const Stock = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
});

module.exports = mongoose.model("Stock", Stock);
