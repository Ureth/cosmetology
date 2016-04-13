(function () {

angular
    .module('cosmetApp')
    .service('cosmetAppData', cosmetAppData);

cosmetAppData.$inject = ['$http'];

function cosmetAppData ($http) {
    var procedureById = function (procedureid) {
        return $http.get('/api/procedures/:type/' + procedureid);
    };
    return {
        procedureById: procedureById
    };
}

})();
