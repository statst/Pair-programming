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

router.get('/new', (req, res) => {
	res.render('new');
});


router.get('/edit/:id', (req, res) => {
	const id = req.params.id;
    Question.findById(id)
    .then((question) => {
		res.render('edit', question);
	});
});


router.get('/:id', (req, res) => {
    const id = req.params.id;
    Question.findById(id).then((question) => {
        console.log(question);
        res.render('show', question);
    });
});
router.post('/', (req, res) => {
    Question.create(question)
    .then((question) => {
        res.redirect('/questions');
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
		Question.findOneAndUpdate({ _id: id }, req.body, {
			new: true,
        })
        .then((question) => res.redirect('/questions'));
});




// router.get()
module.exports = router;
