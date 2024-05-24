import BarChart from './BarChart';

const events = [
  { type: 'Earnings Call', description: 'Apple Q2 Earnings Call', name: 'AAPL', date: '2024-06-01', good: 70, bad: 30, tooltip: 'Apple is expected to release strong earnings due to high sales.' },
  { type: 'Layoff', description: 'Microsoft Layoffs', name: 'MSFT', date: '2024-06-05', good: 40, bad: 60, tooltip: 'Microsoft is planning layoffs due to restructuring.' },
  { type: 'Earnings Call', description: 'Amazon Q2 Earnings Call', name: 'AMZN', date: '2024-06-10', good: 80, bad: 20, tooltip: 'Amazon is projected to have a strong quarter with increased revenue.' },
  { type: 'Layoff', description: 'Google Layoffs', name: 'GOOGL', date: '2024-06-15', good: 50, bad: 50, tooltip: 'Google is undergoing layoffs as part of cost-cutting measures.' },
  { type: 'Earnings Call', description: 'Meta Q2 Earnings Call', name: 'META', date: '2024-06-20', good: 65, bad: 35, tooltip: 'Meta’s earnings are expected to be solid, driven by ad revenue.' },
  { type: 'Earnings Call', description: 'Tesla Q2 Earnings Call', name: 'TSLA', date: '2024-06-25', good: 90, bad: 10, tooltip: 'Tesla’s earnings are anticipated to be very positive due to strong sales.' },
  { type: 'Layoff', description: 'Netflix Layoffs', name: 'NFLX', date: '2024-06-30', good: 30, bad: 70, tooltip: 'Netflix is planning layoffs due to declining subscriptions.' },
  { type: 'Earnings Call', description: 'Nvidia Q2 Earnings Call', name: 'NVDA', date: '2024-07-01', good: 75, bad: 25, tooltip: 'Nvidia’s earnings are expected to be strong, driven by GPU sales.' },
  { type: 'Earnings Call', description: 'Apple Q3 Earnings Call', name: 'AAPL', date: '2024-07-05', good: 85, bad: 15, tooltip: 'Apple’s Q3 earnings are projected to be strong due to new product releases.' },
  { type: 'Layoff', description: 'Amazon Layoffs', name: 'AMZN', date: '2024-07-10', good: 40, bad: 60, tooltip: 'Amazon is planning layoffs in certain departments due to restructuring.' },
];

const StockMarketEvents = ({ setHighlightedEvent }: { setHighlightedEvent: (name: string) => void }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md h-64 overflow-y-scroll">
      <h3 className="text-xl font-semibold mb-2">Stock Market Events</h3>
      <ul className="space-y-1">
        {events.map((event, index) => (
          <li
            key={index}
            className="flex items-center cursor-pointer hover:bg-gray-100 p-1 rounded"
            onMouseEnter={() => setHighlightedEvent(event.name)}
            onMouseLeave={() => setHighlightedEvent('')}
            style={{ height: '30px' }}
          >
            <div className="flex-shrink-0 w-1/4 text-xs">
              <p className="font-medium">{event.type}</p>
              <p className="text-gray-500">{event.description}</p>
            </div>
            <div className="flex-grow">
              <BarChart good={event.good} bad={event.bad} tooltip={event.tooltip} />
            </div>
            <div className="flex-shrink-0 w-1/6 text-right text-xs">
              <p className="text-gray-500">{event.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockMarketEvents;
