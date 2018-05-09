angular.module('oldApp').controller('signUp', function ($log, $location, userInfo,urlRequestService,$scope) {
    'use strict';

    var vm = this;
    vm.newUser = {};
    vm.registered={};
// This function registers the new user who signs up to the app 
    vm.addUser = function () {
        console.log('newUser',vm.newUser)
        userInfo.addUser(vm.newUser);        
    }
    // This function get the name of the new user to user Reg page. 
    vm.newUserName=function( usersName){
        console.log('newUser details ',usersName);
        vm.registered.usersName =usersName;
        userInfo.getUserDetails(vm.registered.usersName);  
        return  vm.usersName;
    }   
});



