angular.
  module('home').
  component('home', {
    templateUrl: 'pages/Home/homeView.html',
    controller: HomeController,
    controllerAs: 'vm'
  });

  function HomeController() {
    console.log("Hello");
  }
