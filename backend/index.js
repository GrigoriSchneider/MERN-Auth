const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");

const cors = require("cors");

const connection_string = process.env.CONNECTION_STRING;

mongoose
  .connect(connection_string)
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello jwt");
});

app.use("/customers", require("./routes/customerRoutes"));

const PORT = process.env.PORT || 4000;
app.listen(PORT);
