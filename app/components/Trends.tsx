import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

type Timeframe = 'now' | 'week' | 'month';

const trends = [
  { 
    name: 'AI Revolution', 
    likelihood: { now: 45, week: 60, month: 70 }, 
    tooltip: 'The impact of artificial intelligence on various sectors.', 
    description: `AI is transforming industries, leading to increased efficiency and innovation. Companies that adopt AI are likely to benefit from improved productivity and cost savings, while those that fail to innovate may fall behind.`,
    positiveStocks: [
      { symbol: 'GOOGL', name: 'Alphabet Inc.', reason: 'Leader in AI technology and services.' },
      { symbol: 'MSFT', name: 'Microsoft Corporation', reason: 'Strong investment in AI research and applications.' },
    ],
    negativeStocks: [
      { symbol: 'XRX', name: 'Xerox Corporation', reason: 'Lagging in AI adoption, potential disruption in traditional business models.' },
    ],
    changes: {
      now: [
        { date: '2024-06-10', description: 'OpenAI partnership boosts AI adoption', detail: 'Recent partnership with OpenAI accelerates AI integration.', source: 'technews.com' },
        { date: '2024-06-05', description: 'Regulations impact AI investments', detail: 'New regulations create hurdles for AI investments.', source: 'businessnews.com' },
      ],
      week: [
        { date: '2024-06-03', description: 'New AI technology announced', detail: 'Major breakthrough in AI technology announced.', source: 'innovationnews.com' },
        { date: '2024-06-01', description: 'AI conference highlights', detail: 'Key takeaways from the annual AI conference.', source: 'aiconference.com' },
      ],
      month: [
        { date: '2024-05-20', description: 'AI investments surge', detail: 'Significant increase in AI-related investments.', source: 'financialtimes.com' },
        { date: '2024-05-15', description: 'AI regulations discussed', detail: 'Government discussions on new AI regulations.', source: 'governancenews.com' },
      ]
    }
  },
  { 
    name: 'China and US Relationship', 
    likelihood: { now: 50, week: 45, month: 40 }, 
    tooltip: 'Trade tensions and collaborations between China and the US.', 
    description: `Trade policies and political tensions between the US and China affect global markets. Tariffs and trade restrictions can impact profitability and supply chains for companies operating in both countries.`,
    positiveStocks: [
      { symbol: 'BABA', name: 'Alibaba Group', reason: 'May benefit from Chinese government support amid tensions.' },
    ],
    negativeStocks: [
      { symbol: 'AAPL', name: 'Apple Inc.', reason: 'Significant manufacturing presence in China, vulnerable to tariffs.' },
      { symbol: 'NKE', name: 'Nike, Inc.', reason: 'Heavy reliance on Chinese manufacturing and market.' },
    ],
    changes: {
      now: [
        { date: '2024-06-08', description: 'New tariffs imposed', detail: 'Tariffs increase tension between China and the US.', source: 'economynews.com' },
        { date: '2024-06-03', description: 'Trade negotiations stall', detail: 'Negotiations hit a standstill, increasing market volatility.', source: 'worldnews.com' },
      ],
      week: [
        { date: '2024-06-01', description: 'US-China trade talks resume', detail: 'Resumption of trade talks brings optimism.', source: 'tradejournal.com' },
        { date: '2024-05-29', description: 'Tariff exemptions granted', detail: 'Exemptions on certain goods reduce tensions.', source: 'economynews.com' },
      ],
      month: [
        { date: '2024-05-15', description: 'Major trade deal signed', detail: 'Historic trade deal signed, improving relations.', source: 'worldnews.com' },
        { date: '2024-05-10', description: 'Supply chain disruptions', detail: 'Disruptions in supply chains due to tariffs.', source: 'supplychainnews.com' },
      ]
    }
  },
  { 
    name: 'Green Energy', 
    likelihood: { now: 80, week: 75, month: 70 }, 
    tooltip: 'The shift towards renewable energy sources.', 
    description: `Increased adoption of renewable energy affects traditional energy sectors.`,
    positiveStocks: [
      { symbol: 'ENPH', name: 'Enphase Energy', reason: 'Leader in solar energy solutions.' },
    ],
    negativeStocks: [
      { symbol: 'XOM', name: 'ExxonMobil', reason: 'Potential decline in fossil fuel demand.' },
    ],
    changes: {
      now: [
        { date: '2024-06-12', description: 'Government incentives for renewable energy', detail: 'Incentives boost renewable energy sector.', source: 'energynews.com' },
        { date: '2024-06-07', description: 'Major solar energy project launched', detail: 'New project increases solar energy capacity.', source: 'technews.com' },
      ],
      week: [
        { date: '2024-06-05', description: 'Wind energy investments rise', detail: 'Significant rise in wind energy investments.', source: 'energytimes.com' },
        { date: '2024-06-02', description: 'New battery technology', detail: 'Breakthrough in battery technology improves storage.', source: 'techupdate.com' },
      ],
      month: [
        { date: '2024-05-20', description: 'Solar panel efficiency improvements', detail: 'New solar panels offer higher efficiency.', source: 'solarpowernews.com' },
        { date: '2024-05-15', description: 'Renewable energy policies enacted', detail: 'Policies enacted to support renewable energy.', source: 'policynews.com' },
      ]
    }
  },
  { 
    name: 'Tech Regulations', 
    likelihood: { now: 55, week: 50, month: 45 }, 
    tooltip: 'Increased regulations on technology companies.', 
    description: `Regulatory measures may limit the growth of tech companies.`,
    positiveStocks: [
      { symbol: 'CRM', name: 'Salesforce', reason: 'Less impacted by certain regulations.' },
    ],
    negativeStocks: [
      { symbol: 'FB', name: 'Meta Platforms', reason: 'Increased scrutiny and regulation.' },
    ],
    changes: {
      now: [
        { date: '2024-06-09', description: 'New data privacy laws', detail: 'Laws impact data handling practices.', source: 'lawnews.com' },
        { date: '2024-06-04', description: 'Antitrust investigations announced', detail: 'Investigations increase regulatory pressure.', source: 'businessnews.com' },
      ],
      week: [
        { date: '2024-06-02', description: 'Regulation debate heats up', detail: 'Debate over tech regulations intensifies.', source: 'policydebate.com' },
        { date: '2024-05-30', description: 'New compliance requirements', detail: 'Tech companies face new compliance requirements.', source: 'compliancenews.com' },
      ],
      month: [
        { date: '2024-05-25', description: 'Global tech regulation summit', detail: 'Summit discusses global tech regulations.', source: 'globaltechsummit.com' },
        { date: '2024-05-20', description: 'User data protection act', detail: 'New act to protect user data introduced.', source: 'dataprotection.com' },
      ]
    }
  },
  { 
    name: 'Healthcare Advancements', 
    likelihood: { now: 65, week: 60, month: 55 }, 
    tooltip: 'New medical technologies and their market impact.', 
    description: `Innovations in healthcare drive growth and investment opportunities.`,
    positiveStocks: [
      { symbol: 'PFE', name: 'Pfizer', reason: 'New drug developments.' },
    ],
    negativeStocks: [
      { symbol: 'CVS', name: 'CVS Health', reason: 'Potential disruption from new technologies.' },
    ],
    changes: {
      now: [
        { date: '2024-06-11', description: 'Breakthrough in cancer treatment', detail: 'New treatment shows promise in clinical trials.', source: 'healthnews.com' },
        { date: '2024-06-06', description: 'Telehealth expansion', detail: 'Telehealth services see significant expansion.', source: 'medtech.com' },
      ],
      week: [
        { date: '2024-06-04', description: 'AI in diagnostics', detail: 'AI technology improves diagnostic accuracy.', source: 'healthtech.com' },
        { date: '2024-06-01', description: 'New vaccine approved', detail: 'New vaccine approved for widespread use.', source: 'vaccineupdate.com' },
      ],
      month: [
        { date: '2024-05-22', description: 'Gene therapy advancements', detail: 'Advancements in gene therapy offer new hope.', source: 'genetherapy.com' },
        { date: '2024-05-18', description: 'Wearable health tech', detail: 'New wearable tech for health monitoring launched.', source: 'wearabletech.com' },
      ]
    }
  }
];

