import React, { useState } from 'react';

const StockDetail: React.FC<{ stock: any }> = ({ stock }) => {
  const [showMoreOverview, setShowMoreOverview] = useState(false);
  const [showMoreNews, setShowMoreNews] = useState(false);

  return (
    <div className="bg-yellow-100 p-6 rounded-lg shadow-md my-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mr-4">
            <span className="text-gray-700 font-semibold">
              {stock.name.charAt(0)}
            </span>
          </div>
          <h2 className="text-2xl font-bold">{stock.name}</h2>
        </div>
        <button className="text-blue-500">Add to Watchlist</button>
      </div>
      <p className="mb-4">
        {showMoreOverview
          ? `${stock.overview} ${stock.longOverview}`
          : stock.overview}
        <button
          className="text-blue-500 ml-2"
          onClick={() => setShowMoreOverview(!showMoreOverview)}
        >
          {showMoreOverview ? 'Show Less' : 'Show More'}
        </button>
      </p>
      <div className="bg-yellow-200 p-4 rounded-lg mb-4">
        <p>
          {showMoreNews ? stock.news : stock.news.substring(0, 100) + '...'}
          <button
            className="text-blue-500 ml-2"
            onClick={() => setShowMoreNews(!showMoreNews)}
          >
            {showMoreNews ? 'Show Less' : 'Show More'}
          </button>
        </p>
        <a href="#" className="text-blue-500 mt-2 inline-block">
          Go to post
        </a>
      </div>
      <div className="flex space-x-4">
        <button className="bg-gray-200 p-2 rounded-md">Comment A</button>
        <button className="bg-gray-200 p-2 rounded-md">Comment B</button>
        <button className="bg-gray-200 p-2 rounded-md">Comment C</button>
        <button className="bg-gray-200 p-2 rounded-md">Comment D</button>
      </div>
    </div>
  );
};

export default StockDetail;
