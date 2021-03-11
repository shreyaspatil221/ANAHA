import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
  const data = {
    datasets: [
      {
        label: 'Calories Burned',
        data: [60, 40],
        backgroundColor: [
          'rgba(153, 102, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 159, 64, 1)'
        ]
      }
    ]
  };

  const options = {
    title: {
      display: true,
      text: 'Calories Burned'
    },
    responsive: false,
    maintainAspectRatio: true
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
