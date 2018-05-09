(function () {
    
        angular.module('oldApp').factory('urlRequestService', function ($http,$q) {
            var apiService = {};
            var info={};
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
            apiService.dbDetails=function(info){                                
                var deferred = $q.defer();
                var request = {
                    method: 'POST',
                    url: "/user/v1",
                    data:info
                };
                $http(request).then(function (result) {
                    deferred.resolve(result.data);
                }, deferred.reject);
                return deferred.promise;
            }
            apiService.getUserDetails = function(name) {
                var deferred = $q.defer();
                var request = {
                    method: 'GET',
                    url: "users/v1/"+name
                };
                $http(request).then(function (result) {
                    deferred.resolve(result.data);
                }, deferred.reject);
                return deferred.promise;
            };
        
            return apiService;
        });
    })();