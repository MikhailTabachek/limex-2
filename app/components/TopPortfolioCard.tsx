import React from 'react';

interface TopPortfolioCardProps {
  authorName: string;
  followers: string;
  rating: string;
  portfolioContent: string;
}

const TopPortfolioCard: React.FC<TopPortfolioCardProps> = ({ authorName, followers, rating, portfolioContent }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-2">
        <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center mr-2">
          <span className="text-sm font-bold">{authorName.charAt(0)}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{authorName}</h3>
          <div className="text-gray-500 flex items-center">
            <span>{followers} followers</span>
            <span className="ml-2 flex items-center">
              <span className="material-icons">star</span>
              {rating}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p>{portfolioContent}</p>
      </div>
    </div>
  );
};

export default TopPortfolioCard;
