import React from 'react';

const CryptoCard = ({ coin }) => {
  if (!coin || !coin.image) return null;

  return (
    <div className="crypto-card">
      <div className="crypto-image-wrapper">
        <img className="crypto-image" src={coin.image} alt={coin.name} />
      </div>
      <h2>{coin.name}</h2>
      <p className="crypto-symbol">{coin.symbol.toUpperCase()}</p>
      <p className="crypto-price">${coin.current_price.toLocaleString()}</p>
    </div>
  );
};

export default CryptoCard;
