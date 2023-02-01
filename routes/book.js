const express = require('express');
const bookRouter = express.Router();

const connect = require('./../database/db')

bookRouter.route('/')
.get(async (req, res) => {
    const db = await connect();
    const books = await db.collection('book').find().toArray();
    // res.send('getting all books');
    res.json(books);
})
.post(async (req, res) => {
    const db = await connect();
    // const data = {
    //     title: 'Orgullo y Prejuicio',
    //     author: 'Jane Austen'
    // }
    await db.collection('book').insertOne(req.body);
    res.json({data: 'book inserted correctly' });
})

bookRouter.route('/:id')
.get( (req, res) => {
    res.send('get single book');
})
.patch( (req, res) => {
    res.send('single book to update');
})
.delete( (req, res) => {
    res.send('single book to delete');
});

module.exports = bookRouter;