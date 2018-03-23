/*
 This view component is designed to display the available icons that a Developer might use
 for his view component or service for example.
 */
(function () {
    'use strict';
    angular.module('com.example.samplelibrary.view-components.bmc-css-icons', [
        'com.bmc.arsys.rx.standardlib.view-component'
    ]);
})();
/*
 This view component is designed call a custom javascript action from
 Javascript rather than the UI.
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.call-action', [
        'com.bmc.arsys.rx.standardlib.view-component'
    ]);
})();
/*
 This view component is a simple example how to get input parameters from design phase and display it at runtime.
 */
(function () {
    'use strict';
    
    angular.module('com.example.samplelibrary.view-components.Chatbot', [
        'com.bmc.arsys.rx.standardlib.view-component'
    ]);
})();
/*
 This view component is a simple example how to get input parameters from design phase and display it at runtime.
 */
(function () {
    'use strict';
    
    angular.module('com.example.samplelibrary.view-components.custom-label', [
        'com.bmc.arsys.rx.standardlib.view-component'
    ]);
})();
/*
 This view component is designed to display a record definition associated data from
 another record definition, using OOTB BMC Javascript APIs.
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-associated-data', [
        'com.bmc.arsys.rx.standardlib.view-component',
        'com.bmc.arsys.rx.standardlib.record.definition',
        'com.bmc.arsys.rx.standardlib.record.instance' // contains rxRecordInstanceResource resource
    ]);
})();
/*
 This view component is designed to display a record definition data,
 using OOTB BMC Javascript APIs.
 */
(function () {
    'use strict';

    angular.module('com.vyomlabs8.application8.view-components.display-data', [
        'com.bmc.arsys.rx.standardlib.view-component',
        'com.bmc.arsys.rx.standardlib.record.definition',
        'com.bmc.arsys.rx.standardlib.record.instance' // contains rxRecordInstanceResource resource
    ]);
})();
/*
 This view component is designed to display in an image HTML tag (img) a picture saved in an attachment field.
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-pic-in-attachment', [
        'com.bmc.arsys.rx.standardlib.security',
        'com.bmc.arsys.rx.standardlib.view-component',
        'com.bmc.arsys.rx.standardlib.record.definition',
        'com.bmc.arsys.rx.standardlib.record.instance' // contains rxRecordInstanceResource resource
    ]);
})();
/*
 This view component is designed to get a date.
 It shows also how to integrate a View Component within a record editor
 and to handle the "Refresh" Action.
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.get-date', [
        'com.bmc.arsys.rx.standardlib.view-component'
    ]);
})();
/*
 This view component is designed to do a simple calculation based on two input parameters and return a value
 in an output parameter.
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.price-calculator', [
        'com.bmc.arsys.rx.standardlib.view-component'
    ]);
})();
/*
 This view component is designed to do a simple calculation based on two input parameters of selection type and return a value
 in an output parameter to feed a selection type field.
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.priority-calculator', [
        'com.bmc.arsys.rx.standardlib.security',
        'com.bmc.arsys.rx.standardlib.view-component'
    ]);
})();
/*
 This view component shows how to call a Java Custom Rest API or Command.
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.rest-command', [
        'com.bmc.arsys.rx.standardlib.view-component'
    ]);
})();
/*
 This view component is designed to be a star rating system.
 You can define many parameters in design phase using helpers (slider, color pickers).
 The result will be available inside an output parameter.
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-click-rating', [
        'com.bmc.arsys.rx.standardlib.view-component',
        'com.bmc.arsys.rx.standardlib.record.definition',
        'com.bmc.arsys.rx.standardlib.record.instance', // contains rxRecordInstanceResource resource
        'rzModule',             //For slider
        'ui.bootstrap',         //For slider
        'colorpicker.module'    //For color picker
    ]);
})();
/*
 This view component is designed to be a star rating system.
 The number of stars defined at design phase in the input parameter will be displayed
 at design phase in the canvas.
 This view component will directly update a record in a record definition.
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-rating', [
        'com.bmc.arsys.rx.standardlib.view-component',
        'com.bmc.arsys.rx.standardlib.record.definition',
        'com.bmc.arsys.rx.standardlib.record.instance' // contains rxRecordInstanceResource resource
    ]);
})();
/*
 This is just a test
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.test-vc', [
        'com.bmc.arsys.rx.standardlib.view-component'
    ]);
})();
/*
 This view component is designed to display the available icons that a Developer might use
 for his view component or service for example.
 */
(function () {
    'use strict';
    angular.module('com.example.samplelibrary.view-components.bmc-css-icons', [
        'com.bmc.arsys.rx.standardlib.view-component'
    ]);
})();
/*
 This view component is designed call a custom javascript action from
 Javascript rather than the UI.
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.call-action', [
        'com.bmc.arsys.rx.standardlib.view-component'
    ]);
})();
/*
 This view component is a simple example how to get input parameters from design phase and display it at runtime.
 */
(function () {
    'use strict';
    
    angular.module('com.example.samplelibrary.view-components.Chatbot', [
        'com.bmc.arsys.rx.standardlib.view-component'
    ]);
})();
/*
 This view component is a simple example how to get input parameters from design phase and display it at runtime.
 */
