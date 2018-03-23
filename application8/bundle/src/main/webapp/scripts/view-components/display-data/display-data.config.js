(function () {
    'use strict';

    angular.module('com.vyomlabs8.application8.view-components.display-data')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Fetch Data',
                group: 'Vyom Components',
                icon: 'database_o',
                type: 'com-vyomlabs8-application8-display-data',  // the name of runtime directive
                designType: 'com-vyomlabs8-application8-display-data-design', // register design directive
                designManagerService: 'comvyomlabs8application8DisplayDataDesign',
                bundleId: 'com.vyomlabs8.application8',

                // define component input parameters
                propertiesByName: [
                    {
                        name: 'recordDefinitionName',
                        isConfig: true,
                        type: "string",
                        isRequired: true
                    },
                    {
                        name: 'fieldIdToDisplay',
                        isConfig: true,
                        type: "string",
                        isRequired: false
                    },
                    {
                        name: 'fieldLabelToDisplay',
                        isConfig: true,
                        type: "string",
                        isRequired: true
                    }
                ]
            };

            rxViewComponentProvider.registerComponent(starRatingDescriptor);
        });
})();