angular.module('oldApp').controller('signUp', function ($log, $location, userInfo,urlRequestService,$scope, $filter) {
    'use strict';

    var vm = this;
    vm.newUser = {};
    vm.registered={};
// This function registers the new user who signs up to the app
    vm.addUser = function () {
        console.log('newUser',vm.newUser)
vm.newUser.user_roles= 'user';

// var date= Date.now();
// console.log('dateeee',date)
// var created_at= $filter('date')(created_at, "yyyy-MM-dd");
// console.log('created_at',created_at)

console.log('kuch user',vm.newUser)
        userInfo.addUser(vm.newUser);
    }
    // This function get the name of the new user to user Reg page.

});



