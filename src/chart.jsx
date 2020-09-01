import React from 'react';
import { Line } from 'react-chartjs';

const useStyles = (() => ({
  canvas: {
    maxWidth: "180px",
    maxHeight: "150px",
  }
}
))

function rand(min, max, num) {
  const rtn = [];
  while (rtn.length < num) {
    rtn.push((Math.random() * (max - min)) + min);
  }
  return rtn;
}

function data1() {
  return {
    labels: ['January', 'February', 'March',],
    datasets: [
      {
        label: 'My First dataset',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: rand(32, 100, 7)
      },
      {
        label: 'My Second dataset',
        fillColor: 'rgba(151,187,205,0.2)',
        strokeColor: 'rgba(151,187,205,1)',
        pointColor: 'rgba(151,187,205,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: rand(32, 100, 7)
      }
    ]
  };
}
function MyChart() {
  const classes = useStyles();
  return <Line data={data1()} options={[]}>
    <div
      options={{
        title: {
          display: true,
          text: 'Average',
          fontSize: 20
        },
        legend: {
          display: true,
          position: 'right'
        }
      }}
    />
  </Line>
}
export default MyChart;
