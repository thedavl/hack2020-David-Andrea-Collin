const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    first_name: String,
    last_name: String,
    saved_posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workout'
    }]
});

module.exports = mongoose.model('User', userSchema);

