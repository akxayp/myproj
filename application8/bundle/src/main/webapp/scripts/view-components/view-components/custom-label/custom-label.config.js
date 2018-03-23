(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.custom-label')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Custom Label',
                group: 'Sample Library Components',
                icon: 'word_square',
                type: 'com-example-samplelibrary-custom-label',  // the name of runtime directive
                designType: 'com-example-samplelibrary-custom-label-design', // register design directive
                bundleId: 'com.example.samplelibrary',

                // define component properties
                propertiesByName: [
                    {
                        name: 'Colour',
                        isConfig: true,
                        type: 'string'

                    },
                    {
                        name: 'Height',
                        isConfig: true,
                        type: 'string'

                    },
                    {
                        name: 'Width',
                        isConfig: true,
                        type: 'string'

                    },
                    {
                        name: 'Icon',
                        isConfig: true,
                        type: 'string'

                    },
                    {
                        name: 'ImgHeight',
                        isConfig: true,
                        type: 'string'

                    },
                    {
                        name: 'ImgWidth',
                        isConfig: true,
                        type: 'string'

                    },
                    {
                        name: 'Text',
                        isConfig: true,
                        type: 'string'

                    },
                    {
                        name: 'outputParameter',
                        isConfig: false,
                        isProperty: true
                    }
                ]
            };

            rxViewComponentProvider.registerComponent(starRatingDescriptor);
        });
})();