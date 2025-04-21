const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/population', (req, res) => {
  // Base population on Jan 1, 2024
  const base = 334915824;
  const startDate = new Date("2024-01-01T00:00:00Z").getTime();
  const now = Date.now();
  const secondsPassed = (now - startDate) / 1000;

  // Realistic change rates per second
  const birthRate = 0.1166;       // births/sec
  const deathRate = 0.0954;       // deaths/sec
  const migrationRate = 0.0285;   // net migration/sec

  const netGrowthPerSecond = birthRate - deathRate + migrationRate; // ≈ 0.0497
  const current = Math.floor(base + (secondsPassed * netGrowthPerSecond));

  res.json({ population: current });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

