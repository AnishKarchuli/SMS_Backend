const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.MONGODB;

const initializeDatabase = async () => {
  await mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((error) => console.log("Error connecting to Database", error));
};

module.exports = { initializeDatabase };