import React from "react";

const Watchlist = ({ watchlist }) => {
  console.log("Watchlist:", watchlist); // Check if watchlist is updating properly
  const getRandomColor = () => {
    const colors = ["#FF0000", "#00FF00"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div>
      <h2>My Watchlist</h2>
      {watchlist && watchlist.length > 0 ? (
        <ul>
          {watchlist.map((stock) => (
            <li key={stock.symbol}>
              {stock.company} ({stock.symbol})-
              <span style={{ color: getRandomColor() }}>
                ${stock.intial_price}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p> NO Watchlist</p>
      )}
    </div>
  );
};

export default Watchlist;
