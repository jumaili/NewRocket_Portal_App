angular.module('help',[]);

// this is to create a custom directive, and we use camelCase in the js file while it'll be a snake case in the html
angular.module('help').component('helpComponent', {
  templateUrl: './components/Help/helpView.html',
  controller: function($scope) {
    $scope.message = "Help";

  }
});

