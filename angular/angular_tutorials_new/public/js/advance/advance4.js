var app = angular.module("advance4",[]);

app.service('random',function(){
	var num = Math.floor(Math.random()*10);
	this.generete = function(){
		return num;
	}

});

app.controller("app",function($scope,random){
	$scope.generateRandom = function(){
		$scope.randomNumber = random.generete();
	}
})