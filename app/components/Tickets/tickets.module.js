angular.module('tickets',[]);

// this is to create a custom directive, and we use camelCase in the js file while it'll be a snake case in the html
angular.module('tickets').component('ticketsComponent', {
  templateUrl: './components/Tickets/ticketsView.html',
  controller: function($scope) {
    $scope.message = "Tickets";
  }
});

