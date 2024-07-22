const express = require("express");
const cors = require("cors");
const { connectMongo } = require("./config/database");
const todoRoutes = require("./routes");

const app = express();

const PORT = process.env.PORT || 5000;

// connect to mongodb
connectMongo();

// setting cors
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
