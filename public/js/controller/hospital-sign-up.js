angular.module('oldApp').controller('hospSignUp', function ($log, $location, userInfo,urlRequestService,$scope, $filter,administrationUrl) {
    'use strict';

    var vm = this;
    vm.AdministratUser = {};
    vm.registered={};
// This function registers the new user who signs up to the app
    vm.addUser = function () {
        console.log('AdministratUser',vm.AdministratUser)
// vm.AdministratUser.user_roles= 'hospital';

// var date= Date.now();
// console.log('dateeee',date)
// var created_at= $filter('date')(created_at, "yyyy-MM-dd");
// console.log('created_at',created_at)

console.log('kuch user',vm.AdministratUser)
        userInfo.addAdminstrator(vm.AdministratUser);
    }
    // This function get the name of the new user to user Reg page.

});
