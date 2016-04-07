/* Server */
var express = require("express");
var path = require("path");
var app = express();
var port = process.env.PORT || 7777;


/* Static */
//
app.use(express.static(path.join(__dirname, "../client/")));

/* middlewares */
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.set('views', path.join(__dirname, '../client/'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');



/* Routes */
app.get('/', function(req, res) {
 res.render("index");
});



app.listen(port, function() {
 console.log("listening on port " + port);
});