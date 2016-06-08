var async = require("async");

function addFive(num,callback){
	callback(null,num+5);
}

function intoTen(num,callback){
	callback(null,num*10);
}
//async.compose(intoTen(addFive))
var calculate = async.compose(intoTen,addFive);
calculate(5,function(err,result){
	console.log(result)
})

//async.seq(first intoTen then addFive)
//sequentially
var calculate = async.seq(intoTen,addFive);
calculate(5,function(err,result){
	console.log(result)
})