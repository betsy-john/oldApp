(function () {

    angular.module('oldApp').factory('docUrlService', function ($http, $q) {
        var docService = {};
        var info = {};
       
        docService.dbDocs = function (info) {
            console.log('dbDoc ghjikl====>', info)
            var deferred = $q.defer();
            var request = {
                method: 'POST',
                url: "/user/v1/docs",
                data: info
            };
            $http(request).then(function (result) {
                deferred.resolve(result.data);
            }, deferred.reject);
            return deferred.promise;
        }
        docService.getDocDetails = function () {
            var deferred = $q.defer();
            var request = {
                method: 'GET',
                url: "users/v1/docs"
            };
            $http(request).then(function (result) {
                console.log('what is resultddd', result)
                console.log('what is result.dat', result.data)
                deferred.resolve(result.data);
            }, deferred.reject);
            return deferred.promise;
        };
      

        return docService;
    });
})();