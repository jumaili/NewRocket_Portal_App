var home = angular.module('home',[]);

// this is to create a custom directive, and we use camelCase in the js file while it'll be a snake case in the html
angular.module('home').component('homeComponent', {
  template: '<h1>something</h1>',
  controller: function($scope) {
    $scope.message = "Hi";
  }
});

