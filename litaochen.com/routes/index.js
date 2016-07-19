var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// Temp page for Green card application status check
router.get('/USCIS', function(req, res) {
  res.render('USCIS');
});


module.exports = router;
