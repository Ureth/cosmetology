(function () {

angular
    .module('cosmetApp')
    .service('cosmetAppDataPrices', cosmetAppDataPrices);

cosmetAppDataPrices.$inject = ['$http'];

function cosmetAppDataPrices ($http) {
    return $http.get('/api/prices/');
}

})();