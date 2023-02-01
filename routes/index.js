const express = require('express');
const router = express.Router();
const path = require('path');

const bookRouter = require('./book')

router.get('/', (req, res) => {
    // res.send('hello world');
    res.sendFile(path.join(__dirname, "/../pages/home.html"));
});

// app.get('/book', (req, res) => {
//     res.send('getting all books');
// });
// app.post('/', (req, res) => {
//     res.json({data: 'hello world' });
// });

router.use('/book', bookRouter);

router.all('/*', (req, res) => {
    // res.send('page not found');
    res.sendFile(path.join(__dirname, "/../pages/404.html"));
});


module.exports = router;