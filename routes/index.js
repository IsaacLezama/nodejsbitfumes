const express = require('express');
const router = express.Router();
const path = require('path');

const bookRouter = require('./book')
const authRouter = require('./auth')

router.get('/', (req, res) => {
    // res.send('hello world');
    // res.sendFile(path.join(__dirname, "/../pages/home.html"));
    res.render("index", {name: 'Isaac'})
});

// app.get('/book', (req, res) => {
//     res.send('getting all books');
// });
// app.post('/', (req, res) => {
//     res.json({data: 'hello world' });
// });

router.use('/book', bookRouter);
router.use('/auth', authRouter);

router.all('/*', (req, res) => {
    // res.send('page not found');
    res.sendFile(path.join(__dirname, "/../pages/404.html"));
});


module.exports = router;