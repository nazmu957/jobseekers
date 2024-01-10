// src/components/BarChart.js
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = ({ data, options }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the previous chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });

    // Clean up the chart instance on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, options]);

  return <canvas ref={chartRef} />;
};

export default BarChart;
