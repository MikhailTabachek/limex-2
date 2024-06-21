import React, { useEffect, useState } from 'react';
import Layout from '../app/layout';
import StocksList from '../app/components/StocksList';
import { usePageContext } from '../app/pageContext';

const Explore: React.FC = () => {
  const { setCurrentPage } = usePageContext();

  useEffect(() => {
    setCurrentPage('explore');
  }, [setCurrentPage]);

  const [activeTab, setActiveTab] = useState('screener');

  return (
    <Layout>
      <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          {/* Tabs */}
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setActiveTab('screener')}
              className={`px-4 py-2 rounded ${activeTab === 'screener' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              Screener
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`px-4 py-2 rounded ${activeTab === 'portfolio' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              Portfolio
            </button>
            <button
              onClick={() => setActiveTab('watchlist')}
              className={`px-4 py-2 rounded ${activeTab === 'watchlist' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              Watchlist
            </button>
          </div>

          {/* Stock list based on active tab */}
          <div className="border rounded-lg shadow-md p-4 bg-gray-50">
            {activeTab === 'screener' && (
              <div>
                {/* Screener content here */}
                <p>Screener content goes here...</p>
              </div>
            )}
            {activeTab === 'portfolio' && (
              <StocksList />
            )}
            {activeTab === 'watchlist' && (
              <div>
                {/* Watchlist content here */}
                <p>Watchlist content goes here...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Explore;
