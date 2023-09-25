var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Users' }); // Update the title to 'Users'
});

module.exports = router;
