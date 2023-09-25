// routes/runs.js

var express = require('express');
var router = express.Router();

/* GET runs root route. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Available Runs' }); // Update the title to 'Available Runs'
});

module.exports = router;
