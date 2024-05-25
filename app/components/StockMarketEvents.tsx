import React from 'react';
import { Tooltip } from 'react-tooltip';

const events = [
  { type: 'Earnings Call', description: 'Apple Q2 Earnings Call', date: '2024-06-01', good: 70, bad: 30, tooltip: 'Positive outlook expected' },
  { type: 'Layoff', description: 'Microsoft Layoffs', date: '2024-06-05', good: 40, bad: 60, tooltip: 'Potential negative impact' },
  { type: 'Earnings Call', description: 'Amazon Q2 Earnings Call', date: '2024-06-10', good: 60, bad: 40, tooltip: 'Mixed expectations' },
  { type: 'Layoff', description: 'Google Layoffs', date: '2024-06-15', good: 30, bad: 70, tooltip: 'Negative impact expected' },
  { type: 'Earnings Call', description: 'Meta Q2 Earnings Call', date: '2024-06-20', good: 80, bad: 20, tooltip: 'Positive outlook' },
  { type: 'Earnings Call', description: 'Tesla Q2 Earnings Call', date: '2024-06-25', good: 50, bad: 50, tooltip: 'Uncertain impact' },
];

const StockMarketEvents = ({ setHighlightedEvent }: { setHighlightedEvent: (name: string) => void }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md h-64 overflow-y-scroll" style={{ height: '400px' }}>
      <h3 className="text-xl font-semibold mb-4">Stock Market Events</h3>
      <ul>
        {events.map((event, index) => (
          <li
            key={index}
            className="mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded"
            onMouseEnter={() => setHighlightedEvent(event.description)}
            onMouseLeave={() => setHighlightedEvent('')}
            data-tooltip-id={`tooltip-${index}`}
            data-tooltip-content={event.tooltip}
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="font-medium">{event.type}</p>
                <p className="text-sm text-gray-500">{event.description}</p>
              </div>
              <div className="mt-2 w-full flex">
                <div className="flex-grow">
                  <div className="h-2 relative max-w-xl rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gray-200 absolute"></div>
                    <div
                      className="h-full bg-green-500 absolute"
                      style={{ width: `${event.good}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500">{event.date}</p>
            </div>
            <Tooltip id={`tooltip-${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockMarketEvents;
