const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    
});

router.get('/:workoutId', (req, res, next) => {
    const id = req.params.workoutId;
});

module.exports = router;