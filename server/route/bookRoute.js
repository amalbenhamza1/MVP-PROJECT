const express = require('express');
const router = express.Router();
const {getAll,addBook,deleteBook,updateBook,getOne} = require('../contoller/bookController.js')

router.get('/getAll',getAll);
router.get('/:id',getOne);
router.post('/add',addBook);
router.delete('/:id',deleteBook);
router.put('/:id',updateBook);


module.exports = router;