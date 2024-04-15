



import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export const LineChart = () => {
  const chartRef = useRef(null);
 
  useEffect(() => {
    const chartConfig = {
      type: 'line',
      data: {
        labels: ['Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5'],
        datasets: [
          {
            data: [80, 40, 65, 50, 60],
            backgroundColor: 'rgba(172, 152, 239, 0.26)',
            borderColor: '#AC98EF',
            borderWidth: 2,
            pointBackgroundColor: '#AC98EF',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 5,
            fill: 'start'
          }
        ]
      },
      options: {
        scales: {
          y: {
            suggestedMin: 0,
            suggestedMax: 100,
            ticks: {
              display: false
            },
            grid: {
              drawBorder: false,
              drawTicks: false
            }
          },
          x: {
            ticks: {
              display: false
            },
            grid: {
              drawBorder: false,
              drawTicks: false
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        },
        elements: {
          line: {
            tension: .4
          }
        },
        fill: {
          backgroundColor: 'rgba(172, 152, 239, 0.26)'
        }
      }
    };
    const chartInstance = new Chart(chartRef.current, chartConfig);
    return () => {
      chartInstance.destroy();
    };
  }, []);
  
  return (
       <canvas
        ref={chartRef}
        style={{
          maxHeight: '100%',
          maxWidth: '100%'
        }}
      />
    
  );
};

 
