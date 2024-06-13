import React, { useState, useEffect } from 'react';
import RangeSlider from './RangeSlider';
import Tooltip from '@mui/material/Tooltip';
import { FaInfoCircle } from 'react-icons/fa';
import './SliderStyles.css';

const RiskLevel: React.FC = () => {
  const [range, setRange] = useState<[number, number]>([35, 65]);
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
      Risk Level helps you assess the potential risk of your portfolio. The blue range sets the acceptable risk levels. The grey needle indicates your current risk, and it turns red if it goes beyond the set range. Adjusting the risk levels helps in maintaining a balanced portfolio. A moderate risk level is often suggested for long-term investments. Keep an eye on the risk level to avoid significant losses. For more details, click on the link below. <a href="https://limex.com/tp/info/learning_center/" target="_blank" rel="noopener noreferrer">Learn more</a>.
    </span>
  );

  return (
    <div className="relative-performance p-5 bg-gray-100 rounded-lg shadow-md text-center">
      <div className="slider-label mb-2">
        <h3 className="inline-block">Risk Level</h3>
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
        <span>Low</span>
        {/* <span>Moderate</span> */}
        <span>High</span>
      </div>
      <div className={`indicator ${indicator} w-4 h-4 rounded-full mx-auto my-2`}></div>
      <br />
      <div>Simulate </div>
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

export default RiskLevel;
