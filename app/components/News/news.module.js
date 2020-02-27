angular.module('news',[]);

// this is to create a custom directive, and we use camelCase in the js file while it'll be a snake case in the html
angular.module('news').component('newsComponent', {
  templateUrl: './components/News/newsView.html',
  controller: function($http, $scope) {
  // this is how to get data from an api
  // recall that this is an asynchonous function
  $http.get('./data/news.json')
  .then(function successCallback(response) {
    $scope.newsData = response.data

    console.log("Status:", response.statusText);
    console.log($scope.newsData)
    }, function errorCallback(response) {
      console.log("Status:",response.statusText);
    });;
  }
});
