import React, { useState, useEffect } from "react";
import CryptoCard from "./Components/CryptoCard";
import axios from "axios";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCryptoData = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`
        );
        setCoins(response.data);
      } catch (error) {
        setError("Failed to fetch cryptocurrency data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <div className="app">
      <h1>Crypto Price Tracker</h1>
      {loading && <p className="loading">Loading Data...</p>}
      {error && <p className="error">{error}</p>}
      <div className="crypto-container">
        {
        coins.map((coin) => (
          <CryptoCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default App;