(function () {
    'use strict';
    
    angular.module('com.example.samplelibrary.view-components.custom-label', [
        'com.bmc.arsys.rx.standardlib.view-component'
    ]);
})();
/*
 This view component is designed to display a record definition associated data from
 another record definition, using OOTB BMC Javascript APIs.
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-associated-data', [
        'com.bmc.arsys.rx.standardlib.view-component',
        'com.bmc.arsys.rx.standardlib.record.definition',
        'com.bmc.arsys.rx.standardlib.record.instance' // contains rxRecordInstanceResource resource
    ]);
})();
/*
 This view component is designed to display a record definition data,
 using OOTB BMC Javascript APIs.
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-data', [
        'com.bmc.arsys.rx.standardlib.view-component',
        'com.bmc.arsys.rx.standardlib.record.definition',
        'com.bmc.arsys.rx.standardlib.record.instance' // contains rxRecordInstanceResource resource
    ]);
})();
/*
 This view component is designed to display in an image HTML tag (img) a picture saved in an attachment field.
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-pic-in-attachment', [
        'com.bmc.arsys.rx.standardlib.security',
        'com.bmc.arsys.rx.standardlib.view-component',
        'com.bmc.arsys.rx.standardlib.record.definition',
        'com.bmc.arsys.rx.standardlib.record.instance' // contains rxRecordInstanceResource resource
    ]);
})();
/*
 This view component is designed to get a date.
 It shows also how to integrate a View Component within a record editor
 and to handle the "Refresh" Action.
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.get-date', [
        'com.bmc.arsys.rx.standardlib.view-component'
    ]);
})();
/*
 This view component is designed to do a simple calculation based on two input parameters and return a value
 in an output parameter.
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.price-calculator', [
        'com.bmc.arsys.rx.standardlib.view-component'
    ]);
})();
/*
 This view component is designed to do a simple calculation based on two input parameters of selection type and return a value
 in an output parameter to feed a selection type field.
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.priority-calculator', [
        'com.bmc.arsys.rx.standardlib.security',
        'com.bmc.arsys.rx.standardlib.view-component'
    ]);
})();
/*
 This view component shows how to call a Java Custom Rest API or Command.
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.rest-command', [
        'com.bmc.arsys.rx.standardlib.view-component'
    ]);
})();
/*
 This view component is designed to be a star rating system.
 You can define many parameters in design phase using helpers (slider, color pickers).
 The result will be available inside an output parameter.
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-click-rating', [
        'com.bmc.arsys.rx.standardlib.view-component',
        'com.bmc.arsys.rx.standardlib.record.definition',
        'com.bmc.arsys.rx.standardlib.record.instance', // contains rxRecordInstanceResource resource
        'rzModule',             //For slider
        'ui.bootstrap',         //For slider
        'colorpicker.module'    //For color picker
    ]);
})();
/*
 This view component is designed to be a star rating system.
 The number of stars defined at design phase in the input parameter will be displayed
 at design phase in the canvas.
 This view component will directly update a record in a record definition.
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-rating', [
        'com.bmc.arsys.rx.standardlib.view-component',
        'com.bmc.arsys.rx.standardlib.record.definition',
        'com.bmc.arsys.rx.standardlib.record.instance' // contains rxRecordInstanceResource resource
    ]);
})();
/*
 This is just a test
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.test-vc', [
        'com.bmc.arsys.rx.standardlib.view-component'
    ]);
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.bmc-css-icons')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Available Icons',
                    group: 'Sample Library Components',
                    icon: 'parallelogram_css',
                    type: 'com-example-samplelibrary-bmc-css-icons',
                    designType: 'com-example-samplelibrary-bmc-css-icons-design',
                    bundleId: 'com.example.samplelibrary',
                    propertiesByName: [
                        {}
                    ]
                }
            ]);
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.call-action')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Call Js Action',
                    group: 'Sample Library Components',
                    icon: 'gear',
                    type: 'com-example-samplelibrary-call-action',
                    designType: 'com-example-samplelibrary-call-action-design',
                    bundleId: 'com.example.samplelibrary',
                    propertiesByName: []
                }
            ]);
        });
})();
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
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-associated-data')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Display Associated Data with Js',
                group: 'Sample Library Components',
                icon: 'storage_database',
                type: 'com-example-samplelibrary-display-associated-data',  // the name of runtime directive
                designType: 'com-example-samplelibrary-display-associated-data-design', // register design directive
                bundleId: 'com.example.samplelibrary',

                // define component properties
                propertiesByName: [
                    {
                        name: 'fieldIdToDisplay',
                        isConfig: true,
                        type: "string",
                        isRequired: true
                    },
                    {
                        name: 'fieldLabelToDisplay',
                        isConfig: true,
                        type: "string",
                        isRequired: true
                    },
                    {
                        name: 'recordInstanceId',
                        isConfig: true,
                        isRequired: true,
                        enableExpressionEvaluation: true    //  the property will be automatically evaluated at runtime and passed to the runtime directive
                    },
                    {
                        name: 'AssociationName',
                        isConfig: true,
                        isRequired: true,
                        enableExpressionEvaluation: false    //  the property will be not be automatically evaluated at runtime and passed to the runtime directive
                    }
                ]
            };

            rxViewComponentProvider.registerComponent(starRatingDescriptor);
        });
})();
(function () {
    'use strict';

    angular.module('com.vyomlabs8.application8.view-components.display-data')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Fetch Data',
                group: 'Sample Library Components',
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
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-pic-in-attachment').config(function (rxViewComponentProvider) {
        rxViewComponentProvider.registerComponent([
            {
                name: 'Display picture from Attachment',
                group: 'Sample Library Components',
                icon: 'image_square',
                type: 'com-example-smart-samplelibrary-display-pic-in-attachment',
                designType: 'com-example-samplelibrary-display-pic-in-attachment-design',
                bundleId: 'com.example.samplelibrary',
                designManagerService: 'comExampleSamplelibraryDisplayPicInAttachmentDesign',
                propertiesByName: [
                    {
                        name: 'recordDefinitionFullName',
                        type: 'string',
                        isConfig: true,
                        isProperty: false
                    },
                    {
                        name: 'fieldId',
                        type: 'string',
                        isConfig: true,
                        isProperty: false,
                        enableExpressionEvaluation: true
                    },
                    {
                        name: 'recordId',
                        type: 'string',
                        isConfig: true,
                        isProperty: false,
                        enableExpressionEvaluation: true
                    }
                ]
            }
        ]);
    });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.get-date')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Get Date',
                    group: 'Sample Library Components',
                    icon: 'clock_o',
                    type: 'com-example-samplelibrary-get-date',
                    designType: 'com-example-samplelibrary-get-date-design',
                    bundleId: 'com.example.samplelibrary',
                    canBeEmbeddedInRecordEditor: true,  // Can be embedded inside a Record Editor.
                    // hideInDesignerPalette: true, // This would hide the View Component in the View Designer Palette.
                    propertiesByName: [
                        {
                            name: 'dummyInputParameter',    // Not used :)
                            type: 'string',
                            isConfig: true
                        },
                        {
                            name: 'returnedDate',
                            type: 'string',
                            isConfig: false,    //  Will not appear as an input parameter
                            isProperty: true    //  An output parameter
                        }
                    ]
                }
            ]);
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.price-calculator')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Price Calculator',
                    group: 'Sample Library Components',
                    icon: 'tag_dollar',
                    type: 'com-example-samplelibrary-price-calculator',
                    designType: 'com-example-samplelibrary-price-calculator-design',
                    bundleId: 'com.example.samplelibrary',
                    propertiesByName: [
                        {
                            name: 'price',
                            type: 'string',
                            isConfig: true, // means input parameter
                            enableExpressionEvaluation: true
                        },
                        {
                            name: 'vat',
                            type: 'string',
                            isConfig: true,
                            enableExpressionEvaluation: true
                        },
                        {
                            name: 'priceWithVat',
                            type: 'string',
                            isConfig: false,    //  Will not appear as an input parameter
                            isProperty: true    //  An output parameter
                        }
                    ]
                }
            ]);
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.priority-calculator').config(function (rxViewComponentProvider) {
        rxViewComponentProvider.registerComponent([
            {
                name: 'Priority Calculator',
                group: 'Sample Library Components',
                icon: 'number_square_five',
                type: 'com-example-samplelibrary-priority-calculator',
                designType: 'com-example-samplelibrary-priority-calculator-design',
                bundleId: 'com.example.samplelibrary',
                propertiesByName: [
                    {
                        name: 'urgency',
                        type: 'int',
                        isConfig: true, // Means input parameter
                        isProperty: false,  // Means can be output parameter
                        enableExpressionEvaluation: true
                    },
                    {
                        name: 'impact',
                        type: 'int',
                        isConfig: true,
                        isProperty: false,
                        enableExpressionEvaluation: true
                    },
                    {
                        name: 'priority',
                        type: 'int',
                        isConfig: false,
                        isProperty: true,
                        enableExpressionEvaluation: false
                    }
                ]
            }
        ]);
    });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.rest-command')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Java Rest and Command',
                    group: 'Sample Library Components',
                    icon: 'server_internet',
                    type: 'com-example-samplelibrary-rest-command',
                    designType: 'com-example-samplelibrary-rest-command-design',
                    bundleId: 'com.example.samplelibrary',
                    propertiesByName: [
                        {
                            name: 'username',
                            type: 'string',
                            isConfig: true, // means input parameter
                            enableExpressionEvaluation: true
                        },
                        {
                            name: 'password',
                            type: 'string',
                            isConfig: true,
                            enableExpressionEvaluation: true
                        },
                        {
                            name: 'result',
                            type: 'string',
                            isConfig: false,    //  Will not appear as an input parameter
                            isProperty: true    //  An output parameter
                        }
                    ]
                }
            ]);
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-click-rating')
        .config(function (rxViewComponentProvider) {
            var starRatingClickDescriptor = {
                name: 'Star Rating - Click',
                group: 'Sample Library Components',
                icon: 'star',
                type: 'com-example-samplelibrary-star-click-rating',  // the name of runtime directive
                designType: 'com-example-samplelibrary-star-click-rating-design', // register design directive
                designManagerService: 'comExampleSamplelibraryStarClickRatingDesign',
                bundleId: 'com.example.samplelibrary',
                canBeEmbeddedInRecordEditor: true,

                // define component properties
                propertiesByName: [
                    {
                        name: 'mappingStarValue',
                        isConfig: true,
                        isRequired: true,
                        enableExpressionEvaluation: true
                    },
                    {
                        name: 'maxAmountOfStars',
                        isConfig: true,
                        isRequired: true,
                        defaultValue: "5"
                    },
                    {
                        name: 'defaultValueStars',
                        isConfig: true,
                        isRequired: true,
                        defaultValue: "2"
                    },
                    {
                        name: 'colorStarsSelected',
                        isConfig: true,
                        isRequired: true,
                        defaultValue: '#ff9805'
                    },
                    {
                        name: 'colorStarsNotSelected',
                        isConfig: true,
                        isRequired: true,
                        defaultValue: '#000000'
                    },
                    {
                        name: 'selectedStarValue',
                        isProperty: true        //Output parameter
                    }
                ]
            };

            rxViewComponentProvider.registerComponent(starRatingClickDescriptor);
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-rating')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Star Rating',
                group: 'Sample Library Components',
                icon: 'star',
                type: 'com-example-samplelibrary-star-rating',  // the name of runtime directive
                designType: 'com-example-samplelibrary-star-rating-design', // register design directive
                designManagerService: 'comExampleSamplelibraryStarRatingDesign',
                bundleId: 'com.example.samplelibrary',

                // define component properties
                propertiesByName: [
                    {
                        name: 'recordDefinitionName',
                        isConfig: true,
                        isRequired: true
                    },
                    {
                        name: 'recordInstanceId',
                        isConfig: true,
                        isRequired: true,
                        enableExpressionEvaluation: true    //  the property will be automatically evaluated at runtime and passed to the runtime directive
                    },
                    {
                        name: 'fieldId',
                        isConfig: true,
                        isRequired: true
                    },
                    {
                        name: 'stars',
                        isConfig: true,
                        isProperty: true,    // property will be available for building expressions
                        isRequired: true,
                        defaultValue: '5'
                    }
                ]
            };

            rxViewComponentProvider.registerComponent(starRatingDescriptor);
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.test-vc')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Test View Component',
                group: 'Sample Library Components',
                icon: 'word_square',
                type: 'com-example-samplelibrary-test-vc',  // the name of runtime directive
                designType: 'com-example-samplelibrary-test-vc-design', // register design directive
                bundleId: 'com.example.samplelibrary',

                // define component properties
                propertiesByName: [
                    {
                        name: 'inputParameter',
                        isConfig: true,
                        type: 'string',
                        isRequired: true
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
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.bmc-css-icons')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Available Icons',
                    group: 'Sample Library Components',
                    icon: 'parallelogram_css',
                    type: 'com-example-samplelibrary-bmc-css-icons',
                    designType: 'com-example-samplelibrary-bmc-css-icons-design',
                    bundleId: 'com.example.samplelibrary',
                    propertiesByName: [
                        {}
                    ]
                }
            ]);
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.call-action')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Call Js Action',
                    group: 'Sample Library Components',
                    icon: 'gear',
                    type: 'com-example-samplelibrary-call-action',
                    designType: 'com-example-samplelibrary-call-action-design',
                    bundleId: 'com.example.samplelibrary',
                    propertiesByName: []
                }
            ]);
        });
})();
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
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-associated-data')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Display Associated Data with Js',
                group: 'Sample Library Components',
                icon: 'storage_database',
                type: 'com-example-samplelibrary-display-associated-data',  // the name of runtime directive
                designType: 'com-example-samplelibrary-display-associated-data-design', // register design directive
                bundleId: 'com.example.samplelibrary',

                // define component properties
                propertiesByName: [
                    {
                        name: 'fieldIdToDisplay',
                        isConfig: true,
                        type: "string",
                        isRequired: true
                    },
                    {
                        name: 'fieldLabelToDisplay',
                        isConfig: true,
                        type: "string",
                        isRequired: true
                    },
                    {
                        name: 'recordInstanceId',
                        isConfig: true,
                        isRequired: true,
                        enableExpressionEvaluation: true    //  the property will be automatically evaluated at runtime and passed to the runtime directive
                    },
                    {
                        name: 'AssociationName',
                        isConfig: true,
                        isRequired: true,
                        enableExpressionEvaluation: false    //  the property will be not be automatically evaluated at runtime and passed to the runtime directive
                    }
                ]
            };

            rxViewComponentProvider.registerComponent(starRatingDescriptor);
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-data')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Display Data using Javascript',
                group: 'Sample Library Components',
                icon: 'database_o',
                type: 'com-example-samplelibrary-display-data',  // the name of runtime directive
                designType: 'com-example-samplelibrary-display-data-design', // register design directive
                designManagerService: 'comExampleSamplelibraryDisplayDataDesign',
                bundleId: 'com.example.samplelibrary',

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
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-pic-in-attachment').config(function (rxViewComponentProvider) {
        rxViewComponentProvider.registerComponent([
            {
                name: 'Display picture from Attachment',
                group: 'Sample Library Components',
                icon: 'image_square',
                type: 'com-example-smart-samplelibrary-display-pic-in-attachment',
                designType: 'com-example-samplelibrary-display-pic-in-attachment-design',
                bundleId: 'com.example.samplelibrary',
                designManagerService: 'comExampleSamplelibraryDisplayPicInAttachmentDesign',
                propertiesByName: [
                    {
                        name: 'recordDefinitionFullName',
                        type: 'string',
                        isConfig: true,
                        isProperty: false
                    },
                    {
                        name: 'fieldId',
                        type: 'string',
                        isConfig: true,
                        isProperty: false,
                        enableExpressionEvaluation: true
                    },
                    {
                        name: 'recordId',
                        type: 'string',
                        isConfig: true,
                        isProperty: false,
                        enableExpressionEvaluation: true
                    }
                ]
            }
        ]);
    });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.get-date')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Get Date',
                    group: 'Sample Library Components',
                    icon: 'clock_o',
                    type: 'com-example-samplelibrary-get-date',
                    designType: 'com-example-samplelibrary-get-date-design',
                    bundleId: 'com.example.samplelibrary',
                    canBeEmbeddedInRecordEditor: true,  // Can be embedded inside a Record Editor.
                    // hideInDesignerPalette: true, // This would hide the View Component in the View Designer Palette.
                    propertiesByName: [
                        {
                            name: 'dummyInputParameter',    // Not used :)
                            type: 'string',
                            isConfig: true
                        },
                        {
                            name: 'returnedDate',
                            type: 'string',
                            isConfig: false,    //  Will not appear as an input parameter
                            isProperty: true    //  An output parameter
                        }
                    ]
                }
            ]);
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.price-calculator')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Price Calculator',
                    group: 'Sample Library Components',
                    icon: 'tag_dollar',
                    type: 'com-example-samplelibrary-price-calculator',
                    designType: 'com-example-samplelibrary-price-calculator-design',
                    bundleId: 'com.example.samplelibrary',
                    propertiesByName: [
                        {
                            name: 'price',
                            type: 'string',
                            isConfig: true, // means input parameter
                            enableExpressionEvaluation: true
                        },
                        {
                            name: 'vat',
                            type: 'string',
                            isConfig: true,
                            enableExpressionEvaluation: true
                        },
                        {
                            name: 'priceWithVat',
                            type: 'string',
                            isConfig: false,    //  Will not appear as an input parameter
                            isProperty: true    //  An output parameter
                        }
                    ]
                }
            ]);
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.priority-calculator').config(function (rxViewComponentProvider) {
        rxViewComponentProvider.registerComponent([
            {
                name: 'Priority Calculator',
                group: 'Sample Library Components',
                icon: 'number_square_five',
                type: 'com-example-samplelibrary-priority-calculator',
                designType: 'com-example-samplelibrary-priority-calculator-design',
                bundleId: 'com.example.samplelibrary',
                propertiesByName: [
                    {
                        name: 'urgency',
                        type: 'int',
                        isConfig: true, // Means input parameter
                        isProperty: false,  // Means can be output parameter
                        enableExpressionEvaluation: true
                    },
                    {
                        name: 'impact',
                        type: 'int',
                        isConfig: true,
                        isProperty: false,
                        enableExpressionEvaluation: true
                    },
                    {
                        name: 'priority',
                        type: 'int',
                        isConfig: false,
                        isProperty: true,
                        enableExpressionEvaluation: false
                    }
                ]
            }
        ]);
    });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.rest-command')
        .config(function (rxViewComponentProvider) {
            rxViewComponentProvider.registerComponent([
                {
                    name: 'Java Rest and Command',
                    group: 'Sample Library Components',
                    icon: 'server_internet',
                    type: 'com-example-samplelibrary-rest-command',
                    designType: 'com-example-samplelibrary-rest-command-design',
                    bundleId: 'com.example.samplelibrary',
                    propertiesByName: [
                        {
                            name: 'username',
                            type: 'string',
                            isConfig: true, // means input parameter
                            enableExpressionEvaluation: true
                        },
                        {
                            name: 'password',
                            type: 'string',
                            isConfig: true,
                            enableExpressionEvaluation: true
                        },
                        {
                            name: 'result',
                            type: 'string',
                            isConfig: false,    //  Will not appear as an input parameter
                            isProperty: true    //  An output parameter
                        }
                    ]
                }
            ]);
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-click-rating')
        .config(function (rxViewComponentProvider) {
            var starRatingClickDescriptor = {
                name: 'Star Rating - Click',
                group: 'Sample Library Components',
                icon: 'star',
                type: 'com-example-samplelibrary-star-click-rating',  // the name of runtime directive
                designType: 'com-example-samplelibrary-star-click-rating-design', // register design directive
                designManagerService: 'comExampleSamplelibraryStarClickRatingDesign',
                bundleId: 'com.example.samplelibrary',
                canBeEmbeddedInRecordEditor: true,

                // define component properties
                propertiesByName: [
                    {
                        name: 'mappingStarValue',
                        isConfig: true,
                        isRequired: true,
                        enableExpressionEvaluation: true
                    },
                    {
                        name: 'maxAmountOfStars',
                        isConfig: true,
                        isRequired: true,
                        defaultValue: "5"
                    },
                    {
                        name: 'defaultValueStars',
                        isConfig: true,
                        isRequired: true,
                        defaultValue: "2"
                    },
                    {
                        name: 'colorStarsSelected',
                        isConfig: true,
                        isRequired: true,
                        defaultValue: '#ff9805'
                    },
                    {
                        name: 'colorStarsNotSelected',
                        isConfig: true,
                        isRequired: true,
                        defaultValue: '#000000'
                    },
                    {
                        name: 'selectedStarValue',
                        isProperty: true        //Output parameter
                    }
                ]
            };

            rxViewComponentProvider.registerComponent(starRatingClickDescriptor);
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-rating')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Star Rating',
                group: 'Sample Library Components',
                icon: 'star',
                type: 'com-example-samplelibrary-star-rating',  // the name of runtime directive
                designType: 'com-example-samplelibrary-star-rating-design', // register design directive
                designManagerService: 'comExampleSamplelibraryStarRatingDesign',
                bundleId: 'com.example.samplelibrary',

                // define component properties
                propertiesByName: [
                    {
                        name: 'recordDefinitionName',
                        isConfig: true,
                        isRequired: true
                    },
                    {
                        name: 'recordInstanceId',
                        isConfig: true,
                        isRequired: true,
                        enableExpressionEvaluation: true    //  the property will be automatically evaluated at runtime and passed to the runtime directive
                    },
                    {
                        name: 'fieldId',
                        isConfig: true,
                        isRequired: true
                    },
                    {
                        name: 'stars',
                        isConfig: true,
                        isProperty: true,    // property will be available for building expressions
                        isRequired: true,
                        defaultValue: '5'
                    }
                ]
            };

            rxViewComponentProvider.registerComponent(starRatingDescriptor);
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.test-vc')
        .config(function (rxViewComponentProvider) {
            var starRatingDescriptor = {
                name: 'Test View Component',
                group: 'Sample Library Components',
                icon: 'word_square',
                type: 'com-example-samplelibrary-test-vc',  // the name of runtime directive
                designType: 'com-example-samplelibrary-test-vc-design', // register design directive
                bundleId: 'com.example.samplelibrary',

                // define component properties
                propertiesByName: [
                    {
                        name: 'inputParameter',
                        isConfig: true,
                        type: 'string',
                        isRequired: true
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
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.rest-command').constant('COM_EXAMPLE_SAMPLE_LIBRARY', {
        testUrl: '/com.example.samplelibrary/hello/world',
        command: 'com.example.command.SimpleCommand'
    });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.rest-command').constant('COM_EXAMPLE_SAMPLE_LIBRARY', {
        testUrl: '/com.example.samplelibrary/hello/world',
        command: 'com.example.command.SimpleCommand'
    });
})();
// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.vyomlabs8.application8.view-components.display-data').factory('comvyomlabs8application8DisplayDataDesign', function (comvyomlabs8application8DisplayDataModel, rxGUID, RX_DEFINITION_PICKER) {
        function getRxConfig(componentDefinition, componentDescriptor) {
            return {
                id: componentDefinition.guid || rxGUID.generate(),
                type: componentDefinition.type,
                rxData: getRxData(componentDefinition, componentDescriptor),
                rxInspector: getRxInspector()
            };
        }

        // Getting configuration defined in Innovation Studio parameters.
        // We can also setup default values.
        function getRxData(componentDefinition, componentDescriptor) {

            return {
                recordDefinitionName: componentDefinition.propertiesByName.recordDefinitionName,
                fieldIdToDisplay: componentDefinition.propertiesByName.fieldIdToDisplay,
                fieldLabelToDisplay: componentDefinition.propertiesByName.fieldLabelToDisplay
            };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {
                        recordDefinitionName: {
                            label: 'Record Definition Name',
                            type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                            group: 'general',
                            index: 1
                        },
                        fieldIdToDisplay: {
                            label: 'Field ID to display',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 2
                        },
                        fieldLabelToDisplay: {
                            label: 'Field Label',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 3
                        }
                    }
                },
                groups: {
                    general: {
                        label: 'General',
                        index: 1
                    }
                }
            };
        }

        return {
            //  should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comvyomlabs8application8DisplayDataModel(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
// This code is run at "design" phase, in Innovation Studio.
// used in "comExampleSamplelibraryDisplayDataDesign" factory.
(function () {
    'use strict';

    angular.module('com.vyomlabs8.application8.view-components.display-data').factory('comvyomlabs8application8DisplayDataModel', function (rxViewComponentModel, rxRecordDefinitionResource) {
        return rxViewComponentModel.extend({
            initialize: function () {
                // launch parent initialize method
                rxViewComponentModel.prototype.initialize.apply(this, arguments);

                // add listener for rxData
                this.listenTo(this, 'change:rxData', this._onChangeRxData);

                this._initRecordDefinition();
            },

            _initRecordDefinition: function () {
                if (this.prop('rxData/recordDefinitionName')) {
                    var me = this;

                    // load Record Definition
                    rxRecordDefinitionResource.get(this.prop('rxData/recordDefinitionName')).then(function (recordDefinition) {
                        me.recordDefinition = recordDefinition;
                    }).catch(function () {
                        me.recordDefinition = null;
                    });
                } else {
                    this.recordDefinition = null;
                }
            },
            _onChangeRxData: function (model, rxData, changedProperty) {
                if (changedProperty.propertyPath === 'rxData/recordDefinitionName') {
                    this._initRecordDefinition();
                }
            }
        });
    });
})();
// This code is run at "design" phase, in Innovation Studio.
// The factory is defined in the "config.js".
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-pic-in-attachment').factory('comExampleSamplelibraryDisplayPicInAttachmentDesign', function (comExampleSamplelibraryDisplayPicInAttachmentModel, rxGUID, RX_DEFINITION_PICKER) {
        function getRxConfig(componentDefinition, componentDescriptor) {
            return {
                id: componentDefinition.guid || rxGUID.generate(),
                type: componentDefinition.type,
                rxData: getRxData(componentDefinition, componentDescriptor),
                rxInspector: getRxInspector()
            };
        }

        // Getting configuration defined in Innovation Studio parameters.
        function getRxData(componentDefinition, componentDescriptor) {
            return {
                recordDefinitionFullName: componentDefinition.propertiesByName.recordDefinitionFullName,
                fieldId: componentDefinition.propertiesByName.fieldId,
                recordId: componentDefinition.propertiesByName.recordId
            };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {
                        recordDefinitionFullName: {
                            label: 'Record Definition Name',
                            type: 'rx-inspector-definition-picker', //  special editor for selecting definitions
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                            group: 'general',
                            index: 1
                        },
                        fieldId: {
                            label: 'Field Id (Attachment Type)',
                            type: 'com-example-samplelibrary-inspector-display-pic-in-attachment-field-select', //  set our directive as editor
                            group: 'general',
                            index: 2
                        },
                        recordId: {
                            label: 'Record Instance ID',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 3
                        }
                    }
                },
                groups: {
                    general: {
                        label: 'General',
                        index: 1
                    }
                }
            };
        }

        return {
            //  should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comExampleSamplelibraryDisplayPicInAttachmentModel(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
// This code is run at "design" phase, in Innovation Studio.
// used in "comExampleSamplelibraryDisplayPicInAttachmentDesign" factory.
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-pic-in-attachment').factory('comExampleSamplelibraryDisplayPicInAttachmentModel', function (rxViewComponentModel, rxRecordDefinitionResource) {
        return rxViewComponentModel.extend({
            initialize: function () {
                // launch parent initialize method
                rxViewComponentModel.prototype.initialize.apply(this, arguments);

                // add listener for rxData
                this.listenTo(this, 'change:rxData', this._onChangeRxData);

                this._initRecordDefinition();
            },

            _initRecordDefinition: function () {
                if (this.prop('rxData/recordDefinitionFullName')) {
                    var me = this;

                    // load Record Definition
                    rxRecordDefinitionResource.get(this.prop('rxData/recordDefinitionFullName')).then(function (recordDefinition) {
                        me.recordDefinitionFullName = recordDefinition;
                    }).catch(function () {
                        me.recordDefinitionFullName = null;
                    });
                } else {
                    this.recordDefinitionFullName = null;
                }
            },

            _onChangeRxData: function (model, rxData, changedProperty) {
                if (changedProperty.propertyPath === 'rxData/recordDefinitionFullName') {
                    this._initRecordDefinition();
                }
            }
        });
    });
})();
/* This code is run at 'design' phase, in Innovation Studio.
The factory is defined in the 'config.js':
*/
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-click-rating').factory('comExampleSamplelibraryStarClickRatingDesign', function (comExampleSamplelibraryStarClickRatingModel, rxGUID, RX_DEFINITION_PICKER) {
        function getRxConfig(componentDefinition, componentDescriptor) {
            return {
                id: componentDefinition.guid || rxGUID.generate(),
                type: componentDefinition.type,
                rxData: getRxData(componentDefinition, componentDescriptor),
                rxInspector: getRxInspector()
            };
        }

        // Getting configuration defined in Innovation Studio parameters.
        // We can also setup default values.
        function getRxData(componentDefinition, componentDescriptor) {
            var defaultMaxAmountOfStars = _.find(componentDescriptor.propertiesByName, {
                name: 'maxAmountOfStars'
            }).defaultValue;

            var defaultDefaultValueStars = _.find(componentDescriptor.propertiesByName, {
                name: 'defaultValueStars'
            }).defaultValue;

            var defaultColorStarsSelected = _.find(componentDescriptor.propertiesByName, {
                name: 'colorStarsSelected'
            }).defaultValue;

            var defaultColorStarsNotSelected = _.find(componentDescriptor.propertiesByName, {
                name: 'colorStarsNotSelected'
            }).defaultValue;

            return {
                mappingStarValue: componentDefinition.propertiesByName.mappingStarValue,
                maxAmountOfStars: componentDefinition.propertiesByName.maxAmountOfStars || defaultMaxAmountOfStars,
                defaultValueStars: componentDefinition.propertiesByName.defaultValueStars || defaultDefaultValueStars,
                colorStarsSelected: componentDefinition.propertiesByName.colorStarsSelected || defaultColorStarsSelected,
                colorStarsNotSelected: componentDefinition.propertiesByName.colorStarsNotSelected || defaultColorStarsNotSelected
            };
        }

        // Defining the parameters types with helper.
        // We "overwrite" the options from the config.js files with those ones.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {
                        mappingStarValue: {
                            label: 'Number of Stars Selected (input)',
                            type: 'rx-inspector-expression-node-field', // Standard Inspector
                            group: 'general',
                            index: 1
                        },
                        maxAmountOfStars: {
                            label: 'Maximum number of stars to display',
                            type: 'com-example-samplelibrary-inspector-star-click-rating-slider-select', // Custom inspector 'comExampleSamplelibraryInspectorStarClickRatingSliderSelect'.
                            group: 'general',
                            index: 2
                        },
                        defaultValueStars: {
                            label: 'Default amount of stars selected',
                            type: 'com-example-samplelibrary-inspector-star-click-rating-default-value', // Custom inspector 'comExampleSamplelibraryInspectorStarClickRatingDefaultValue'.
                            group: 'general',
                            index: 3
                        },
                        colorStarsSelected: {
                            label: 'Color of stars selected',
                            type: 'com-example-samplelibrary-inspector-star-click-rating-color-picker-select', // Custom inspector 'comExampleSamplelibraryInspectorStarClickRatingColorPickerSelect'
                            group: 'general',
                            index: 4
                        },
                        colorStarsNotSelected: {
                            label: 'Color of stars not selected',
                            type: 'com-example-samplelibrary-inspector-star-click-rating-color-picker-select',  // Custom inspector 'comExampleSamplelibraryInspectorStarClickRatingColorPickerSelect'
                            group: 'general',
                            index: 5
                        }
                    }
                },
                groups: {
                    general: {
                        label: 'General',
                        index: 1
                    }
                }
            };
        }

        return {
            //  should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comExampleSamplelibraryStarClickRatingModel(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
//This code is run at "design" phase, in Innovation Studio.
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-click-rating').factory('comExampleSamplelibraryStarClickRatingModel', function (rxViewComponentModel) {
        return rxViewComponentModel.extend({
            initialize: function () {
                // launch parent initialize method
                rxViewComponentModel.prototype.initialize.apply(this, arguments);

                // add listener for rxData
                this.listenTo(this, 'change:rxData', this._onChangeRxData);
            },

            // Validate is used to validate the input entered by an end user.
            // The validation will take place when the view is saved.
            validate: function () {
                var me = this;

                // execute default validation method
                return rxViewComponentModel.prototype.validate.apply(this, arguments).then(function (validationIssues) {
                    // check that the number of stars is at least 4
                    if (me.prop('rxData/maxAmountOfStars') < 4) {
                        validationIssues.push({
                            elementId: me.get('guid'),
                            elementName: 'Star Rating',
                            propertyName: 'maxAmountOfStars',
                            type: 'error',
                            message: 'The number of stars should be greater or equal to 4.'
                        });
                    }

                    return validationIssues;
                });
            }
        });
    });
})();
/*
This code is run at "design" phase, in Innovation Studio.
The factory is defined in the "config.js":
designManagerService: 'comExampleSamplelibraryStarRatingDesign',
*/
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-rating').factory('comExampleSamplelibraryStarRatingDesign', function (comExampleSamplelibraryStarRatingModel, rxGUID, RX_DEFINITION_PICKER) {
        function getRxConfig(componentDefinition, componentDescriptor) {
            return {
                id: componentDefinition.guid || rxGUID.generate(),
                type: componentDefinition.type,
                rxData: getRxData(componentDefinition, componentDescriptor),
                rxInspector: getRxInspector()
            };
        }

        // Getting configuration defined in Innovation Studio parameters.
        // We can also setup default values.
        function getRxData(componentDefinition, componentDescriptor) {
            var defaultStarCount = _.find(componentDescriptor.propertiesByName, {
                name: 'stars'
            }).defaultValue;

            return {
                recordDefinitionName: componentDefinition.propertiesByName.recordDefinitionName,
                recordInstanceId: componentDefinition.propertiesByName.recordInstanceId,
                fieldId: componentDefinition.propertiesByName.fieldId,
                stars: componentDefinition.propertiesByName.stars || Number(defaultStarCount)
            };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {
                        recordDefinitionName: {
                            label: 'Record Definition Name',
                            type: 'rx-inspector-definition-picker', //  special editor for selecting definitions
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                            group: 'general',
                            index: 1
                        },
                        recordInstanceId: {
                            label: 'Record Instance ID',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 2
                        },
                        fieldId: {
                            label: 'Field Id (Integer Type)',
                            // Type defined in "inspector-star-rating-field-select-directive.js"
                            // directive('comExampleSamplelibraryInspectorStarRatingFieldSelect')
                            type: 'com-example-samplelibrary-inspector-star-rating-field-select', //  set our directive as editor
                            group: 'general',
                            index: 3
                        },
                        stars: {
                            label: 'Stars',
                            type: 'number',     //  set number as editor for stars
                            min: 5, //  minimal value
                            group: 'general',
                            index: 4
                        }
                    }
                },
                groups: {
                    general: {
                        label: 'General',
                        index: 1
                    }
                }
            };
        }

        return {
            // should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comExampleSamplelibraryStarRatingModel(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
/*
This code is run at "design" phase, in Innovation Studio.
used in "comExampleSamplelibraryStarRatingDesign" factory (file "star-rating-design-service.js").
*/
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-rating').factory('comExampleSamplelibraryStarRatingModel', function (rxViewComponentModel, rxRecordDefinitionResource) {
        return rxViewComponentModel.extend({
            initialize: function () {
                // launch parent initialize method
                rxViewComponentModel.prototype.initialize.apply(this, arguments);

                // add listener for rxData
                this.listenTo(this, 'change:rxData', this._onChangeRxData);

                this._initRecordDefinition();
            },

            _initRecordDefinition: function () {
                if (this.prop('rxData/recordDefinitionName')) {
                    var me = this;

                    // load Record Definition
                    rxRecordDefinitionResource.get(this.prop('rxData/recordDefinitionName')).then(function (recordDefinition) {
                        me.recordDefinition = recordDefinition;
                    }).catch(function () {
                        me.recordDefinition = null;
                    });
                } else {
                    this.recordDefinition = null;
                }
            },

            // Validate is used to validate the input entered by an end user.
            // The validation will take place when the view is saved.
            validate: function () {
                var me = this;

                // execute default validation method
                return rxViewComponentModel.prototype.validate.apply(this, arguments).then(function (validationIssues) {
                    // check that the number of stars is at least 5
                    if (me.prop('rxData/stars') < 5) {
                        validationIssues.push({
                            elementId: me.get('guid'),
                            elementName: 'Star Rating',
                            propertyName: 'stars',
                            type: 'error',
                            message: 'The number of stars should be greater or equal to 5.'
                        });
                    }

                    return validationIssues;
                });
            },

            _onChangeRxData: function (model, rxData, changedProperty) {
                if (changedProperty.propertyPath === 'rxData/recordDefinitionName') {
                    this._initRecordDefinition();
                }
            }
        });
    });
})();
// This code is run at "design" phase, in Innovation Studio.
// The factory is declared in the "config.js".
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-data').factory('comExampleSamplelibraryDisplayDataDesign', function (comExampleSamplelibraryDisplayDataModel, rxGUID, RX_DEFINITION_PICKER) {
        function getRxConfig(componentDefinition, componentDescriptor) {
            return {
                id: componentDefinition.guid || rxGUID.generate(),
                type: componentDefinition.type,
                rxData: getRxData(componentDefinition, componentDescriptor),
                rxInspector: getRxInspector()
            };
        }

        // Getting configuration defined in Innovation Studio parameters.
        // We can also setup default values.
        function getRxData(componentDefinition, componentDescriptor) {

            return {
                recordDefinitionName: componentDefinition.propertiesByName.recordDefinitionName,
                fieldIdToDisplay: componentDefinition.propertiesByName.fieldIdToDisplay,
                fieldLabelToDisplay: componentDefinition.propertiesByName.fieldLabelToDisplay
            };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {
                        recordDefinitionName: {
                            label: 'Record Definition Name',
                            type: 'rx-inspector-definition-picker', //  special editor for selecting definitions (inspector). This one is an OOTB to pick up a record definition.
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                            group: 'general',
                            index: 1
                        },
                        fieldIdToDisplay: {
                            label: 'Field ID to display',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 2
                        },
                        fieldLabelToDisplay: {
                            label: 'Field Label',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 3
                        }
                    }
                },
                groups: {
                    general: {
                        label: 'General',
                        index: 1
                    }
                }
            };
        }

        return {
            //  should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comExampleSamplelibraryDisplayDataModel(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
// This code is run at "design" phase, in Innovation Studio.
// used in "comExampleSamplelibraryDisplayDataDesign" factory.
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-data').factory('comExampleSamplelibraryDisplayDataModel', function (rxViewComponentModel, rxRecordDefinitionResource) {
        return rxViewComponentModel.extend({
            initialize: function () {
                // launch parent initialize method
                rxViewComponentModel.prototype.initialize.apply(this, arguments);

                // add listener for rxData
                this.listenTo(this, 'change:rxData', this._onChangeRxData);

                this._initRecordDefinition();
            },

            _initRecordDefinition: function () {
                if (this.prop('rxData/recordDefinitionName')) {
                    var me = this;

                    // load Record Definition
                    rxRecordDefinitionResource.get(this.prop('rxData/recordDefinitionName')).then(function (recordDefinition) {
                        me.recordDefinition = recordDefinition;
                    }).catch(function () {
                        me.recordDefinition = null;
                    });
                } else {
                    this.recordDefinition = null;
                }
            },
            _onChangeRxData: function (model, rxData, changedProperty) {
                if (changedProperty.propertyPath === 'rxData/recordDefinitionName') {
                    this._initRecordDefinition();
                }
            }
        });
    });
})();
// This code is run at "design" phase, in Innovation Studio.
// The factory is defined in the "config.js".
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-pic-in-attachment').factory('comExampleSamplelibraryDisplayPicInAttachmentDesign', function (comExampleSamplelibraryDisplayPicInAttachmentModel, rxGUID, RX_DEFINITION_PICKER) {
        function getRxConfig(componentDefinition, componentDescriptor) {
            return {
                id: componentDefinition.guid || rxGUID.generate(),
                type: componentDefinition.type,
                rxData: getRxData(componentDefinition, componentDescriptor),
                rxInspector: getRxInspector()
            };
        }

        // Getting configuration defined in Innovation Studio parameters.
        function getRxData(componentDefinition, componentDescriptor) {
            return {
                recordDefinitionFullName: componentDefinition.propertiesByName.recordDefinitionFullName,
                fieldId: componentDefinition.propertiesByName.fieldId,
                recordId: componentDefinition.propertiesByName.recordId
            };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {
                        recordDefinitionFullName: {
                            label: 'Record Definition Name',
                            type: 'rx-inspector-definition-picker', //  special editor for selecting definitions
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                            group: 'general',
                            index: 1
                        },
                        fieldId: {
                            label: 'Field Id (Attachment Type)',
                            type: 'com-example-samplelibrary-inspector-display-pic-in-attachment-field-select', //  set our directive as editor
                            group: 'general',
                            index: 2
                        },
                        recordId: {
                            label: 'Record Instance ID',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 3
                        }
                    }
                },
                groups: {
                    general: {
                        label: 'General',
                        index: 1
                    }
                }
            };
        }

        return {
            //  should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comExampleSamplelibraryDisplayPicInAttachmentModel(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
// This code is run at "design" phase, in Innovation Studio.
// used in "comExampleSamplelibraryDisplayPicInAttachmentDesign" factory.
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-pic-in-attachment').factory('comExampleSamplelibraryDisplayPicInAttachmentModel', function (rxViewComponentModel, rxRecordDefinitionResource) {
        return rxViewComponentModel.extend({
            initialize: function () {
                // launch parent initialize method
                rxViewComponentModel.prototype.initialize.apply(this, arguments);

                // add listener for rxData
                this.listenTo(this, 'change:rxData', this._onChangeRxData);

                this._initRecordDefinition();
            },

            _initRecordDefinition: function () {
                if (this.prop('rxData/recordDefinitionFullName')) {
                    var me = this;

                    // load Record Definition
                    rxRecordDefinitionResource.get(this.prop('rxData/recordDefinitionFullName')).then(function (recordDefinition) {
                        me.recordDefinitionFullName = recordDefinition;
                    }).catch(function () {
                        me.recordDefinitionFullName = null;
                    });
                } else {
                    this.recordDefinitionFullName = null;
                }
            },

            _onChangeRxData: function (model, rxData, changedProperty) {
                if (changedProperty.propertyPath === 'rxData/recordDefinitionFullName') {
                    this._initRecordDefinition();
                }
            }
        });
    });
})();
/* This code is run at 'design' phase, in Innovation Studio.
The factory is defined in the 'config.js':
*/
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-click-rating').factory('comExampleSamplelibraryStarClickRatingDesign', function (comExampleSamplelibraryStarClickRatingModel, rxGUID, RX_DEFINITION_PICKER) {
        function getRxConfig(componentDefinition, componentDescriptor) {
            return {
                id: componentDefinition.guid || rxGUID.generate(),
                type: componentDefinition.type,
                rxData: getRxData(componentDefinition, componentDescriptor),
                rxInspector: getRxInspector()
            };
        }

        // Getting configuration defined in Innovation Studio parameters.
        // We can also setup default values.
        function getRxData(componentDefinition, componentDescriptor) {
            var defaultMaxAmountOfStars = _.find(componentDescriptor.propertiesByName, {
                name: 'maxAmountOfStars'
            }).defaultValue;

            var defaultDefaultValueStars = _.find(componentDescriptor.propertiesByName, {
                name: 'defaultValueStars'
            }).defaultValue;

            var defaultColorStarsSelected = _.find(componentDescriptor.propertiesByName, {
                name: 'colorStarsSelected'
            }).defaultValue;

            var defaultColorStarsNotSelected = _.find(componentDescriptor.propertiesByName, {
                name: 'colorStarsNotSelected'
            }).defaultValue;

            return {
                mappingStarValue: componentDefinition.propertiesByName.mappingStarValue,
                maxAmountOfStars: componentDefinition.propertiesByName.maxAmountOfStars || defaultMaxAmountOfStars,
                defaultValueStars: componentDefinition.propertiesByName.defaultValueStars || defaultDefaultValueStars,
                colorStarsSelected: componentDefinition.propertiesByName.colorStarsSelected || defaultColorStarsSelected,
                colorStarsNotSelected: componentDefinition.propertiesByName.colorStarsNotSelected || defaultColorStarsNotSelected
            };
        }

        // Defining the parameters types with helper.
        // We "overwrite" the options from the config.js files with those ones.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {
                        mappingStarValue: {
                            label: 'Number of Stars Selected (input)',
                            type: 'rx-inspector-expression-node-field', // Standard Inspector
                            group: 'general',
                            index: 1
                        },
                        maxAmountOfStars: {
                            label: 'Maximum number of stars to display',
                            type: 'com-example-samplelibrary-inspector-star-click-rating-slider-select', // Custom inspector 'comExampleSamplelibraryInspectorStarClickRatingSliderSelect'.
                            group: 'general',
                            index: 2
                        },
                        defaultValueStars: {
                            label: 'Default amount of stars selected',
                            type: 'com-example-samplelibrary-inspector-star-click-rating-default-value', // Custom inspector 'comExampleSamplelibraryInspectorStarClickRatingDefaultValue'.
                            group: 'general',
                            index: 3
                        },
                        colorStarsSelected: {
                            label: 'Color of stars selected',
                            type: 'com-example-samplelibrary-inspector-star-click-rating-color-picker-select', // Custom inspector 'comExampleSamplelibraryInspectorStarClickRatingColorPickerSelect'
                            group: 'general',
                            index: 4
                        },
                        colorStarsNotSelected: {
                            label: 'Color of stars not selected',
                            type: 'com-example-samplelibrary-inspector-star-click-rating-color-picker-select',  // Custom inspector 'comExampleSamplelibraryInspectorStarClickRatingColorPickerSelect'
                            group: 'general',
                            index: 5
                        }
                    }
                },
                groups: {
                    general: {
                        label: 'General',
                        index: 1
                    }
                }
            };
        }

        return {
            //  should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comExampleSamplelibraryStarClickRatingModel(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
//This code is run at "design" phase, in Innovation Studio.
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-click-rating').factory('comExampleSamplelibraryStarClickRatingModel', function (rxViewComponentModel) {
        return rxViewComponentModel.extend({
            initialize: function () {
                // launch parent initialize method
                rxViewComponentModel.prototype.initialize.apply(this, arguments);

                // add listener for rxData
                this.listenTo(this, 'change:rxData', this._onChangeRxData);
            },

            // Validate is used to validate the input entered by an end user.
            // The validation will take place when the view is saved.
            validate: function () {
                var me = this;

                // execute default validation method
                return rxViewComponentModel.prototype.validate.apply(this, arguments).then(function (validationIssues) {
                    // check that the number of stars is at least 4
                    if (me.prop('rxData/maxAmountOfStars') < 4) {
                        validationIssues.push({
                            elementId: me.get('guid'),
                            elementName: 'Star Rating',
                            propertyName: 'maxAmountOfStars',
                            type: 'error',
                            message: 'The number of stars should be greater or equal to 4.'
                        });
                    }

                    return validationIssues;
                });
            }
        });
    });
})();
/*
This code is run at "design" phase, in Innovation Studio.
The factory is defined in the "config.js":
designManagerService: 'comExampleSamplelibraryStarRatingDesign',
*/
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-rating').factory('comExampleSamplelibraryStarRatingDesign', function (comExampleSamplelibraryStarRatingModel, rxGUID, RX_DEFINITION_PICKER) {
        function getRxConfig(componentDefinition, componentDescriptor) {
            return {
                id: componentDefinition.guid || rxGUID.generate(),
                type: componentDefinition.type,
                rxData: getRxData(componentDefinition, componentDescriptor),
                rxInspector: getRxInspector()
            };
        }

        // Getting configuration defined in Innovation Studio parameters.
        // We can also setup default values.
        function getRxData(componentDefinition, componentDescriptor) {
            var defaultStarCount = _.find(componentDescriptor.propertiesByName, {
                name: 'stars'
            }).defaultValue;

            return {
                recordDefinitionName: componentDefinition.propertiesByName.recordDefinitionName,
                recordInstanceId: componentDefinition.propertiesByName.recordInstanceId,
                fieldId: componentDefinition.propertiesByName.fieldId,
                stars: componentDefinition.propertiesByName.stars || Number(defaultStarCount)
            };
        }

        // Defining the parameters types with helper.
        function getRxInspector() {
            return {
                inputs: {
                    rxData: {
                        recordDefinitionName: {
                            label: 'Record Definition Name',
                            type: 'rx-inspector-definition-picker', //  special editor for selecting definitions
                            definitionType: RX_DEFINITION_PICKER.definitionTypes.regularRecord.type, //  define which definition user can select
                            group: 'general',
                            index: 1
                        },
                        recordInstanceId: {
                            label: 'Record Instance ID',
                            type: 'rx-inspector-expression-node-field',
                            group: 'general',
                            index: 2
                        },
                        fieldId: {
                            label: 'Field Id (Integer Type)',
                            // Type defined in "inspector-star-rating-field-select-directive.js"
                            // directive('comExampleSamplelibraryInspectorStarRatingFieldSelect')
                            type: 'com-example-samplelibrary-inspector-star-rating-field-select', //  set our directive as editor
                            group: 'general',
                            index: 3
                        },
                        stars: {
                            label: 'Stars',
                            type: 'number',     //  set number as editor for stars
                            min: 5, //  minimal value
                            group: 'general',
                            index: 4
                        }
                    }
                },
                groups: {
                    general: {
                        label: 'General',
                        index: 1
                    }
                }
            };
        }

        return {
            // should return a model instance
            getModel: function (componentDefinition, componentDescriptor) {
                return new comExampleSamplelibraryStarRatingModel(getRxConfig(componentDefinition, componentDescriptor));
            }
        };
    });
})();
/*
This code is run at "design" phase, in Innovation Studio.
used in "comExampleSamplelibraryStarRatingDesign" factory (file "star-rating-design-service.js").
*/
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-rating').factory('comExampleSamplelibraryStarRatingModel', function (rxViewComponentModel, rxRecordDefinitionResource) {
        return rxViewComponentModel.extend({
            initialize: function () {
                // launch parent initialize method
                rxViewComponentModel.prototype.initialize.apply(this, arguments);

                // add listener for rxData
                this.listenTo(this, 'change:rxData', this._onChangeRxData);

                this._initRecordDefinition();
            },

            _initRecordDefinition: function () {
                if (this.prop('rxData/recordDefinitionName')) {
                    var me = this;

                    // load Record Definition
                    rxRecordDefinitionResource.get(this.prop('rxData/recordDefinitionName')).then(function (recordDefinition) {
                        me.recordDefinition = recordDefinition;
                    }).catch(function () {
                        me.recordDefinition = null;
                    });
                } else {
                    this.recordDefinition = null;
                }
            },

            // Validate is used to validate the input entered by an end user.
            // The validation will take place when the view is saved.
            validate: function () {
                var me = this;

                // execute default validation method
                return rxViewComponentModel.prototype.validate.apply(this, arguments).then(function (validationIssues) {
                    // check that the number of stars is at least 5
                    if (me.prop('rxData/stars') < 5) {
                        validationIssues.push({
                            elementId: me.get('guid'),
                            elementName: 'Star Rating',
                            propertyName: 'stars',
                            type: 'error',
                            message: 'The number of stars should be greater or equal to 5.'
                        });
                    }

                    return validationIssues;
                });
            },

            _onChangeRxData: function (model, rxData, changedProperty) {
                if (changedProperty.propertyPath === 'rxData/recordDefinitionName') {
                    this._initRecordDefinition();
                }
            }
        });
    });
})();
(function () {
    'use strict';
    
    angular.module('com.example.samplelibrary.view-components.bmc-css-icons')
        .directive('comExampleSamplelibraryBmcCssIconsDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/bmc-css-icons/com-example-samplelibrary-bmc-css-icons-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.bmc-css-icons')
        .directive('comExampleSamplelibraryBmcCssIcons', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/bmc-css-icons/com-example-samplelibrary-bmc-css-icons.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    $scope.allIcons = [];
                    $scope.saveIcons = [];
                    $scope.searchIcon = "";
                    $scope.showSearchInProgress = true;

                    var sSheetList = document.styleSheets;
                    for (var sSheet = 0; sSheet < sSheetList.length; sSheet++) {
                        if (!angular.isString(document.styleSheets[sSheet].href) || document.styleSheets[sSheet].href.indexOf("standardlib-deps.min.css") == -1) {
                            continue;
                        }

                        var ruleList = document.styleSheets[sSheet].cssRules;
                        for (var rule = 0; rule < ruleList.length; rule++) {
                            if (!angular.isString(ruleList[rule].selectorText) || ruleList[rule].selectorText.indexOf(".d-icon-left-") == -1 || angular.isUndefined(ruleList[rule].style.content)) {
                                continue;
                            }

                            var iconShortName = ruleList[rule].selectorText.split(".d-icon-left-")[1];
                            iconShortName = iconShortName.split(":")[0];

                            $scope.saveIcons.push({
                                ruleName: iconShortName,
                                iconCode: ruleList[rule].style.content,
                                className: ruleList[rule].selectorText
                            });
                        }

                        break;
                    }

                    // Sorting the icon list (alpha order).
                    $scope.saveIcons.sort(function (a, b) {
                        return (a.ruleName > b.ruleName) - (a.ruleName < b.ruleName);
                    });

                    $scope.allIcons = $scope.saveIcons;
                    $scope.showSearchInProgress = false;

                    // Sorting icons (filter cannot work on object lists)
                    // Called by $watch
                    function sortIcons() {
                        if ($scope.searchIcon == "") {
                            $scope.allIcons = $scope.saveIcons;
                            return;
                        }

                        if ($scope.searchIcon.length < 3) {
                            return;
                        }

                        $scope.allIcons = [];

                        $scope.showSearchInProgress = true;
                        angular.forEach($scope.saveIcons, function (value, key) {
                            if (value.ruleName.toLowerCase().indexOf($scope.searchIcon.toLowerCase()) != -1) {
                                $scope.allIcons.push(value);
                            }

                        });
                        $scope.showSearchInProgress = false;
                    }

                    // We are watching the search string.
                    $scope.$watch('searchIcon', sortIcons);
                }

            };
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.call-action')
        .directive('comExampleSamplelibraryCallActionDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/call-action/com-example-samplelibrary-call-action-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.call-action')
        .directive('comExampleSamplelibraryCallAction', function (rxAction) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/call-action/com-example-samplelibrary-call-action.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    $scope.actionResult = '';

                    // Calling custom Javascript Action
                    // Here we are calling the Action 'run-java-command' (/scripts/actions/run-java-command).
                    // 'name' parameter defined in 'run-java-command.config.js'
                    $scope.actionName = 'comExampleSamplelibraryRunJavaCommand';

                    // The parameters are defined in 'run-java-command.config.js' in the 'parameters" array
                    // 'commandClassName' and 'commandParameterValueList'
                    // Here we define the values for the parameters
                    $scope.parameterValues = {
                        commandClassName: 'com.example.command.TestCommand',
                        commandParameterValueList: 'inputId="1234"#inputUserName="Uncle Scrooge"'
                    };

                    rxAction.executeAction($scope.actionName)({
                        // Mapping the action parameters (key / value)
                        propertiesByName: {
                            commandClassName: $scope.parameterValues.commandClassName,
                            commandParameterValueList: $scope.parameterValues.commandParameterValueList
                        }
                    }).then(function(actionData){
                        // Here we capture the data returned (eventually) by the action
                        $scope.actionResult = actionData;
                    });
                }
            };
        });
})();
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
(function () {
    'use strict';
    
    angular.module('com.example.samplelibrary.view-components.custom-label')
        .directive('comExampleSamplelibraryCustomLabelDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/custom-label/com-example-samplelibrary-custom-label-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
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
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-associated-data').directive('comExampleSamplelibraryDisplayAssociatedDataDesign', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/display-associated-data/com-example-samplelibrary-display-associated-data-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-associated-data').directive('comExampleSamplelibraryDisplayAssociatedData',
        function (rxAssociationInstanceDataPageResource) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/display-associated-data/com-example-samplelibrary-display-associated-data.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    var _config;


                    // Getting the view component input parameters
                    var init = function () {
                        _config = $scope.rxConfiguration.propertiesByName;
                        $scope.cfg = {};
                        $scope.cfg.recordDefinitionName = 'nodeB';  // We want the right part of the association (else it would be nodeA).
                        $scope.cfg.recordInstanceId = _config.recordInstanceId;
                        $scope.cfg.AssociationName = _config.AssociationName;
                        $scope.cfg.fieldIdToDisplay = _config.fieldIdToDisplay;
                        $scope.cfg.fieldLabelToDisplay = _config.fieldLabelToDisplay;
                        $scope.myDataWithoutAssociations = [];
                        $scope.myDataWithAssociations = [];

                        // Getting associated data
                        getDataWithAssociation();
                    };

                    // Calling the javascript code that fetches data using BMC OOTB Javascript APis.
                    var getDataWithAssociation = function () {
                        if (angular.isUndefined($scope.cfg.recordInstanceId)) {
                            return;
                        }

                        var queryParams = {
                            associationDefinition: $scope.cfg.AssociationName,
                            nodeToQuery: $scope.cfg.recordDefinitionName,
                            associatedRecordInstanceId: $scope.cfg.recordInstanceId
                        };

                        var foo = rxAssociationInstanceDataPageResource.get(-1, 0, queryParams);
                        foo.then(function (response) {
                            $scope.myDataWithAssociations = response.data;
                        });

                    };

                    // Calling init function when the record Instance ID input parameter changes
                    init();
                    // Each time the recordInstanceId will be modified, 'init' method will be called.
                    $scope.$watch('rxConfiguration.propertiesByName.recordInstanceId', init);
                }
            };
        });
})();
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
(function () {
    'use strict';

    angular.module('com.vyomlabs8.application8.view-components.display-data').directive('comvyomlabs8application8DisplayData',
        function (rxRecordInstanceDataPageResource) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/display-data/com-vyomlabs8-application8-display-data.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    var _config;

                    //Getting parameters
                    function init() {
                        _config = $scope.rxConfiguration.propertiesByName;
                        $scope.cfg = {};
                        $scope.cfg.recordDefinitionName = _config.recordDefinitionName;
                        $scope.cfg.fieldIdToDisplay = _config.fieldIdToDisplay;
                        $scope.cfg.fieldLabelToDisplay = _config.fieldLabelToDisplay;
                        $scope.myData = [];

                        //Calling data fetch function (standard BMC OOTB Javascript APIs)
                        getData();
                    }

                    //Calling the javascript code that fetches data.
                    function getData() {
                        var queryParams = {
                            propertySelection: "179,7,10888003,8," + $scope.cfg.fieldIdToDisplay,//, // ids of fields to fetch
                            queryExpression: "'7' != 3" //Status is not rejected
                            //queryExpression: "'8' != developer" //Status is not rejected
                        };

                        var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinitionName);
                        foo.get(100, 0, queryParams).then(
                            function (allRecords) {
                                $scope.myData = allRecords.data;
                            }
                        );
                    }

                    //Calling init function, only once.
                    init();
                }
            };
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-pic-in-attachment').directive('comExampleSamplelibraryDisplayPicInAttachmentDesign', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/display-pic-in-attachment/com-example-samplelibrary-display-pic-in-attachment-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-pic-in-attachment').directive('comExampleSmartSamplelibraryDisplayPicInAttachment',
        function (rxRecordInstanceAttachmentResource) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/display-pic-in-attachment/com-example-samplelibrary-display-pic-in-attachment.directive.html',

                // rxConfiguration is used to get input parameters:
                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    var _config;

                    // Function that gets a record attachment file.
                    var getPicture = function (save_picture) {
                        _config = $scope.rxConfiguration.propertiesByName;
                        $scope.recordDefinitionFullName = _config.recordDefinitionFullName;
                        $scope.fieldId = _config.fieldId;
                        $scope.recordId = _config.recordId;
                        $scope.pictureData = '';
                        $scope.fileName = '';

                        if ($scope.recordDefinitionFullName === '' || $scope.fieldId === '' || $scope.recordId === '') {
                            return;
                        }

                        if (angular.isUndefined($scope.recordDefinitionFullName) || angular.isUndefined($scope.fieldId) || angular.isUndefined($scope.recordId)) {
                            return;
                        }

                        // Getting the attachment using BMC OOTB Javascript APIs
                        var attachmentsResource = rxRecordInstanceAttachmentResource.withName($scope.recordDefinitionFullName);
                        attachmentsResource.get($scope.recordId, ($scope.fieldId).toString()).then(function (fileStream) {
                            if (fileStream) {
                                //  reference: https:// developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
                                var arrayBufferView = new Uint8Array(fileStream.data); //  eslint-disable-line  no-undef

                                var file = new Blob([arrayBufferView], {
                                    type: fileStream.headers('content-type')
                                });

                                var urlCreator = window.URL || window.webkitURL;
                                $scope.pictureData = urlCreator.createObjectURL(file);
                                debugger;

                                //  function from file-saver.js library
                                if (save_picture) {
                                    $scope.fileName = fileStream.headers('Content-Disposition').split('filename=')[1];
                                    saveAs(file, $scope.fileName); //  eslint-disable-line  no-undef
                                }
                            }
                        });
                    };

                    // Saving the picture.
                    $scope.savePicture = function () {
                        getPicture(true);
                    };

                    // We call the "getPicture" function each time the recordId changes
                    // But we do not want to save the picture.
                    $scope.$watch('rxConfiguration.propertiesByName.recordId', function () {
                        getPicture(false);
                    });
                }
            };
        });
})();
// This directive is used at design time to choose a field.

