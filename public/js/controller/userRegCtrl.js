angular.module('oldApp').controller('userReg', function ( $scope,$stateParams) {
    'use strict';
$scope.name=$stateParams.userName;
console.log('userName of the person',$scope.name);
  
});


