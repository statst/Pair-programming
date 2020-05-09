const mongoose = require('../db/connection');


const questionSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		description: String,
		user: String,
		answer: [],
		postDate: { type: Date, default: Date.now },
	},
);

const Question = mongoose.model('question', questionSchema);

module.exports = Question;
