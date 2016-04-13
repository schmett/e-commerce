var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'ecommerce'
}).connect();



module.exports = connection;
