'use strict';
const express = require('express'),
      router  = express.Router()
      ;

router.route('/')
  .get(function(req, res) {
    console.log('GET', req.body);
    res.json({ success: true });
  })
  .post(function(req, res) {
    console.log('POST', req.body);
    res.json({success: true});
  });

router.route('/new')
  .get(function(req, res) {
    console.log('GET', req.body);
    res.json({success: true});
  });

router.route('/:id')
  .get(function(req, res) {
    console.log('GET', req.params.id);
    res.json({success: true});
  })
  .put(function(req, res) {
    console.log('PUT', req.body);
    console.log('PUTParams', req.params.id);
    res.json({success: true});
  })
  .delete(function(req, res) {
    console.log('DELETE', req.body);
    console.log('DELETEparams', req.params.id);
    res.json({success: true});
  });

router.route('/:id/edit')
  .get(function(req, res) {
    console.log('GET', req.body);
    res.json({success: true});
  });

module.exports = router;