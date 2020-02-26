angular.module('searchHome',[]);

// this is to create a custom directive, and we use camelCase in the js file while it'll be a snake case in the html
angular.module('searchHome').component('searchHomeComponent', {
  templateUrl: './components/SearchHome/searchHomeView.html',
  controller: function($scope) {
    $scope.message = "Search Home";
  }
});
