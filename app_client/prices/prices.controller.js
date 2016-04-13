(function () {

angular
  .module('cosmetApp')
  .controller('pricesCtrl', pricesCtrl);

pricesCtrl.$inject = ['cosmetAppDataPrices'];

function pricesCtrl (cosmetAppDataPrices) {
  var vm = this;
  vm.pageHeader = {
    title: 'cosmetApp'
  };

  cosmetAppDataPrices
      .success(function(data){
        vm.data = {procedures: data}
      })
      .error(function (e) {
        console.log(e);
      });
  vm.data = {procedures: cosmetAppDataPrices};
}

})();