angular.module('navbar',[]);

// this is to create a custom directive, and we use camelCase in the js file while it'll be a snake case in the html
angular.module('navbar').component('navbarComponent', {
  templateUrl: './shared/Navbar/navbarView.html',
  controller: function($scope) {
    $scope.message = "NavBar";
  }
});

