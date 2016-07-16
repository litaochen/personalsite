var mongoose        = require('mongoose');

var todoSchema = mongoose.Schema({
    content: String,
    created: {type: Date, default: Date.now()},
    status: Boolean,
});

module.exports = mongoose.model('Todo', todoSchema);


