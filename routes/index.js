var express = require('express');
var router = express.Router();
var db = require('../database/db');

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });

  db.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      return next(error);
    }
    // Process and send the results
    res.json(results);
  });
});

module.exports = router;
