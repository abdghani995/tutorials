	
var app = angular.module("myfilmsapiapp",[]);


app.controller('myfilmsapicontroller',function($scope,$http){
	$http.jsonp("http://www.omdbapi.com/?t=batman&y=&plot=large&r=json&callback=JSON_CALLBACK&page=10")
	.success(function(response){
		$scope.movies = response;
	});

	$scope.findmovie = function(movie){
		$http.jsonp("http://www.omdbapi.com/?t="+movie.name+"&y=&plot=large&r=json&callback=JSON_CALLBACK&page=10")
	.success(function(response){
		$scope.movies = response;
	});

	}
});






