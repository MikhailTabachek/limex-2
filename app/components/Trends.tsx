import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Modal from 'react-modal';

const trends = [
  { 
    name: 'AI Revolution', 
    likelihood: 70, 
    tooltip: 'The impact of artificial intelligence on various sectors.', 
    description: `AI is transforming industries, leading to increased efficiency and innovation. Companies that adopt AI are likely to benefit from improved productivity and cost savings, while those that fail to innovate may fall behind.`,
    positiveStocks: [
      { symbol: 'GOOGL', name: 'Alphabet Inc.', reason: 'Leader in AI technology and services.' },
      { symbol: 'MSFT', name: 'Microsoft Corporation', reason: 'Strong investment in AI research and applications.' },
    ],
    negativeStocks: [
      { symbol: 'XRX', name: 'Xerox Corporation', reason: 'Lagging in AI adoption, potential disruption in traditional business models.' },
    ]
  },
  { 
    name: 'China and US Relationship', 
    likelihood: 50, 
    tooltip: 'Trade tensions and collaborations between China and the US.', 
    description: `Trade policies and political tensions between the US and China affect global markets. Tariffs and trade restrictions can impact profitability and supply chains for companies operating in both countries.`,
    positiveStocks: [
      { symbol: 'BABA', name: 'Alibaba Group', reason: 'May benefit from Chinese government support amid tensions.' },
    ],
    negativeStocks: [
      { symbol: 'AAPL', name: 'Apple Inc.', reason: 'Significant manufacturing presence in China, vulnerable to tariffs.' },
      { symbol: 'NKE', name: 'Nike, Inc.', reason: 'Heavy reliance on Chinese manufacturing and market.' },
    ]
  },
  { 
    name: 'China Invades Taiwan', 
    likelihood: 30, 
    tooltip: 'Potential geopolitical conflict in the Asia-Pacific region.', 
    description: `A potential invasion could disrupt global supply chains and economies.`,
    positiveStocks: [
      { symbol: 'LMT', name: 'Lockheed Martin', reason: 'Defense contractor that may benefit from increased military spending.' },
    ],
    negativeStocks: [
      { symbol: 'TSM', name: 'Taiwan Semiconductor', reason: 'Direct impact from geopolitical conflict.' },
    ]
  },
  { 
    name: 'Russia and Ukraine War', 
    likelihood: 60, 
    tooltip: 'Continued conflict and its effects on global markets.', 
    description: `Ongoing conflict impacts energy prices and global economic stability.`,
    positiveStocks: [
      { symbol: 'XOM', name: 'ExxonMobil', reason: 'Potential increase in energy prices.' },
    ],
    negativeStocks: [
      { symbol: 'BA', name: 'Boeing', reason: 'Supply chain disruptions.' },
    ]
  },
  { 
    name: 'Green Energy', 
    likelihood: 80, 
    tooltip: 'The shift towards renewable energy sources.', 
    description: `Increased adoption of renewable energy affects traditional energy sectors.`,
    positiveStocks: [
      { symbol: 'ENPH', name: 'Enphase Energy', reason: 'Leader in solar energy solutions.' },
    ],
    negativeStocks: [
      { symbol: 'XOM', name: 'ExxonMobil', reason: 'Potential decline in fossil fuel demand.' },
    ]
  },
  { 
    name: 'Tech Regulations', 
    likelihood: 55, 
    tooltip: 'Increased regulations on technology companies.', 
    description: `Regulatory measures may limit the growth of tech companies.`,
    positiveStocks: [
      { symbol: 'CRM', name: 'Salesforce', reason: 'Less impacted by certain regulations.' },
    ],
    negativeStocks: [
      { symbol: 'FB', name: 'Meta Platforms', reason: 'Increased scrutiny and regulation.' },
    ]
  },
  { 
    name: 'Climate Change', 
    likelihood: 75, 
    tooltip: 'Environmental impacts affecting various industries.', 
    description: `Climate change policies and impacts influence market dynamics.`,
    positiveStocks: [
      { symbol: 'NKE', name: 'Nike, Inc.', reason: 'Sustainability initiatives.' },
    ],
    negativeStocks: [
      { symbol: 'CVX', name: 'Chevron', reason: 'Fossil fuel reliance.' },
    ]
  },
  { 
    name: 'Healthcare Advancements', 
    likelihood: 65, 
    tooltip: 'New medical technologies and their market impact.', 
    description: `Innovations in healthcare drive growth and investment opportunities.`,
    positiveStocks: [
      { symbol: 'PFE', name: 'Pfizer', reason: 'New drug developments.' },
    ],
    negativeStocks: [
      { symbol: 'CVS', name: 'CVS Health', reason: 'Potential disruption from new technologies.' },
    ]
  },
  { 
    name: 'Cryptocurrency Adoption', 
    likelihood: 40, 
    tooltip: 'The rise of digital currencies and their effects.', 
    description: `Increased use of cryptocurrencies influences financial markets.`,
    positiveStocks: [
      { symbol: 'COIN', name: 'Coinbase', reason: 'Leading cryptocurrency exchange.' },
    ],
    negativeStocks: [
      { symbol: 'JPM', name: 'JPMorgan Chase', reason: 'Traditional banking sector disruption.' },
    ]
  },
  { 
    name: 'Interest Rate Changes', 
    likelihood: 50, 
    tooltip: 'Adjustments in interest rates by central banks.', 
    description: `Interest rate changes affect borrowing costs and investment decisions.`,
    positiveStocks: [
      { symbol: 'GS', name: 'Goldman Sachs', reason: 'Benefit from higher interest rates.' },
    ],
    negativeStocks: [
      { symbol: 'HD', name: 'Home Depot', reason: 'Higher borrowing costs for consumers.' },
    ]
  },
  { 
    name: 'Inflation Concerns', 
    likelihood: 70, 
    tooltip: 'Rising inflation and its economic consequences.', 
    description: `High inflation impacts purchasing power and economic growth.`,
    positiveStocks: [
      { symbol: 'WMT', name: 'Walmart', reason: 'Consumer shift to cost-saving options.' },
    ],
    negativeStocks: [
      { symbol: 'TGT', name: 'Target', reason: 'Margin pressures from rising costs.' },
    ]
  },
  { 
    name: 'Global Supply Chain Issues', 
    likelihood: 65, 
    tooltip: 'Disruptions in supply chains affecting production.', 
    description: `Supply chain disruptions lead to shortages and increased costs.`,
    positiveStocks: [
      { symbol: 'UPS', name: 'United Parcel Service', reason: 'Increased demand for logistics services.' },
    ],
    negativeStocks: [
      { symbol: 'AAPL', name: 'Apple Inc.', reason: 'Supply chain dependencies.' },
    ]
  },
  { 
    name: 'Consumer Behavior Changes', 
    likelihood: 55, 
    tooltip: 'Shifts in consumer preferences and spending habits.', 
    description: `Changes in consumer behavior affect demand across industries.`,
    positiveStocks: [
      { symbol: 'AMZN', name: 'Amazon', reason: 'E-commerce growth.' },
    ],
    negativeStocks: [
      { symbol: 'M', name: 'Macy\'s', reason: 'Shift away from traditional retail.' },
    ]
  },
  { 
    name: 'Remote Work Trends', 
    likelihood: 60, 
    tooltip: 'The long-term impact of remote work on businesses.', 
    description: `Remote work adoption influences commercial real estate and technology.`,
    positiveStocks: [
      { symbol: 'ZM', name: 'Zoom Video Communications', reason: 'Increased demand for remote work solutions.' },
    ],
    negativeStocks: [
      { symbol: 'BXP', name: 'Boston Properties', reason: 'Decreased demand for office space.' },
    ]
  },
  { 
    name: 'Urbanization', 
    likelihood: 50, 
    tooltip: 'The growth of cities and its economic effects.', 
    description: `Urbanization drives infrastructure development and economic activity.`,
    positiveStocks: [
      { symbol: 'CAT', name: 'Caterpillar', reason: 'Increased demand for construction equipment.' },
    ],
    negativeStocks: [
      { symbol: 'KO', name: 'Coca-Cola', reason: 'Shifts in consumer health preferences.' },
    ]
  },
];

