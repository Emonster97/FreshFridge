var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors'); // cors require

// db connection
const db = require('./configs/db.config');

var favouritesRouter = require('./routes/favourites');
var usersRouter = require('./routes/users');
var historyRouter = require('./routes/history');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/favourites', favouritesRouter(db));
app.use('/api/history', historyRouter(db));
app.use('/users', usersRouter(db));

module.exports = app;
