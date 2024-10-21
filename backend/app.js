const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const medicationRoutes = require('./routes/medicationRoutes');
const forumRoutes = require('./routes/forumRoutes');
const interactionRoutes = require('./routes/interactionRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

// Define routes
app.use('/api/users', userRoutes);
app.use('/api/medications', medicationRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/interactions', interactionRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(4000, () => console.log('Server running on port 4000')))
    .catch((error) => console.log(error));

module.exports = app;
