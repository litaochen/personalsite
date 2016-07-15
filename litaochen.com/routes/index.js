var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Go to the todo app */
router.get('/todo', function(req, res) {
  console.log("Todo app requested");
    res.render('todo');
});

module.exports = router;
