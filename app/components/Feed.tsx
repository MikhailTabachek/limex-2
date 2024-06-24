import React from 'react';
import { initialStocks } from '../components/stocksData';
import DetailedStockView from '../components/DetailedStockView';
import SocialPostCard from '../components/SocialPostCard';
import TopPortfolioCard from '../components/TopPortfolioCard';
import { Stock } from '../types/types';

const feedStocks = initialStocks.slice(0, 5); // Pick any 5 stocks from the initial list

const Feed: React.FC = () => {
  const [selectedStock, setSelectedStock] = React.useState<Stock | null>(null);

  const handleStockClick = (stock: Stock) => {
    setSelectedStock(stock);
  };

  const handleClose = () => {
    setSelectedStock(null);
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Feed</h2>
      {selectedStock && (
        <DetailedStockView stock={selectedStock} onClose={handleClose} />
      )}
      <div className="mt-4">
        {feedStocks.map((stock, index) => (
          <div key={index} onClick={() => handleStockClick(stock)} className="cursor-pointer">
            <DetailedStockView stock={stock} onClose={handleClose} />
          </div>
        ))}

        <SocialPostCard
          authorName="Adam Smith"
          followers="10k"
          postContent="This is a social post without a ticker."
        />

        <TopPortfolioCard
          authorName="Jane Doe"
          followers="15k"
          rating="5 Star"
          portfolioContent="Jane Doe has a top-rated portfolio. This author has stocks in a portfolio that match your screener results."
        />
      </div>
    </div>
  );
};

export default Feed;
