angular.module('oldApp').controller('addMember', function ($scope) {
    'use strict';
    $scope.inputs = [];
    $scope.addfield = function () {
        $scope.inputs.push({})
    }
    $scope.removefield = function () {
        $scope.inputs.pop({})
    }
    $scope.proof = ['adhar card', 'PAN', 'driving license', 'other'];
    $scope.bloodgrp = ['A+', 'A-', 'B-', 'B+', 'O+', 'O-', 'AB+', 'AB-', 'other'];
});
