(function () {

angular
  .module('cosmetApp')
  .controller('procedureDetailCtrl', procedureDetailCtrl);

procedureDetailCtrl.$inject = ['$routeParams','cosmetAppData'];

function procedureDetailCtrl ($routeParams, cosmetAppData) {
  var vm = this;
  vm.header = {
      suka: "lorem \n ipsum"
  };
  vm.procedureid = $routeParams.procedureid;
  cosmetAppData.procedureById(vm.procedureid)
      .success(function(data) {
        vm.data = { procedures: data };
      })
      .error(function (e) {
        console.log(e);
      });
  vm.data = {procedures: cosmetAppData}
}

})();