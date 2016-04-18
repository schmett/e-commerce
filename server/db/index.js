var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: 'sylvia',
  database: 'ecommerce'
});

connection.connect();

module.exports = connection;
