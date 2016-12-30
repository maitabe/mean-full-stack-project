var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
	name: String,
	text: String,
	comments: []
});

var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;