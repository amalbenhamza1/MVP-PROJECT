const connection = require('./index.js');
module.exports = {
    getAll: (callback) => {
        let sql = `SELECT * FROM books`;
        connection.query(sql,(error,results) => {
            error ? callback(error,null) : callback(null,results);
        })
    }
}

