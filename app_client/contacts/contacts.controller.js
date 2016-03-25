angular
  .module('cosmetApp')
  .controller('contactsCtrl', homeCtrl);

function contactsCtrl () {
  var vm = this;
  vm.pageHeader = {
    title: 'cosmetApp',
  };
}