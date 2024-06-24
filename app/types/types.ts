export interface Stock {
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
  overview: string;
  recentNews: string;
  comments: string[];
  previousRanking?: number;
  currentRanking?: number;
  fundamentalsMatch?: number;
  riskMatch?: number;
  momentumMatch?: number;
}




export interface Filters {
  marketCapRange: [number, number];
  dividendYieldRange: [number, number];
  maxDrawdownRange: [number, number];
  sharpeRange: [number, number];
  sterlingRange: [number, number];
  ema50Range: [number, number];
  rsiRange: [number, number];
  stochasticRange: [number, number];
  selectedItems: Record<string, boolean>; // Ensure this is correctly defined
  [key: string]: any;
}
