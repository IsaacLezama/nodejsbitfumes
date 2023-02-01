const express = require('express');
const router = express.Router();

const bookRouter = require('./book')

router.get('/', (req, res) => {
    res.send('hello world');
});

// app.get('/book', (req, res) => {
//     res.send('getting all books');
// });
// app.post('/', (req, res) => {
//     res.json({data: 'hello world' });
// });

router.use('/book', bookRouter);

router.all('/*', (req, res) => {
    res.send('page not found');
});


module.exports = router;