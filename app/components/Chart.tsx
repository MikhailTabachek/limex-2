import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartComponent = () => {
  const data = {
    labels: ['May 2021', 'Jun 2021', 'Jul 2021', 'Aug 2021', 'Sep 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022'],
    datasets: [
      {
        label: 'Your Strategy',
        data: [0, 2.4, 6.3, 4.4, 2.4, 6.3, 12.5, 17.4, 21.6],
        borderColor: 'rgba(63, 168, 49, 1)',
        fill: false,
        tension: 0.3
      },
      {
        label: 'Benchmark (S&P500)',
        data: [0, -1.2, 1.2, -0.4, 1.0, 2.5, 3.4, 5.6, 7.8],
        borderColor: 'rgba(194, 195, 195, 1)',
        fill: false,
        tension: 0.3
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures the chart container controls the height
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Portfolio Performance',
      },
    },
  };

  return (
    <div style={{ height: '400px' }}> {/* Adjust this height to match the stock list */}
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
