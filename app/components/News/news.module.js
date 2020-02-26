angular.module('news',[]);

// this is to create a custom directive, and we use camelCase in the js file while it'll be a snake case in the html
angular.module('news').component('newsComponent', {
  templateUrl: './components/News/newsView.html',
  controller: function($scope) {
    $scope.message = "News";
  }
});
