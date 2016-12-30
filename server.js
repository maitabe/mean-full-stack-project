var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/todos');

var Todo = require('./models/TodoModel');

var port = 8000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
// app.use(express.static('js'));
app.use(express.static('node_modules'));

//get list todos
app.get('/todos', function(req, res) {
	Todo.find(function(err, todos){
		res.send(todos);
	});

});

//add a new todo task
app.post('/todos', function(req,res, next) {
	console.log(req.body);
	var todos = new Todo(req.body);

	todo.save(function(err, todos) {
		if (err) {return next(err);}
		res.json(todo);
	});
});

app.listen(port, function() {
	console.log('starting app');
});