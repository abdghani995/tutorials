var app = angular.module("advance3",[]);

app.controller("app",function($scope){
	$scope.randomNumber = Math.random()*100;

	document.querySelector('input').addEventListener('click',function(){
			$scope.randomNumber = Math.random()*100;
			$scope.$digest();
	},false);
})