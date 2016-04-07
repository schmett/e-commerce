var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'ecommerce'
});

connection.connect();

module.exports = connection;
