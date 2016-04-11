angular
    .module('cosmetApp')
    .controller('proceduresHeadCtrl', proceduresHeadCtrl);

proceduresHeadCtrl.$inject = ['cosmetAppDataHead'];

function proceduresHeadCtrl (cosmetAppDataHead) {

    var vm = this;
    vm.pageHeader = {
        title: 'Procedury',
        strapline: 'Ya siju v procedures.controller.js'
    };

    cosmetAppDataHead
        .success(function(data){
            vm.data = {procedures: data}
        })
        .error(function (e) {
            console.log(e);
        });
    vm.data = {procedures: cosmetAppDataHead};
}