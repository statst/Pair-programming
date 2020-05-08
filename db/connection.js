const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/stack_overflow');

module.exports = mongoose;
