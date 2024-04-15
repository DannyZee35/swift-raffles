
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
export const BarChart = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {
        
      const chartConfig = {
        type: 'bar',
        data: {
          labels: ['Bar 1', 'Bar 2', 'Bar 3', 'Bar 4', 'Bar 5', 'Bar 6', 'Bar 7', 'Bar 8', 'Bar 9','Bar 9','Bar 9'],
          datasets: [
            {
              label: 'Bar Chart',
              backgroundColor: '#AC98EF',
              data: [20, 10, 20, 30, 30, 20, 10, 20, 10,30,10]
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                display: false
              }
            },
            x: {
              ticks: {
                display: false
              }
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      };
  
      const chartInstance = new Chart(chartRef.current, chartConfig);
  
      return () => {
        chartInstance.destroy();
      };
    }, []);
  
    return <canvas ref={chartRef}  style={{
        maxHeight: '400px',
        maxWidth: '100%'
      }}/>;
  };