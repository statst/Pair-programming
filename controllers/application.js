const Question = require('../models/schema');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	Question.find()
		.then((questions) => {
			res.render('index', { questions });
		})
		.catch((err) => console.log(err));
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Question.findById(id).then((question) => {
        res.render('questions', question);
    });
});

// router.get()
module.exports = router;
