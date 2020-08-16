const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Workout = require('../models/workout');
const User = require('../models/user');

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

router.post('/:workoutId/save', (req, res, next) => {
    const id = req.params.workoutId;
    Workout.findById(id)
        .exec()
        .then(workout => {
            User.findOne({ _id: workout.user }, (err, user) => {
                if (user) {
                    console.log(user);
                    user.saved_posts.push(workout);
                    user.save();
                    res.status(201).json({
                        message: 'Problem saved successfully',
                        createdWorkout: workout
                    })
                } else {
                    Workout.remove({ _id: workout._id });
                    res.status(500).json({ error: err, message: "dskflaksdflkjf" });
                }
            })
            console.log(workout);
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
        description: req.body.description,
        user: req.body.user,
        tags: req.body.tags,
        duration: req.body.duration
    });
    workout
        .save()
        .then(result => {
            console.log(result);
            User.findOne({ _id: req.body.user }, (err, user) => {
                if (user) {
                    console.log(user);
                    user.saved_posts.push(workout);
                    user.save();
                    res.status(201).json({
                        message: 'Problem saved successfully',
                        createdWorkout: result
                    })
                } else {
                    Workout.remove({ _id: workout._id });
                    res.status(500).json({ error: err, message: "dskflaksdflkjf" });
                }
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.delete('/:workoutId', (req, res, next) => {
    const id = req.params.workoutId;
    Workout.remove({ _id: id })
        .exec()
        .then(result => {
            console.log(res);
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(res);
            res.status(500).json({ error: err });
        })
});

router.delete('/:workoutId/unsave', (req, res, next) => {
    const id = req.params.workoutId;
    Workout.findById(id)
        .exec()
        .then(workout => {
            console.log(workout)
            User.findOne({ _id: workout.user }, (err, user) => {
                if (user) {
                    console.log(user);
                    user.saved_posts.pull(workout);
                    user.save();
                    res.status(201).json({
                        message: 'Problem unsaved successfully',
                        createdWorkout: workout
                    })
                } else {
                    res.status(500).json({ error: err, message: "dskflaksdflkjf" });
                }
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

module.exports = router;