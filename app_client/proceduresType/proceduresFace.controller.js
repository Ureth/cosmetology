(function () {

angular
    .module('cosmetApp')
    .controller('proceduresFaceCtrl', proceduresFaceCtrl);

proceduresFaceCtrl.$inject = ['cosmetAppDataFace'];

function proceduresFaceCtrl (cosmetAppDataFace) {
    var vm = this;
    cosmetAppDataFace
        .success(function(data){
            vm.data = {procedures: data}
        })
        .error(function (e) {
            console.log(e);
        });
    vm.data = {procedures: cosmetAppDataFace};
}

})();