define("UsrExampleBtn1Section", [], function() {
	return {
        entitySchemaName: "UsrExampleBtn",
        methods: {
            /**
             * 
             */
            // onClickTest1: function() {
            //     console.log("Test 1 Button Clicked..");
            // },
        },
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
            {
                "operation": "insert",
                "parentName": "CombinedModeActionButtonsCardLeftContainer",
                "propertyName": "items",
                "name": "Test1Btn",
                "values": {
                    itemType: Terrasoft.ViewItemType.BUTTON,
                    caption: {
                        bindTo: "Resources.Strings.TestBtn1Caption"
                    },
                    // click: {
                    //     bindTo: "onClickTest1"
                    // },
                    // "visible": {"bindTo": "ShowCloseButton"},
                    // "classes": {"textClass": ["actions-button-margin-right"]},
                    "style": Terrasoft.controls.ButtonEnums.style.BLUE,
                }
            }
        ]/**SCHEMA_DIFF*/,
	};
});
