angular.module('oldApp').controller('privacyCtrl', function ( $scope,$stateParams,$state) {
    'use strict';
 $scope.userRoles=$stateParams.roles;
console.log('roles of the person',$scope.userRoles);
$scope.continue=function(){
    console.log('entering the func')
    if($scope.userRoles==='admin'){
        console.log('entering the admin',$scope.userRoles)
        $state.go('adminProfile')
    } else {
        console.log('entering the user profile ',$scope.userRoles)
        $state.go('donate')
    }   
}

});


