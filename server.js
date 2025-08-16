const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to ContentCraft AI');
});

app.use('/api/content', require('./routes/content'));
app.use('/api/optimization', require('./routes/optimization'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});