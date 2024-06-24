import React, { useState } from 'react';

interface Stock {
  name: string;
  symbol: string;
  sector: string;
  investmentType: string;
  marketCap: number;
  dividendYield: number;
  maxDrawdown: number;
  sharpe: number;
  sterling: number;
  ema50: number;
  rsi: number;
  stochastic: number;
  lastPrice: number;
  changePercent: number;
  change: number;
  open: number;
  prevClose: number;
  volume: number;
}

interface StockDetailsProps {
  stock: Stock;
  onClose: () => void;
}

const StockDetails: React.FC<StockDetailsProps> = ({ stock, onClose }) => {
  const [overviewExpanded, setOverviewExpanded] = useState(false);
  const [newsExpanded, setNewsExpanded] = useState(false);

  const toggleOverview = () => setOverviewExpanded(!overviewExpanded);
  const toggleNews = () => setNewsExpanded(!newsExpanded);

  return (
    <div className="p-6 bg-yellow-100 rounded-lg shadow-md mt-4 relative">
      <button onClick={onClose} className="absolute top-4 right-4 text-xl">×</button>
      <div className="flex items-center mb-4">
        <img src={`https://logo.clearbit.com/${stock.name.toLowerCase()}.com`} alt={stock.name} className="w-12 h-12 mr-4" />
        <div>
          <h2 className="text-2xl font-bold">{stock.name}</h2>
          <p className="text-gray-600">{stock.symbol}</p>
        </div>
        <div className="ml-auto text-right">
          <p className={`text-xl ${stock.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {stock.lastPrice.toFixed(2)}
          </p>
          <p className={`text-sm ${stock.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {stock.changePercent >= 0 ? '↑' : '↓'} {stock.changePercent.toFixed(2)}%
          </p>
        </div>
        <button className="ml-4 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
          Add to Watchlist
        </button>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Company Overview</h3>
        <p>
          {overviewExpanded
            ? 'Apple Inc. designs, manufactures, and markets mobile communication and media devices, personal computers, and portable digital music players. In the past month, Apple Corporation has made significant headlines, notably surpassing Apple to become the first chip company to hit a $3 trillion market cap. The company is recognized globally for its innovation and product quality.'
            : 'Apple Inc. designs, manufactures, and markets mobile communication and media devices, personal computers, and portable digital music players.'}
          <button onClick={toggleOverview} className="ml-2 text-blue-500">
            {overviewExpanded ? 'Show Less' : 'Show More'}
          </button>
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Recent News</h3>
        <p>
          {newsExpanded
            ? 'In the past month, Apple Corporation has made significant headlines, notably surpassing Apple to become the first chip company to hit a $3 trillion market cap. This milestone underscores its dominant position in the tech industry. For more details, read the full post. The company continues to innovate and expand its product line.'
            : 'In the past month, Apple Corporation has made significant headlines, notably surpassing Apple to become the first chip company to hit a $3 trillion market cap.'}
          <button onClick={toggleNews} className="ml-2 text-blue-500">
            {newsExpanded ? 'Show Less' : 'Show More'}
          </button>
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Comments</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <p>Great stock with promising future!</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p>Love their innovation and product quality.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p>Invested in Apple for the long term.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p>Waiting for their next product release!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetails;