// Note:
// The chose record definition should have an "attachment" field to be displayed in the list.
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-pic-in-attachment').directive('comExampleSamplelibraryInspectorDisplayPicInAttachmentFieldSelect', function (RX_RECORD_DEFINITION) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/display-pic-in-attachment/com-example-samplelibrary-inspector-display-pic-in-attachment-field-select.directive.html',

            link: function ($scope) {
                $scope.data = {
                    fields: [],
                    selectedField: null
                };

                init();

                function init() {
                    initializeFields();

                    // reinitialize fields when user change Record Definition
                    $scope.$watch('cell.recordDefinitionFullName', initializeFields);

                    $scope.$watch('data.selectedField', function (newValue) {
                        if (newValue) {
                            // set field id to the model
                            $scope.cell.prop($scope.path, $scope.data.selectedField.id);
                        }
                    }, true);
                }

                function initializeFields() {
                    if ($scope.cell.recordDefinitionFullName) {
                        $scope.data.fields = getFields();
                        console.log("getFields=" + $scope.data.fields);

                        $scope.data.selectedField = _.find($scope.data.fields, {
                            id: Number($scope.cell.prop($scope.path))
                        });
                    } else {
                        $scope.data.fields = [];
                        $scope.data.selectedField = null;
                    }
                }

                // get all attachment fields from the selected Record Definition
                function getFields() {
                    console.log($scope.cell.recordDefinitionFullName.fieldDefinitions);

                    return _($scope.cell.recordDefinitionFullName.fieldDefinitions)
                        .filter({
                            // Only the field of type "attachment" will be returned in the list.
                            resourceType: RX_RECORD_DEFINITION.dataTypes.attachment.resourceType
                        })
                        .map(function (fieldDefinition) {
                            return {
                                id: fieldDefinition.id,
                                name: fieldDefinition.name
                            };
                        })
                        .value();
                }
            }
        };
    });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.get-date')
        .directive('comExampleSamplelibraryGetDateDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/get-date/com-example-samplelibrary-get-date-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.get-date')
        .directive('comExampleSamplelibraryGetDate', function (rxViewComponentEventManager) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/get-date/com-example-samplelibrary-get-date.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    // To enable the 'refresh' action from 'Actions' in Innovation Studio you need:
                    // An output parameter in the config.js to appear in the data dictionnary (isProperty: true)
                    // A refresh function,
                    // To register your refresh function in the refresh object from rxConfiguration api,
                    // To propagate the update using the eventManager to update the Component,
                    var eventManager = rxViewComponentEventManager.getInstance($scope);

                    // This is the function that will be called by the Refresh Action. Here it allows parameters.
                    // param1 is the parameter list.
                    function refreshAction(param1) {
                        $scope.message = 'I am being refreshed at ' + moment().format('YYYY-MM-DD hh:mm:ss') + ' with parameter ' + param1;
                        getDate();
                    }

                    // first bind parameter is the 'this' object, then parameter list.
                    // Here we register the View Component method 'refreshAction' with the system.
                    $scope.rxConfiguration.api = {
                        refresh: refreshAction.bind(null, true)
                    };

                    // Here we broadcast the fact we modified the configuration, hence finishing the registration.
                    eventManager.propertyChanged({
                        property: 'api',
                        newValue: $scope.rxConfiguration.api
                    });

                    $scope.message = '';
                    $scope.returnedDate = '';

                    function getDate() {
                        $scope.returnedDate = moment().format('YYYY-MM-DD hh:mm:ss');

                        // Here we broadcast the fact that the output parameter has been modified
                        // so other view components can access it.
                        eventManager.propertyChanged({
                            property: 'returnedDate',
                            oldValue: null,
                            newValue: $scope.returnedDate
                        });
                    }

                    getDate();
                }
            };
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.price-calculator')
        .directive('comExampleSamplelibraryPriceCalculatorDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/price-calculator/com-example-samplelibrary-price-calculator-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.price-calculator')
        .directive('comExampleSamplelibraryPriceCalculator', function (rxViewComponentEventManager) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/price-calculator/com-example-samplelibrary-price-calculator.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    // event manager is used to notify the other view components that
                    // a parameter changed.
                    var eventManager = rxViewComponentEventManager.getInstance($scope);

                    $scope.price = 0;
                    $scope.vat = 0;
                    $scope.priceWithVat = 0;

                    var calculatePriceWithVat = function () {
                        var oldPriceWithVat = $scope.priceWithVat;

                        $scope.price = $scope.rxConfiguration.propertiesByName.price;
                        $scope.vat = $scope.rxConfiguration.propertiesByName.vat;
                        $scope.priceWithVat = Number($scope.price) * (1 + Number($scope.vat) / 100);

                        // once the price with VAT is calculated, we have to notify the other view components.
                        // We broadcast that the output parameter 'priceWithVat' has been modified.
                        eventManager.propertyChanged({
                            property: 'priceWithVat',
                            oldValue: oldPriceWithVat,
                            newValue: $scope.priceWithVat
                        });
                    };

                    // update priceWithVat when either price or vat is modified
                    $scope.$watchGroup([
                        'rxConfiguration.propertiesByName.price',
                        'rxConfiguration.propertiesByName.vat'
                    ], calculatePriceWithVat);
                }
            };
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.priority-calculator').directive('comExampleSamplelibraryPriorityCalculatorDesign', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/priority-calculator/com-example-samplelibrary-priority-calculator-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.priority-calculator').directive('comExampleSamplelibraryPriorityCalculator',
        function (rxViewComponentEventManager) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/priority-calculator/com-example-samplelibrary-priority-calculator.directive.html',

                // rxConfiguration is used to get input parameters
                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    $scope.urgency = 0;
                    $scope.impact = 0;
                    $scope.priority = 0;

                    // rxViewComponentEventManager is used to broadcast a parameter to other view components
                    var eventManager = rxViewComponentEventManager.getInstance($scope);

                    // Function that calculates the priority
                    var calculatePriority = function () {
                        var oldPriority = $scope.priority;
                        // Getting all parameters (urgency, impact).
                        $scope.urgency = $scope.rxConfiguration.propertiesByName.urgency;
                        $scope.impact = $scope.rxConfiguration.propertiesByName.impact;

                        // Calculating the priority (here it's just random number from 0 to 4).
                        $scope.priority = Math.floor((Math.random() * 5));

                        // Once the priority is calculated, we broadcast it to other View Components.
                        eventManager.propertyChanged({
                            property: 'priority',
                            oldValue: oldPriority,
                            newValue: $scope.priority
                        });

                    };

                    // We call the "calculatePriority" function each time the input parameters "urgency" and "impact" are modified (input parameters)
                    $scope.$watchGroup([
                        'rxConfiguration.propertiesByName.urgency',
                        'rxConfiguration.propertiesByName.impact'
                    ], calculatePriority);
                }
            };
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.rest-command')
        .directive('comExampleSamplelibraryRestCommandDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/rest-command/com-example-samplelibrary-rest-command-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.rest-command')
        .directive('comExampleSamplelibraryRestCommand', function (rxNotificationMessage,
                                                                   rxViewComponentEventManager,
                                                                   comExampleSamplelibraryResource) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/rest-command/com-example-samplelibrary-rest-command.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    // event manager is used to notify the other view components that
                    // a parameter changed.
                    var eventManager = rxViewComponentEventManager.getInstance($scope);

                    $scope.username = '';
                    $scope.password = '';
                    $scope.result = '';

                    function callCommandAndRestAPI() {
                        $scope.username = $scope.rxConfiguration.propertiesByName.username;
                        $scope.password = $scope.rxConfiguration.propertiesByName.password;
                        $scope.result = '';

                        // We are calling the resource handling the Command. It is a promise.
                        comExampleSamplelibraryResource.testCommand($scope.username, $scope.password).then(function(resultCommand) {
                            rxNotificationMessage.info('Command call executed!');

                            // We are calling the resource handling the Rest API. It is a promise.
                            comExampleSamplelibraryResource.testRestAPI($scope.username).then(function(resultRestAPI) {
                                $scope.result = resultRestAPI.password;

                                // Once we have the result, we have to notify the other view components.
                                // We broadcast that the output parameter 'result' has been modified.
                                eventManager.propertyChanged({
                                    property: 'result',
                                    oldValue: null,
                                    newValue: $scope.result
                                });

                                rxNotificationMessage.info('Hello ' + resultRestAPI.userName + ', your new password is ' + resultRestAPI.password);
                            })
                        })
                    }

                    // update priceWithVat when either price or vat is modified
                    $scope.$watchGroup([
                        'rxConfiguration.propertiesByName.username',
                        'rxConfiguration.propertiesByName.password'
                    ], callCommandAndRestAPI);
                }
            };
        });
})();
// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-click-rating').directive('comExampleSamplelibraryInspectorStarClickRatingColorPickerSelect', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/star-click-rating/com-example-samplelibrary-inspector-star-click-rating-color-picker-select.directive.html',

            link: function ($scope) {
                $scope.data = {
                    fields: [],
                    selectedField: null
                };

                // Getting the color from the color picker.
                $scope.hexPickerColor = "";

                function initColor() {
                    $scope.hexPickerColor = $scope.cell.prop($scope.path);
                }

                // Saving the parameter
                $scope.saveColor = function () {
                    $scope.cell.prop($scope.path, $scope.hexPickerColor);
                };

                initColor();
            }
        };
    });
})();
// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-click-rating').directive('comExampleSamplelibraryInspectorStarClickRatingDefaultValue', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/star-click-rating/com-example-samplelibrary-inspector-star-click-rating-default-value.directive.html',

            link: function ($scope, $element) {
                $scope.data = {
                    fields: [],
                    selectedField: null
                };

                // Building stars...
                $scope.stars = [];
                $scope.starSelectedColor = "";
                $scope.starNotSelectedColor = "";

                function buildStarsConfiguration(starCount) {
                    var stars = [];

                    for (var i = 1; i <= $scope.maxAmountOfStars; i++) {
                        stars[i] = {
                            icon: i <= starCount ? 'd-icon-star spanStarSelected' : 'd-icon-star_o spanStarNotSelected'
                        };
                    }

                    return stars;
                }

                // Called when the user clicks on the star ranking in the input parameter
                $scope.onStarSelectHandler = function (event) {
                    var selectedIndex = _.indexOf($element.find('span'), event.target);

                    if (selectedIndex !== -1) {
                        $scope.stars = buildStarsConfiguration(selectedIndex);
                    }

                    // Saving the parameter
                    $scope.cell.prop($scope.path, selectedIndex);
                };

                function initStarValue() {
                    $scope.starSelectedColor = $scope.cell.prop('rxData/colorStarsSelected');
                    $scope.starNotSelectedColor = $scope.cell.prop('rxData/colorStarsNotSelected');

                    $scope.starValue = $scope.cell.prop($scope.path);
                    $scope.maxAmountOfStars = $scope.cell.prop('rxData/maxAmountOfStars');
                    if ($scope.starValue > $scope.maxAmountOfStars) {
                        $scope.starValue = "1";
                        $scope.cell.prop($scope.path, $scope.starValue);
                    }

                    $scope.stars = buildStarsConfiguration($scope.starValue);
                }

                initStarValue();
                $scope.$watchGroup(['cell.prop("rxData/maxAmountOfStars")',
                        'cell.prop("rxData/colorStarsSelected")',
                        'cell.prop("rxData/colorStarsNotSelected")'],
                    initStarValue);
            }
        };
    });
})();
// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-click-rating').directive('comExampleSamplelibraryInspectorStarClickRatingSliderSelect', function (RX_RECORD_DEFINITION, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/star-click-rating/com-example-samplelibrary-inspector-star-click-rating-slider-select.directive.html',

            link: function ($scope) {
                $scope.data = {
                    fields: [],
                    selectedField: null
                };

                // Building stars...
                $scope.minSliderValue = 0;
                $scope.slider_all_options = {};

                $scope.slider_all_options = {
                    minValue: 1,
                    options: {
                        floor: 1,
                        ceil: 10,
                        step: 1,
                        precision: 0,
                        draggableRange: false,
                        showSelectionBar: false,
                        hideLimitLabels: false,
                        readOnly: false,
                        disabled: false,
                        showTicks: false,
                        showTicksValues: false
                    }
                };

                function initMaxStarValue() {
                    $scope.minSliderValue = $scope.cell.prop($scope.path);
                }

                // Saving the parameter
                function saveMaxStarValue() {
                    $scope.cell.prop($scope.path, $scope.minSliderValue);
                }

                // We watch "$scope.minSliderValue" to save it.
                $scope.$watch('minSliderValue', saveMaxStarValue)

                initMaxStarValue();

                // Called else slider bullets are aligned to left.
                $timeout(function () {
                    $scope.$broadcast('rzSliderForceRender');
                });
            }
        };
    });
})();
/* This code is run at "design" phase, in Innovation Studio.
 It gathers the number of stars defined as a parameter automatically.
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-click-rating').directive('comExampleSamplelibraryStarClickRatingDesign', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/star-click-rating/com-example-samplelibrary-star-click-rating-design.directive.html',

            scope: {
                rxConfiguration: '='
            },

            link: function ($scope) {
                // view component configuration will be stored in $scope.rxConfiguration.model
                $scope.stars = 0;
                updateStars();

                // subscribe to rxData property change
                $scope.rxConfiguration.model.on('change:rxData', updateStars);

                function updateStars() {
                    $scope.stars = Number($scope.rxConfiguration.model.prop('rxData/maxAmountOfStars'));
                }

                // function called by the html code to get the number of stars.
                $scope.getStars = function () {
                    return new Array($scope.stars);
                };
            }
        };
    });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-click-rating').directive('comExampleSamplelibraryStarClickRating', function (rxViewComponentEventManager) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/star-click-rating/com-example-samplelibrary-star-click-rating.directive.html',

            scope: {
                rxConfiguration: '='
            },

            link: function ($scope, $element) {
                var config = $scope.rxConfiguration.propertiesByName;
                $scope.starSelectedColor = "";
                $scope.starNotSelectedColor = "";

                // create event manager
                var eventManager = rxViewComponentEventManager.getInstance($scope);

                $scope.stars = [];

                $scope.onStarSelectHandler = function (event) {
                    var selectedIndex = _.indexOf($element.find('span'), event.target);

                    if (selectedIndex !== -1) {
                        $scope.stars = buildStarsConfiguration(selectedIndex);

                        // trigger the change property event
                        eventManager.propertyChanged({
                            property: 'selectedStarValue', // name of the property that changed
                            newValue: selectedIndex
                        });

                    }
                };

                function initialize() {
                    // reinitialize configuration each time when the input parameter change
                    $scope.$watch('rxConfiguration.propertiesByName.mappingStarValue', initializeStars);
                }

                function buildStarsConfiguration(starCount) {
                    var stars = [];

                    for (var i = 1; i <= $scope.rxConfiguration.propertiesByName.maxAmountOfStars; i++) {
                        stars[i] = {
                            icon: i <= starCount ? 'd-icon-star ' : 'd-icon-star_o ',
                            style: i <= starCount ? $scope.starSelectedColor : $scope.starNotSelectedColor
                        };
                    }

                    return stars;
                }

                function initializeStars() {
                    $scope.stars = buildStarsConfiguration($scope.rxConfiguration.propertiesByName.mappingStarValue || $scope.rxConfiguration.propertiesByName.defaultValueStars);
                    $scope.starSelectedColor = "; color:" + $scope.rxConfiguration.propertiesByName.colorStarsSelected;
                    $scope.starNotSelectedColor = "; color:" + $scope.rxConfiguration.propertiesByName.colorStarsNotSelected;
                }

                initialize();
                initializeStars();
            }

        };
    });
})();
/*
This directive is used at design time to choose a field.
It is used in "star-rating-design.service.js".

Note:
The chosen record definition should have an "int" field to be displayed in the list.
*/
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-rating').directive('comExampleSamplelibraryInspectorStarRatingFieldSelect', function (RX_RECORD_DEFINITION) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/star-rating/com-example-samplelibrary-inspector-star-rating-field-select.directive.html',

            link: function ($scope) {
                $scope.data = {
                    fields: [],
                    selectedField: null
                };

                init();

                function init() {
                    initializeFields();

                    // reinitialize fields when user change Record Definition
                    $scope.$watch('cell.recordDefinition', initializeFields);

                    $scope.$watch('data.selectedField', function (newValue) {
                        if (newValue) {
                            // set field id to the model
                            $scope.cell.prop($scope.path, $scope.data.selectedField.id);
                        }
                    }, true);
                }

                function initializeFields() {
                    if ($scope.cell.recordDefinition) {
                        $scope.data.fields = getFields();
                        console.log("getFields=" + $scope.data.fields);

                        $scope.data.selectedField = _.find($scope.data.fields, {
                            id: Number($scope.cell.prop($scope.path))
                        });
                    } else {
                        $scope.data.fields = [];
                        $scope.data.selectedField = null;
                    }
                }

                // get all integer fields from the selected Record Definition
                function getFields() {
                    console.log($scope.cell.recordDefinition.fieldDefinitions);

                    return _($scope.cell.recordDefinition.fieldDefinitions)
                        .filter({
                            // Only the field of type "integer" will be returned in the list.
                            resourceType: RX_RECORD_DEFINITION.dataTypes.integer.resourceType
                        })
                        .map(function (fieldDefinition) {
                            return {
                                id: fieldDefinition.id,
                                name: fieldDefinition.name
                            };
                        })
                        .value();
                }
            }
        };
    });
})();
/*
This code is run at "design" phase, in Innovation Studio.
It gathers the number of stars defined as a parameter automatically.
*/
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-rating').directive('comExampleSamplelibraryStarRatingDesign', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/star-rating/com-example-samplelibrary-star-rating-design.directive.html',

            scope: {
                rxConfiguration: '='
            },

            link: function ($scope) {
                // view component configuration will be stored in $scope.rxConfiguration.model
                $scope.stars = 0;
                updateStars();

                // subscribe to rxData property change
                $scope.rxConfiguration.model.on('change:rxData', updateStars);

                function updateStars() {
                    $scope.stars = Number($scope.rxConfiguration.model.prop('rxData/stars'));
                }

                // function called by the html code to get the number of stars.
                $scope.getStars = function () {
                    return new Array($scope.stars);
                };
            }
        };
    });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-rating').directive('comExampleSamplelibraryStarRating', function (rxRecordInstanceResource, rxViewComponentEventManager) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/star-rating/com-example-samplelibrary-star-rating.directive.html',

            scope: {
                rxConfiguration: '='
            },

            link: function ($scope, $element) {
                var config = $scope.rxConfiguration.propertiesByName;
                var recordResource = rxRecordInstanceResource.withName(config.recordDefinitionName);
                var recordInstance = null;

                // create event manager
                var eventManager = rxViewComponentEventManager.getInstance($scope);

                $scope.stars = [];

                $scope.onStarSelectHandler = function (event) {
                    var selectedIndex = _.indexOf($element.find('span'), event.target);

                    if (selectedIndex !== -1) {
                        $scope.stars = buildStarsConfiguration(selectedIndex);

                        // trigger the change property event
                        eventManager.propertyChanged({
                            property: 'stars', // name of the property that changed
                            newValue: selectedIndex
                        });

                        recordInstance.setValue(config.fieldId, selectedIndex);
                        recordInstance.save();
                    }
                };

                initialize();

                function initialize() {
                    // reinitialize configuration each time when recordInstanceId is changed
                    $scope.$watch('rxConfiguration.propertiesByName.recordInstanceId', initializeStars);
                }

                function initializeStars() {
                    if (config.recordInstanceId) {
                        recordResource.get(config.recordInstanceId).then(function (recordInstanceResource) {
                            recordInstance = recordInstanceResource;
                            $scope.stars = buildStarsConfiguration(recordInstanceResource.fieldInstances[config.fieldId].value || 0);
                        }).catch(function () {
                            $scope.stars = [];
                        });
                    } else {
                        $scope.stars = [];
                    }
                }

                function buildStarsConfiguration(starCount) {
                    var stars = [];

                    for (var i = 1; i <= config.stars; i++) {
                        stars[i] = {
                            icon: i <= starCount ? 'd-icon-star' : 'd-icon-star_o'
                        };
                    }

                    return stars;
                }
            }
        };
    });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.test-vc').directive('comExampleSamplelibraryTestVcDesign', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/test-vc/com-example-samplelibrary-test-vc-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.test-vc').directive('comExampleSamplelibraryTestVc',
        function (rxViewComponentEventManager) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/test-vc/com-example-samplelibrary-test-vc.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    var _config;
                    var eventManager = rxViewComponentEventManager.getInstance($scope);

                    // Getting the view component input parameters
                    _config = $scope.rxConfiguration.propertiesByName;

                    $scope.displayInputParameter = _config.inputParameter;
                    $scope.displayOutputParameter = _config.inputParameter + ', hello world';

                    eventManager.propertyChanged({
                        property: 'outputParameter',
                        oldValue: null,
                        newValue: $scope.displayOutputParameter
                    });
                }
            };
        });
})();
(function () {
    'use strict';
    
    angular.module('com.example.samplelibrary.view-components.bmc-css-icons')
        .directive('comExampleSamplelibraryBmcCssIconsDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/bmc-css-icons/com-example-samplelibrary-bmc-css-icons-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.bmc-css-icons')
        .directive('comExampleSamplelibraryBmcCssIcons', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/bmc-css-icons/com-example-samplelibrary-bmc-css-icons.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    $scope.allIcons = [];
                    $scope.saveIcons = [];
                    $scope.searchIcon = "";
                    $scope.showSearchInProgress = true;

                    var sSheetList = document.styleSheets;
                    for (var sSheet = 0; sSheet < sSheetList.length; sSheet++) {
                        if (!angular.isString(document.styleSheets[sSheet].href) || document.styleSheets[sSheet].href.indexOf("standardlib-deps.min.css") == -1) {
                            continue;
                        }

                        var ruleList = document.styleSheets[sSheet].cssRules;
                        for (var rule = 0; rule < ruleList.length; rule++) {
                            if (!angular.isString(ruleList[rule].selectorText) || ruleList[rule].selectorText.indexOf(".d-icon-left-") == -1 || angular.isUndefined(ruleList[rule].style.content)) {
                                continue;
                            }

                            var iconShortName = ruleList[rule].selectorText.split(".d-icon-left-")[1];
                            iconShortName = iconShortName.split(":")[0];

                            $scope.saveIcons.push({
                                ruleName: iconShortName,
                                iconCode: ruleList[rule].style.content,
                                className: ruleList[rule].selectorText
                            });
                        }

                        break;
                    }

                    // Sorting the icon list (alpha order).
                    $scope.saveIcons.sort(function (a, b) {
                        return (a.ruleName > b.ruleName) - (a.ruleName < b.ruleName);
                    });

                    $scope.allIcons = $scope.saveIcons;
                    $scope.showSearchInProgress = false;

                    // Sorting icons (filter cannot work on object lists)
                    // Called by $watch
                    function sortIcons() {
                        if ($scope.searchIcon == "") {
                            $scope.allIcons = $scope.saveIcons;
                            return;
                        }

                        if ($scope.searchIcon.length < 3) {
                            return;
                        }

                        $scope.allIcons = [];

                        $scope.showSearchInProgress = true;
                        angular.forEach($scope.saveIcons, function (value, key) {
                            if (value.ruleName.toLowerCase().indexOf($scope.searchIcon.toLowerCase()) != -1) {
                                $scope.allIcons.push(value);
                            }

                        });
                        $scope.showSearchInProgress = false;
                    }

                    // We are watching the search string.
                    $scope.$watch('searchIcon', sortIcons);
                }

            };
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.call-action')
        .directive('comExampleSamplelibraryCallActionDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/call-action/com-example-samplelibrary-call-action-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.call-action')
        .directive('comExampleSamplelibraryCallAction', function (rxAction) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/call-action/com-example-samplelibrary-call-action.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    $scope.actionResult = '';

                    // Calling custom Javascript Action
                    // Here we are calling the Action 'run-java-command' (/scripts/actions/run-java-command).
                    // 'name' parameter defined in 'run-java-command.config.js'
                    $scope.actionName = 'comExampleSamplelibraryRunJavaCommand';

                    // The parameters are defined in 'run-java-command.config.js' in the 'parameters" array
                    // 'commandClassName' and 'commandParameterValueList'
                    // Here we define the values for the parameters
                    $scope.parameterValues = {
                        commandClassName: 'com.example.command.TestCommand',
                        commandParameterValueList: 'inputId="1234"#inputUserName="Uncle Scrooge"'
                    };

                    rxAction.executeAction($scope.actionName)({
                        // Mapping the action parameters (key / value)
                        propertiesByName: {
                            commandClassName: $scope.parameterValues.commandClassName,
                            commandParameterValueList: $scope.parameterValues.commandParameterValueList
                        }
                    }).then(function(actionData){
                        // Here we capture the data returned (eventually) by the action
                        $scope.actionResult = actionData;
                    });
                }
            };
        });
})();
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
(function () {
    'use strict';
    
    angular.module('com.example.samplelibrary.view-components.custom-label')
        .directive('comExampleSamplelibraryCustomLabelDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/custom-label/com-example-samplelibrary-custom-label-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
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
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-associated-data').directive('comExampleSamplelibraryDisplayAssociatedDataDesign', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/display-associated-data/com-example-samplelibrary-display-associated-data-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-associated-data').directive('comExampleSamplelibraryDisplayAssociatedData',
        function (rxAssociationInstanceDataPageResource) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/display-associated-data/com-example-samplelibrary-display-associated-data.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    var _config;


                    // Getting the view component input parameters
                    var init = function () {
                        _config = $scope.rxConfiguration.propertiesByName;
                        $scope.cfg = {};
                        $scope.cfg.recordDefinitionName = 'nodeB';  // We want the right part of the association (else it would be nodeA).
                        $scope.cfg.recordInstanceId = _config.recordInstanceId;
                        $scope.cfg.AssociationName = _config.AssociationName;
                        $scope.cfg.fieldIdToDisplay = _config.fieldIdToDisplay;
                        $scope.cfg.fieldLabelToDisplay = _config.fieldLabelToDisplay;
                        $scope.myDataWithoutAssociations = [];
                        $scope.myDataWithAssociations = [];

                        // Getting associated data
                        getDataWithAssociation();
                    };

                    // Calling the javascript code that fetches data using BMC OOTB Javascript APis.
                    var getDataWithAssociation = function () {
                        if (angular.isUndefined($scope.cfg.recordInstanceId)) {
                            return;
                        }

                        var queryParams = {
                            associationDefinition: $scope.cfg.AssociationName,
                            nodeToQuery: $scope.cfg.recordDefinitionName,
                            associatedRecordInstanceId: $scope.cfg.recordInstanceId
                        };

                        var foo = rxAssociationInstanceDataPageResource.get(-1, 0, queryParams);
                        foo.then(function (response) {
                            $scope.myDataWithAssociations = response.data;
                        });

                    };

                    // Calling init function when the record Instance ID input parameter changes
                    init();
                    // Each time the recordInstanceId will be modified, 'init' method will be called.
                    $scope.$watch('rxConfiguration.propertiesByName.recordInstanceId', init);
                }
            };
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-associated-data').directive('comExampleSamplelibraryDisplayDataDesign', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/display-data/com-example-samplelibrary-display-data-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-data').directive('comExampleSamplelibraryDisplayData',
        function (rxRecordInstanceDataPageResource) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/display-data/com-example-samplelibrary-display-data.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    var _config;

                    //Getting parameters
                    function init() {
                        _config = $scope.rxConfiguration.propertiesByName;
                        $scope.cfg = {};
                        $scope.cfg.recordDefinitionName = _config.recordDefinitionName;
                        $scope.cfg.fieldIdToDisplay = _config.fieldIdToDisplay;
                        $scope.cfg.fieldLabelToDisplay = _config.fieldLabelToDisplay;
                        $scope.myData = [];

                        //Calling data fetch function (standard BMC OOTB Javascript APIs)
                        getData();
                    }

                    //Calling the javascript code that fetches data.
                    function getData() {
                        var queryParams = {
                            propertySelection: "179,7,10888003,8," + $scope.cfg.fieldIdToDisplay,//, // ids of fields to fetch
                            queryExpression: "'7' != 3" //Status is not rejected
                            //queryExpression: "'8' != developer" //Status is not rejected
                        };

                        var foo = rxRecordInstanceDataPageResource.withName($scope.cfg.recordDefinitionName);
                        foo.get(100, 0, queryParams).then(
                            function (allRecords) {
                                $scope.myData = allRecords.data;
                            }
                        );
                    }

                    //Calling init function, only once.
                    init();
                }
            };
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-pic-in-attachment').directive('comExampleSamplelibraryDisplayPicInAttachmentDesign', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/display-pic-in-attachment/com-example-samplelibrary-display-pic-in-attachment-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-pic-in-attachment').directive('comExampleSmartSamplelibraryDisplayPicInAttachment',
        function (rxRecordInstanceAttachmentResource) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/display-pic-in-attachment/com-example-samplelibrary-display-pic-in-attachment.directive.html',

                // rxConfiguration is used to get input parameters:
                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    var _config;

                    // Function that gets a record attachment file.
                    var getPicture = function (save_picture) {
                        _config = $scope.rxConfiguration.propertiesByName;
                        $scope.recordDefinitionFullName = _config.recordDefinitionFullName;
                        $scope.fieldId = _config.fieldId;
                        $scope.recordId = _config.recordId;
                        $scope.pictureData = '';
                        $scope.fileName = '';

                        if ($scope.recordDefinitionFullName === '' || $scope.fieldId === '' || $scope.recordId === '') {
                            return;
                        }

                        if (angular.isUndefined($scope.recordDefinitionFullName) || angular.isUndefined($scope.fieldId) || angular.isUndefined($scope.recordId)) {
                            return;
                        }

                        // Getting the attachment using BMC OOTB Javascript APIs
                        var attachmentsResource = rxRecordInstanceAttachmentResource.withName($scope.recordDefinitionFullName);
                        attachmentsResource.get($scope.recordId, ($scope.fieldId).toString()).then(function (fileStream) {
                            if (fileStream) {
                                //  reference: https:// developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
                                var arrayBufferView = new Uint8Array(fileStream.data); //  eslint-disable-line  no-undef

                                var file = new Blob([arrayBufferView], {
                                    type: fileStream.headers('content-type')
                                });

                                var urlCreator = window.URL || window.webkitURL;
                                $scope.pictureData = urlCreator.createObjectURL(file);
                                debugger;

                                //  function from file-saver.js library
                                if (save_picture) {
                                    $scope.fileName = fileStream.headers('Content-Disposition').split('filename=')[1];
                                    saveAs(file, $scope.fileName); //  eslint-disable-line  no-undef
                                }
                            }
                        });
                    };

                    // Saving the picture.
                    $scope.savePicture = function () {
                        getPicture(true);
                    };

                    // We call the "getPicture" function each time the recordId changes
                    // But we do not want to save the picture.
                    $scope.$watch('rxConfiguration.propertiesByName.recordId', function () {
                        getPicture(false);
                    });
                }
            };
        });
})();
// This directive is used at design time to choose a field.

