angular
  .module('cosmetApp')
  .controller('homeCtrl', homeCtrl);

function homeCtrl () {
  var vm = this;
  vm.pageHeader = {
    title: 'cosmetApp',
  };
}