import React from 'react';
import { Chart } from 'chart.js/auto';
import { useEffect, useRef } from 'react';

interface ResultDisplayProps {
  sgpa: number;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ sgpa }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['SGPA', 'Remaining'],
            datasets: [{
              data: [sgpa, 10 - sgpa],
              backgroundColor: ['#3B82F6', '#1F2937'],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true,
            cutout: '70%',
            plugins: {
              legend: {
                display: false
              }
            }
          }
        });
      }
    }
  }, [sgpa]);

  return (
    <div className="bg-gray-800 rounded-lg p-6 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Your SGPA: {sgpa.toFixed(2)}</h2>
      <div className="w-48 h-48 mx-auto">
        <canvas ref={chartRef}></canvas>
      </div>
      <p className="mt-4 text-gray-400">
        Percentage: {(sgpa * 10).toFixed(2)}%
      </p>
    </div>
  );
};