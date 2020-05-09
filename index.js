const express = require('express');
const app = express();

const questionsController = require('./controllers/questions');

app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const methodOverride = require('method-override');

app.use(methodOverride('_method'));

app.use('/questions', questionsController);

app.listen(4000, () => {
    console.log('app listening on the port');
});
