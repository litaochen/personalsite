var mongoose        = require('mongoose');

var todoSchema = mongoose.Schema({
    content: String,
    created: {type: Date, default: Date.now()},
    status: {type: Boolean, default: false},
});

module.exports = mongoose.model('Todo', todoSchema);


