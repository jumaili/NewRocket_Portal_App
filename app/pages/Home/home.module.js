angular.module('home',[]);

// this is to create a custom directive, and we use camelCase in the js file while it'll be a snake case in the html
angular.module('home').component('homeComponent', {
  templateUrl: './pages/Home/homeView.html',
  controller: function($scope) {
    $scope.message = "Home Page";
  }
});
