const mongoose = require('../db/connection');

// const userInputSchema = new mongoose.Schema({
//     email: String,
//     password: String
// });

const questionSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		description: String,
		user: String,
		answer: [],
		postDate: { type: Date, default: Date.now },
	},
	// { collection: 'questions' }
);
// const userInput = mongoose.model('userInput', userInputSchema);
const Question = mongoose.model('question', questionSchema);

module.exports = Question;
