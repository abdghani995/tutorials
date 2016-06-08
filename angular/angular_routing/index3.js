var app =angular.module("CourseApp",["ngRoute"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'courseApp/home.html'
      }).
    when('/profile/:username', {
      templateUrl: 'courseApp/profile.html',
      controller:'ProfileController'
    }).
    when('/contact', {
      templateUrl: 'courseApp/contact.html'
    }).
    when('/about', {
      templateUrl: 'courseApp/about.html'
    }).
      otherwise({
        redirectTo: '/home'
      });
  }]);

app.controller("ProfileController",function($scope,UserService,$routeParams){
  var username= $routeParams.username;
  $scope.username = username;
  $scope.currentUser = UserService.getCurrentUser();
  console.log(username);
});

app.controller("NavController",function($scope,UserService){
  $scope.getCurrentUser =  null;
  $scope.logout = function(){
    $scope.currentUser=null;
    UserService.logout();
    $scope.username=null;
    $scope.password=null;
  }
  $scope.login = function(){
    var username=$scope.username;
    var password=$scope.password;
    $scope.currentUser = UserService.login(username,password);
  }
});

app.factory("UserService",function(){
  var currentUser = null;
  var users=[
        {username:"abdullah",password:"12345",role:"admin"},
        {username:"aghani",password:"123456",role:"faculty"},
        {username:"abdghani",password:"1234567",role:"student"}
  ]
  var logout = function(){
    currentUser=null;
  }
  var login = function(username,password){
      for(var u in users){
        if(users[u].username==username){
          currentUser = users[u];
          return users[u];
        }
      }
      return null;
  };

  var getCurrentUser = function(){
    return currentUser
  }

  return{
    login:login,
    logout:logout,
    getCurrentUser:getCurrentUser
  };
});