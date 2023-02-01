const express = require('express');
const bookRouter = express.Router();

bookRouter.route('/')
.get((req, res) => {
    res.send('getting all books');
})
.post((req, res) => {
    res.json({data: 'hello world' });
})

bookRouter.get('/:id', (req, res) => {
    res.send('single book');
});

module.exports = bookRouter;