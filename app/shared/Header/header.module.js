angular.module('header',[]);

// this is to create a custom directive, and we use camelCase in the js file while it'll be a snake case in the html
angular.module('header').component('headerComponent', {
  templateUrl: './shared/Header/headerView.html',
  controller: function($scope) {
    $scope.message = "Header";
  }
});

