// const connect = require('./../database/db');
const { ObjectId } = require('mongodb');

const Book = require('../models/Book');

//la logica para el archivo de rutas book.js

//mostrar los libros
exports.index = async (req, res) => {
    // const db = await connect();
    // const books = await db.collection('book').find().toArray();
    const books = await Book.find();
    // res.send('getting all books');
    res.json(books);
}
//guardar un nuevo libro
exports.store = async (req, res) => {
    // const db = await connect();
    // const data = {
    //     title: 'Orgullo y Prejuicio',
    //     author: 'Jane Austen'
    // }
    // await db.collection('book').insertOne(req.body);
    
    res.status(201).json({data: 'book inserted correctly' });
}
//mostrar un libro en especifico
exports.show = async (req, res) => {
    const _id = new ObjectId(req.params.id);
    // console.log(_id);
    // const db = await connect();
    // const book = await db.collection('book').find({_id}).toArray();
    const book = await Book.find({_id});
    res.json(book);
    // res.send('get single book');
}
//modificar un libro en especifico
exports.update = async (req, res) => {
    const _id = new ObjectId(req.params.id);
    // const db = await connect();
    // await db.collection("book").updateOne({_id}, {$set: req.body});
    await Book.updateOne({_id}, {$set: req.body});
    // res.send('single book to update');
    res.json({data: 'book updated correctly' });
}
//eliminar un libro en especifico
exports.delete = async (req, res) => {
    const _id = new ObjectId(req.params.id);
    // const db = await connect();
    // await db.collection("book").deleteOne({_id});
    await Book.deleteOne({_id});
    // res.send('single book to delete');
    res.status(204).json();
}