const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/stack_overflow',{
	useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;
