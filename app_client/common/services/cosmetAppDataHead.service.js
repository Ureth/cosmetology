(function () {

angular
    .module('cosmetApp')
    .service('cosmetAppDataHead', cosmetAppDataHead);

cosmetAppDataHead.$inject = ['$http'];

function cosmetAppDataHead ($http) {
    return $http.get('/api/procedures/head');
}

})();