angular.module('oldApp').controller('notifyPopUp', function ($scope, $uibModal) {
  'use strict';

  $scope.notificationPopup = function () {
    $uibModal.open({
      templateUrl: 'notifyMe.html',
      controller:'notifyMeCtrl'
    })
  };
});
angular.module('oldApp').controller('notifyMeCtrl', function ($scope, $uibModalInstance) {

        $scope.ok = function () {
          $uibModalInstance.close();
        };

        $scope.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };
});



