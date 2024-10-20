const Stock = require("../model/Stock");

const getallStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();
    return res.status(200).json({
      success: true,
      data: stocks,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server down" });
  }
};

const addToWatchList = async (req, res) => {
  try {
    const {
      company,
      description,
      initial_price,
      price_2002,
      price_2007,
      symbol,
    } = req.body;

    const stock = new Stock({
      company,
      description,
      initial_price,
      price_2002,
      price_2007,
      symbol,
    });
    await stock.save();
    return res.status(201).json({
      message: "Stock added to watchlist",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getallStocks,
  addToWatchList,
};
