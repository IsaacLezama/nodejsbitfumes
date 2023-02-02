const express = require('express');
const bookRouter = express.Router();

// const connect = require('./../database/db');
// const { ObjectId } = require('mongodb');

const BookController = require('./../controllers/BookController')
//ingresar y ver libros
bookRouter
    .route('/')
    .get(BookController.index)
    .post(BookController.store)
//mostrar, actualizar y eliminar acorde al id del libro especificado
bookRouter
    .route('/:id')
    .get(BookController.show)
    .patch(BookController.update)
    .delete(BookController.delete);

module.exports = bookRouter;