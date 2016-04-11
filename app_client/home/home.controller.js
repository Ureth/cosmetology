angular
    .module('cosmetApp')
    .controller('homeCtrl', homeCtrl);

function homeCtrl () {
    var vm = this;
    vm.pageHeader = {
        title: 'Loc8r',
        strapline: 'Я сижу в home.controller.js'
    };
    vm.sidebar = {
        content: "Looking for wifi and a seat etc etc"
    };
}