angular.module('cosmetApp', ['ngRoute']);

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home/home.view.html',
      controller: 'homeCtrl',
      controllerAs: 'vm'
    })
    .when('/prices', {
      templateUrl: 'prices/prices.view.html',
      controller: 'pricesCtrl',
      controllerAs: 'vm'
    })
    .otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(true);
}

angular
  .module('cosmetApp')
  .config(['$routeProvider', '$locationProvider', config]);