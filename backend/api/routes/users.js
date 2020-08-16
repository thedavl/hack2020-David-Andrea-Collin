const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user');

router.get('/', (req, res, next) => {
    User.find()
        .populate("saved_posts")
        .exec()
        .then(docs => {
            const response = {
                length: docs.length,
                users: docs
            }
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        })

})

router.get('/:userId', (req, res, next) => {
    const id = req.params.userId;
    console.log(id);
    User.findById(id)
        .populate("saved_posts")
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json({ user: doc })
            }  else {
                res.status(404).json({ message: 'User Not Found' })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        })
})

router.post('/', (req, res, next) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        first_name: req.body.first_name,
        last_name: req.body.last_name
    })
    user.save()
        .then(result => {
            res.status(200).json({ message: 'User Created' });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        })
})

router.delete('/:userId', (req, res, next) => {
    const id = req.params.userId;
    User.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({ message: "User deleted" })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        })
})

module.exports = router;