// Note:
// The chose record definition should have an "attachment" field to be displayed in the list.
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.display-pic-in-attachment').directive('comExampleSamplelibraryInspectorDisplayPicInAttachmentFieldSelect', function (RX_RECORD_DEFINITION) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/display-pic-in-attachment/com-example-samplelibrary-inspector-display-pic-in-attachment-field-select.directive.html',

            link: function ($scope) {
                $scope.data = {
                    fields: [],
                    selectedField: null
                };

                init();

                function init() {
                    initializeFields();

                    // reinitialize fields when user change Record Definition
                    $scope.$watch('cell.recordDefinitionFullName', initializeFields);

                    $scope.$watch('data.selectedField', function (newValue) {
                        if (newValue) {
                            // set field id to the model
                            $scope.cell.prop($scope.path, $scope.data.selectedField.id);
                        }
                    }, true);
                }

                function initializeFields() {
                    if ($scope.cell.recordDefinitionFullName) {
                        $scope.data.fields = getFields();
                        console.log("getFields=" + $scope.data.fields);

                        $scope.data.selectedField = _.find($scope.data.fields, {
                            id: Number($scope.cell.prop($scope.path))
                        });
                    } else {
                        $scope.data.fields = [];
                        $scope.data.selectedField = null;
                    }
                }

                // get all attachment fields from the selected Record Definition
                function getFields() {
                    console.log($scope.cell.recordDefinitionFullName.fieldDefinitions);

                    return _($scope.cell.recordDefinitionFullName.fieldDefinitions)
                        .filter({
                            // Only the field of type "attachment" will be returned in the list.
                            resourceType: RX_RECORD_DEFINITION.dataTypes.attachment.resourceType
                        })
                        .map(function (fieldDefinition) {
                            return {
                                id: fieldDefinition.id,
                                name: fieldDefinition.name
                            };
                        })
                        .value();
                }
            }
        };
    });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.get-date')
        .directive('comExampleSamplelibraryGetDateDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/get-date/com-example-samplelibrary-get-date-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.get-date')
        .directive('comExampleSamplelibraryGetDate', function (rxViewComponentEventManager) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/get-date/com-example-samplelibrary-get-date.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    // To enable the 'refresh' action from 'Actions' in Innovation Studio you need:
                    // An output parameter in the config.js to appear in the data dictionnary (isProperty: true)
                    // A refresh function,
                    // To register your refresh function in the refresh object from rxConfiguration api,
                    // To propagate the update using the eventManager to update the Component,
                    var eventManager = rxViewComponentEventManager.getInstance($scope);

                    // This is the function that will be called by the Refresh Action. Here it allows parameters.
                    // param1 is the parameter list.
                    function refreshAction(param1) {
                        $scope.message = 'I am being refreshed at ' + moment().format('YYYY-MM-DD hh:mm:ss') + ' with parameter ' + param1;
                        getDate();
                    }

                    // first bind parameter is the 'this' object, then parameter list.
                    // Here we register the View Component method 'refreshAction' with the system.
                    $scope.rxConfiguration.api = {
                        refresh: refreshAction.bind(null, true)
                    };

                    // Here we broadcast the fact we modified the configuration, hence finishing the registration.
                    eventManager.propertyChanged({
                        property: 'api',
                        newValue: $scope.rxConfiguration.api
                    });

                    $scope.message = '';
                    $scope.returnedDate = '';

                    function getDate() {
                        $scope.returnedDate = moment().format('YYYY-MM-DD hh:mm:ss');

                        // Here we broadcast the fact that the output parameter has been modified
                        // so other view components can access it.
                        eventManager.propertyChanged({
                            property: 'returnedDate',
                            oldValue: null,
                            newValue: $scope.returnedDate
                        });
                    }

                    getDate();
                }
            };
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.price-calculator')
        .directive('comExampleSamplelibraryPriceCalculatorDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/price-calculator/com-example-samplelibrary-price-calculator-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.price-calculator')
        .directive('comExampleSamplelibraryPriceCalculator', function (rxViewComponentEventManager) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/price-calculator/com-example-samplelibrary-price-calculator.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    // event manager is used to notify the other view components that
                    // a parameter changed.
                    var eventManager = rxViewComponentEventManager.getInstance($scope);

                    $scope.price = 0;
                    $scope.vat = 0;
                    $scope.priceWithVat = 0;

                    var calculatePriceWithVat = function () {
                        var oldPriceWithVat = $scope.priceWithVat;

                        $scope.price = $scope.rxConfiguration.propertiesByName.price;
                        $scope.vat = $scope.rxConfiguration.propertiesByName.vat;
                        $scope.priceWithVat = Number($scope.price) * (1 + Number($scope.vat) / 100);

                        // once the price with VAT is calculated, we have to notify the other view components.
                        // We broadcast that the output parameter 'priceWithVat' has been modified.
                        eventManager.propertyChanged({
                            property: 'priceWithVat',
                            oldValue: oldPriceWithVat,
                            newValue: $scope.priceWithVat
                        });
                    };

                    // update priceWithVat when either price or vat is modified
                    $scope.$watchGroup([
                        'rxConfiguration.propertiesByName.price',
                        'rxConfiguration.propertiesByName.vat'
                    ], calculatePriceWithVat);
                }
            };
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.priority-calculator').directive('comExampleSamplelibraryPriorityCalculatorDesign', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/priority-calculator/com-example-samplelibrary-priority-calculator-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.priority-calculator').directive('comExampleSamplelibraryPriorityCalculator',
        function (rxViewComponentEventManager) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/priority-calculator/com-example-samplelibrary-priority-calculator.directive.html',

                // rxConfiguration is used to get input parameters
                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    $scope.urgency = 0;
                    $scope.impact = 0;
                    $scope.priority = 0;

                    // rxViewComponentEventManager is used to broadcast a parameter to other view components
                    var eventManager = rxViewComponentEventManager.getInstance($scope);

                    // Function that calculates the priority
                    var calculatePriority = function () {
                        var oldPriority = $scope.priority;
                        // Getting all parameters (urgency, impact).
                        $scope.urgency = $scope.rxConfiguration.propertiesByName.urgency;
                        $scope.impact = $scope.rxConfiguration.propertiesByName.impact;

                        // Calculating the priority (here it's just random number from 0 to 4).
                        $scope.priority = Math.floor((Math.random() * 5));

                        // Once the priority is calculated, we broadcast it to other View Components.
                        eventManager.propertyChanged({
                            property: 'priority',
                            oldValue: oldPriority,
                            newValue: $scope.priority
                        });

                    };

                    // We call the "calculatePriority" function each time the input parameters "urgency" and "impact" are modified (input parameters)
                    $scope.$watchGroup([
                        'rxConfiguration.propertiesByName.urgency',
                        'rxConfiguration.propertiesByName.impact'
                    ], calculatePriority);
                }
            };
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.rest-command')
        .directive('comExampleSamplelibraryRestCommandDesign', function () {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/rest-command/com-example-samplelibrary-rest-command-design.directive.html',

                scope: {
                    rxConfiguration: '='
                }
            };
        });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.rest-command')
        .directive('comExampleSamplelibraryRestCommand', function (rxNotificationMessage,
                                                                   rxViewComponentEventManager,
                                                                   comExampleSamplelibraryResource) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/rest-command/com-example-samplelibrary-rest-command.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    // event manager is used to notify the other view components that
                    // a parameter changed.
                    var eventManager = rxViewComponentEventManager.getInstance($scope);

                    $scope.username = '';
                    $scope.password = '';
                    $scope.result = '';

                    function callCommandAndRestAPI() {
                        $scope.username = $scope.rxConfiguration.propertiesByName.username;
                        $scope.password = $scope.rxConfiguration.propertiesByName.password;
                        $scope.result = '';

                        // We are calling the resource handling the Command. It is a promise.
                        comExampleSamplelibraryResource.testCommand($scope.username, $scope.password).then(function(resultCommand) {
                            rxNotificationMessage.info('Command call executed!');

                            // We are calling the resource handling the Rest API. It is a promise.
                            comExampleSamplelibraryResource.testRestAPI($scope.username).then(function(resultRestAPI) {
                                $scope.result = resultRestAPI.password;

                                // Once we have the result, we have to notify the other view components.
                                // We broadcast that the output parameter 'result' has been modified.
                                eventManager.propertyChanged({
                                    property: 'result',
                                    oldValue: null,
                                    newValue: $scope.result
                                });

                                rxNotificationMessage.info('Hello ' + resultRestAPI.userName + ', your new password is ' + resultRestAPI.password);
                            })
                        })
                    }

                    // update priceWithVat when either price or vat is modified
                    $scope.$watchGroup([
                        'rxConfiguration.propertiesByName.username',
                        'rxConfiguration.propertiesByName.password'
                    ], callCommandAndRestAPI);
                }
            };
        });
})();
// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-click-rating').directive('comExampleSamplelibraryInspectorStarClickRatingColorPickerSelect', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/star-click-rating/com-example-samplelibrary-inspector-star-click-rating-color-picker-select.directive.html',

            link: function ($scope) {
                $scope.data = {
                    fields: [],
                    selectedField: null
                };

                // Getting the color from the color picker.
                $scope.hexPickerColor = "";

                function initColor() {
                    $scope.hexPickerColor = $scope.cell.prop($scope.path);
                }

                // Saving the parameter
                $scope.saveColor = function () {
                    $scope.cell.prop($scope.path, $scope.hexPickerColor);
                };

                initColor();
            }
        };
    });
})();
// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-click-rating').directive('comExampleSamplelibraryInspectorStarClickRatingDefaultValue', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/star-click-rating/com-example-samplelibrary-inspector-star-click-rating-default-value.directive.html',

            link: function ($scope, $element) {
                $scope.data = {
                    fields: [],
                    selectedField: null
                };

                // Building stars...
                $scope.stars = [];
                $scope.starSelectedColor = "";
                $scope.starNotSelectedColor = "";

                function buildStarsConfiguration(starCount) {
                    var stars = [];

                    for (var i = 1; i <= $scope.maxAmountOfStars; i++) {
                        stars[i] = {
                            icon: i <= starCount ? 'd-icon-star spanStarSelected' : 'd-icon-star_o spanStarNotSelected'
                        };
                    }

                    return stars;
                }

                // Called when the user clicks on the star ranking in the input parameter
                $scope.onStarSelectHandler = function (event) {
                    var selectedIndex = _.indexOf($element.find('span'), event.target);

                    if (selectedIndex !== -1) {
                        $scope.stars = buildStarsConfiguration(selectedIndex);
                    }

                    // Saving the parameter
                    $scope.cell.prop($scope.path, selectedIndex);
                };

                function initStarValue() {
                    $scope.starSelectedColor = $scope.cell.prop('rxData/colorStarsSelected');
                    $scope.starNotSelectedColor = $scope.cell.prop('rxData/colorStarsNotSelected');

                    $scope.starValue = $scope.cell.prop($scope.path);
                    $scope.maxAmountOfStars = $scope.cell.prop('rxData/maxAmountOfStars');
                    if ($scope.starValue > $scope.maxAmountOfStars) {
                        $scope.starValue = "1";
                        $scope.cell.prop($scope.path, $scope.starValue);
                    }

                    $scope.stars = buildStarsConfiguration($scope.starValue);
                }

                initStarValue();
                $scope.$watchGroup(['cell.prop("rxData/maxAmountOfStars")',
                        'cell.prop("rxData/colorStarsSelected")',
                        'cell.prop("rxData/colorStarsNotSelected")'],
                    initStarValue);
            }
        };
    });
})();
// This directive is used at design time to choose a field.
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-click-rating').directive('comExampleSamplelibraryInspectorStarClickRatingSliderSelect', function (RX_RECORD_DEFINITION, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/star-click-rating/com-example-samplelibrary-inspector-star-click-rating-slider-select.directive.html',

            link: function ($scope) {
                $scope.data = {
                    fields: [],
                    selectedField: null
                };

                // Building stars...
                $scope.minSliderValue = 0;
                $scope.slider_all_options = {};

                $scope.slider_all_options = {
                    minValue: 1,
                    options: {
                        floor: 1,
                        ceil: 10,
                        step: 1,
                        precision: 0,
                        draggableRange: false,
                        showSelectionBar: false,
                        hideLimitLabels: false,
                        readOnly: false,
                        disabled: false,
                        showTicks: false,
                        showTicksValues: false
                    }
                };

                function initMaxStarValue() {
                    $scope.minSliderValue = $scope.cell.prop($scope.path);
                }

                // Saving the parameter
                function saveMaxStarValue() {
                    $scope.cell.prop($scope.path, $scope.minSliderValue);
                }

                // We watch "$scope.minSliderValue" to save it.
                $scope.$watch('minSliderValue', saveMaxStarValue)

                initMaxStarValue();

                // Called else slider bullets are aligned to left.
                $timeout(function () {
                    $scope.$broadcast('rzSliderForceRender');
                });
            }
        };
    });
})();
/* This code is run at "design" phase, in Innovation Studio.
 It gathers the number of stars defined as a parameter automatically.
 */
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-click-rating').directive('comExampleSamplelibraryStarClickRatingDesign', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/star-click-rating/com-example-samplelibrary-star-click-rating-design.directive.html',

            scope: {
                rxConfiguration: '='
            },

            link: function ($scope) {
                // view component configuration will be stored in $scope.rxConfiguration.model
                $scope.stars = 0;
                updateStars();

                // subscribe to rxData property change
                $scope.rxConfiguration.model.on('change:rxData', updateStars);

                function updateStars() {
                    $scope.stars = Number($scope.rxConfiguration.model.prop('rxData/maxAmountOfStars'));
                }

                // function called by the html code to get the number of stars.
                $scope.getStars = function () {
                    return new Array($scope.stars);
                };
            }
        };
    });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-click-rating').directive('comExampleSamplelibraryStarClickRating', function (rxViewComponentEventManager) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/star-click-rating/com-example-samplelibrary-star-click-rating.directive.html',

            scope: {
                rxConfiguration: '='
            },

            link: function ($scope, $element) {
                var config = $scope.rxConfiguration.propertiesByName;
                $scope.starSelectedColor = "";
                $scope.starNotSelectedColor = "";

                // create event manager
                var eventManager = rxViewComponentEventManager.getInstance($scope);

                $scope.stars = [];

                $scope.onStarSelectHandler = function (event) {
                    var selectedIndex = _.indexOf($element.find('span'), event.target);

                    if (selectedIndex !== -1) {
                        $scope.stars = buildStarsConfiguration(selectedIndex);

                        // trigger the change property event
                        eventManager.propertyChanged({
                            property: 'selectedStarValue', // name of the property that changed
                            newValue: selectedIndex
                        });

                    }
                };

                function initialize() {
                    // reinitialize configuration each time when the input parameter change
                    $scope.$watch('rxConfiguration.propertiesByName.mappingStarValue', initializeStars);
                }

                function buildStarsConfiguration(starCount) {
                    var stars = [];

                    for (var i = 1; i <= $scope.rxConfiguration.propertiesByName.maxAmountOfStars; i++) {
                        stars[i] = {
                            icon: i <= starCount ? 'd-icon-star ' : 'd-icon-star_o ',
                            style: i <= starCount ? $scope.starSelectedColor : $scope.starNotSelectedColor
                        };
                    }

                    return stars;
                }

                function initializeStars() {
                    $scope.stars = buildStarsConfiguration($scope.rxConfiguration.propertiesByName.mappingStarValue || $scope.rxConfiguration.propertiesByName.defaultValueStars);
                    $scope.starSelectedColor = "; color:" + $scope.rxConfiguration.propertiesByName.colorStarsSelected;
                    $scope.starNotSelectedColor = "; color:" + $scope.rxConfiguration.propertiesByName.colorStarsNotSelected;
                }

                initialize();
                initializeStars();
            }

        };
    });
})();
/*
This directive is used at design time to choose a field.
It is used in "star-rating-design.service.js".

Note:
The chosen record definition should have an "int" field to be displayed in the list.
*/
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-rating').directive('comExampleSamplelibraryInspectorStarRatingFieldSelect', function (RX_RECORD_DEFINITION) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/star-rating/com-example-samplelibrary-inspector-star-rating-field-select.directive.html',

            link: function ($scope) {
                $scope.data = {
                    fields: [],
                    selectedField: null
                };

                init();

                function init() {
                    initializeFields();

                    // reinitialize fields when user change Record Definition
                    $scope.$watch('cell.recordDefinition', initializeFields);

                    $scope.$watch('data.selectedField', function (newValue) {
                        if (newValue) {
                            // set field id to the model
                            $scope.cell.prop($scope.path, $scope.data.selectedField.id);
                        }
                    }, true);
                }

                function initializeFields() {
                    if ($scope.cell.recordDefinition) {
                        $scope.data.fields = getFields();
                        console.log("getFields=" + $scope.data.fields);

                        $scope.data.selectedField = _.find($scope.data.fields, {
                            id: Number($scope.cell.prop($scope.path))
                        });
                    } else {
                        $scope.data.fields = [];
                        $scope.data.selectedField = null;
                    }
                }

                // get all integer fields from the selected Record Definition
                function getFields() {
                    console.log($scope.cell.recordDefinition.fieldDefinitions);

                    return _($scope.cell.recordDefinition.fieldDefinitions)
                        .filter({
                            // Only the field of type "integer" will be returned in the list.
                            resourceType: RX_RECORD_DEFINITION.dataTypes.integer.resourceType
                        })
                        .map(function (fieldDefinition) {
                            return {
                                id: fieldDefinition.id,
                                name: fieldDefinition.name
                            };
                        })
                        .value();
                }
            }
        };
    });
})();
/*
This code is run at "design" phase, in Innovation Studio.
It gathers the number of stars defined as a parameter automatically.
*/
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-rating').directive('comExampleSamplelibraryStarRatingDesign', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/star-rating/com-example-samplelibrary-star-rating-design.directive.html',

            scope: {
                rxConfiguration: '='
            },

            link: function ($scope) {
                // view component configuration will be stored in $scope.rxConfiguration.model
                $scope.stars = 0;
                updateStars();

                // subscribe to rxData property change
                $scope.rxConfiguration.model.on('change:rxData', updateStars);

                function updateStars() {
                    $scope.stars = Number($scope.rxConfiguration.model.prop('rxData/stars'));
                }

                // function called by the html code to get the number of stars.
                $scope.getStars = function () {
                    return new Array($scope.stars);
                };
            }
        };
    });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.star-rating').directive('comExampleSamplelibraryStarRating', function (rxRecordInstanceResource, rxViewComponentEventManager) {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/star-rating/com-example-samplelibrary-star-rating.directive.html',

            scope: {
                rxConfiguration: '='
            },

            link: function ($scope, $element) {
                var config = $scope.rxConfiguration.propertiesByName;
                var recordResource = rxRecordInstanceResource.withName(config.recordDefinitionName);
                var recordInstance = null;

                // create event manager
                var eventManager = rxViewComponentEventManager.getInstance($scope);

                $scope.stars = [];

                $scope.onStarSelectHandler = function (event) {
                    var selectedIndex = _.indexOf($element.find('span'), event.target);

                    if (selectedIndex !== -1) {
                        $scope.stars = buildStarsConfiguration(selectedIndex);

                        // trigger the change property event
                        eventManager.propertyChanged({
                            property: 'stars', // name of the property that changed
                            newValue: selectedIndex
                        });

                        recordInstance.setValue(config.fieldId, selectedIndex);
                        recordInstance.save();
                    }
                };

                initialize();

                function initialize() {
                    // reinitialize configuration each time when recordInstanceId is changed
                    $scope.$watch('rxConfiguration.propertiesByName.recordInstanceId', initializeStars);
                }

                function initializeStars() {
                    if (config.recordInstanceId) {
                        recordResource.get(config.recordInstanceId).then(function (recordInstanceResource) {
                            recordInstance = recordInstanceResource;
                            $scope.stars = buildStarsConfiguration(recordInstanceResource.fieldInstances[config.fieldId].value || 0);
                        }).catch(function () {
                            $scope.stars = [];
                        });
                    } else {
                        $scope.stars = [];
                    }
                }

                function buildStarsConfiguration(starCount) {
                    var stars = [];

                    for (var i = 1; i <= config.stars; i++) {
                        stars[i] = {
                            icon: i <= starCount ? 'd-icon-star' : 'd-icon-star_o'
                        };
                    }

                    return stars;
                }
            }
        };
    });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.test-vc').directive('comExampleSamplelibraryTestVcDesign', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/test-vc/com-example-samplelibrary-test-vc-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();
