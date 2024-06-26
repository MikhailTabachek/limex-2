// pages/explore.tsx
import React, { useState } from 'react';
import Layout from '@/app/layout';
import StockScreener from '../app/components/StockScreener';
import StocksList from '../app/components/StocksList';
import DetailedStockView from '../app/components/DetailedStockView';
import Feed from '../app/components/Feed';
import SettingsMenu from '../app/components/SettingsMenu';
import { Stock, Filters } from '../app/types/types';
import { initialStocks } from '../app/components/stocksData';

const Explore: React.FC = () => {
  const [activeTab, setActiveTab] = useState('screener');
  const [selectedStock, setSelectedStock] = useState<Stock | null>(null);
  const [filters, setFilters] = useState<Filters>({
    marketCapRange: [0, 100000],
    dividendYieldRange: [0, 10],
    maxDrawdownRange: [0, 100],
    sharpeRange: [0, 3],
    sterlingRange: [0, 3],
    ema50Range: [0, 100],
    rsiRange: [0, 100],
    stochasticRange: [0, 100],
    selectedSectors: [],
    selectedInvestmentTypes: [],
    selectedItems: {}
  });

  const handleStockClick = (stock: Stock) => {
    setSelectedStock(stock);
  };

  const handleClose = () => {
    setSelectedStock(null);
  };

  const handleApplyFilters = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  return (
    <Layout>
      <div className="flex">
        <aside className="w-64 bg-gray-50 text-gray-800 p-6 rounded-lg shadow-md">
          <SettingsMenu onApply={handleApplyFilters} />
        </aside>
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
                  <StockScreener filters={filters} onStockClick={handleStockClick} selectedStock={selectedStock} onClose={handleClose} />
                  {selectedStock && <DetailedStockView stock={selectedStock} onClose={handleClose} />}
                </>
              )}
              {activeTab === 'portfolio' && <StocksList />}
              {activeTab === 'watchlist' && <p>Watchlist content goes here...</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Feed />
      </div>
    </Layout>
  );
};

export default Explore;
