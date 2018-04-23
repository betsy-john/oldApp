angular.module('oldApp', []);
angular.module('oldApp').config(function ($stateProvider, $urlRouterProvider, $httpProvider, localStorageServiceProvider, $locationProvider, CacheFactoryProvider, $compileProvider, LightboxProvider, SETTINGS) {

    $stateProvider
    .state('main', {
        abstract: true,
        templateUrl: 'views/layouts/main.html',
        controller: 'MainCtrl'
    })
    .state('login', {
        url: '/login',
        controller: 'LoginCtrl',
        templateUrl: 'donor-login.html'
    })
});