(function () {

  angular.module('oldApp').factory('administrationUrl', function ($http, $q) {
      var apiService = {};
      var info = {};
apiService.postAdministrationDetails = function (info) {
  console.log('posttttting ===>', info)
  var deferred = $q.defer();
  var request = {
      method: 'POST',
      url: "/user/v1/administration",
      data:info
  };
  $http(request).then(function (result) {
    console.log('ress',result);
      deferred.resolve(result.data);
  }, deferred.reject);
  return deferred.promise;
};


      return apiService;
  });
})();