(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.test-vc').directive('comExampleSamplelibraryTestVc',
        function (rxViewComponentEventManager) {
            return {
                restrict: 'E',
                templateUrl: 'scripts/view-components/test-vc/com-example-samplelibrary-test-vc.directive.html',

                scope: {
                    rxConfiguration: '='
                },

                link: function ($scope) {
                    var _config;
                    var eventManager = rxViewComponentEventManager.getInstance($scope);

                    // Getting the view component input parameters
                    _config = $scope.rxConfiguration.propertiesByName;

                    $scope.displayInputParameter = _config.inputParameter;
                    $scope.displayOutputParameter = _config.inputParameter + ', hello world';

                    eventManager.propertyChanged({
                        property: 'outputParameter',
                        oldValue: null,
                        newValue: $scope.displayOutputParameter
                    });
                }
            };
        });
})();
/*
The Resources (Command and Resources) return a promise.
 */

(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.rest-command').factory('comExampleSamplelibraryResource', function (COM_EXAMPLE_SAMPLE_LIBRARY,
                                                                                                                                  rxCommandResource,
                                                                                                                                  rxLog,
                                                                                                                                  rxResource,
                                                                                                                                  rxServerErrorHandler) {
        // rxResource is to call a custom Java API
        var _resource = rxResource.withSubUrlConfiguration(COM_EXAMPLE_SAMPLE_LIBRARY.testUrl, function (RestangularConfigurer) {
            RestangularConfigurer.setRestangularFields({'id': 'name'});
        });

        function testCommand(username, password) {
            var parameters = {
                username: username,
                password: password
            };

            // rxCommandResource is to call a Custom Java Command
            return rxCommandResource
                .withType(COM_EXAMPLE_SAMPLE_LIBRARY.command)
                .execute(parameters, {}, {}, {
                    handleResponseError: function (response) {
                        // Here we use a custom error handler, this is optional.
                        // If you do not provide a custom error handler the application error handling
                        // will kick in.
                        rxLog.debug(rxServerErrorHandler.getServerResponseErrorDetails(response));

                        // true must be returned to indicate the error has been successfully trapped.
                        return true;
                    }
                });
        }

        function testRestAPI(userName) {
            // If there are parameters to send to the REST Api (?test=1&test2=test) you need to add an object.
            // var parameters = {test: '1', test2: test}
            // return _resource.get(userName, parameters);
            return _resource.get(userName);
        }

        return {
            testCommand: testCommand,
            testRestAPI: testRestAPI
        };
    });
})();
/*
The Resources (Command and Resources) return a promise.
 */

