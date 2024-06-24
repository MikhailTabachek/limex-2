import React, { useEffect, useState } from 'react';
import Layout from '../app/layout';
import StockScreener from '../app/components/StockScreener';
import SettingsMenu from '../app/components/SettingsMenu';
import { usePageContext } from '../app/pageContext';
import StocksList from '../app/components/StocksList';

interface Filters {
  marketCapRange: [number, number];
  dividendYieldRange: [number, number];
  maxDrawdownRange: [number, number];
  sharpeRange: [number, number];
  sterlingRange: [number, number];
  ema50Range: [number, number];
  rsiRange: [number, number];
  stochasticRange: [number, number];
  selectedItems: Record<string, boolean>;
  [key: string]: any;
}

const defaultFilters: Filters = {
  marketCapRange: [0, 7000],
  dividendYieldRange: [0, 50],
  maxDrawdownRange: [0, 100],
  sharpeRange: [0, 100],
  sterlingRange: [0, 100],
  ema50Range: [0, 100],
  rsiRange: [0, 100],
  stochasticRange: [0, 100],
  selectedItems: {},
};

const Explore: React.FC = () => {
  const { setCurrentPage } = usePageContext();

  useEffect(() => {
    setCurrentPage('explore');
  }, [setCurrentPage]);

  const [activeTab, setActiveTab] = useState('screener');
  const [filters, setFilters] = useState(defaultFilters);

  const handleApplyFilters = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  return (
    <Layout>
      <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
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

          <div className="border rounded-lg shadow-md p-4 bg-gray-50">
            {activeTab === 'screener' && (
              <>
                <StockScreener filters={filters} />
                {/* <Feed /> */}
              </>
            )}
            {activeTab === 'portfolio' && <StocksList />}
            {activeTab === 'watchlist' && <p>Watchlist content goes here...</p>}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Explore;
