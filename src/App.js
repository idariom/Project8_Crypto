import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import TableCoins from "./components/TableCoins";

function App() {
  const [coins, setstate] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en"
    );
    console.log(response.data);
    setstate(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <input
          type="text"
          placeholder="Buscar moneda"
          className="form-control border-0 mt-4 text-center"
          onChange={e => setSearch(e.target.value)}
        />
        <div className="mt-4">
         <TableCoins coins={coins} search={search}/>
        </div>
      </div>
    </div>
  );
}

export default App;
