import express from "express";
import cors from "cors";
import { json } from "body-parser";
import fs from "fs";
import path from "path";

const app = express();

app.use(cors());
app.use(json());

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

const writeToAnalyticsFile = () => {
  const filePath = path.join(__dirname, "analytics.json");
  fs.writeFileSync(filePath, JSON.stringify(progressData, null, 2));
};

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
  writeToAnalyticsFile();

  res.status(201).json(newProgress);
});

app.get("/api/analytics", (req, res) => {
  const filePath = path.join(__dirname, "analytics.json");

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf8");
    res.status(200).json(JSON.parse(fileContent));
  } else {
    res.status(404).json({ error: "Analytics file not found" });
  }
});

app.get("/api/download-analytics", (req, res) => {
  const filePath = path.join(__dirname, "analytics.json");

  if (fs.existsSync(filePath)) {
    res.download(filePath, "analytics.json");
  } else {
    res.status(404).json({ error: "Analytics file not found" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
