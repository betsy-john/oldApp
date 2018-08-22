(function () {

  angular.module('oldApp').factory('noticationService', function ($http, $q) {
      var notificationSer = {};
      var info = {};


      notificationSer.getMeNotify = function () {
          var deferred = $q.defer();
          var request = {
              method: 'GET',
              url: "/admin/notifications"
          };
          $http(request).then(function (result) {
              console.log('==>', result)
              console.log('=======>', result.data)
              deferred.resolve(result.data);
          }, deferred.reject);
          return deferred.promise;
      };

      notificationSer.postNotify = function (info) {
        console.log('idd details', info.id)
        console.log('active details ',info)
        var  deferred =$q.defer();
        var request = {
          method:'POST',
          url : "/user/v1/notification/"+ info.id,
          data : info
        }
        $http(request).then(function(result){
          console.log('tell me result',result)
          deferred.resolve(result.data);
        },deferred.reject);
        return deferred.promise;
      }


      return notificationSer;
  });
})();