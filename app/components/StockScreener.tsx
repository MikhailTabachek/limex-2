import React, { useState, useEffect } from 'react';

interface Stock {
  name: string;
  symbol: string;
  sector: string;
  investmentType: string;
  marketCap: number;
  dividendYield: number;
  maxDrawdown: number;
  sharpe: number;
  sterling: number;
  ema50: number;
  rsi: number;
  stochastic: number;
  lastPrice: number;
  changePercent: number;
  change: number;
  open: number;
  prevClose: number;
  volume: number;
  fundamentalsMatch?: number;
  riskMatch?: number;
  momentumMatch?: number;
}

interface Filters {
  marketCapRange: [number, number];
  dividendYieldRange: [number, number];
  maxDrawdownRange: [number, number];
  sharpeRange: [number, number];
  sterlingRange: [number, number];
  ema50Range: [number, number];
  rsiRange: [number, number];
  stochasticRange: [number, number];
  [key: string]: any;
}


const initialStocks = [
  {
    name: 'Apple',
    symbol: 'AAPL',
    sector: 'Information Technology',
    investmentType: 'Stocks',
    marketCap: 2230,
    dividendYield: 0.5,
    maxDrawdown: 20,
    sharpe: 1.5,
    sterling: 1.2,
    ema50: 80,
    rsi: 60,
    stochastic: 70,
    lastPrice: 213.96,
    changePercent: -1.27,
    change: -2.75,
    open: 217.59,
    prevClose: 216.71,
    volume: 43.659,
  },
  {
    name: 'Microsoft',
    symbol: 'MSFT',
    sector: 'Information Technology',
    investmentType: 'Stocks',
    marketCap: 1850,
    dividendYield: 1.0,
    maxDrawdown: 15,
    sharpe: 1.8,
    sterling: 1.3,
    ema50: 75,
    rsi: 65,
    stochastic: 68,
    lastPrice: 447.02,
    changePercent: -0.30,
    change: -1.37,
    open: 449.71,
    prevClose: 448.39,
    volume: 7.076,
  },
  {
    name: 'Amazon',
    symbol: 'AMZN',
    sector: 'Consumer Discretionary',
    investmentType: 'Stocks',
    marketCap: 1600,
    dividendYield: 0.0,
    maxDrawdown: 25,
    sharpe: 1.6,
    sterling: 1.1,
    ema50: 70,
    rsi: 55,
    stochastic: 65,
    lastPrice: 523.86,
    changePercent: 0.97,
    change: 5.02,
    open: 514.71,
    prevClose: 518.85,
    volume: 2.064,
  },
  {
    name: 'Alphabet',
    symbol: 'GOOGL',
    sector: 'Communication Services',
    investmentType: 'Stocks',
    marketCap: 1400,
    dividendYield: 0.0,
    maxDrawdown: 18,
    sharpe: 1.7,
    sterling: 1.2,
    ema50: 85,
    rsi: 62,
    stochastic: 72,
    lastPrice: 176.49,
    changePercent: -1.30,
    change: -2.33,
    open: 178.79,
    prevClose: 178.81,
    volume: 6.2,
  },
  {
    name: 'Facebook',
    symbol: 'FB',
    sector: 'Communication Services',
    investmentType: 'Stocks',
    marketCap: 900,
    dividendYield: 0.0,
    maxDrawdown: 22,
    sharpe: 1.4,
    sterling: 1.1,
    ema50: 78,
    rsi: 58,
    stochastic: 69,
    lastPrice: 354.78,
    changePercent: 0.50,
    change: 1.75,
    open: 352.34,
    prevClose: 353.03,
    volume: 2.789,
  },
  {
    name: 'Tesla',
    symbol: 'TSLA',
    sector: 'Consumer Discretionary',
    investmentType: 'Stocks',
    marketCap: 800,
    dividendYield: 0.0,
    maxDrawdown: 30,
    sharpe: 1.2,
    sterling: 1.0,
    ema50: 60,
    rsi: 50,
    stochastic: 55,
    lastPrice: 678.34,
    changePercent: -2.05,
    change: -14.18,
    open: 682.34,
    prevClose: 692.52,
    volume: 8.756,
  },
  {
    name: 'Berkshire Hathaway',
    symbol: 'BRK.B',
    sector: 'Financials',
    investmentType: 'Stocks',
    marketCap: 500,
    dividendYield: 0.0,
    maxDrawdown: 10,
    sharpe: 1.9,
    sterling: 1.4,
    ema50: 88,
    rsi: 70,
    stochastic: 75,
    lastPrice: 278.36,
    changePercent: -0.50,
    change: -1.40,
    open: 279.85,
    prevClose: 279.76,
    volume: 1.2,
  },
  {
    name: 'Visa',
    symbol: 'V',
    sector: 'Information Technology',
    investmentType: 'Stocks',
    marketCap: 450,
    dividendYield: 0.7,
    maxDrawdown: 12,
    sharpe: 1.5,
    sterling: 1.2,
    ema50: 82,
    rsi: 68,
    stochastic: 71,
    lastPrice: 204.58,
    changePercent: -0.20,
    change: -0.41,
    open: 205.24,
    prevClose: 204.99,
    volume: 1.3,
  },
  {
    name: 'Johnson & Johnson',
    symbol: 'JNJ',
    sector: 'Health Care',
    investmentType: 'Stocks',
    marketCap: 420,
    dividendYield: 2.5,
    maxDrawdown: 8,
    sharpe: 1.4,
    sterling: 1.3,
    ema50: 77,
    rsi: 63,
    stochastic: 66,
    lastPrice: 162.41,
    changePercent: 0.25,
    change: 0.41,
    open: 162.00,
    prevClose: 162.00,
    volume: 2.3,
  },
  {
    name: 'Walmart',
    symbol: 'WMT',
    sector: 'Consumer Staples',
    investmentType: 'Stocks',
    marketCap: 390,
    dividendYield: 1.8,
    maxDrawdown: 14,
    sharpe: 1.6,
    sterling: 1.2,
    ema50: 73,
    rsi: 67,
    stochastic: 70,
    lastPrice: 138.96,
    changePercent: 0.50,
    change: 0.69,
    open: 138.00,
    prevClose: 138.27,
    volume: 1.9,
  },
  {
    name: 'Procter & Gamble',
    symbol: 'PG',
    sector: 'Consumer Staples',
    investmentType: 'Stocks',
    marketCap: 380,
    dividendYield: 2.2,
    maxDrawdown: 11,
    sharpe: 1.7,
    sterling: 1.3,
    ema50: 80,
    rsi: 66,
    stochastic: 69,
    lastPrice: 144.85,
    changePercent: 0.65,
    change: 0.94,
    open: 144.00,
    prevClose: 143.91,
    volume: 1.8,
  },
  {
    name: 'Nvidia',
    symbol: 'NVDA',
    sector: 'Information Technology',
    investmentType: 'Stocks',
    marketCap: 350,
    dividendYield: 0.1,
    maxDrawdown: 27,
    sharpe: 1.4,
    sterling: 1.1,
    ema50: 65,
    rsi: 55,
    stochastic: 60,
    lastPrice: 193.12,
    changePercent: -0.35,
    change: -0.67,
    open: 194.00,
    prevClose: 193.79,
    volume: 3.5,
  },
  {
    name: 'UnitedHealth',
    symbol: 'UNH',
    sector: 'Health Care',
    investmentType: 'Stocks',
    marketCap: 340,
    dividendYield: 1.3,
    maxDrawdown: 9,
    sharpe: 1.8,
    sterling: 1.4,
    ema50: 83,
    rsi: 69,
    stochastic: 73,
    lastPrice: 403.45,
    changePercent: 0.15,
    change: 0.61,
    open: 403.00,
    prevClose: 402.84,
    volume: 1.4,
  },
  {
    name: 'Home Depot',
    symbol: 'HD',
    sector: 'Consumer Discretionary',
    investmentType: 'Stocks',
    marketCap: 320,
    dividendYield: 2.1,
    maxDrawdown: 16,
    sharpe: 1.6,
    sterling: 1.3,
    ema50: 75,
    rsi: 64,
    stochastic: 67,
    lastPrice: 327.55,
    changePercent: -0.10,
    change: -0.33,
    open: 328.00,
    prevClose: 327.88,
    volume: 2.0,
  },
  {
    name: 'Mastercard',
    symbol: 'MA',
    sector: 'Information Technology',
    investmentType: 'Stocks',
    marketCap: 310,
    dividendYield: 0.6,
    maxDrawdown: 13,
    sharpe: 1.7,
    sterling: 1.2,
    ema50: 81,
    rsi: 65,
    stochastic: 68,
    lastPrice: 371.12,
    changePercent: 0.10,
    change: 0.37,
    open: 371.00,
    prevClose: 370.75,
    volume: 1.2,
  },
  {
    name: 'Bank of America',
    symbol: 'BAC',
    sector: 'Financials',
    investmentType: 'Stocks',
    marketCap: 300,
    dividendYield: 2.3,
    maxDrawdown: 18,
    sharpe: 1.4,
    sterling: 1.1,
    ema50: 72,
    rsi: 61,
    stochastic: 64,
    lastPrice: 31.12,
    changePercent: -0.45,
    change: -0.14,
    open: 31.40,
    prevClose: 31.26,
    volume: 5.5,
  },
  {
    name: 'Pfizer',
    symbol: 'PFE',
    sector: 'Health Care',
    investmentType: 'Stocks',
    marketCap: 290,
    dividendYield: 3.2,
    maxDrawdown: 8,
    sharpe: 1.5,
    sterling: 1.3,
    ema50: 74,
    rsi: 60,
    stochastic: 65,
    lastPrice: 42.34,
    changePercent: 0.30,
    change: 0.14,
    open: 42.00,
    prevClose: 42.20,
    volume: 3.3,
  },
  {
    name: 'Exxon Mobil',
    symbol: 'XOM',
    sector: 'Energy',
    investmentType: 'Stocks',
    marketCap: 280,
    dividendYield: 3.8,
    maxDrawdown: 25,
    sharpe: 1.3,
    sterling: 1.1,
    ema50: 68,
    rsi: 57,
    stochastic: 63,
    lastPrice: 61.12,
    changePercent: -0.70,
    change: -0.42,
    open: 61.50,
    prevClose: 61.54,
    volume: 4.5,
  },
  {
    name: 'Coca-Cola',
    symbol: 'KO',
    sector: 'Consumer Staples',
    investmentType: 'Stocks',
    marketCap: 270,
    dividendYield: 3.0,
    maxDrawdown: 10,
    sharpe: 1.6,
    sterling: 1.2,
    ema50: 79,
    rsi: 64,
    stochastic: 67,
    lastPrice: 56.78,
    changePercent: 0.25,
    change: 0.14,
    open: 56.50,
    prevClose: 56.64,
    volume: 2.8,
  },
  {
    name: 'Disney',
    symbol: 'DIS',
    sector: 'Communication Services',
    investmentType: 'Stocks',
    marketCap: 260,
    dividendYield: 0.9,
    maxDrawdown: 20,
    sharpe: 1.5,
    sterling: 1.2,
    ema50: 71,
    rsi: 59,
    stochastic: 66,
    lastPrice: 100.12,
    changePercent: -0.50,
    change: -0.34,
    open: 100.50,
    prevClose: 100.46,
    volume: 2.1,
  },
];

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

const StockScreener: React.FC<{ filters: Filters }> = ({ filters }) => {
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
            {filteredStocks.map((stock) => (
              <tr key={stock.symbol}>
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