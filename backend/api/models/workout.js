const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true},
    title: { type: String, required: true},
    description: { type: String, required: true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    tags: [{ type: String, required: true }],
    duration: Number
});

module.exports = mongoose.model('Workout', workoutSchema);

