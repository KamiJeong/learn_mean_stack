angular.module('app')
.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'posts.html',
    controller: 'PostCtrl'
  })
  .when('/register', {
    templateUrl: 'register.html',
    controller: 'RegisterCtrl'
  })
  .when('/login', {
    templateUrl: 'login.html',
    controller: 'LoginCtrl'
  });
});
