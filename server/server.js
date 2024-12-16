import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

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

const analyticsFilePath = path.join(__dirname, "analytics.json");

// Utility to write data to file
const writeToAnalyticsFile = async () => {
  try {
    await fs.promises.writeFile(analyticsFilePath, JSON.stringify(progressData, null, 2));
  } catch (err) {
    console.error("Error writing to file:", err);
  }
};

// GET: Progress data with optional period filtering
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

// POST: Add new progress data
app.post("/api/progress", async (req, res) => {
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
  await writeToAnalyticsFile();

  res.status(201).json(newProgress);
});

// GET: Retrieve analytics file data
app.get("/api/analytics", (req, res) => {
  if (fs.existsSync(analyticsFilePath)) {
    fs.promises
      .readFile(analyticsFilePath, "utf8")
      .then((fileContent) => {
        res.status(200).json(JSON.parse(fileContent));
      })
      .catch((err) => {
        res.status(500).json({ error: "Error reading analytics file" });
      });
  } else {
    res.status(404).json({ error: "Analytics file not found" });
  }
});

// GET: Download analytics file
app.get("/api/download-analytics", (req, res) => {
  if (fs.existsSync(analyticsFilePath)) {
    res.download(analyticsFilePath, "analytics.json");
  } else {
    res.status(404).json({ error: "Analytics file not found" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
