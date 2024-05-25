import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = ({ events, highlightedEvent }: { events: { name: string, date: Date }[], highlightedEvent: string }) => {
  const today = new Date();

  const calculateDistance = (eventDate: Date) => {
    const diffTime = Math.abs(eventDate.getTime() - today.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(100 - diffDays, 0); // Ensure the distance is not negative
  };

  const labels = events.map(event => event.name);
  const dataPoints = events.map(event => calculateDistance(event.date));

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Days to event',
        data: dataPoints,
        borderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: labels.map(label => label === highlightedEvent ? '#007aff' : 'rgba(75, 192, 192, 1)'),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#007aff',
        borderWidth: 0,
        pointRadius: 5, // Increases the point size
        fill: false, // Remove the background fill
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: { display: false },
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
          circular: true,
          lineWidth: 1,
        },
        pointLabels: {
          font: { size: 14 },
          color: '#4A5568'
        }, // Customize label appearance
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          display: false, // Hide the tick labels
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#4A5568', // Customize legend text color
          font: { size: 14 },
        },
      },
      tooltip: {
        backgroundColor: '#4A5568', // Customize tooltip background color
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        displayColors: false, // Hide tooltip color box
      },
    },
  };

  return (
    <div className="h-64" style={{ height: '350px' }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
