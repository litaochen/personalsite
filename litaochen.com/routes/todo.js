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


//update todo status by id

router.post('/:id', function(req, res) {
    console.log("Change item status requested!");
    //find and update. If status is delete, then remove. otherwise just update
    if(req.body.status === "delete") {
        Todo.remove({_id: req.params.id}, function(err) {
            if(err) {
                console.log(err);
            }else {
                res.redirect('/todo');
            }
        });
    }else {
        Todo.findByIdAndUpdate(req.params.id, {status: req.body.status}, function(err) {
            if(err) {
                console.log(err);
            }else {
                res.send('done');
            }
        });
    }
});

//export router for final use
module.exports = router;
