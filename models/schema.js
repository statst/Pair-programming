const mongoose = require('../db/connection');

// const userInputSchema = new mongoose.Schema({
//     email: String,
//     password: String
// });

const questionSchema = new mongoose.Schema({
    title: String,
    question: String,
    answer: [String],
    date: Date
});

// const userInput = mongoose.model('userInput', userInputSchema);
const Question = mongoose.model('question', questionSchema);

module.exports = Question;
