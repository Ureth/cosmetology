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
    .when('/services', {
      templateUrl: 'services/services.view.html',
      controller: 'servicesCtrl',
      controllerAs: 'vm'
    })
    .when('/about', {
      templateUrl: 'about/about.view.html',
      controller: 'aboutCtrl',
      controllerAs: 'vm'
    })
    .when('/contacts', {
      templateUrl: 'contacts/contacts.view.html',
      controller: 'contactsCtrl',
      controllerAs: 'vm'
    })            
    .otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(true);
}

angular
  .module('cosmetApp')
  .config(['$routeProvider', '$locationProvider', config]);