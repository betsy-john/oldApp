angular.module('oldApp').controller('adminCtrl', function ($scope, $stateParams, urlRequestService) {
    'use strict';

    $scope.RegUserList = [];
    $scope.DeletedUserList = [];
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

        urlRequestService.getUser(id).then(function(data){
            console.log('data of the userto be deleted', data);
            urlRequestService.deletedusers(data).then(function(data){
                console.log('deleted person posted succesfully', data);
            })
        })
        urlRequestService.deleteUser(id,name).then(function(data){
            console.log('deleted person', data);
        });        
    }
    urlRequestService.getDeletedUserDetails().then(function(data){
        _.forEach(data, function (result) {
            console.log('this is interesting', result.firstName);
      
            $scope.DeletedUserList.push({ 'Name':'Name: '+ result.firstName + ' ' + result.lastName,'id': result.id})
        
        })
        $scope.DeletedUserList = data;
        console.log('-----------   $scope.DeletedUserList insiddee function1', $scope.DeletedUserList);
        return $scope.DeletedUserList;

    })
    $scope.DeluserList=$scope.DeletedUserList;

    $scope.restore= function(id,name){
        urlRequestService.getrestoreUser(id).then(function(data){
            console.log('==================>>>> ', data)
            urlRequestService.restoreUser(data).then(function(data){
                console.log('==============>>part2 restore', data);
            })
        }) 
        urlRequestService.deleteUserDel(id,name).then(function(data){
            console.log('deleted person', data);
        });     
          
    }

});


