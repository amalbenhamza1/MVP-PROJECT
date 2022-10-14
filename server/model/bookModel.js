const connection = require('../model/index.js');
module.exports = {
    getAll: (callback) => {
        let sql = `SELECT * FROM books`;
        connection.query(sql,(error,results) => {
            error ? callback(error,null) : callback(null,results);
        })
    },
    addBook: (callback,values) => {
        console.log(values)
        let sql = `INSERT INTO books (title, author, createdAt) VALUES (?,?,?)`;
        connection.query(sql,values,(error,results) => {
            error ? callback(error,null) : callback(null,results);
        })
    },
    deleteBook: (callback,id) => {
        let sql = `DELETE FROM books WHERE idbook=?`;
        connection.query(sql,[id],(error,results) => {
            error ? callback(error,null) : callback(null,results)
        })
    },
    updateBook:(callback,values,id) => {
        let sql = `UPDATE books set ?  WHERE idbook = ?`;
        connection.query(sql,[values,id],(err, results) => {
           err ? callback(err, null) : callback(null, results);
          }) 
      },
      getOne: (callback,id)=>{
        let sql = `SELECT *  FROM books WHERE idbooks = ?`;
        connection.query(sql,id,(error, results) => {
            error ? callback(error, null) : callback(null, results);
          }) 
      }
}

