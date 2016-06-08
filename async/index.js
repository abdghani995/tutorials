var async = require("async");
/*
var stack = [];
var function1 = function(callback){
	//perform here
	callback(null,'First function result');
}
var function2 = function(callback){
	//perform here
	callback(null,'Second function result');
}
var function3 = function(callback){
	//perform here
	callback(null,'Third function result');
}
stack.push(function1);
stack.push(function2);
stack.push(function3);

async.parallel(stack,function(err,result){
	console.log(result);
})
*/

var stack = {};
stack.getUsername = function(callback){
	var userName = "Bob";
	callback(null,userName)
}
stack.getUserage = function(callback){
	var userAge = 12;
	callback(null,userAge)
}
stack.getUsergender = function(callback){
	var gender = "male";
	callback(null,gender)
}
async.parallel(stack,function(err,result){
	if(err){
		console.log(err)
	}
	console.log(result)
	
})
