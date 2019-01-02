var express = require('express');
var app = express();
let config = require('./config');
let mongoose = require('mongoose');
let setupController = require('./controllers/setupController')

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public')); //

app.set('view engine', 'ejs'); //setting up templating

mongoose.connect(config.getDbConnectionString());
setupController(app);


app.listen(port);

