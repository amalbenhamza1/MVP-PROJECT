const books = require('../model/bookModel.js');

module.exports = {
    getAll: (req,res) => {
        books.getAll((error,results) => {
            error ? res.status(500).send(error) : res.status(200).json(results)
        })
    },
    addBook: (req,res) => {
        console.log([[req.body.title],[req.body.author],[req.body.createdAt]])
        books.addBook((error,results) => {
            error ? res.status(500).send(error) : res.status(201).send(results)
    },[[req.body.title],[req.body.author],[req.body.createdAt]])
    },
    deleteBook: (req,res) => {
        books.deleteBook((error,results)=> {
            error ? res.status(500).send(error) : res.status(200).json(results);
        },req.params.id)
    }, 
    updateBook: (req,res) => {
        books.updateBook((error,results)=> {
            error ? res.status(500).send(error) : res.status(200).json(results);
        },req.body,req.params.id)
    },
    getOne: (req,res) => {
        books.getOne((error,results)=> {
            error ? res.status(500).send(error) : res.status(200).json(results);
        },req.params.id)
    }
}