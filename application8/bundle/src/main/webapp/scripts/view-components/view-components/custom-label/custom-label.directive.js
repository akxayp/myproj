(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.custom-label').directive('comExampleSamplelibraryCustomLabel',
        function (rxViewComponentEventManager) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/custom-label/com-example-samplelibrary-custom-label.directive.html',

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
                        window.location = "https://developer6095.innovate.bmc.com/com.bmc.arsys.rx.innovationstudio/index.html#/app/view/com.example.samplelibrary:helloworld"+$scope.Text;
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