var async = require('async');

async.auto({
	get_username:function(callback){
		console.log("in get_username");
		callback(null,'abdghani')
	},
	connect_db:function(callback){
		console.log("in connect_db");
		var connected=false;

		//check connections
		if(connected){
			callback(null,connected);

		}
		else{
			callback('error connecting to db',null);
			console.log("helllo")
		}
	},
	check_if_user_exists:['get_username','connect_db',function(callback,results){
		console.log("in check_if_user_exists",JSON.stringify(results));
		var userExists = false;
		if(userExists){
			callback("user already exists",null);
		}
		else{
				callback(null,userExists);
		} 
	}],
	sign_up:['check_if_user_exists',function(callback,results){
		console.log("in sign_up",JSON.stringify(results));
		var username = results.get_username;
		var isDbConnected = results.connect_db;
		var userExists = results.check_if_user_exists;

		if(username && isDbConnected && !userExists){
			callback(null,{'status':'200','msg':'successfully signed up user'});
		}
		else{
			callback('error signing up',null)
		}
	}]
},function(err,results){			//err will be set to something if any of the function send
	console.log("error = ",err);	//any error
	console.log("results = ",results);
});


/*
var async = require('async');

//Async example for Sign Up flow
async.auto({

    get_username: function(callback){
        console.log('in get_username');
        // async code to get some data
        callback(null, 'Zhi');
    },
    connect_to_db: function(callback){
        console.log('in connect_to_db');
        var connected = false;  //set this to false here to simulate DB failure

        //Check connection
        if (connected) {
            callback(null, connected);
        } else {
            callback('Error connecting to DB', null);
        }
    },
    check_if_user_exist: ['get_username', 'connect_to_db', function(callback, results){
        console.log('in check_if_user_exist', JSON.stringify(results));
        //check if user exists in db...
        var userExists = false;

        if (userExists) {
            callback('User already exists in db', null);
        } else {
            setTimeout(function() {
                callback(null, userExists);
            }, 1000);
        }

    }],
    sign_up: ['check_if_user_exist', function(callback, results){
        console.log('in sign_up', JSON.stringify(results));

        var username = results.get_username;
        var isDBConnected = results.connect_to_db;
        var userExists = results.check_if_user_exist;
        // console.log(username, isDBConnected, userExists);

        if (username && isDBConnected && !userExists) {
            callback(null, {'status': '200', 'msg':'Successfully signed up user'});
        } else {
            callback('Error signing up user', null);
        }

    }]
}, function(err, results) {
    console.log('error = ', err);
    console.log('results = ', results);
});
*/