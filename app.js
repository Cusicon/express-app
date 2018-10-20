// REQUIRE modules
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('logger');

// GLOBAL variables
const port = process.env.PORT || 3000;

// MIDDLEWARES
app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser());

// SET views and views engines
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'pug');

// ROUTES
// home route
app.get('/', (req, res) => {
    res.render('index', {title: 'Index', message: 'You are Awesome!'});
});

// hello route
app.get('/hello', (req, res) => {
    res.render('hello');
});

// SERVER listening
app.listen(port, () => {
    console.log(`Server started\nListening at port: ${port}`);
});