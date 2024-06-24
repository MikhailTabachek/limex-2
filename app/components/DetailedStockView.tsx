import React, { useState } from 'react';
import { Stock } from '../types/types';

interface DetailedStockViewProps {
  stock: Stock;
  onClose: () => void;
}

const DetailedStockView: React.FC<DetailedStockViewProps> = ({ stock, onClose }) => {
  const [showMoreOverview, setShowMoreOverview] = useState(false);
  const [showMoreNews, setShowMoreNews] = useState(false);

  return (
    <div className="p-6 bg-yellow-100 rounded-lg shadow-md mt-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={`https://logo.clearbit.com/${stock.name.toLowerCase()}.com`} alt={stock.name} className="w-8 h-8 mr-2" />
          <h2 className="text-xl font-bold">{stock.name}</h2>
          <span className="ml-2 text-gray-500">{stock.symbol}</span>
        </div>
        <div className="text-right mr-4">
          <div className="text-lg font-bold">${stock.lastPrice.toFixed(2)}</div>
          <div className={`text-sm ${stock.changePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {stock.changePercent >= 0 ? '▲' : '▼'} {stock.changePercent.toFixed(2)}%
          </div>
        </div>
        <button onClick={onClose} className="ml-4 button-no-bg hover:text-blue-700">X</button>
      </div>
      <div className="mt-2 flex justify-start">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Add to Watchlist
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Overview</h3>
        <p>
          {showMoreOverview
            ? 'Apple Inc. designs, manufactures, and markets mobile communication and media devices, personal computers, and portable digital music players. It also sells a variety of related software, services, accessories, networking solutions, and third-party digital content and applications.'
            : 'Apple Inc. designs, manufactures, and markets mobile communication and media devices, personal computers, and portable digital music players.'}
        </p>
        <button onClick={() => setShowMoreOverview(!showMoreOverview)} className="button-no-bg border border-gray-300 rounded px-1 hover:text-blue-700 mt-2">
          {showMoreOverview ? 'Show Less' : 'Show More'}
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Recent News</h3>
        <p>
          {showMoreNews
            ? 'In the past month, Apple Corporation has made significant headlines, notably surpassing Apple to become the first chip company to hit a $3 trillion market cap, a milestone that underscores its dominant position in the tech industry. The company continues to innovate and expand its product lineup, driving strong financial performance. Analysts are optimistic about its future growth prospects. The stock has seen a steady rise in its valuation over the past few years.'
            : 'In the past month, Apple Corporation has made significant headlines, notably surpassing Apple to become the first chip company to hit a $3 trillion market cap.'}
        </p>
        <button onClick={() => setShowMoreNews(!showMoreNews)} className="button-no-bg border border-gray-300 rounded px-1 hover:text-blue-700 mt-2">
          {showMoreNews ? 'Show Less' : 'Show More'}
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Comments</h3>
        <div className="flex space-x-4">
          <p className="border p-2 rounded-lg">Great stock with promising future!</p>
          <p className="border p-2 rounded-lg">I'm considering adding this to my portfolio.</p>
          <p className="border p-2 rounded-lg">Recent performance has been impressive.</p>
          <p className="border p-2 rounded-lg">Looking forward to seeing their next earnings report.</p>
        </div>
      </div>
    </div>
  );
};

export default DetailedStockView;
