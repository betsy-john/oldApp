angular.module('oldApp', ['ui.router', 'ngMaterial', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
angular.module('oldApp').config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('main', {
        url: '/',
        templateUrl: 'public/donor-login.html'
    })
    .state('donor', {
        url: '/donor',
        templateUrl: 'public/donor-login.html'
    })
    .state('donate', {
        url: '/donate',
        templateUrl: 'public/donate.html',
        controller:'LoginCtrl'
    })
    .state('aboutus', {
        url: '/aboutus',
        templateUrl: 'public/header/about-us.html', 
    })
    .state('header', {
        url: '/header',
        templateUrl: 'public/header.html',
        controller:'HeaderNav'
    })
    .state('lostPassword', {
        url: '/lostPassword',
        templateUrl: 'public/login/forgot_pass.html',
    })
    .state('signup', {
        url: '/signup',
        templateUrl: 'public/login/sign_up.html',
        controller:'signUp'

    })
    .state('gallery', {
        url: '/gallery',
        templateUrl: 'public/header/gallery.html',
    })
    .state('videomenu', {
        url: '/videomenu',
        templateUrl: 'public/header/video.html',
    })
    .state('charity', {
        url: '/charity',
        templateUrl: 'public/donation.html',
    })
    .state('fillupform', {
        url: '/fillupform',
        templateUrl: 'public/donateUs/fillUpform.html',
    })
    .state('memberlist', {
        url: '/memberlist',
        templateUrl: 'public/donateUs/WhoAllWants.html',
        controller:'whoAllWants'
    })
    .state('appointment', {
        url: '/appointment',
        templateUrl: 'public/donateUs/appointment.html', 
        controller: 'appointment as vm'     
    })
    .state('popupconfirmation', {
        url: '/popupconfirmation',
        templateUrl: 'public/donateUs/appointment.html',   
    })
    .state('privacyanduse', {
        url: '/privacyanduse',
        templateUrl: 'public/terms-and-policy/termAndService.html', 
    })     
    .state('privacy', {
        url: '/privacy',
        templateUrl: 'public/donor-privacy.html'
    })
});