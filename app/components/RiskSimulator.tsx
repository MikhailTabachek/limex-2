import React, { useState } from 'react';
import RiskGauge from './RiskGauge';
import { sp500Stocks } from '../types/sp500Stocks';

const RiskSimulator = () => {
  const initialPortfolio = sp500Stocks.filter(stock => ['AAPL', 'MSFT', 'AMZN', 'TSLA', 'GOOGL'].includes(stock.symbol)); // Example initial portfolio

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStocks, setSelectedStocks] = useState(initialPortfolio);
  const [averageRisk, setAverageRisk] = useState(calculateAverageRisk(initialPortfolio));
  const [dropdownVisible, setDropdownVisible] = useState(false);

  function calculateAverageRisk(stocks) {
    const totalRisk = stocks.reduce((acc, stock) => acc + stock.risk, 0);
    return stocks.length > 0 ? totalRisk / stocks.length : 0;
  }

  const handleAddStock = (stock) => {
    if (selectedStocks.find(s => s.name === stock.name)) return;

    const updatedStocks = [...selectedStocks, stock];
    setSelectedStocks(updatedStocks);
    setAverageRisk(calculateAverageRisk(updatedStocks));
    setSearchTerm('');
    setDropdownVisible(false);
  };

  const handleRemoveStock = (stockName) => {
    const updatedStocks = selectedStocks.filter(s => s.name !== stockName);
    setSelectedStocks(updatedStocks);
    setAverageRisk(calculateAverageRisk(updatedStocks));
  };

  const filteredStocks = sp500Stocks.filter(stock => 
    stock.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="risk-simulator p-6 bg-white rounded-lg shadow-md mb-6">
      <div className="flex items-start mb-4">
        <div className="flex-shrink-0 mr-4">
          <RiskGauge riskLevel={calculateAverageRisk(initialPortfolio)} title="Current" />
        </div>
        <div className="flex-shrink-0 mr-4">
          <RiskGauge riskLevel={averageRisk} title="New" />
        </div>
        <div className="flex-grow p-4 bg-gray-100 rounded-md shadow-sm relative">
          <h3 className="text-xl font-semibold mb-4">Simulated Portfolio</h3>
          <input
            type="text"
            className="border p-2 rounded mb-2 w-80"
            placeholder="Search by name or ticker"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setDropdownVisible(e.target.value.length > 0);
            }}
          />
          {dropdownVisible && (
            <ul className="absolute bg-white border rounded w-80 mt-1 max-h-40 overflow-y-auto z-10">
              {filteredStocks.map(stock => (
                <li 
                  key={stock.symbol} 
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleAddStock(stock)}
                >
                  {stock.name} ({stock.symbol})
                </li>
              ))}
            </ul>
          )}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {selectedStocks.map((stock) => (
              <div key={stock.name} className="flex justify-between items-center mb-2">
                <span>{stock.name} ({stock.risk})</span>
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                  onClick={() => handleRemoveStock(stock.name)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskSimulator;


