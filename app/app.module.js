var app = angular.module('app',['ngRoute', 'home']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when("/home", {
      template: "<home></home>",
    })
   
    .otherwise('/home');

}]);

app.controller('AppController',['$scope', function($scope) {
  $scope.test = 1;
}]);

