const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to ContentCraft AI');
});

app.post('/optimize', (req, res) => {
  // Hypothetical endpoint for content optimization
  // const { content } = req.body;
  // Add optimization logic here
  res.json({ message: 'Content optimized successfully' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'Healthy' });
});

// Error handling
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});