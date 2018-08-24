angular.module('oldApp').controller('adminNotification', function ($scope, noticationService) {
  $scope.val = {};
  $scope.notification={};
  $scope.updateVal = {};
  noticationService.getMeNotify().then(function(result){
   $scope.notification= result;
   return $scope.notification;
  })
  $scope.update = function (val) {
    console.log(val)
    console.log('active value',val.active )
    $scope.val.active=!val.active
    console.log('active  opp value', !$scope.val.active )
    $scope.updateVal.active=!$scope.val.active;
    $scope.updateVal.id=val.id
    console.log('$scope.updateVal',$scope.updateVal)
    noticationService.postNotify($scope.updateVal);
    }
});