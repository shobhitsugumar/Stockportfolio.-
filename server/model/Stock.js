const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  intial_price: Number,
  price_2002: Number,
  price_2007: Number,
  symbol: String,
});

const Stock = mongoose.model("Stock", StockSchema);

module.exports = Stock;
