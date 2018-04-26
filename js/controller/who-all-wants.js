angular.module('oldApp').controller('whoAllWants', function ( $scope) {
    'use strict';
    $scope.inputs = [];
    $scope.addfield=function(){
      $scope.inputs.push({})
    }
    $scope.removefield=function(){
        $scope.inputs.pop({})
      }
    $scope.drop=['myself','family','friend','others'];
});
