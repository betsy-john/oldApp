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
    .state('aboutus', {
        url: '/aboutus',
        templateUrl: 'about-us.html',
    })
    .state('header', {
        url: '/header',
        templateUrl: 'header.html',
        controller:'HeaderNav'
    })
    .state('lostPassword', {
        url: '/lostPassword',
        templateUrl: 'login/forgot_pass.html',
    })
    .state('signup', {
        url: '/signup',
        templateUrl: 'login/sign_up.html',
        controller:'signUp'

    })
});