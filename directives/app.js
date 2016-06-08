var app = angular.module("custom_directive",['app.directive.languages']);

app.controller('languages_ctrl',function($scope){

	$scope.heading = "custom directive";

	$scope.language = [
			{
				name:'JAVA',
				frameworks:[
					{
						name:'struts'
					},
					{
						name:'Spring'
					}
				]
			},
			{
				name:'python',
				frameworks:[
					{
						name:'flask'
					},
					{
						name:'Django'
					}
				]
			},
			{
				name:'Ruby',
				frameworks:[
					{
						name:'Rails'
					}
					
				]
			},
			{
				name:'C++',
				frameworks:[
					{
						name:'STL'
					},
					{
						name:'Boost'
					}
				]
			},
			{
				name:'JavaScript',
				frameworks:[
					{
						name:'express'
					},
					{
						name:'angular'
					}
				]
			}
	]
})
