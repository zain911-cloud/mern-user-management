const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());
app.use(cors());

connectDB(); // Connect to MongoDB

app.use('/api/users', userRoutes); // User API routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
