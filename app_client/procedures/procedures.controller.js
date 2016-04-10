angular
    .module('cosmetApp')
    .controller('proceduresCtrl', proceduresCtrl);

proceduresCtrl.$inject = ['cosmetAppData'];

function proceduresCtrl (cosmetAppData) {

    var vm = this;
    vm.pageHeader = {
        title: 'Procedury',
        strapline: 'Ya siju v procedures.controller.js'
    };

    cosmetAppData
        .success(function(data){
            vm.data = {procedures: data}
        })
        .error(function (e) {
            console.log(e);
        });
    vm.data = {procedures: cosmetAppData};
}