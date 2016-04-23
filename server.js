'use strict';
const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      db = require('./models'),
      galleryRoute    = require('./routes/gallery.js')
      ;

app
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .use(express.static('public'))
  .use('/gallery', galleryRoute)
  ;

app.listen(3000, function() {
  db.sequelize.sync();
  console.log('server started at 3000!');
});