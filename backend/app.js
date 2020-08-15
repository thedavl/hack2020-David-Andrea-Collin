const express = require('express');
const app = express();

const workoutRoutes = require('./api/routes/workouts');

app.use('/workouts', workoutRoutes);

app.use((req, res, next) => {
    res.status(200).json({
        message: "Yay"
    });
})

module.exports = app;