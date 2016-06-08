// async queue 
// concurrent processing
var async = require("async")
var _ = require("lodash")
var tasksList = _.times(10,_.uniqueId(null,'task_'));

var tasksQueue = async.queue(function(task,callback){
	console.log("Starting task:"+task.name);
	console.log("Waiting to proceed :"+tasksQueue.length());
	console.log("-----------------------------------------");
	setTimeout(function(){
		//here we can declare if something went wrong 
		//callback('error message');
		callback();
	},500)
},1) //1 denotes the number of processes running concurrently

//when everything is completely processed drain is called
tasksQueue.drain = function(){
	console.log("all item have been processed")
}

_.each(tasksList,function(task){
	tasksQueue.push({name:task},function(err){
		if(err){
			console.log(err);
		}
	})
})

//task performed at the beginning of queue

tasksQueue.unshift({name:"first task"},function(err){
	if(err){
		console.log(err);
	}
})