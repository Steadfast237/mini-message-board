const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.send('Hello from the server'));

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on PORT${PORT}`));
