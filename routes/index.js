var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<h2>欢迎来到express</h2>')
});

module.exports = router;
