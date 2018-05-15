angular.module('oldApp', ['ui.router', 'ngMaterial', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
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
    .state('edit', {
        url: '/edit',
        templateUrl: 'profile/edit-profile.html',
    })
    .state('aboutus', {
        url: '/aboutus',
        templateUrl: 'header/about-us.html', 
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
        controller:'signUp as vm',
    })
    .state('registered', {
        url: '/registered/:userName',
        templateUrl: 'login/userReg.html',  
        controller: 'userReg'     
    })
    .state('gallery', {
        url: '/gallery',
        templateUrl: 'header/gallery.html',
    })
    .state('videomenu', {
        url: '/videomenu',
        templateUrl: 'header/video.html',
    })
    .state('charity', {
        url: '/charity',
        templateUrl: 'donation.html',
    })
    .state('fillupform', {
        url: '/fillupform',
        templateUrl: 'donateUs/fillUpform.html',
    })
    .state('memberlist', {
        url: '/memberlist',
        templateUrl: 'donateUs/WhoAllWants.html',
        controller:'whoAllWants'
    })
    .state('appointment', {
        url: '/appointment',
        templateUrl: 'donateUs/appointment.html', 
        controller: 'appointment as vm'     
    })
    .state('popupconfirmation', {
        url: '/popupconfirmation',
        templateUrl: 'donateUs/appointment.html',   
    })
    .state('privacyanduse', {
        url: '/privacyanduse',
        templateUrl: 'terms-and-policy/termAndService.html', 
    })     
    .state('privacy', {
        url: '/privacy/:userName',
        templateUrl: 'donor-privacy.html',
        controller:'privacyCtrl'
    })
    .state('fillupformforblood', {
        url: '/fillupformforblood',
        templateUrl: 'NeedBank/fillupFormBlood.html'
    })
    .state('addMember', {
        url: '/addMember',
        templateUrl: 'NeedBank/addMember.html',
        controller: 'addMember'   
    })
    .state('adminProfile', {
        url: '/adminProfile',
        templateUrl: 'admin.html',
        controller: 'adminCtrl'     
    })
});