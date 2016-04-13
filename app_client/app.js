angular.module('cosmetApp', ['ngRoute', 'ngSanitize']);

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
    .when('/procedures', {
      templateUrl: 'procedures/procedures.view.html',
      controller: 'proceduresCtrl',
      controllerAs: 'vm'
    })
    .when('/procedures/face', {
      templateUrl: 'proceduresType/proceduresType.view.html',
      controller: 'proceduresFaceCtrl',
      controllerAs: 'vm'
    })
    .when('/procedures/body', {
      templateUrl: 'proceduresType/proceduresType.view.html',
      controller: 'proceduresBodyCtrl',
      controllerAs: 'vm'
    })
    .when('/procedures/head', {
      templateUrl: 'proceduresType/proceduresType.view.html',
      controller: 'proceduresHeadCtrl',
      controllerAs: 'vm'
    })
    .when('/procedures/:type/:procedureid', {
      templateUrl: '/procedureDetail/procedureDetail.view.html',
      controller: 'procedureDetailCtrl',
      controllerAs: 'vm'
    })
    .when('/about', {
      templateUrl: 'about/about.view.html',
      controller: 'aboutCtrl',
      controllerAs: 'vm'
    })
    .when('/about/diplomas', {
      templateUrl: 'diplomas/diplomas.view.html',
      controller: 'diplomasCtrl',
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
