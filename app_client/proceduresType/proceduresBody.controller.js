(function () {

angular
    .module('cosmetApp')
    .controller('proceduresBodyCtrl', proceduresBodyCtrl);

proceduresBodyCtrl.$inject = ['cosmetAppDataBody'];

function proceduresBodyCtrl (cosmetAppDataBody) {

    var vm = this;
    cosmetAppDataBody
        .success(function(data){
            vm.data = {procedures: data}
        })
        .error(function (e) {
            console.log(e);
        });
    vm.data = {procedures: cosmetAppDataBody};
}

})();