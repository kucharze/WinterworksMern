const express = require("express");
require("dotenv").config();

const app = express();

const cors = require("cors");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

db.on("connected", function () {
  console.log(`Connected to ${db.name} at ${db.host}`);
});

app.listen("3001", () => {
  console.log("Listening on port 3001");
});
