import React, { useState, useEffect } from "react";

const Stocks = ({ addToWatchlist }) => {
  const [stocks, setStocks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/stocks")
      .then((res) => res.json())
      .then((data) => setStocks(data.data))
      .catch((error) => console.log("Error fetching stocks", error));
  }, []);

  const getRandomColor = () => {
    const colors = ["#FF0000", "#00FF00"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div>
      <h2>Stocks</h2>
      <ul>
        {stocks.map((stocks) => (
          <li key={stocks.symbol}>
            {stocks.company} ({stocks.symbol}) -
            <span style={{ color: getRandomColor() }}>
              ${stocks.initial_price}
            </span>
            <button onClick={() => addToWatchlist(stocks)}>
              Add to My Watchlist
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stocks;
