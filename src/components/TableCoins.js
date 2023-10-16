import React from "react";
import CoinRow from "./CoinRow";

const titles = [
  "#",
  "Coins",
  "Price",
  "1h",
  "24h",
  "7d",
  "24h Volume",
  "Mkt Cap",
];

const TableCoins = ({ coins, search }) => {
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) |
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <table className="table">
      <thead>
        <tr>
          {(() => {
            const cells = [];
            titles.forEach((title, index) => {
              cells.push(<td key={index}>{title}</td>);
            });
            return cells;
          })()}
        </tr>
      </thead>
      <tbody>
        {(() => {
          const rows = [];
          filteredCoins.forEach((coin, index) => {
            rows.push(<CoinRow coin={coin} key={index} index={index} />);
          });
          return rows;
        })()}
      </tbody>
    </table>
  );
};

export default TableCoins;
