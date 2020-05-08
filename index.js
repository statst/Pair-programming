const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'hbs');

// const methodOverride = require('method-override');

// app.use(methodOverride('_method'));

const questionsController = require('./controllers/questions');

app.use('/questions', questionsController);

app.listen(4000, () => {
    console.log('app listening on the port');
});
