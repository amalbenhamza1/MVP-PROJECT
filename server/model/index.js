var mysql = require('mysql2');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'amalbenhamza1995*',
  database : 'mvp'
});

connection.connect(() => {console.log("db connected")})

module.exports = connection;


