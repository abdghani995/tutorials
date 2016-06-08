var async = require("async");

var counter = 0;

//whilst follows the following pattern 
async.whilst(
	function testConditin() {
		return counter<5;
	},
	function increaseCounter(callback){
		counter++;
		console.log("counter is now "+counter);

		//for succssfull calls
		//setTimeout(callback,1000);

		//for sending error messages
		setTimeout(callback('error message'),1000)
	},
	function callback(err){
		if(err){
			console.log("error:-"+err);
			return;
		}
		console.log("completed")
	}

)