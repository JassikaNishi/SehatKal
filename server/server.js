const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

let progressData = [
  {
    date: "2024-12-01",
    steps: 7000,
    water: 2.5,
    sleep: 7.5,
    workout: 45,
    calories: 2200,
  },
  {
    date: "2024-12-02",
    steps: 8000,
    water: 3,
    sleep: 8,
    workout: 50,
    calories: 2100,
  },
];

// Endpoint to get progress data with optional period filtering
app.get("/api/progress", (req, res) => {
  const { period } = req.query;

  let filteredData = progressData;

  if (period) {
    const currentDate = new Date();

    filteredData = progressData.filter((entry) => {
      const entryDate = new Date(entry.date);
      const dateDiff = (currentDate - entryDate) / (1000 * 3600 * 24);

      if (period === "weekly") {
        return dateDiff <= 7;
      } else if (period === "monthly") {
        return (
          currentDate.getMonth() === entryDate.getMonth() &&
          currentDate.getFullYear() === entryDate.getFullYear()
        );
      }

      return false;
    });
  }

  res.status(200).json(filteredData);
});


app.post("/api/progress", (req, res) => {
  const { date, steps, water, sleep, workout, calories } = req.body;

  if (!date || !steps || !water || !sleep || !workout || !calories) {
    return res.status(400).json({ error: "Please provide all required fields." });
  }

  const newProgress = {
    date,
    steps: Number(steps),
    water: Number(water),
    sleep: Number(sleep),
    workout: Number(workout),
    calories: Number(calories),
  };

  progressData.push(newProgress);
  res.status(201).json(newProgress);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
