var app = angular.module("register",[]);

app.controller("register_controller",function($scope){
	$scope.passwordError='password didnt match';
		
	$scope.submit_form = function(){

		if($scope.user.password!=$scope.user.passwordCnf){

		}
	}
});