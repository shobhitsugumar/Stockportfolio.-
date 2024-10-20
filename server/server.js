const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const Stockrouter = require("./route/StockRoute");

const app = express();

app.use(cors());
app.use(bodyparser.json());

app.use("/api", Stockrouter);

const MongoConnect = async () => {
  try {
    const DB = process.env.DATABASEID.replace(
      "<db_password>",
      process.env.DATABASEPASS
    );

    // Use await to handle the promise
    await mongoose.connect(DB);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};

const startserver = async () => {
  try {
    await MongoConnect();
    app.listen(3000, () => {
      console.log("connected to the server");
    });
  } catch (error) {
    console.log("error in connecting to the server ");
  }
};

startserver();
