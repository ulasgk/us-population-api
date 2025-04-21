const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/population', (req, res) => {
  const base = 334915824;
  const growthRate = 0.0043;
  const seconds = (Date.now() - new Date('2024-01-01')) / 1000;
  const current = Math.floor(base + (base * growthRate / (365.25 * 24 * 60 * 60) * seconds));
  res.json({ population: current });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
