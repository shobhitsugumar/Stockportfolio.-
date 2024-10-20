const express = require("express");
const router = express.Router();
const StockController = require("../Controller/StockController");

router.get("/stocks", StockController.getallStocks);
router.post("/watchlist", StockController.addToWatchList);

module.exports = router;
