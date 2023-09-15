const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("Found a route");
  res.send("Good post request");
});

module.exports = router;
