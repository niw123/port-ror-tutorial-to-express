const express = require('express'),
  app = express()

// init mongodb connection
const config = require('./_config')
const mongoose = require('mongoose')
const options = { useNewUrlParser: true } // turn off deprecation warning
mongoose.connect(config.mongoURI[app.settings.env], options, function(err, res) {
  if (err) {
    console.log('Error connecting to the database. ' + err);
  } else {
    console.log('Connected to Database: ' + config.mongoURI[app.settings.env]);
  }
});

// init models after we start mongodb connection
require('./models/user')

const staticPages = require('./routes/static-pages'),
  users = require('./routes/users')

app.use(express.static('public'))
app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', staticPages)
app.use('/', users)

module.exports = app
