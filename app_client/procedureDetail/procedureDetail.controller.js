angular
  .module('cosmetApp')
  .controller('procedureDetailCtrl', procedureDetailCtrl);

procedureDetailCtrl.$inject = ['$routeParams', 'cosmetAppData'];

function procedureDetailCtrl ($routeParams, cosmetAppData) {
  var vm = this;
  vm.procedureid = $routeParams.procedureid;
  vm.pageHeader = {
    title : vm.procedureid
  }

}