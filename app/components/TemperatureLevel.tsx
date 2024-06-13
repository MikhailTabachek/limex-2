import React, { useState, useEffect } from 'react';
import RangeSlider from './RangeSlider';
import Tooltip from '@mui/material/Tooltip';
import { FaInfoCircle } from 'react-icons/fa';
import './SliderStyles.css';

const TemperatureLevel: React.FC = () => {
  const [range, setRange] = useState<[number, number]>([33, 66]);
  const [needle, setNeedle] = useState<number>(50);
  const [indicator, setIndicator] = useState('green');
  const [setDate, setSetDate] = useState<string>('');

  useEffect(() => {
    setIndicator((needle < range[0] || needle > range[1]) ? 'red' : 'green');
  }, [needle, range]);

  const handleSetClick = () => {
    setNeedle(50); // Reset the grey needle to the center
    setSetDate(new Date().toLocaleDateString());
  };

  const tooltipText = (
    <span className="custom-tooltip">
      Temperature Level shows the activity level of your stocks. The blue range represents the acceptable temperature levels, while the grey needle shows the current level. If it falls outside the set range, the needle turns red. Regularly adjusting this range ensures your investments are in the desired activity range. High temperature might indicate high activity but also higher risk. Learn more about managing your portfolio by clicking the link below. <a href="https://limex.com/tp/info/learning_center/" target="_blank" rel="noopener noreferrer">Learn more</a>.
    </span>
  );

  return (
    <div className="relative-performance p-5 bg-gray-100 rounded-lg shadow-md text-center">
      <div className="slider-label mb-2">
        <h3 className="inline-block">Temperature Level</h3>
        <Tooltip title={tooltipText} placement="right">
          <span className="ml-2 inline-block">
            <FaInfoCircle />
          </span>
        </Tooltip>
      </div>
      <RangeSlider
        min={0}
        max={100}
        needle={needle}
        setNeedle={setNeedle}
        range={range}
        setRange={setRange}
      />
      <div className="scale flex justify-between mt-2">
        <span>0°</span>
        <span>50°</span>
        <span>100°</span>
      </div>
      <div className={`indicator ${indicator} w-4 h-4 rounded-full mx-auto my-2`}></div>
      <input
        type="number"
        value={needle}
        onChange={(e) => setNeedle(Number(e.target.value))}
        className="needle-input mt-2 p-1 border rounded"
        min={0}
        max={100}
      />
      <button onClick={handleSetClick} className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer transition hover:bg-blue-700">Reset</button>
      <div>{setDate && `Set on: ${setDate}`}</div>
    </div>
  );
};

export default TemperatureLevel;
