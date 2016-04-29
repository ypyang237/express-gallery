'use strict';
const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      db = require('./models'),
      galleryRoute  = require('./routes/gallery.js'),
      passport = require('passport'),
      session = require('express-session'),
      LocalStrategy = require('passport-local').Strategy,
      userData = require('./userData.json'),
      User = db.User
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
          username : username,
          password : password
        }
      })
      .then(function(user){
        if(user.length === 0){
          return done(null, false);
        }
        return done(null, user);
      });


    }



    // function(username, password, done) {
    //   var USERNAME = userData.username;
    //   var PASSWORD = userData.password;

    //   if(!(username === USERNAME && password === PASSWORD)) {
    //     return done(null, false);
    //   }
    //   var user = {
    //     name : USERNAME,
    //     ROLE : 'ADMIN'
    //   };
    //   return done(null, user);
    // }
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

app.listen(3000, function() {
  db.sequelize.sync();
  console.log('server started at 3000!');
});