const Trends = () => {
  const [timeframe, setTimeframe] = useState<Timeframe>('week');
  const [showMore, setShowMore] = useState(false);

  const visibleTrends = showMore ? trends : trends.slice(0, 2);

  const getArrowPattern = (color: string, width: number, left: number) => {
    const arrowStyle = {
      width: `${width}%`,
      height: '100%',
      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, ${color} 2px, ${color} 4px)`,
      position: 'absolute' as 'absolute',
      top: 0,
      left: `${left}%`,
    };
    return <div style={arrowStyle}></div>;
  };

  return (
    <div className="trends p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Major Drivers</h3>
        <div>
          <button onClick={() => setTimeframe('week')} className={`px-3 py-1 text-white ${timeframe === 'week' ? 'bg-black' : 'bg-gray-600'}`}>1 Week</button>
          <button onClick={() => setTimeframe('month')} className={`px-3 py-1 text-white ${timeframe === 'month' ? 'bg-black' : 'bg-gray-600'}`}>1 Month</button>
          <button onClick={() => setTimeframe('now')} className={`px-3 py-1 text-white ${timeframe === 'now' ? 'bg-black' : 'bg-gray-600'}`}>Today</button>
        </div>
      </div>
      <ul className="space-y-4">
        {visibleTrends.map((trend, index) => (
          <li key={index} className="border border-gray-300 rounded-lg p-4 hover:shadow-lg">
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{trend.name}</span>
                <div className="text-center font-semibold w-full">Likelihood</div>
              </div>
              <div className="flex justify-between mb-2">
                <span>0%</span>
                <span>100%</span>
              </div>
              <div className="flex-grow relative">
                <Tippy content={`1 ${timeframe} ago: ${trend.likelihood[timeframe]}%`}>
                  <div className="h-4 w-full rounded-full overflow-hidden relative bg-gray-200">
                    <div className="absolute left-0 h-full bg-blue-500 hover:bg-blue-600" style={{ width: `${trend.likelihood[timeframe]}%` }}></div>
                    <div className="absolute right-0 h-full bg-orange-500 hover:bg-orange-600" style={{ width: `${100 - trend.likelihood[timeframe]}%` }}></div>
                    {timeframe !== 'now' && (
                      <>
                        {getArrowPattern(
                          trend.likelihood[timeframe] > trend.likelihood.now ? 'blue' : 'orange',
                          Math.abs(trend.likelihood[timeframe] - trend.likelihood.now),
                          Math.min(trend.likelihood[timeframe], trend.likelihood.now)
                        )}
                        <div className="absolute left-0 h-full border-l-2 border-black" style={{ left: `${trend.likelihood[timeframe]}%` }}>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-2 h-2 border-t-2 border-l-2 border-black rotate-45"></div>
                        </div>
                        <div className="absolute right-0 h-full border-r-2 border-black" style={{ right: `${100 - trend.likelihood.now}%` }}>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-2 h-2 border-t-2 border-r-2 border-black rotate-45"></div>
                        </div>
                      </>
                    )}
                  </div>
                </Tippy>
              </div>
            </div>
            <div className="ml-4 mt-2 text-sm">
              <h4 className="font-semibold mt-2">Recent Changes:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {trend.changes[timeframe].map((change: any, index: number) => (
                  <div key={index} className="p-2 border rounded shadow-sm">
                    <p className="font-semibold">{change.date}</p>
                    <p>{change.description}</p>
                    <p className="text-xs text-gray-500">{change.detail}</p>
                    <a href={`https://${change.source}`} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline">{change.source}</a>
                  </div>
                ))}
              </div>
              <h4 className="font-semibold mt-2">Positive Impact Stocks:</h4>
              <ul className="list-disc ml-6">
                {trend.positiveStocks.map((stock: any) => (
                  <li key={stock.symbol}><a href={`https://ai.limex.me/profile/BATS:${stock.symbol}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{stock.name} ({stock.symbol})</a> - {stock.reason}</li>
                ))}
              </ul>
              <h4 className="font-semibold mt-2">Negative Impact Stocks:</h4>
              <ul className="list-disc ml-6">
                {trend.negativeStocks.map((stock: any) => (
                  <li key={stock.symbol}><a href={`https://ai.limex.me/profile/BATS:${stock.symbol}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{stock.name} ({stock.symbol})</a> - {stock.reason}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={() => setShowMore(!showMore)} className="mt-4 text-white bg-black px-4 py-2 rounded">
        {showMore ? 'Less' : 'More'}
      </button>
    </div>
  );
};

export default Trends;
