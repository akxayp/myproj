(function () {
    'use strict';

    angular.module('com.vyomlabs8.application8.view-components.display-associated-data').directive('comvyomlabs8application8DisplayDataDesign', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/display-data/com-vyomlabs8-application8-display-data-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();