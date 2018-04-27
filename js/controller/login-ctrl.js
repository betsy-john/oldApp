angular.module('oldApp').controller('LoginCtrl', function ($scope, urlRequestService, $state) {
    'use strict';
    // function to submit the form after all validation has occurred			
    $scope.submitForm = function (isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
            $state.go('privacy')
        } 
        else {
            alert('Something went wrong');
        }

    };
    urlRequestService.getMessage()
        .then(function (result) {
            $scope.message = result.body;//object.property
            $scope.blockmsg = result.title;
        })
});

