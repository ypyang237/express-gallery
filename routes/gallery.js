'use strict';
const express = require('express'),
      router  = express.Router()
      ;

 router.route('/')
  .get(function(req, res) {
    console.log(req.body);
    res.json({ success: true });
  });

module.exports = router;