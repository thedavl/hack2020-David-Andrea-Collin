const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Workout = require('../models/workout');

router.get('/', (req, res, next) => {
    Workout.find()
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                workouts: docs
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.get('/:workoutId', (req, res, next) => {
    const id = req.params.workoutId;
    Workout.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.post('/', (req, res, next) => {
    const workout = new Workout({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description
    });
    workout
        .save()
        .then(result => {
            res.status(201).json({
                message: 'POSTed to workout endpoint',
                createdWorkout: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

module.exports = router;