(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.Chatbot')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Chatbot',
                group: 'Sample Library Components',
                icon: 'clock_o',
                type: 'com-example-samplelibrary-Chatbot',  // the name of runtime directive
                designType: 'com-example-samplelibrary-Chatbot-design', // register design directive
                bundleId: 'com.example.samplelibrary',

               // define component properties
                propertiesByName: [
                    {
                        name: 'Colour',
                        isConfig: true,
                        type: 'string'

                    }

                ]
            };

            rxViewComponentProvider.registerComponent(starRatingDescriptor);
        });
})();