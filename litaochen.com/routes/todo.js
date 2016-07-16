var   express     = require('express'),
      router      = express.Router(),
      Todo    = require('../models/todoItem');    //request model


//get route to show main page
router.get('/', function(req, res) {
    console.log("todo page requested");
    //pull out all the todo items and render the page
    Todo.find({}).sort("created").exec(function(err, items) {
        if(err) {
            console.log(err);
        }else {
            //noinspection JSUnresolvedFunction
            res.render("todo", {todoList: items});
        }
    });
});


//post route to add an todo item
router.post('/', function(req, res) {
    console.log("Add todo item requested");
    Todo.create({
        content: req.body.content,
        status: false
    },function(err, todoItem) {
        if(err) {
            console.log(err);
        }else {
            console.log(todoItem);
            res.redirect('/todo');
        }
    });
});




//export router for final use
module.exports = router;
