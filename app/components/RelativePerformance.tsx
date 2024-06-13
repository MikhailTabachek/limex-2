import React, { useState, useEffect } from 'react';
import RangeSlider from './RangeSlider';
import Tooltip from '@mui/material/Tooltip';
import { FaInfoCircle } from 'react-icons/fa';
import './SliderStyles.css';

const RelativePerformance: React.FC = () => {
  const [range, setRange] = useState<[number, number]>([-20, 20]);
  const [needle, setNeedle] = useState<number>(0);
  const [indicator, setIndicator] = useState('green');
  const [setDate, setSetDate] = useState<string>('');

  useEffect(() => {
    setIndicator((needle < range[0] || needle > range[1]) ? 'red' : 'green');
  }, [needle, range]);

  const handleSetClick = () => {
    setNeedle(0); // Reset the grey needle to the center
    setSetDate(new Date().toLocaleDateString());
  };

  const tooltipText = (
    <span className="custom-tooltip">
      Relative Performance indicates how well your portfolio is performing in comparison to a benchmark. This slider helps you set acceptable performance levels for your investments. The blue range represents your chosen performance range. The grey needle shows your current performance, and it turns red if it falls outside the acceptable range. Regularly adjusting this range helps you keep track of your portfolio's performance. Remember, maintaining a balanced portfolio is key to long-term success. <a href="https://limex.com/tp/info/learning_center/" target="_blank" rel="noopener noreferrer">Learn more</a>.
    </span>
  );

  return (
    <div className="relative-performance p-5 bg-gray-100 rounded-lg shadow-md text-center">
      <div className="slider-label mb-2">
        <h3 className="inline-block">Relative Performance</h3>
        <Tooltip title={tooltipText} placement="right">
          <span className="ml-2 inline-block">
            <FaInfoCircle />
          </span>
        </Tooltip>
      </div>
      <RangeSlider
        min={-100}
        max={100}
        needle={needle}
        setNeedle={setNeedle}
        range={range}
        setRange={setRange}
      />
      <div className="scale flex justify-between mt-2">
        <span>-100%</span>
        {/* <span>0%</span> */}
        <span>+100%</span>
      </div>
      <div className={`indicator ${indicator} w-4 h-4 rounded-full mx-auto my-2`}></div>
      <br />
      <div>Simulate </div>
      <input
        type="number"
        value={needle}
        onChange={(e) => setNeedle(Number(e.target.value))}
        className="needle-input mt-2 p-1 border rounded"
        min={-100}
        max={100}
      />
      <button onClick={handleSetClick} className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer transition hover:bg-blue-700">Reset</button>
      <div>{setDate && `Set on: ${setDate}`}</div>
    </div>
  );
};

export default RelativePerformance;
