const express = require('express');
const bookRouter = express.Router();

const connect = require('./../database/db');
const { ObjectId } = require('mongodb');

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
    res.status(201).json({data: 'book inserted correctly' });
})

bookRouter.route('/:id')
.get(async (req, res) => {
    const _id = new ObjectId(req.params.id);
    // console.log(_id);
    const db = await connect();
    const book = await db.collection('book').find({_id}).toArray();
    res.json(book);
    res.send('get single book');
})
.patch(async (req, res) => {
    const _id = new ObjectId(req.params.id);
    const db = await connect();
    await db.collection("book").updateOne({_id}, {$set: req.body});
    // res.send('single book to update');
    res.json({data: 'book updated correctly' });
})
.delete(async (req, res) => {
    const _id = new ObjectId(req.params.id);
    const db = await connect();
    await db.collection("book").deleteOne({_id});
    // res.send('single book to delete');
    res.status(204).json();
});

module.exports = bookRouter;