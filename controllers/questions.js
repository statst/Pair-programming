const Question = require('../models/schema');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    Question.find({})
        .then((questions) => {
            res.render('index', {questions});
        })
        .catch((err) => console.log(err));
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Question.findById({_id : req.params.id})
    .then((question) => {
        console.log(question);
        res.render('show', question);
    });
});


router.get('/new', (req, res) => {
	res.render('new');
});

router.get('/edit/:id', (req, res) => {
	const id = req.params.id;
	Question.findById({_id: req.params.id}).then((question) => {
		res.render('edit', question);
	});
});


// router.get()
module.exports = router;
