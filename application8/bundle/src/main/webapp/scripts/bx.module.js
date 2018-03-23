(function () {
    'use strict';

    angular.module('com.vyomlabs8.application8', [
        'ngSanitize',
        'ui.router',
        // all modules that provide non-abstract navigation routes
        'com.vyomlabs8.application8.home',
        'com.vyomlabs8.application8-ext',
        'com.vyomlabs8.application8.view-components.custom-label', // custom label.
        'com.vyomlabs8.application8.view-components.display-data'
    ]);
})();
