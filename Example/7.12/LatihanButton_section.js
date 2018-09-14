define("UsrExampleBtn1Section", [], function() {
	return {
        entitySchemaName: "UsrExampleBtn",
        methods: {
			
			/**
			 * 
			 */
			mode: {
        		isAdd: {
        			value: false,
        			text: "New Page"
        		},
        		isEdit: {
        			value: false,
        			text: "Edit Page"
        		},
			},
			
            /**
             * 
             */
            onClickTest1: function() {
            	var message = (this.mode.isAdd.value) ? this.mode.isAdd.text : this.mode.isEdit.text;
                console.log("Clicked Test Button 1");
				console.log("Clicked Button In "+message);
				this.showInformationDialog("Clicked Button In "+message);
                
                var activeRow = this.get("ActiveRow");
                console.log(activeRow);
                console.log(this.get("GridData").get(activeRow));
                console.log(this.get("GridData").get(activeRow).get("UsrName"));
                
                // console.log(this.get("UsrName"));
            },

            
            /**
             * 
             */
            onClickTest2: function() {
            	var message = (this.mode.isAdd.value) ? this.mode.isAdd.text : this.mode.isEdit.text;
                console.log("Clicked Test Button 2");
				console.log("Clicked Button In "+message);
				this.showInformationDialog("Clicked Button In "+message);
                
                var activeRow = this.get("ActiveRow");
                console.log(activeRow);
                console.log(this.get("GridData").get(activeRow));
                // console.log(this.get("GridData").get(activeRow).get("PrimaryContact").value);
            },

            /**
             * 
             */
            isEnabled: function() {
                var activeRow = this.get("ActiveRow");
                if(!activeRow) {
                	return false;
                }
                var selectedRow = this.get("GridData").get(activeRow).get("UsrName");
                return (selectedRow == "Test 1") ? true : false;
            }

        },
		diff: /**SCHEMA_DIFF*/[
            /**
             * Element Test Button 1
             */
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
                    click: {
                        bindTo: "onClickTest1"
                    },
                    enabled: {
                    	bindTo: "isEnabled"
                    },
                    "style": Terrasoft.controls.ButtonEnums.style.BLUE,
                }
            },

            /**
             * Element Test Button 2
             */
            {
                "operation": "insert",
                "parentName": "CombinedModeActionButtonsCardLeftContainer",
                "propertyName": "items",
                "name": "Test2Btn",
                "values": {
                    itemType: Terrasoft.ViewItemType.BUTTON,
                    caption: {
                        bindTo: "Resources.Strings.TestBtn2Caption"
                    },
                    click: {
                        bindTo: "onClickTest2"
                    },
                    "style": Terrasoft.controls.ButtonEnums.style.GREEN
                }
            },
            
        ]/**SCHEMA_DIFF*/,
        details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
	};
});
