(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.Chatbot').directive('comExampleSamplelibraryChatbot',
        function (rxViewComponentEventManager) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/Chatbot/com-example-samplelibrary-Chatbot.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                   var _config;
                   var eventManager = rxViewComponentEventManager.getInstance($scope);

                   // Getting the view component input parameters
                    _config = $scope.rxConfiguration.propertiesByName;

                    $scope.Colour = _config.Colour;
                    $scope.Height = _config.Height;
                    $scope.Width = _config.Width;
                    $scope.ImgHeight = _config.ImgHeight;
                    $scope.ImgWidth = _config.ImgWidth;
                    $scope.Text = _config.Text;
                    $scope.Icon = _config.Icon;

                    $scope.myFunction = function(){
                        window.location = "http://mobility228-bis.trybmc.com/com.bmc.dsm.chatbot/index.html#";
                    }
                    // $scope.displayOutputParameter = _config.inputParameter + ', hello world';
                    //
                    // eventManager.propertyChanged({
                    //     property: 'outputParameter',
                    //     oldValue: null,
                    //     newValue: $scope.displayOutputParameter
                    // });
                }
            };
        });
})();