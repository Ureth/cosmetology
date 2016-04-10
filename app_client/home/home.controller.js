angular
    .module('cosmetApp')
    .controller('homeCtrl', homeCtrl);

homeCtrl.$inject = ['cosmetAppData'];

function homeCtrl (cosmetAppData) {
    var vm = this;
    vm.pageHeader = {
        title: 'Loc8r',
        strapline: 'Я сижу в home.controller.js'
    };
    vm.sidebar = {
        content: "Looking for wifi and a seat etc etc"
    };

    cosmetAppData
        .success(function(data){
            vm.data = {procedures: data}
        })
        .error(function (e) {
            console.log(e);
        });
    vm.data = {procedures: cosmetAppData}
}