(function () {
    'use strict';

    angular.module('com.example.samplelibrary.view-components.rest-command').factory('comExampleSamplelibraryResource', function (COM_EXAMPLE_SAMPLE_LIBRARY,
                                                                                                                                  rxCommandResource,
                                                                                                                                  rxLog,
                                                                                                                                  rxResource,
                                                                                                                                  rxServerErrorHandler) {
        // rxResource is to call a custom Java API
        var _resource = rxResource.withSubUrlConfiguration(COM_EXAMPLE_SAMPLE_LIBRARY.testUrl, function (RestangularConfigurer) {
            RestangularConfigurer.setRestangularFields({'id': 'name'});
        });

        function testCommand(username, password) {
            var parameters = {
                username: username,
                password: password
            };

            // rxCommandResource is to call a Custom Java Command
            return rxCommandResource
                .withType(COM_EXAMPLE_SAMPLE_LIBRARY.command)
                .execute(parameters, {}, {}, {
                    handleResponseError: function (response) {
                        // Here we use a custom error handler, this is optional.
                        // If you do not provide a custom error handler the application error handling
                        // will kick in.
                        rxLog.debug(rxServerErrorHandler.getServerResponseErrorDetails(response));

                        // true must be returned to indicate the error has been successfully trapped.
                        return true;
                    }
                });
        }

        function testRestAPI(userName) {
            // If there are parameters to send to the REST Api (?test=1&test2=test) you need to add an object.
            // var parameters = {test: '1', test2: test}
            // return _resource.get(userName, parameters);
            return _resource.get(userName);
        }

        return {
            testCommand: testCommand,
            testRestAPI: testRestAPI
        };
    });
})();
angular.module('com.vyomlabs8.application8-ext', [
    
    
    'com.vyomlabs8.application8.view-components.custom-label',  // custom label.
    
    'com.vyomlabs8.application8.view-components.display-data' // Getting data in javascript
    
]);
angular.module('com.bmc.arsys.rx.standardlib.utils').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('scripts/view-components/bmc-css-icons/com-example-samplelibrary-bmc-css-icons-design.directive.html',
    "<h3>Listing available css icons you can use for your view component</h3>"
  );


  $templateCache.put('scripts/view-components/bmc-css-icons/com-example-samplelibrary-bmc-css-icons.directive.html',
    "<span class=\"color0\" ng-show=\"showSearchInProgress\">Please wait, search in progress...</span> <input type=\"text\" class=\"form-control\" placeholder=\"Quick Search (3 characters minimum)\" ng-model=\"searchIcon\"><table class=\"table table-condensed\"><thead><tr><td><strong>Icon Name</strong></td><td><strong>Icon Symbol</strong></td></tr></thead><tbody><tr ng-repeat=\"oneIcon in allIcons track by $index\"><td>{{oneIcon.ruleName}}</td><td class=\"{{oneIcon.selectorText}}\"><span ng-class=\"'d-icon-'+oneIcon.ruleName\" class=\"bigfont\"></span></td></tr></tbody></table>"
  );


  $templateCache.put('scripts/view-components/call-action/com-example-samplelibrary-call-action-design.directive.html',
    "<span class=\"d-icon-gear\"></span>"
  );


  $templateCache.put('scripts/view-components/call-action/com-example-samplelibrary-call-action.directive.html',
    "<div><!-- Displaying the action parameters and result --><h4>Action parameters (values): commandClassName ({{parameterValues.commandClassName}}), commandParameterValueList ({{parameterValues.commandParameterValueList}})</h4><h3>Action result: {{actionResult}}</h3></div>"
  );


  $templateCache.put('scripts/view-components/Chatbot/com-example-samplelibrary-Chatbot-design.directive.html',
    "<h4>Chatbot</h4>"
  );


  $templateCache.put('scripts/view-components/Chatbot/com-example-samplelibrary-Chatbot.directive.html',
    "<div ng-click=\"myFunction()\"><h4>Chat</h4></div>"
  );


  $templateCache.put('scripts/view-components/custom-label/com-example-samplelibrary-custom-label-design.directive.html',
    "<h4>Configurable Tile</h4>"
  );


  $templateCache.put('scripts/view-components/custom-label/com-example-samplelibrary-custom-label.directive.html',
    "<html><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><style>.tile{float:left; margin:0 5px 0 0; padding:2px; }\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    .card {\r" +
    "\n" +
    "\r" +
    "\n" +
    "        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);\r" +
    "\n" +
    "        transition: 0.3s;\r" +
    "\n" +
    "\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "\r" +
    "\n" +
    "    .card:hover {\r" +
    "\n" +
    "        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "\r" +
    "\n" +
    "    .container {\r" +
    "\n" +
    "        padding: 2px 16px;\r" +
    "\n" +
    "\r" +
    "\n" +
    "    }</style><body><div ng-click=\"myFunction()\" style=\"background-color:{{Colour}}; height:{{Height}}px; width: {{Width}}px\" class=\"tile card\"><p style=\"text-align:center\"><img src=\"/com.example.samplelibrary/resources/img/{{Icon}}\" align=\"middle\" style=\"width:{{ImgWidth}}px;height:{{ImgHeight}}px\"></p><h6 align=\"center\" style=\"color: white\">{{Text}}</h6><div class=\"container\"></div></div></body></html>"
  );


  $templateCache.put('scripts/view-components/display-associated-data/com-example-samplelibrary-display-associated-data-design.directive.html',
    "<div>Displaying a record associated data.</div>"
  );


  $templateCache.put('scripts/view-components/display-associated-data/com-example-samplelibrary-display-associated-data.directive.html',
    "<div><div><table class=\"table table-condensed\"><thead><tr><td><strong>GUID</strong></td><td><strong>{{cfg.fieldLabelToDisplay}}</strong></td></tr></thead><tbody><tr ng-repeat=\"onedata in myDataWithAssociations\"><!-- We have to use array notation here since you cannot have object.<numericValue> --><!-- <td>{{onedata.id}}</td>\n" +
    "                <td>{{onedata.c7}}</td> --><td>{{onedata['179']}}</td><td>{{onedata[cfg.fieldIdToDisplay]}}</td></tr></tbody></table></div></div>"
  );


  $templateCache.put('scripts/view-components/display-data/com-vyomlabs8-application8-display-data-design.directive.html',
    "<div>Displaying data from a record definition.</div>"
  );


  $templateCache.put('scripts/view-components/display-data/com-vyomlabs8-application8-display-data.directive.html',
    "<div><div><table class=\"table table-condensed\"><thead><tr><td><strong>GUID</strong></td><td><strong>{{cfg.fieldLabelToDisplay}}</strong></td></tr></thead><tbody><tr ng-repeat=\"onedata in myData\"><!-- We have to use array notation here since you cannot have obbjet.<numericValue> --><!-- <td>{{onedata.id}}</td>\n" +
    "                <td>{{onedata.c7}}</td> --><td>{{onedata['179']}}</td><td>{{onedata[cfg.fieldIdToDisplay]}}</td></tr></tbody></table></div></div>"
  );


  $templateCache.put('scripts/view-components/display-pic-in-attachment/com-example-samplelibrary-display-pic-in-attachment-design.directive.html',
    "<h3>Displaying a picture stored in an attachment field</h3>"
  );


  $templateCache.put('scripts/view-components/display-pic-in-attachment/com-example-samplelibrary-display-pic-in-attachment.directive.html',
    "<div><h3>record Definition: {{recordDefinitionFullName}}</h3><h3>Field Id: {{fieldId}}</h3><h3>record Id: {{recordId}}</h3><h3><a ng-click=\"savePicture()\">Click here to save the picture.</a></h3><h3>Picture</h3><img src=\"{{pictureData}}\"></div>"
  );


  $templateCache.put('scripts/view-components/display-pic-in-attachment/com-example-samplelibrary-inspector-display-pic-in-attachment-field-select.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\"></rx-tooltip>{{options.label}}:</label><div ng-if=\"data.fields.length\"><select class=\"select\" ng-options=\"field.name for field in data.fields track by field.id\" ng-model=\"data.selectedField\"></select></div><div ng-if=\"!data.fields.length\">There are no attachment field to select.</div>"
  );


  $templateCache.put('scripts/view-components/get-date/com-example-samplelibrary-get-date-design.directive.html',
    "<span class=\"d-icon-clock_o\"></span>"
  );


  $templateCache.put('scripts/view-components/get-date/com-example-samplelibrary-get-date.directive.html',
    "<div><!-- Displaying date time and a message --><h3>Date / Time: {{returnedDate}}</h3><h5>Message: {{message}}</h5></div>"
  );


  $templateCache.put('scripts/view-components/price-calculator/com-example-samplelibrary-price-calculator-design.directive.html',
    "<h3>Price with VAT calculation result will be here.</h3>"
  );


  $templateCache.put('scripts/view-components/price-calculator/com-example-samplelibrary-price-calculator.directive.html',
    "<div><!-- Displaying parameters for information --><h3>Price: {{price}}</h3><h3>VAT: {{vat}}</h3><h3>Price with VAT: {{priceWithVat}}</h3></div>"
  );


  $templateCache.put('scripts/view-components/priority-calculator/com-example-samplelibrary-priority-calculator-design.directive.html',
    "<h3>This View Component will calculate the Priority</h3>"
  );


  $templateCache.put('scripts/view-components/priority-calculator/com-example-samplelibrary-priority-calculator.directive.html',
    "<div><!-- Displaying parameters for information --><h3>Urgency: {{urgency}}</h3><h3>Impact: {{impact}}</h3><h3>Priority: {{priority}}</h3></div>"
  );


  $templateCache.put('scripts/view-components/rest-command/com-example-samplelibrary-rest-command-design.directive.html',
    "<h3>Contacting Java Custom Rest and Commands</h3>"
  );


  $templateCache.put('scripts/view-components/rest-command/com-example-samplelibrary-rest-command.directive.html',
    "<div><!-- Displaying parameters for information --><h3>Username: {{username}}</h3><h3>Password: {{password}}</h3><h3>Result: {{result}}</h3></div>"
  );


  $templateCache.put('scripts/view-components/star-click-rating/com-example-samplelibrary-inspector-star-click-rating-color-picker-select.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\"></rx-tooltip>{{options.label}}:</label><div class=\"input-group\"><input colorpicker=\"hex\" type=\"text\" ng-model=\"hexPickerColor\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"rx-editor-header__button rx-editor-header__button_save rx-editor-header__button_divider-before d-button d-button_primary d-button_small\" ng-click=\"saveColor();\" ng-disabled=\"false\">Use Color</button></span></div>"
  );


  $templateCache.put('scripts/view-components/star-click-rating/com-example-samplelibrary-inspector-star-click-rating-default-value.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\"></rx-tooltip>{{options.label}}:</label><div ng-click=\"onStarSelectHandler($event)\"><span ng-repeat=\"star in stars track by $index\" class=\"{{star.icon}}\"></span></div>"
  );


  $templateCache.put('scripts/view-components/star-click-rating/com-example-samplelibrary-inspector-star-click-rating-slider-select.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\"></rx-tooltip>{{options.label}}:</label><rzslider rz-slider-model=\"minSliderValue\" rz-slider-options=\"slider_all_options.options\"></rzslider>"
  );


  $templateCache.put('scripts/view-components/star-click-rating/com-example-samplelibrary-star-click-rating-design.directive.html',
    "<span ng-repeat=\"star in getStars() track by $index\" class=\"d-icon-star\"></span>"
  );


  $templateCache.put('scripts/view-components/star-click-rating/com-example-samplelibrary-star-click-rating.directive.html',
    "<div ng-click=\"onStarSelectHandler($event)\"><span ng-repeat=\"star in stars track by $index\" class=\"{{star.icon}}\" style=\"{{star.style}}\"></span></div>"
  );


  $templateCache.put('scripts/view-components/star-rating/com-example-samplelibrary-inspector-star-rating-field-select.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\"></rx-tooltip>{{options.label}}:</label><div ng-if=\"data.fields.length\"><select class=\"select\" ng-options=\"field.name for field in data.fields track by field.id\" ng-model=\"data.selectedField\"></select></div><div ng-if=\"!data.fields.length\">There are no fields for select</div>"
  );


  $templateCache.put('scripts/view-components/star-rating/com-example-samplelibrary-star-rating-design.directive.html',
    "<span ng-repeat=\"star in getStars() track by $index\" class=\"d-icon-star\"></span>"
  );


  $templateCache.put('scripts/view-components/star-rating/com-example-samplelibrary-star-rating.directive.html',
    "<div ng-click=\"onStarSelectHandler($event)\"><span ng-repeat=\"star in stars track by $index\" class=\"{{star.icon}}\"></span></div>"
  );


  $templateCache.put('scripts/view-components/test-vc/com-example-samplelibrary-test-vc-design.directive.html',
    "<div>This is a test View Component</div>"
  );


  $templateCache.put('scripts/view-components/test-vc/com-example-samplelibrary-test-vc.directive.html',
    "<h3>Input Paramer: {{displayInputParameter}}</h3><h3>Output Parameter: {{displayOutputParameter}}</h3>"
  );


  $templateCache.put('scripts/view-components/view-components/bmc-css-icons/com-example-samplelibrary-bmc-css-icons-design.directive.html',
    "<h3>Listing available css icons you can use for your view component</h3>"
  );


  $templateCache.put('scripts/view-components/view-components/bmc-css-icons/com-example-samplelibrary-bmc-css-icons.directive.html',
    "<span class=\"color0\" ng-show=\"showSearchInProgress\">Please wait, search in progress...</span> <input type=\"text\" class=\"form-control\" placeholder=\"Quick Search (3 characters minimum)\" ng-model=\"searchIcon\"><table class=\"table table-condensed\"><thead><tr><td><strong>Icon Name</strong></td><td><strong>Icon Symbol</strong></td></tr></thead><tbody><tr ng-repeat=\"oneIcon in allIcons track by $index\"><td>{{oneIcon.ruleName}}</td><td class=\"{{oneIcon.selectorText}}\"><span ng-class=\"'d-icon-'+oneIcon.ruleName\" class=\"bigfont\"></span></td></tr></tbody></table>"
  );


  $templateCache.put('scripts/view-components/view-components/call-action/com-example-samplelibrary-call-action-design.directive.html',
    "<span class=\"d-icon-gear\"></span>"
  );


  $templateCache.put('scripts/view-components/view-components/call-action/com-example-samplelibrary-call-action.directive.html',
    "<div><!-- Displaying the action parameters and result --><h4>Action parameters (values): commandClassName ({{parameterValues.commandClassName}}), commandParameterValueList ({{parameterValues.commandParameterValueList}})</h4><h3>Action result: {{actionResult}}</h3></div>"
  );


  $templateCache.put('scripts/view-components/view-components/Chatbot/com-example-samplelibrary-Chatbot-design.directive.html',
    "<h4>Chatbot</h4>"
  );


  $templateCache.put('scripts/view-components/view-components/Chatbot/com-example-samplelibrary-Chatbot.directive.html',
    "<div ng-click=\"myFunction()\"><h4>Chat</h4></div>"
  );


  $templateCache.put('scripts/view-components/view-components/custom-label/com-example-samplelibrary-custom-label-design.directive.html',
    "<h4>Configurable Tile</h4>"
  );


  $templateCache.put('scripts/view-components/view-components/custom-label/com-example-samplelibrary-custom-label.directive.html',
    "<html><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><style>.tile{float:left; margin:0 5px 0 0; padding:2px; }\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    .card {\r" +
    "\n" +
    "\r" +
    "\n" +
    "        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);\r" +
    "\n" +
    "        transition: 0.3s;\r" +
    "\n" +
    "\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "\r" +
    "\n" +
    "    .card:hover {\r" +
    "\n" +
    "        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r" +
    "\n" +
    "    }\r" +
    "\n" +
    "\r" +
    "\n" +
    "    .container {\r" +
    "\n" +
    "        padding: 2px 16px;\r" +
    "\n" +
    "\r" +
    "\n" +
    "    }</style><body><div ng-click=\"myFunction()\" style=\"background-color:{{Colour}}; height:{{Height}}px; width: {{Width}}px\" class=\"tile card\"><p style=\"text-align:center\"><img src=\"/com.example.samplelibrary/resources/img/{{Icon}}\" align=\"middle\" style=\"width:{{ImgWidth}}px;height:{{ImgHeight}}px\"></p><h6 align=\"center\" style=\"color: white\">{{Text}}</h6><div class=\"container\"></div></div></body></html>"
  );


  $templateCache.put('scripts/view-components/view-components/display-associated-data/com-example-samplelibrary-display-associated-data-design.directive.html',
    "<div>Displaying a record associated data.</div>"
  );


  $templateCache.put('scripts/view-components/view-components/display-associated-data/com-example-samplelibrary-display-associated-data.directive.html',
    "<div><div><table class=\"table table-condensed\"><thead><tr><td><strong>GUID</strong></td><td><strong>{{cfg.fieldLabelToDisplay}}</strong></td></tr></thead><tbody><tr ng-repeat=\"onedata in myDataWithAssociations\"><!-- We have to use array notation here since you cannot have object.<numericValue> --><!-- <td>{{onedata.id}}</td>\n" +
    "                <td>{{onedata.c7}}</td> --><td>{{onedata['179']}}</td><td>{{onedata[cfg.fieldIdToDisplay]}}</td></tr></tbody></table></div></div>"
  );


  $templateCache.put('scripts/view-components/view-components/display-data/com-example-samplelibrary-display-data-design.directive.html',
    "<div>Displaying data from a record definition.</div>"
  );


  $templateCache.put('scripts/view-components/view-components/display-data/com-example-samplelibrary-display-data.directive.html',
    "<div><div><table class=\"table table-condensed\"><thead><tr><td><strong>GUID</strong></td><td><strong>{{cfg.fieldLabelToDisplay}}</strong></td></tr></thead><tbody><tr ng-repeat=\"onedata in myData\"><!-- We have to use array notation here since you cannot have obbjet.<numericValue> --><!-- <td>{{onedata.id}}</td>\n" +
    "                <td>{{onedata.c7}}</td> --><td>{{onedata['179']}}</td><td>{{onedata[cfg.fieldIdToDisplay]}}</td></tr></tbody></table></div></div>"
  );


  $templateCache.put('scripts/view-components/view-components/display-pic-in-attachment/com-example-samplelibrary-display-pic-in-attachment-design.directive.html',
    "<h3>Displaying a picture stored in an attachment field</h3>"
  );


  $templateCache.put('scripts/view-components/view-components/display-pic-in-attachment/com-example-samplelibrary-display-pic-in-attachment.directive.html',
    "<div><h3>record Definition: {{recordDefinitionFullName}}</h3><h3>Field Id: {{fieldId}}</h3><h3>record Id: {{recordId}}</h3><h3><a ng-click=\"savePicture()\">Click here to save the picture.</a></h3><h3>Picture</h3><img src=\"{{pictureData}}\"></div>"
  );


  $templateCache.put('scripts/view-components/view-components/display-pic-in-attachment/com-example-samplelibrary-inspector-display-pic-in-attachment-field-select.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\"></rx-tooltip>{{options.label}}:</label><div ng-if=\"data.fields.length\"><select class=\"select\" ng-options=\"field.name for field in data.fields track by field.id\" ng-model=\"data.selectedField\"></select></div><div ng-if=\"!data.fields.length\">There are no attachment field to select.</div>"
  );


  $templateCache.put('scripts/view-components/view-components/get-date/com-example-samplelibrary-get-date-design.directive.html',
    "<span class=\"d-icon-clock_o\"></span>"
  );


  $templateCache.put('scripts/view-components/view-components/get-date/com-example-samplelibrary-get-date.directive.html',
    "<div><!-- Displaying date time and a message --><h3>Date / Time: {{returnedDate}}</h3><h5>Message: {{message}}</h5></div>"
  );


  $templateCache.put('scripts/view-components/view-components/price-calculator/com-example-samplelibrary-price-calculator-design.directive.html',
    "<h3>Price with VAT calculation result will be here.</h3>"
  );


  $templateCache.put('scripts/view-components/view-components/price-calculator/com-example-samplelibrary-price-calculator.directive.html',
    "<div><!-- Displaying parameters for information --><h3>Price: {{price}}</h3><h3>VAT: {{vat}}</h3><h3>Price with VAT: {{priceWithVat}}</h3></div>"
  );


  $templateCache.put('scripts/view-components/view-components/priority-calculator/com-example-samplelibrary-priority-calculator-design.directive.html',
    "<h3>This View Component will calculate the Priority</h3>"
  );


  $templateCache.put('scripts/view-components/view-components/priority-calculator/com-example-samplelibrary-priority-calculator.directive.html',
    "<div><!-- Displaying parameters for information --><h3>Urgency: {{urgency}}</h3><h3>Impact: {{impact}}</h3><h3>Priority: {{priority}}</h3></div>"
  );


  $templateCache.put('scripts/view-components/view-components/rest-command/com-example-samplelibrary-rest-command-design.directive.html',
    "<h3>Contacting Java Custom Rest and Commands</h3>"
  );


  $templateCache.put('scripts/view-components/view-components/rest-command/com-example-samplelibrary-rest-command.directive.html',
    "<div><!-- Displaying parameters for information --><h3>Username: {{username}}</h3><h3>Password: {{password}}</h3><h3>Result: {{result}}</h3></div>"
  );


  $templateCache.put('scripts/view-components/view-components/star-click-rating/com-example-samplelibrary-inspector-star-click-rating-color-picker-select.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\"></rx-tooltip>{{options.label}}:</label><div class=\"input-group\"><input colorpicker=\"hex\" type=\"text\" ng-model=\"hexPickerColor\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"rx-editor-header__button rx-editor-header__button_save rx-editor-header__button_divider-before d-button d-button_primary d-button_small\" ng-click=\"saveColor();\" ng-disabled=\"false\">Use Color</button></span></div>"
  );


  $templateCache.put('scripts/view-components/view-components/star-click-rating/com-example-samplelibrary-inspector-star-click-rating-default-value.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\"></rx-tooltip>{{options.label}}:</label><div ng-click=\"onStarSelectHandler($event)\"><span ng-repeat=\"star in stars track by $index\" class=\"{{star.icon}}\"></span></div>"
  );


  $templateCache.put('scripts/view-components/view-components/star-click-rating/com-example-samplelibrary-inspector-star-click-rating-slider-select.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\"></rx-tooltip>{{options.label}}:</label><rzslider rz-slider-model=\"minSliderValue\" rz-slider-options=\"slider_all_options.options\"></rzslider>"
  );


  $templateCache.put('scripts/view-components/view-components/star-click-rating/com-example-samplelibrary-star-click-rating-design.directive.html',
    "<span ng-repeat=\"star in getStars() track by $index\" class=\"d-icon-star\"></span>"
  );


  $templateCache.put('scripts/view-components/view-components/star-click-rating/com-example-samplelibrary-star-click-rating.directive.html',
    "<div ng-click=\"onStarSelectHandler($event)\"><span ng-repeat=\"star in stars track by $index\" class=\"{{star.icon}}\" style=\"{{star.style}}\"></span></div>"
  );


  $templateCache.put('scripts/view-components/view-components/star-rating/com-example-samplelibrary-inspector-star-rating-field-select.directive.html',
    "<label ng-class=\"options.attrs.label.class\"><rx-tooltip tooltip=\"options.tooltip\"></rx-tooltip>{{options.label}}:</label><div ng-if=\"data.fields.length\"><select class=\"select\" ng-options=\"field.name for field in data.fields track by field.id\" ng-model=\"data.selectedField\"></select></div><div ng-if=\"!data.fields.length\">There are no fields for select</div>"
  );


  $templateCache.put('scripts/view-components/view-components/star-rating/com-example-samplelibrary-star-rating-design.directive.html',
    "<span ng-repeat=\"star in getStars() track by $index\" class=\"d-icon-star\"></span>"
  );


  $templateCache.put('scripts/view-components/view-components/star-rating/com-example-samplelibrary-star-rating.directive.html',
    "<div ng-click=\"onStarSelectHandler($event)\"><span ng-repeat=\"star in stars track by $index\" class=\"{{star.icon}}\"></span></div>"
  );


  $templateCache.put('scripts/view-components/view-components/test-vc/com-example-samplelibrary-test-vc-design.directive.html',
    "<div>This is a test View Component</div>"
  );


  $templateCache.put('scripts/view-components/view-components/test-vc/com-example-samplelibrary-test-vc.directive.html',
    "<h3>Input Paramer: {{displayInputParameter}}</h3><h3>Output Parameter: {{displayOutputParameter}}</h3>"
  );

}]);
