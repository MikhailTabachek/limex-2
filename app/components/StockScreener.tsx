import React, { useState, useEffect } from 'react';
import { Stock } from '../types/types';
import { initialStocks } from './stocksData';

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

interface StockScreenerProps {
  filters: Filters;
  onStockClick: (stock: Stock) => void;
  selectedStock: Stock | null;
  onClose: () => void;
}

const calculateMatchPercentage = (stock: Stock, filters: Filters) => {
  const fundamentalsMatch =
    (Math.abs(stock.marketCap - (filters.marketCapRange[0] + filters.marketCapRange[1]) / 2) / stock.marketCap) * 100 +
    (Math.abs(stock.dividendYield - (filters.dividendYieldRange[0] + filters.dividendYieldRange[1]) / 2) / stock.dividendYield) * 100;
  const riskMatch =
    (Math.abs(stock.maxDrawdown - (filters.maxDrawdownRange[0] + filters.maxDrawdownRange[1]) / 2) / stock.maxDrawdown) * 100 +
    (Math.abs(stock.sharpe - (filters.sharpeRange[0] + filters.sharpeRange[1]) / 2) / stock.sharpe) * 100 +
    (Math.abs(stock.sterling - (filters.sterlingRange[0] + filters.sterlingRange[1]) / 2) / stock.sterling) * 100;
  const momentumMatch =
    (Math.abs(stock.ema50 - (filters.ema50Range[0] + filters.ema50Range[1]) / 2) / stock.ema50) * 100 +
    (Math.abs(stock.rsi - (filters.rsiRange[0] + filters.rsiRange[1]) / 2) / stock.rsi) * 100 +
    (Math.abs(stock.stochastic - (filters.stochasticRange[0] + filters.stochasticRange[1]) / 2) / stock.stochastic) * 100;

  return {
    fundamentalsMatch: Math.max(0, 100 - fundamentalsMatch),
    riskMatch: Math.max(0, 100 - riskMatch),
    momentumMatch: Math.max(0, 100 - momentumMatch),
  };
};

const StockScreener: React.FC<StockScreenerProps> = ({ filters, onStockClick, selectedStock, onClose }) => {
  const [filteredStocks, setFilteredStocks] = useState<Stock[]>(initialStocks);

  useEffect(() => {
    const sortedStocks = initialStocks.map(stock => {
      const matches = calculateMatchPercentage(stock, filters);
      return { ...stock, ...matches };
    }).sort((a, b) => {
      const aMatch = (a.fundamentalsMatch || 0) + (a.riskMatch || 0) + (a.momentumMatch || 0);
      const bMatch = (b.fundamentalsMatch || 0) + (b.riskMatch || 0) + (b.momentumMatch || 0);
      return bMatch - aMatch;
    });
    setFilteredStocks(sortedStocks);
  }, [filters]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md" style={{ height: '400px' }}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Stock Screener</h3>
      </div>
      <div className="overflow-y-scroll" style={{ maxHeight: '300px' }}>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticker</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fundamentals</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Momentum</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">% Change</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Open</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prev. Close</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStocks.map(stock => (
              <tr key={stock.symbol} onClick={() => onStockClick(stock)} className={`${selectedStock && selectedStock.symbol === stock.symbol ? 'bg-yellow-100' : ''}`}>
                <td className="px-6 py-4 whitespace-nowrap">{stock.symbol}</td>
                <td className="px-6 py-4 whitespace-nowrap">{stock.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{stock.fundamentalsMatch?.toFixed(2)}%</td>
                <td className="px-6 py-4 whitespace-nowrap">{stock.riskMatch?.toFixed(2)}%</td>
                <td className="px-6 py-4 whitespace-nowrap">{stock.momentumMatch?.toFixed(2)}%</td>
                <td className="px-6 py-4 whitespace-nowrap">{stock.lastPrice}</td>
                <td className="px-6 py-4 whitespace-nowrap">{stock.changePercent}%</td>
                <td className="px-6 py-4 whitespace-nowrap">{stock.change}</td>
                <td className="px-6 py-4 whitespace-nowrap">{stock.open}</td>
                <td className="px-6 py-4 whitespace-nowrap">{stock.prevClose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockScreener;
