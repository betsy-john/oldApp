angular.module('oldApp').controller('adminstrationsignup', function ($log, $location, userInfo,urlRequestService,$scope, $filter) {
    'use strict';

    var vm = this;
    vm.AdministratUser = {};
    vm.registered={};
// This function registers the new user who signs up to the app 
    vm.addUser = function () {
        console.log('AdministratUser',vm.AdministratUser)
vm.AdministratUser.user_roles= 'doctor';

// var date= Date.now();  
// console.log('dateeee',date)
// var created_at= $filter('date')(created_at, "yyyy-MM-dd");  
// console.log('created_at',created_at)

console.log('kuch user',vm.AdministratUser)
        userInfo.addUser(vm.AdministratUser);        
    }
    // This function get the name of the new user to user Reg page. 
   
});



