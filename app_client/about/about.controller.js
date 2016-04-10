angular
  .module('cosmetApp')
  .controller('aboutCtrl', aboutCtrl);

function aboutCtrl () {
  var vm = this;
  vm.pageHeader = {
    title: 'cosmetApp',
  };
}