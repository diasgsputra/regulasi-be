const express = require('express');
const nodesRoutes = require('./routes/nodesRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/nodes', nodesRoutes);

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
