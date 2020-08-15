const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String
});

module.exports = mongoose.model('Workout', workoutSchema);

