angular.module('oldApp').controller('docSignUp', function ($log, $location, userInfo,urlRequestService,$scope, $filter) {
    'use strict';

    var vm = this;
    vm.DocUser = {};
    vm.registered={};
// This function registers the new user who signs up to the app 
    vm.addDoc = function () {
        console.log('DocUser',vm.DocUser)
vm.DocUser.user_roles= 'doctor';

// var date= Date.now();  
// console.log('dateeee',date)
// var created_at= $filter('date')(created_at, "yyyy-MM-dd");  
// console.log('created_at',created_at)

console.log('kuch user',vm.DocUser)
        userInfo.addDoc(vm.DocUser);        
    }
    // This function get the name of the new user to user Reg page. 
   
});



