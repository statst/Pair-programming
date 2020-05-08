const mongoose = require('../db/connection')


const userInputSchema = new mongoose.Schema({
email: String,
password: String
})

const userInput =mongoose.model('userInput', userInputSchema)

module.exports = userInput