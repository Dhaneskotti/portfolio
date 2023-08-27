const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const { json } = require("body-parser");
const port = 2000;
app.use(cors({ origin: "https://localhost:3000" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 100000,
  })
);

const mongoURI = "localhost:27017/portfolio";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;

const data_schema = {
  name: String,
  email: String,
  subject: String,
  msg: String,
};

const portfolioData = mongoose.model("Data", data_schema);

app.get("/contactMe", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
