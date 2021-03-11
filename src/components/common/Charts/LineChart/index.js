import { Line } from 'react-chartjs-2';

const LineChart = ({
  height, width, maintainAspectRatio = true, select
}) => {
  const data = {
    item: [{
      labels: [
        'Week 1',
        'Week 2',
        'Week 3',
        'Week 4'
      ],
      datasets: [
        {
          label: '',
          data: [50, 30, 48, 60, 40, 70],
          borderColor: ['rgba(185,184,228,0.8)'],
          backgroundColor: ['rgba(185,184,228,0.2)'],
          pointBackgroundColor: 'rgba(185,184,228,0.7)',
          pointBorderColor: 'rgba(185,184,228,0.9)'
        }
      ]
    },
    {
      labels: [
        'Week 1',
        'Week 2',
        'Week 3',
        'Week 4'
      ],
      datasets: [
        {
          label: '',
          data: [20, 35, 68, 88, 48, 33],
          borderColor: ['rgba(218,89,27,0.8)'],
          backgroundColor: ['rgba(218,89,27,0.2)'],
          pointBackgroundColor: 'rgba(218,89,27,0.7)',
          pointBorderColor: 'rgba(218,89,27,0.9)'
        }
      ]
    }]
  };

  const options = {
    title: {
      display: false
    },
    responsive: false,
    maintainAspectRatio,
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 100,
            stepSize: 50
          }
        }
      ]
    }
  };

  return <Line data={data?.item[select]} options={options} width={width} height={height} />;
};

export default LineChart;
