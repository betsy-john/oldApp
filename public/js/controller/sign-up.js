angular.module('oldApp').controller('signUp', function ($log, $location, userInfo) {
    'use strict';

    var vm = this;
    vm.newUser = {};

    vm.addUser = function () {
        console.log('newUser',vm.newUser)
        userInfo.addUser(vm.newUser);
        // userInfo.userName(vm.newUser)
    }
    vm.userInfos=function(){
        userInfo.userName(vm.newUser);

    }

    
});


