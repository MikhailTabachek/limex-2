import React, { useState, useEffect } from 'react';
import RangeSlider from './RangeSlider';
import './SliderStyles.css';

const RiskLevel: React.FC = () => {
  const [range, setRange] = useState<[number, number]>([25, 75]);
  const [needle, setNeedle] = useState<number>(50);
  const [indicator, setIndicator] = useState('green');
  const [setDate, setSetDate] = useState<string>('');

  useEffect(() => {
    setIndicator((needle < range[0] || needle > range[1]) ? 'red' : 'green');
  }, [needle, range]);

  const handleSetClick = () => {
    setNeedle(50); // Move the main needle to the center
    setSetDate(new Date().toLocaleDateString());
  };

  return (
    <div className="risk-level p-5 bg-gray-100 rounded-lg shadow-md text-center">
      <h3 className="mb-2">Risk Level</h3>
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
        <span>Moderate</span>
        <span>High</span>
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

export default RiskLevel;
