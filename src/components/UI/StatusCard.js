// src/components/StatsCard.js
import React from 'react';
import BarChart from './BarChart';

const StatsCard = () => {
  // Sample data for the charts
  const generateUpDownWaveData = () => {
    const frequency = 0.1;
    const amplitude = 50;
    const numberOfPoints = 20;

    const labels = Array.from({ length: numberOfPoints }, (_, index) => `Point ${index + 1}`);
    const waveData = labels.map((label, index) => amplitude * Math.sin(frequency * index));

    const upDownWaveData = labels.map((label, index) => {
      return index % 2 === 0 ? Math.abs(waveData[index]) : -Math.abs(waveData[index]);
    });

    return {
      labels: labels,
      datasets: [
        {
          label: 'Up/Down Wave Data',
          backgroundColor: upDownWaveData.map(value => (value >= 0 ? 'rgba(106, 171, 160, 0.7)' : 'rgba(239, 119, 122, 0.7)')),
          borderColor: upDownWaveData.map(value => (value >= 0 ? 'rgba(106, 171, 160, 1)' : 'rgba(239, 119, 122, 1)')),
          borderWidth: 2,
          hoverBackgroundColor: upDownWaveData.map(value => (value >= 0 ? 'rgba(106, 171, 160, 0.9)' : 'rgba(239, 119, 122, 0.9)')),
          hoverBorderColor: upDownWaveData.map(value => (value >= 0 ? 'rgba(106, 171, 160, 1)' : 'rgba(239, 119, 122, 1)')),
          data: upDownWaveData,
        },
      ],
    };
  };

  const chartData = generateUpDownWaveData();

  const chartOptions = {
    scales: {
      x: {
        type: 'linear',
        title: {
          display: true,
          text: 'Data Points',
          color: '#4A5568', // Gray color for axis title
        },
        grid: {
          color: 'rgba(219, 219, 219, 0.5)', // Light gray grid lines
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Values',
          color: '#4A5568', // Gray color for axis title
        },
        grid: {
          color: 'rgba(219, 219, 219, 0.5)', // Light gray grid lines
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#2D3748', // Dark gray color for legend labels
        },
      },
    },
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#1F2761]">
          Total Application Response Rate
        </h2>
      </div>
      <div className="max-w-lg mx-auto">
        <BarChart data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default StatsCard;
