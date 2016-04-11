angular
    .module('cosmetApp')
    .controller('proceduresCtrl', proceduresCtrl);



function proceduresCtrl () {

    var vm = this;
    vm.pageHeader = {
        title: 'Procedury',
        strapline: 'Ya siju v procedures.controller.js'
    };

}