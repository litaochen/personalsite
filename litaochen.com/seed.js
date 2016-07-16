var mongoose        = require('mongoose'),
    Todo            = require('./models/todoItem');


    var todoData = [
        {
            content: 'Buy milk',
        },
        {
            content: 'Finish todo project',
        },
    ];

function seedDB() {
  //remove all the content from the current db
    Todo.remove({}, function() {
       console.log("Todo list cleared!");
    });

  //add Two items into the todo list
    todoData.forEach(function(seed) {
       Todo.create(seed, function() {
          console.log("One item added to todo list");
       });
    });
};


module.exports = seedDB;