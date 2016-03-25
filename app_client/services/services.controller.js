angular
  .module('cosmetApp')
  .controller('servicesCtrl', homeCtrl);

function servicesCtrl () {
  var vm = this;
  vm.pageHeader = {
    title: 'cosmetApp',
  };
}