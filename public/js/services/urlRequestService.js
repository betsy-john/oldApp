(function () {

    angular.module('oldApp').factory('urlRequestService', function ($http, $q) {
        var apiService = {};
        var info = {};
        apiService.getMessage = function () {
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
        apiService.dbDetails = function (info) {
            console.log('dbdetails ghjikl====>', info)
            var deferred = $q.defer();
            var request = {
                method: 'POST',
                url: "/user/v1",
                data: info
            };
            $http(request).then(function (result) {
                deferred.resolve(result.data);
            }, deferred.reject);
            return deferred.promise;
        }
        apiService.getUserDetails = function () {
            var deferred = $q.defer();
            var request = {
                method: 'GET',
                url: "users/v1"
            };
            $http(request).then(function (result) {
                console.log('what is resultddd', result)
                console.log('what is result.dat', result.data)
                deferred.resolve(result.data);
            }, deferred.reject);
            return deferred.promise;
        };
        apiService.validatingUsers = function (info) {
            var deferred = $q.defer();
            var request = {
                method: 'GET',
                url: "/userinfo/v1/" + info.userName
            };
            $http(request).then(function (result) {
                console.log('what is result', result)
                deferred.resolve(result.data);
            }, deferred.reject);
            return deferred.promise;
        };
        
        apiService.getUser = function (id) {
            var deferred = $q.defer();
            var request = {
                method: 'GET',
                url: "/user/v1/get/" +id
            };
            $http(request).then(function (result) {
                console.log('what is result', result)
                deferred.resolve(result.data);
            }, deferred.reject);
            return deferred.promise;
        };
        apiService.deleteUser = function (userid, username) {
            console.log('this function  is called')
            var deferred = $q.defer();
            var request = {
                method: 'DELETE',
                url: 'users/v1/delete/' + userid + '/' + username,
                data: userid
            };
            $http(request).then(function (result) {
                console.log('required', result)
                deferred.resolve(result.data);
            }, deferred.reject);
            return deferred.promise;

        }
        //posts the deleted users
        apiService.deletedusers = function (info) {
            console.log('deleted user====>', info)
            var deferred = $q.defer();
            var request = {
                method: 'POST',
                url: "/users/v1/deletedusers",
                data: info
            };
            $http(request).then(function (result) {
                deferred.resolve(result.data);
            }, deferred.reject);
            return deferred.promise;
        }
        //gets the details of deleted user
        apiService.getDeletedUserDetails = function () {
            var deferred = $q.defer();
            var request = {
                method: 'GET',
                url: "/deletedusers/v1/get"
            };
            $http(request).then(function (result) {
                console.log('deleted user details ', result)
                console.log('deleted user details =====', result.data)
                deferred.resolve(result.data);
            }, deferred.reject);
            return deferred.promise;
        };
        //getting restored
        apiService.getrestoreUser = function (id) {
            var deferred = $q.defer();
            var request = {
                method: 'GET',
                url: "/restore/user/get/"+id
               
            };
            $http(request).then(function (result) {
                console.log('restore user details ', result)
                console.log('restore user details =====', result.data)
                deferred.resolve(result.data);
            }, deferred.reject);
            return deferred.promise;
        };
        ///restoring data to main users table
        apiService.restoreUser = function (info) {
            console.log('deleted user====>', info)
            var deferred = $q.defer();
            var request = {
                method: 'POST',
                url: "/users/v1/restoreusers",
                data: info
            };
            $http(request).then(function (result) {
                deferred.resolve(result.data);
            }, deferred.reject);
            return deferred.promise;
        }
        //deleting from restored table
        apiService.deleteUserDel = function (userid, username) {
            console.log('this function  is called')
            var deferred = $q.defer();
            var request = {
                method: 'DELETE',
                url: '/user/v1/restoreuser/' + userid + '/' + username,
                data: userid
            };
            $http(request).then(function (result) {
                console.log('required', result)
                deferred.resolve(result.data);
            }, deferred.reject);
            return deferred.promise;

        }

        return apiService;
    });
})();