var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var ejs = require("ejs");
var port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname+'/views'));
app.set("view engine","ejs");

app.get('/',function(req,res){
	res.render('register/index.ejs');
});
app.get('/register',function(req,res){
	res.render('register/index_.ejs');;
});

app.get('/advance/:name',function(req,res){
	res.render('advance/'+req.params.name);
})

app.listen(port,function(){
	console.log("SERVER LIVE AT "+port);
});