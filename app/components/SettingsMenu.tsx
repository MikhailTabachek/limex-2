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
    items: [] // Add your items here
  },
  {
    title: 'Momentum',
    items: [] // Add your items here
  },
  {
    title: 'Social',
    items: [] // Add your items here
  }
];

const SettingsMenu: React.FC = () => {
  const [expandedSetting, setExpandedSetting] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: string[] }>({});
  const [marketCapRange, setMarketCapRange] = useState<[number, number]>([0, 7000]);
  const [dividendYieldRange, setDividendYieldRange] = useState<[number, number]>([0, 50]);

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
              {setting.title !== 'Fundamentals' && (
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
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default SettingsMenu;
