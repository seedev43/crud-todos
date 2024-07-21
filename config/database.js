require("dotenv").config();
const mongoose = require("mongoose");

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected...");
  } catch (error) {
    console.log("Cannot connect:", error);
  }
};

const mongo = mongoose;
module.exports = { connectMongo, mongo };
