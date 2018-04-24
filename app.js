angular.module('oldApp', [
    'ui.router',  
])
angular.module('oldApp').config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('main', {
        url: '/',
        templateUrl: 'donor-login.html'
    })
    .state('donor', {
        url: '/donor',
        templateUrl: 'donor-login.html'
    })
    .state('donate', {
        url: '/donate',
        templateUrl: 'donate.html',
        controller:'LoginCtrl'
    })
    .state('aboutUs', {
        url: '/aboutUs',
        templateUrl: 'about-us.html',
        controller:'HeaderNav'
    })
});