import React from 'react';

const stocks = [
  { name: 'Apple', symbol: 'AAPL', price: 148.96, change: 3.15 },
  { name: 'Microsoft', symbol: 'MSFT', price: 299.01, change: -1.51 },
  { name: 'Amazon', symbol: 'AMZN', price: 342.50, change: 1.51 },
  { name: 'Tesla', symbol: 'TSLA', price: 892.30, change: -2.31 },
  { name: 'Google', symbol: 'GOOGL', price: 2802.75, change: 2.01 },
  { name: 'Nvidia', symbol: 'NVDA', price: 600.50, change: 2.75 },
  { name: 'Ford', symbol: 'F', price: 12.75, change: 0.50 },
  { name: 'Coca Cola', symbol: 'KO', price: 55.20, change: 1.25 },
];

const StocksList = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md" style={{ height: '400px' }}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Stocks</h3>
        <a
          href="https://tx.lime.co"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          style={{ backgroundColor: 'rgba(91, 187, 71, 1)' }}
        >
          Go to your broker
        </a>
      </div>
      <div className="overflow-y-scroll" style={{ maxHeight: '300px' }}>
        <ul className="space-y-4">
          {stocks.map((stock) => (
            <li
              key={stock.symbol}
              className="flex justify-between items-center cursor-pointer hover:bg-gray-100 p-2 rounded transition-colors duration-200"
              onClick={() => window.open(`https://ai.limex.me/profile/BATS:${stock.symbol}`, '_blank')}
            >
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full mr-3">
                  <span className="text-gray-700 font-semibold">
                    {stock.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium">{stock.name}</p>
                  <p className="text-xs text-gray-500">{stock.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">
                  ${stock.price.toFixed(2)}
                </p>
                <p
                  className={`text-xs ${
                    stock.change >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {stock.change >= 0 ? '+' : ''}
                  {stock.change.toFixed(2)}%
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StocksList;
