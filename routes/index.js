const express = require('express');
const router = express.Router();

const mockDatabase = require('../lib/data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/magic', function(req, res, next) {
  res.send(mockDatabase.getRandomMessage())
})

module.exports = router;
