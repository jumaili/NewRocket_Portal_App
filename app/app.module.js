var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: './pages/Home/homeView.html',
      controller: 'AppController'
    })
   
    .otherwise({
      redirectTo: '/home'
    });

}]);



app.controller('AppController',['$scope', function($scope) {
  $scope.test = 1;
}]);

