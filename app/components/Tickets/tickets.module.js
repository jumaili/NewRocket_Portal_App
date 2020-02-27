angular.module('tickets',[]);

// this is to create a custom directive, and we use camelCase in the js file while it'll be a snake case in the html
angular.module('tickets').component('ticketsComponent', {
  templateUrl: './components/Tickets/ticketsView.html',
  controller: function($http, $scope) {
    // this is how to get data from an api
  // recall that this is an asynchonous function
  $http.get('./data/itTickets.json')
  .then(function successCallback(response) {
    $scope.ticketsData = response.data

    console.log("Status:", response.statusText);
    console.log($scope.ticketsData)
    }, function errorCallback(response) {
      console.log("Status:",response.statusText);
    });;

  }
});

