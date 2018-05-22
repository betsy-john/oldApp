angular.module('oldApp').controller('LoginCtrl', function ($scope, urlRequestService, $state) {
    'use strict';
    var vm = this;
    $scope.user = {};
    var userinfo = $scope.user;
    console.log('userinf=', userinfo)
    // function to submit the form after all validation has occurred			
    $scope.submitForm = function (isValid) {
        // check to make sure the form is completely valid
        if (isValid) {
            urlRequestService.validatingUsers($scope.user).then(function (data) {
                console.log('uwe are donates=', data[0].firstName)
                if ((data[0].userName === $scope.user.userName) && (data[0].password === $scope.user.password)) {
                    console.log('userinfoooo=', data[0].user_roles)
                    $state.go('privacy',{'roles': data[0].user_roles})
                } else {
                    alert('please check your username or password');
                }
            })

        }
        else {
            alert('please check the required fields are field properly');
        }

    };
    urlRequestService.getMessage()
        .then(function (result) {
            $scope.message = result.body;//object.property
            $scope.blockmsg = result.title;
        })

});

