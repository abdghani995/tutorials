var app = angular.module("advance1",[]);

app.directive ("headerPages",function(){
	return	{
		restrict:'E',
		templateUrl:'partials/header.ejs'
	}
})
app.directive("bodyPage",function(){
	return {
		restrict:'A'
		templateUrl:'partials/body.ejs'
	}
}