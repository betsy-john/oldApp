angular.module('oldApp').controller('privacyCtrl', function ( $scope,$stateParams,$state) {
    'use strict';
 $scope.name=$stateParams.userName;
console.log('userName of the person',$scope.name);
$scope.continue=function(){
    console.log('entering the func')
    if($scope.name==='betsy23'){
        console.log('entering the admin',$scope.name)
        $state.go('adminProfile')
    } else {
        console.log('entering the user profile ',$scope.name)
        $state.go('donate')
    }   
}

});


