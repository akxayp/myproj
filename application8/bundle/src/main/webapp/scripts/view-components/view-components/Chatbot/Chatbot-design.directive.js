(function () {
    'use strict';
    
    angular.module('com.example.samplelibrary.view-components.Chatbot')
        .directive('comExampleSamplelibraryChatbotDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/Chatbot/com-example-samplelibrary-Chatbot-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();