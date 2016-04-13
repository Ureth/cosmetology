(function () {

angular
    .module('cosmetApp')
    .service('cosmetAppDataBody', cosmetAppDataBody);

cosmetAppDataBody.$inject = ['$http'];

function cosmetAppDataBody ($http) {
    return $http.get('/api/procedures/body');
}

})();