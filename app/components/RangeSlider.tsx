import React, { useState, useRef, useEffect } from 'react';
import './SliderStyles.css';

interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
  needle: number;
  setNeedle: (value: number) => void;
  range: [number, number];
  setRange: (range: [number, number]) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, step = 1, needle, setNeedle, range, setRange }) => {
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
    const newRightThumb = max - (value - min);
    if (value < rightThumb) {
      setLeftThumb(value);
      setRightThumb(newRightThumb);
      setRange([value, newRightThumb]);
    }
  };

  const handleRightChange = (value: number) => {
    const newLeftThumb = max - (value - min);
    if (value > leftThumb) {
      setRightThumb(value);
      setLeftThumb(newLeftThumb);
      setRange([newLeftThumb, value]);
    }
  };

  const handleSetClick = () => {
    setNeedle(0); // Reset the grey needle to the center
  };

  return (
    <div className="range_slider">
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
        <div className="needle" style={{ left: '50%' }} />
        <div className="grey-needle" style={{ left: `${convertToPercent(needle)}%` }} />
      </div>
      <div className="step-values">
        <span>{leftThumb}</span>
        <span>{rightThumb}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
