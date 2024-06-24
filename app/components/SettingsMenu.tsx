"use client";

import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import CompactRangeSlider from './CompactRangeSlider';

const settings = [
  {
    title: 'Sectors',
    items: [
      'Energy',
      'Materials',
      'Industrials',
      'Consumer Discretionary',
      'Consumer Staples',
      'Health Care',
      'Financials',
      'Information Technology',
      'Communication Services',
      'Utilities',
      'Real Estate'
    ]
  },
  {
    title: 'Investment Type',
    items: [
      'Stocks',
      'ETF',
      'Futures',
      'Options',
      'Bonds',
      'Crypto'
    ]
  },
  {
    title: 'Fundamentals',
    items: ['Market Cap', 'Dividend Yield']
  },
  {
    title: 'Risk',
    items: ['Max. Drawdown', 'Sharpe', 'Sterling']
  },
  {
    title: 'Momentum',
    items: ['EMA-50', 'RSI', 'Stochastic']
  },
  {
    title: 'Social',
    items: ['Authors', 'Posts']
  }
];

const SettingsMenu: React.FC<{ onApply: (filters: any) => void }> = ({ onApply }) => {
  const [expandedSetting, setExpandedSetting] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: string[] }>({});
  const [marketCapRange, setMarketCapRange] = useState<[number, number]>([0, 7000]);
  const [dividendYieldRange, setDividendYieldRange] = useState<[number, number]>([0, 50]);
  const [maxDrawdownRange, setMaxDrawdownRange] = useState<[number, number]>([0, 100]);
  const [sharpeRange, setSharpeRange] = useState<[number, number]>([0, 100]);
  const [sterlingRange, setSterlingRange] = useState<[number, number]>([0, 100]);
  const [ema50Range, setEma50Range] = useState<[number, number]>([0, 100]);
  const [rsiRange, setRsiRange] = useState<[number, number]>([0, 100]);
  const [stochasticRange, setStochasticRange] = useState<[number, number]>([0, 100]);
  const [authorsFilters, setAuthorsFilters] = useState<string[]>([]);
  const [postsFilters, setPostsFilters] = useState<string[]>([]);

  const toggleSetting = (title: string) => {
    setExpandedSetting(expandedSetting === title ? null : title);
  };

  const handleSelectAll = (title: string) => {
    const allSelected = selectedItems[title]?.length === settings.find(setting => setting.title === title)?.items.length;
    setSelectedItems({
      ...selectedItems,
      [title]: allSelected ? [] : settings.find(setting => setting.title === title)?.items || []
    });
  };

  const handleCheckboxChange = (title: string, item: string) => {
    const selectedList = selectedItems[title] || [];
    if (selectedList.includes(item)) {
      setSelectedItems({
        ...selectedItems,
        [title]: selectedList.filter(i => i !== item)
      });
    } else {
      setSelectedItems({
        ...selectedItems,
        [title]: [...selectedList, item]
      });
    }
  };

  const handleSubcategoryCheckboxChange = (subcategory: string, item: string, setFilters: React.Dispatch<React.SetStateAction<string[]>>, filters: string[]) => {
    if (filters.includes(item)) {
      setFilters(filters.filter(i => i !== item));
    } else {
      setFilters([...filters, item]);
    }
  };

  const handleApply = () => {
    const filters = {
      marketCapRange,
      dividendYieldRange,
      maxDrawdownRange,
      sharpeRange,
      sterlingRange,
      ema50Range,
      rsiRange,
      stochasticRange,
      authorsFilters,
      postsFilters,
      selectedItems,
    };
    onApply(filters);
  };

  return (
    <div>
      {settings.map((setting) => (
        <div key={setting.title} className="mb-4">
          <h2
            className="text-xl font-bold mb-2 cursor-pointer flex items-center justify-between"
            onClick={() => toggleSetting(setting.title)}
          >
            {setting.title}
            <FaAngleDown
              className={`transition-transform duration-300 ${expandedSetting === setting.title ? 'rotate-180' : 'rotate-0'}`}
            />
          </h2>
          {expandedSetting === setting.title && setting.items.length > 0 && (
            <ul className="ml-4">
              {setting.title !== 'Fundamentals' && setting.title !== 'Risk' && setting.title !== 'Momentum' && setting.title !== 'Social' && (
                <>
                  <li className="mb-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={selectedItems[setting.title]?.length === setting.items.length}
                        onChange={() => handleSelectAll(setting.title)}
                      />
                      All
                    </label>
                  </li>
                  {setting.items.map((item) => (
                    <li key={item} className="mb-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={selectedItems[setting.title]?.includes(item) || false}
                          onChange={() => handleCheckboxChange(setting.title, item)}
                        />
                        {item}
                      </label>
                    </li>
                  ))}
                </>
              )}
              {setting.title === 'Fundamentals' && (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Market Capitalization</label>
                    <CompactRangeSlider
                      min={0}
                      max={7000}
                      range={marketCapRange}
                      setRange={setMarketCapRange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Dividend Yield</label>
                    <CompactRangeSlider
                      min={0}
                      max={50}
                      range={dividendYieldRange}
                      setRange={setDividendYieldRange}
                    />
                  </div>
                </>
              )}
              {setting.title === 'Risk' && (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Max. Drawdown</label>
                    <CompactRangeSlider
                      min={0}
                      max={100}
                      range={maxDrawdownRange}
                      setRange={setMaxDrawdownRange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Sharpe</label>
                    <CompactRangeSlider
                      min={0}
                      max={100}
                      range={sharpeRange}
                      setRange={setSharpeRange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Sterling</label>
                    <CompactRangeSlider
                      min={0}
                      max={100}
                      range={sterlingRange}
                      setRange={setSterlingRange}
                    />
                  </div>
                </>
              )}
              {setting.title === 'Momentum' && (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">EMA-50</label>
                    <CompactRangeSlider
                      min={0}
                      max={100}
                      range={ema50Range}
                      setRange={setEma50Range}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">RSI</label>
                    <CompactRangeSlider
                      min={0}
                      max={100}
                      range={rsiRange}
                      setRange={setRsiRange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Stochastic</label>
                    <CompactRangeSlider
                      min={0}
                      max={100}
                      range={stochasticRange}
                      setRange={setStochasticRange}
                    />
                  </div>
                </>
              )}
              {setting.title === 'Social' && (
                <>
                  <h3 className="text-lg font-semibold mb-2">Authors</h3>
                  <ul className="ml-4">
                    <li className="mb-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={authorsFilters.includes('Verified')}
                          onChange={() => handleSubcategoryCheckboxChange('Authors', 'Verified', setAuthorsFilters, authorsFilters)}
                        />
                        Verified
                      </label>
                    </li>
                    <li className="mb-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={authorsFilters.includes('Top Rated')}
                          onChange={() => handleSubcategoryCheckboxChange('Authors', 'Top Rated', setAuthorsFilters, authorsFilters)}
                        />
                        Top Rated
                      </label>
                    </li>
                    <li className="mb-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={authorsFilters.includes('Has Strategy')}
                          onChange={() => handleSubcategoryCheckboxChange('Authors', 'Has Strategy', setAuthorsFilters, authorsFilters)}
                        />
                        Has Strategy
                      </label>
                    </li>
                  </ul>
                  <h3 className="text-lg font-semibold mb-2">Posts</h3>
                  <ul className="ml-4">
                    <li className="mb-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={postsFilters.includes('Most Viewed')}
                          onChange={() => handleSubcategoryCheckboxChange('Posts', 'Most Viewed', setPostsFilters, postsFilters)}
                        />
                        Most Viewed
                      </label>
                    </li>
                    <li className="mb-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={postsFilters.includes('Most Liked')}
                          onChange={() => handleSubcategoryCheckboxChange('Posts', 'Most Liked', setPostsFilters, postsFilters)}
                        />
                        Most Liked
                      </label>
                    </li>
                    <li className="mb-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={postsFilters.includes('Most Reposted')}
                          onChange={() => handleSubcategoryCheckboxChange('Posts', 'Most Reposted', setPostsFilters, postsFilters)}
                        />
                        Most Reposted
                      </label>
                    </li>
                  </ul>
                </>
              )}
            </ul>
          )}
        </div>
      ))}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4"
        onClick={handleApply}
      >
        Apply
      </button>
    </div>
  );
};

export default SettingsMenu;
