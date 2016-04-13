(function () {

angular
    .module('cosmetApp')
    .service('cosmetAppDataFace', cosmetAppDataFace);

cosmetAppDataFace.$inject = ['$http'];

function cosmetAppDataFace ($http) {
    return $http.get('/api/procedures/face');
}

})();