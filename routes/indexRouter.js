const router = require('express').Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

router.get('/', (req, res) => res.send('Hello good'));

router.get('/new', (req, res) => res.send('create'));

module.exports = router;
