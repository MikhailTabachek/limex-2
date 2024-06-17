import React, { useState } from 'react';
import Chart from './Chart';
import StocksList from './StocksList';
import RadarChart from './RadarChart';
import StockMarketEvents from './StockMarketEvents';
import RiskSimulator from './RiskSimulator';
import Trends from './Trends';
import RelativePerformance from './RelativePerformance';
import RiskLevel from './RiskLevel';
import TemperatureLevel from './TemperatureLevel';

const events = [
  { name: 'AAPL', date: new Date('2024-06-01') },
  { name: 'GOOGL', date: new Date('2024-06-05') },
  { name: 'META', date: new Date('2024-06-10') },
  { name: 'TSLA', date: new Date('2024-06-15') },
  { name: 'AMZN', date: new Date('2024-06-20') },
  { name: 'NFLX', date: new Date('2024-06-25') },
  { name: 'NVDA', date: new Date('2024-07-01') },
  { name: 'F', date: new Date('2024-07-05') },
  { name: 'KO', date: new Date('2024-07-10') },
  { name: 'AAPL', date: new Date('2024-07-15') },
  { name: 'AMZN', date: new Date('2024-07-20') },
];

const Overview: React.FC = () => {
  const [highlightedEvent, setHighlightedEvent] = useState<string>('');

  return (
    <div className="overview mb-6 p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Hi, Aleksandra!</h2>
        <div className="bg-gray-100 p-4 rounded-md shadow-sm flex items-center justify-between space-x-4">
          <div>
            <h3 className="text-sm font-medium">Your paper trading account</h3>
            <p className="text-xs text-gray-500">30 days left</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold">$6,120.75</p>
            <p className="text-sm text-green-500">+285.91</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <Chart />
        </div>
        <div>
          <StocksList />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <RelativePerformance />
        <RiskLevel />
        <TemperatureLevel />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-3">
          <Trends />
        </div>
      </div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <RadarChart events={events} highlightedEvent={highlightedEvent} />
        </div>
        <div className="lg:col-span-1">
          <StockMarketEvents setHighlightedEvent={setHighlightedEvent} />
        </div>
      </div> */}
      {/* <div className="mt-6">
        <RiskSimulator />
      </div> */}
    </div>
  );
};

export default Overview;
