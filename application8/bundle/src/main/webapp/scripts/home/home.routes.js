(function () {
    'use strict';

    angular.module('com.vyomlabs8.application8.home').config(function ($stateProvider) {
        $stateProvider.state('bx.home', {
            url: '/home',
            templateUrl: 'scripts/home/home.view.html',
            controller: 'HomeController'
        });
    });
})();
