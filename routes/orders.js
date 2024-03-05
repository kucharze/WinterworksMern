const express = require("express");
const router = express.Router();

const Orders = require("../models/orders");

router.post("/", async (req, res) => {
  console.log("Found The order post route");
  console.log("The sent body is ", req.body);
  //   res.json(req.body);

  try {
    console.log("Attempting to create a new order");
    await Orders.create(req.body);
    res.status(200).json("Successful creation of an order");
  } catch (error) {
    console.log(error._message);
    res.status(400).json("An error occured while trying to submit an order");
  }
});

router.get("/", async (req, res) => {
  console.log("Found orders get");
  try {
    let items = await Orders.find({});
    res.status(200).json({ length: items.length });
  } catch (error) {
    console.log("error", error);
    res
      .status(400)
      .json("An error occured while trying to find orders length " + error);
  }
});

module.exports = router;
