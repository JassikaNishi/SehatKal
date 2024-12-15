import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);
const useFadeIn = () => {
  return {
    animation: 'fadeIn 1s ease-in-out',
  };
};
const Analytics = () => {
  const [progressData, setProgressData] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState("Weekly");

  useEffect(() => {
    fetch(`http://localhost:5000/api/progress?period=${selectedPeriod.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        setProgressData(data);
      })
      .catch((error) => console.error("Error fetching progress data:", error));
  }, [selectedPeriod]);

  const data = {
    labels: progressData.map((entry) => entry.date),
    datasets: [
      {
        label: "Workouts Completed",
        data: progressData.map((entry) => entry.workout),
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
        tension: 0.1,
      },
      {
        label: "Average Mood Rating",
        data: progressData.map((entry) => entry.mood),
        borderColor: "#FF5722",
        backgroundColor: "rgba(255, 87, 34, 0.2)",
        fill: true,
        tension: 0.1,
      },
      {
        label: "Hours of Sleep",
        data: progressData.map((entry) => entry.sleep),
        borderColor: "#2196F3",
        backgroundColor: "rgba(33, 150, 243, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Health Analytics</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">Workouts Completed</h3>
            <p className="text-3xl font-bold text-gray-900">{progressData.length > 0 ? progressData.reduce((acc, entry) => acc + entry.workout, 0) : 0}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">Average Mood Rating</h3>
            <p className="text-3xl font-bold text-gray-900">{progressData.length > 0 ? (progressData.reduce((acc, entry) => acc + entry.mood, 0) / progressData.length).toFixed(1) : 0}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">Hours of Sleep (Avg.)</h3>
            <p className="text-3xl font-bold text-gray-900">{progressData.length > 0 ? (progressData.reduce((acc, entry) => acc + entry.sleep, 0) / progressData.length).toFixed(1) : 0}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8" style={{ height: "250px", width: "100%" }}>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Your Progress Over Time</h3>
          <Line 
            data={data} 
            options={{ 
              responsive: true, 
              maintainAspectRatio: false,
              scales: {
                x: {
                  beginAtZero: true
                },
                y: {
                  beginAtZero: true
                }
              }
            }} 
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
