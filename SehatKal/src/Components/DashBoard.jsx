import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import "./Dashboard.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [steps, setSteps] = useState("");
  const [water, setWater] = useState("");
  const [sleep, setSleep] = useState("");
  const [workout, setWorkout] = useState("");
  const [calories, setCalories] = useState("");
  const [progressData, setProgressData] = useState([]);
  const goalSteps = 10000;
  const goalWater = 3;
  const goalSleep = 8;
  const goalWorkout = 2;
  const goalCalories = 500;

  const handleSubmit = () => {
    const currentDate = new Date().toLocaleDateString();
    const newData = {
      date: currentDate,
      steps: Number(steps),
      water: Number(water),
      sleep: Number(sleep),
      workout: Number(workout),
      calories: Number(calories),
    };

    setProgressData((prevData) => [...prevData, newData]);
    setSteps("");
    setWater("");
    setSleep("");
    setWorkout("");
    setCalories("");
  };

  const data = {
    labels: progressData.map((entry) => entry.date),
    datasets: [
      {
        label: "Steps",
        data: progressData.map((entry) => entry.steps),
        borderColor: "#1E88E5",
        backgroundColor: "#1E88E5",
        fill: false,
        pointRadius: 5,
        borderWidth: 2,
      },
      {
        label: "Water Intake (L)",
        data: progressData.map((entry) => entry.water),
        borderColor: "#4CAF50",
        backgroundColor: "#4CAF50",
        fill: false,
        pointRadius: 5,
        borderWidth: 2,
      },
      {
        label: "Sleep (hrs)",
        data: progressData.map((entry) => entry.sleep),
        borderColor: "#FFC107",
        backgroundColor: "#FFC107",
        fill: false,
        pointRadius: 5,
        borderWidth: 2,
      },
      {
        label: "Workout (hrs)",
        data: progressData.map((entry) => entry.workout),
        borderColor: "#FF5722",
        backgroundColor: "#FF5722",
        fill: false,
        pointRadius: 5,
        borderWidth: 2,
      },
      {
        label: "Calories Burned",
        data: progressData.map((entry) => entry.calories),
        borderColor: "#9C27B0",
        backgroundColor: "#9C27B0",
        fill: false,
        pointRadius: 5,
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Health Tracker</h1>
      </div>
      <div className="dashboard-content">
        <div className="summary-left">
          <h2>Today's Health Summary</h2>
          <div className="summary-item">
            <h3>Steps</h3>
            <p>{steps || 0}/{goalSteps} steps</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${(steps / goalSteps) * 100}%`,
                  backgroundColor: "#1E88E5",
                }}
              ></div>
            </div>
          </div>
          <div className="summary-item">
            <h3>Water Intake</h3>
            <p>{water || 0}/{goalWater} L</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${(water / goalWater) * 100}%`,
                  backgroundColor: "#4CAF50",
                }}
              ></div>
            </div>
          </div>
          <div className="summary-item">
            <h3>Sleep</h3>
            <p>{sleep || 0}/{goalSleep} hours</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${(sleep / goalSleep) * 100}%`,
                  backgroundColor: "#FFC107",
                }}
              ></div>
            </div>
          </div>
          <div className="summary-item">
            <h3>Workout</h3>
            <p>{workout || 0}/{goalWorkout} hours</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${(workout / goalWorkout) * 100}%`,
                  backgroundColor: "#FF5722",
                }}
              ></div>
            </div>
          </div>
          <div className="summary-item">
            <h3>Calories Burned</h3>
            <p>{calories || 0}/{goalCalories} kcal</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${(calories / goalCalories) * 100}%`,
                  backgroundColor: "#9C27B0",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="input-right">
          <h2>Enter Your Data</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-item">
              <label>Steps</label>
              <input
                type="number"
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                placeholder="Enter steps"
              />
            </div>
            <div className="input-item">
              <label>Water Intake (L)</label>
              <input
                type="number"
                value={water}
                onChange={(e) => setWater(e.target.value)}
                placeholder="Enter water intake"
              />
            </div>
            <div className="input-item">
              <label>Sleep (hrs)</label>
              <input
                type="number"
                value={sleep}
                onChange={(e) => setSleep(e.target.value)}
                placeholder="Enter sleep hours"
              />
            </div>
            <div className="input-item">
              <label>Workout (hrs)</label>
              <input
                type="number"
                value={workout}
                onChange={(e) => setWorkout(e.target.value)}
                placeholder="Enter workout hours"
              />
            </div>
            <div className="input-item">
              <label>Calories Burned</label>
              <input
                type="number"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                placeholder="Enter calories burned"
              />
            </div>
            <button type="submit" className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="chart-section">
        <h3>Progress Analytics</h3>
        <Line data={data} />
        <ul>
          {progressData.map((entry, index) => (
            <li key={index}>
              {entry.date} - Steps: {entry.steps}, Water: {entry.water}, Sleep: {entry.sleep}, Workout: {entry.workout}, Calories: {entry.calories}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
