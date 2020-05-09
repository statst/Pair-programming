const express = require('express');
const router = express.Router();
const Question = require('../models/schema');

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
        })
        .catch(console.error);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Question.findById(id)
        .then((question) => {
            res.render('show', question);
        })
        .catch((err) => console.log(err));
});

router.post('/', (req, res) => {
    const question = req.body;
    Question.create(question).then((question) => res.redirect('/questions')).catch((err) => console.log(err));
});

router.put('/edit/:id', (req, res) => {
    const id = req.params.id;
    Question.findOneAndUpdate({_id: id}, req.body, {
        new: true
    }).then((question) => res.redirect('/questions'));
});

router.delete('/edit/:id', (req, res) => {
    Question.findOneAndDelete({_id: req.params.id}).then(res.redirect('/questions'));
});

router.post('/:id', (req, res) => {
    Question.findById(req.params.id)
        .then((question) => {
            question.answer.push(req.body);
            question.save(function() {
                res.redirect('/questions/id');
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;
