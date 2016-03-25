angular
  .module('cosmetApp')
  .controller('pricesCtrl', pricesCtrl);

function pricesCtrl () {
  var vm = this;
  vm.pageHeader = {
    title: 'cosmetApp',
  };
}