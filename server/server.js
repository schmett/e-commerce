/* Server */
var express = require("express");
var path = require("path");
var app = express();
var port = process.env.PORT || 7777;
var routes = require('./controllers/routes.js')


/* Static */

app.use(express.static(path.join(__dirname, "../client/")));
app.use(express.static(path.join(__dirname, "../lib/")));
/* middlewares */
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.set('views', path.join(__dirname, '../client/'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


/* All routes are in controller/routes.js */
routes(app);

app.listen(port, function() {
 console.log("listening on port " + port);
});