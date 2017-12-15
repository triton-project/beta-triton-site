var express = require('express');
var router = express.Router();
var funcs = require('../functions');

router.get('/', function(req, res, next) {
  res.render('index');
});


module.exports = router;
