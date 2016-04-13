(function () {

angular
    .module('cosmetApp')
    .controller('proceduresHeadCtrl', proceduresHeadCtrl);

proceduresHeadCtrl.$inject = ['cosmetAppDataHead'];

function proceduresHeadCtrl (cosmetAppDataHead) {
    var vm = this;
    cosmetAppDataHead
        .success(function(data){
            vm.data = {procedures: data}
        })
        .error(function (e) {
            console.log(e);
        });
    vm.data = {procedures: cosmetAppDataHead};
}

})();