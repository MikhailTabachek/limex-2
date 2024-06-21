import React, { useState, useRef, useEffect } from 'react';
import './SliderStyles.css';

interface CompactRangeSliderProps {
  min: number;
  max: number;
  step?: number;
  range: [number, number];
  setRange: (range: [number, number]) => void;
}

const CompactRangeSlider: React.FC<CompactRangeSliderProps> = ({ min, max, step = 1, range, setRange }) => {
  const [leftThumb, setLeftThumb] = useState(range[0]);
  const [rightThumb, setRightThumb] = useState(range[1]);
  const rangeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setRange([leftThumb, rightThumb]);
  }, [leftThumb, rightThumb, setRange]);

  const convertToPercent = (value: number) => {
    return ((value - min) / (max - min)) * 100;
  };

  const handleLeftChange = (value: number) => {
    if (value < rightThumb) {
      setLeftThumb(value);
    }
  };

  const handleRightChange = (value: number) => {
    if (value > leftThumb) {
      setRightThumb(value);
    }
  };

  return (
    <div className="compact-range-slider">
      <div className="slider">
        <div className="slider__track"></div>
        <div
          ref={rangeRef}
          style={{ left: `${convertToPercent(leftThumb)}%`, width: `${convertToPercent(rightThumb) - convertToPercent(leftThumb)}%` }}
          className="slider__range"
        ></div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={leftThumb}
          onChange={(e) => handleLeftChange(Number(e.target.value))}
          className="thumb thumb--left"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={rightThumb}
          onChange={(e) => handleRightChange(Number(e.target.value))}
          className="thumb thumb--right"
        />
        <div className="thumb-value" style={{ left: `${convertToPercent(leftThumb)}%` }}>{leftThumb}</div>
        <div className="thumb-value" style={{ left: `${convertToPercent(rightThumb)}%` }}>{rightThumb}</div>
      </div>
    </div>
  );
};

export default CompactRangeSlider;
