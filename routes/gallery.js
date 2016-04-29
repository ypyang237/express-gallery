'use strict';
const express = require('express'),
      router  = express.Router(),
      db = require('../models'),
      Photo = db.Photo,
      isAuthenticated = require('../middleware/isAuthenticated.js')
      ;

router.route('/')
  .get(function(req, res) {
    Photo.findAll()
      .then(function(photos) {
        res.render('photos/index', {
          photos: photos,
          isLoggedIn: req.isAuthenticated()
        });
      });
  })
  .post(function(req, res) {
    Photo.create(req.body)
    .then(function(){
      res.json({success: true});
    });
  });

router.route('/new')
  .get(isAuthenticated, function(req, res) {
    res.render('photos/new');
  });

router.route('/:id')
  .get(isAuthenticated, function(req, res) {
    Photo.findAll({
      where : {
        id : req.params.id
      }
    })
    .then(function(photo){
      Photo.findAll({})
      .then(function(photos){
        var otherPhotos = [];

        for (var i = 0; i < 3; i++){
          otherPhotos.push(
            photos[Math.floor(Math.random() * photos.length )]
          );
        }

        res.render('photos/photo', {
          photo: photo[0],
          otherPhotos: otherPhotos
        });
      });


    });
  })
  .put(isAuthenticated, function(req, res) {
    Photo.update({
      author: req.body.author,
      link: req.body.link,
      description: req.body.description
    }, {
      where: {
        id: req.params.id
      }
    })
    .then(function(){
      res.json({success: true});
    });
  })
  .delete(isAuthenticated, function(req, res) {
    Photo.destroy({
      where : {
        id : req.params.id
      }
    })
    .then(function(){
      res.json({success: true});
    });
  });

router.route('/:id/edit')
  .get(isAuthenticated, function(req, res) {
    Photo.findAll({
      where: {
        id: req.params.id
      }
    })
    .then(function(photo){
      res.render('photos/edit', {photo: photo[0].dataValues});
    });
  });

module.exports = router;