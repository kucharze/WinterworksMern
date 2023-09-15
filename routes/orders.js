const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("Found The order post route");
  console.log("The sent body is ", req.body);
  res.json(req.body);
});

module.exports = router;
