angular
  .module('cosmetApp')
  .controller('aboutCtrl', homeCtrl);

function aboutCtrl () {
  var vm = this;
  vm.pageHeader = {
    title: 'cosmetApp',
  };
}