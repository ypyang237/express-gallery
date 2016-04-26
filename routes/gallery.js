'use strict';
const express = require('express'),
      router  = express.Router(),
      db = require('../models'),
      Photo = db.Photo
      ;

router.route('/')
  .get(function(req, res) {
    Photo.findAll()
      .then(function(photos){
        res.send(photos);
      });
  })
  .post(function(req, res) {
    Photo.create(req.body)
    .then(function(){
      res.json({success: true});
    });
  });

router.route('/new')
  .get(function(req, res) {
    res.render('photos/new');
  });

router.route('/:id')
  .get(function(req, res) {
    Photo.findAll({
      where : {
        id : req.params.id
      }
    })
    .then(function(photos){
      res.send(photos);
    });
  })
  .put(function(req, res) {
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
  .delete(function(req, res) {
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
  .get(function(req, res) {
    console.log('GET', req.body);
    res.json({success: true});
  });

module.exports = router;