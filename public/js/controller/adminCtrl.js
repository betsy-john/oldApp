angular.module('oldApp').controller('adminCtrl', function ($scope, $stateParams, urlRequestService) {
    'use strict';

    $scope.RegUserList = [];
    urlRequestService.getUserDetails().then(function (data) {
        console.log('-----------------adminCtrldata in then', data);

        _.forEach(data, function (result) {
            console.log('this is interesting', result.firstName);
       if(result.user_roles === 'user')
           {
            $scope.RegUserList.push({ 'Name':'Name: '+ result.firstName + ' ' + result.lastName,'id': result.id})
        }
        })
        $scope.RegUserList = data;
        console.log('-----------   $scope.RegUserList insiddee function1', $scope.RegUserList);
        return $scope.RegUserList;
    })
    console.log('-----------------   $scope.RegUserList', $scope.RegUserList);
    $scope.userList=$scope.RegUserList;
    console.log('-----------------     $scope.userList',    $scope.userList);
    $scope.delete= function(id,name){
        urlRequestService.deleteUser(id,name).then(function(data){
            console.log('deleted person', data);
        });
    }

});


