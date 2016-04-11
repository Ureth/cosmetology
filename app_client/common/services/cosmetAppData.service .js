angular
    .module('cosmetApp')
    .service('cosmetAppData', cosmetAppData);

cosmetAppData.$inject = ['$http'];

function cosmetAppData ($http) {
    return $http.get('/api/procedures');

}
