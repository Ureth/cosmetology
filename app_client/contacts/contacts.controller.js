angular
  .module('cosmetApp')
  .controller('contactsCtrl', contactsCtrl);

function contactsCtrl () {
  var vm = this;
  vm.pageHeader = {
    title: 'cosmetApp',
  };
}