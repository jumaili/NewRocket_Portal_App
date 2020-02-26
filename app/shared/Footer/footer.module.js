angular.module('footer',[]);

// this is to create a custom directive, and we use camelCase in the js file while it'll be a snake case in the html
angular.module('footer').component('footerComponent', {
  templateUrl: './shared/Footer/footerView.html',
  controller: function($scope) {
    $scope.message = "Footer";
  }
});
