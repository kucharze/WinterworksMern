const express = require("express");
const router = express.Router();

const Orders = require("../models/orders");

router.post("/", (req, res) => {
  console.log("Found The order post route");
  console.log("The sent body is ", req.body);
  //   res.json(req.body);

  try {
    console.log("Attempting to create a new order");
    Orders.create(req.body);
  } catch (error) {
    console.log(error._message);
    res.status(400).json("An error occured while trying to submit an order");
  }
});

module.exports = router;
