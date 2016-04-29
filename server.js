'use strict';
const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      db = require('./models'),
      galleryRoute  = require('./routes/gallery.js'),
      passport = require('passport'),
      session = require('express-session'),
      LocalStrategy = require('passport-local').Strategy,
      User = db.User,
      bcrypt = require('bcryptjs')
      ;

  app.set('view engine', 'jade');
  app.set('views', './views');



app
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .use(session({
    secret : "chocolate",
    resave : true,
    saveUninitialized : true
  }))
  .use(passport.initialize())
  .use(passport.session())
  .use(express.static('public'))
  .use('/gallery', galleryRoute)
  ;


  passport.use(new LocalStrategy (
    function(username, password, done) {
      User.findAll({
        where : {
          username : username
        }
      })
      .then(function(user){
        if( bcrypt.compareSync(password, user[0].password) === false){
          return done(null, false);
        }
        return done(null, user);
      });


    }

));

passport.serializeUser(function(user, done) {
  return done(null, user);
});

passport.deserializeUser(function(user, done) {
  return done(null, user);
});

app.get('/login', function(req, res) {
  res.render('photos/login.jade');
});

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

app.post('/login', passport.authenticate('local', {
  successRedirect : '/gallery',
  failureRedirect : '/login'
  })
);

app.get('/signUp', function(req, res){
  res.render('photos/signup.jade');
});

app.post('/signUp', function(req,res){
  User.create({
    username: req.body.username,
    password: req.body.password
  })
  .then(function(){
    res.redirect('/gallery');
  });

});

app.listen(3000, function() {
  db.sequelize.sync();
  console.log('server started at 3000!');
});