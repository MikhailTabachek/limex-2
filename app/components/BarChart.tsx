import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ good, bad, tooltip }: { good: number, bad: number, tooltip: string }) => {
  const data = {
    labels: [''],
    datasets: [
      {
        label: 'Good News',
        data: [good],
        backgroundColor: 'rgba(91, 187, 71, 1)',
        borderColor: 'rgba(91, 187, 71, 1)',
        borderWidth: 1,
      },
      {
        label: 'Bad News',
        data: [bad],
        backgroundColor: 'rgba(200, 200, 200, 1)',
        borderColor: 'rgba(200, 200, 200, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        display: false,
      },
      y: {
        stacked: true,
        display: false,
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <Tippy content={tooltip}>
      <div className="w-full h-full">
        <Bar data={data} options={options} height={30} />
      </div>
    </Tippy>
  );
};

export default BarChart;
