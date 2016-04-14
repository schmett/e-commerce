/* Server */
var express = require("express");
var path = require("path");
var app = express();
var port = process.env.PORT || 7777;
var routes = require('./controllers/routes.js');
var db = require('./db/index.js');


/* Static */

app.use(express.static(path.join(__dirname, "../client")));
// app.use(express.static(path.join(__dirname, "../lib")));
/* middlewares */
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.set('views', path.join(__dirname, '../client/'));

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

routes(app);

app.listen(port, function() {
 console.log("listening on port " + port);
});
