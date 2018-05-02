(function () {
    
        angular.module('oldApp').factory('urlRequestService', function ($http,$q) {
            var apiService = {};
            apiService.getMessage = function() {
                var deferred = $q.defer();
                var request = {
                    method: 'GET',
                    url: "https://jsonplaceholder.typicode.com/posts/1"
                };
                $http(request).then(function (result) {
                    deferred.resolve(result.data);
                }, deferred.reject);
                return deferred.promise;
            };
        
            return apiService;
        });
    })();