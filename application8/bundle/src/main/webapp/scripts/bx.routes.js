(function () {
    'use strict';

    angular.module('com.vyomlabs8.application8').config(function ($stateProvider) {
        $stateProvider.state('bx', {
            parent: 'rx.viewport',
            template: '<ui-view/>'
        });
    });
})();
