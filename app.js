const path = require('path');
const express = require('express');
const IndexRouter = require('./routes/indexRouter');

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

// APP LEVEL MIDDLEWARES
app.use(express.urlencoded({ extended: true }));

app.use('/', IndexRouter);

const PORT = 8000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
