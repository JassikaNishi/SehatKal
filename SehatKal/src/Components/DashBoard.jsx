import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const Dashboard = () => {
  const chartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"],
    datasets: [
      {
        label: "Workouts Completed",
        data: [5, 7, 8, 6, 9, 10, 11],
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
        tension: 0.1,
      },
      {
        label: "Average Mood Rating",
        data: [4, 4.5, 4.2, 4.7, 4.8, 4.9, 5],
        borderColor: "#FF5722",
        backgroundColor: "rgba(255, 87, 34, 0.2)",
        fill: true,
        tension: 0.1,
      },
      {
        label: "Hours of Sleep",
        data: [7, 6.5, 7.2, 7.5, 8, 8.2, 8.5],
        borderColor: "#2196F3",
        backgroundColor: "rgba(33, 150, 243, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 px-8 shadow-md">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </header>

      <main className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">Workouts Completed</h3>
            <p className="text-3xl font-bold text-gray-900">58</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">Average Mood Rating</h3>
            <p className="text-3xl font-bold text-gray-900">4.6/5</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">Hours of Sleep (Avg.)</h3>
            <p className="text-3xl font-bold text-gray-900">7.8</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8" style={{ height: "300px" }}>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Your Progress Over Time</h3>
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: { beginAtZero: true },
                y: { beginAtZero: true },
              },
            }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">Nutrition Insights</h3>
            <p className="text-gray-600">
              This section could include charts or information about your calorie intake, macro breakdown, etc.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700">Goals & Achievements</h3>
            <p className="text-gray-600">
              Track your goals, completed milestones, and upcoming challenges here.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