const Trends = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTrend, setSelectedTrend] = useState<any>(null);

  const openModal = (trend: any) => {
    setSelectedTrend(trend);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedTrend(null);
  };

  return (
    <div className="trends p-6 bg-white rounded-lg shadow-md h-64 overflow-y-scroll custom-scrollbar" style={{ height: '400px' }}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Trends</h3>
        <h3 className="text-xl font-semibold">Market Reaction</h3>
      </div>
      <div className="flex justify-end items-center mb-4">
        <span className="text-sm text-gray-500 ml-60">Negative</span>
        <div className="flex-grow border-t border-gray-300 mx-20"></div>
        <span className="text-sm text-gray-500">Positive</span>
      </div>
      <ul className="space-y-4">
        {trends.map((trend, index) => (
          <li key={index} className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded transition-colors duration-200" onClick={() => openModal(trend)}>
            <Tippy content={trend.tooltip}>
              <span className="break-words mr-4 w-1/3">{trend.name}</span>
            </Tippy>
            <div className="flex-grow">
              <div className="h-2 w-full rounded-full overflow-hidden relative">
                <div className="w-full h-full bg-gray-200 absolute"></div>
                <div
                  className="h-full bg-blue-500 absolute"
                  style={{ width: `${trend.likelihood}%` }}
                ></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Trend Details"
        className="modal"
        overlayClassName="overlay"
      >
        {selectedTrend && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">{selectedTrend.name}</h2>
            <p className="mb-4">{selectedTrend.description}</p>
            <h3 className="text-xl font-semibold mb-2">Positive Impact Stocks</h3>
            <ul className="mb-4">
              {selectedTrend.positiveStocks.map((stock: any) => (
                <li key={stock.symbol}>{stock.name} ({stock.symbol}) - {stock.reason}</li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold mb-2">Negative Impact Stocks</h3>
            <ul className="mb-4">
              {selectedTrend.negativeStocks.map((stock: any) => (
                <li key={stock.symbol}>{stock.name} ({stock.symbol}) - {stock.reason}</li>
              ))}
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Trends;