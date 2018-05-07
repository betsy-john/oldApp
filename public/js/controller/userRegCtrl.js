angular.module('oldApp').controller('userReg', function ( $scope,userInfo) {
    'use strict';

   $scope.name=userInfo.user
    console.log('name', userInfo)
});


