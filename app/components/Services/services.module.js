angular.module('services',[]);

// this is to create a custom directive, and we use camelCase in the js file while it'll be a snake case in the html
angular.module('services').component('servicesComponent', {
  templateUrl: './components/Services/servicesView.html',
  controller: function($scope) {
    $scope.message = "Services";
  }
});

