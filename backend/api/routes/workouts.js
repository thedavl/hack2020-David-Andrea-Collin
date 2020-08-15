const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET request to workouts endpoint'
    });
});

router.get('/:workoutId', (req, res, next) => {
    const id = req.params.workoutId;
    res.status(200).json({
        message: 'GET request to SPECIFIC WORKOUT endpoint',
        id: id
    });
});

router.post('/', (req, res, next) => {
    const workout = {
        title: req.body.title,
        description: req.body.description
    };
    res.status(200).json({
        message: 'POST to workout endpoint',
        createdWorkout: workout
    })
})

module.exports = router;