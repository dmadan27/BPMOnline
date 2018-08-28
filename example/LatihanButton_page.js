define("UsrExampleBtn1Page", [], function() {
	return {
		entitySchemaName: "UsrExampleBtn",
        attributes: {},
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
			onEntityInitialized: function() {
				this.callParent(arguments);

				if(this.isAddMode()) {
					console.log("This is page is Add Mode....");
					this.mode.isAdd.value = true;
					this.mode.isEdit.value = false;
				}
				else {
					console.log("This is page is Edit Mode....");
					this.mode.isAdd.value = false;
					this.mode.isEdit.value = true;
				}
			},

            /**
             * 
             */
            onClickTest1: function() {
				if(!this.isAddMode()) {
					this.showInformationDialog(this.get("UsrName"));
				}
			},
			
			/**
             * 
             */
            onClickTest2: function() {
                var message = (this.mode.isAdd.value) ? this.mode.isAdd.text : this.mode.isEdit.text;
                console.log("Clicked Test Button 2");
				console.log("Clicked Button In "+message);
				this.showInformationDialog("Clicked Button In "+message);
            },

			/**
			 * 
			 */
			isEnabled: function() { 
				return (this.get("UsrName") == "Test 1") ? true : false;
			}
        },
		diff: /**SCHEMA_DIFF*/[
			
			/**
             * Element Test Button 1
             */
            {
                "operation": "insert",
                "parentName": "LeftContainer",
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
                    "style": Terrasoft.controls.ButtonEnums.style.BLUE
                }
			},
			
			/**
             * Element Test Button 2
             */
            {
                "operation": "insert",
                "parentName": "LeftContainer",
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
			
			{
				"operation": "insert",
				"name": "UsrName01bec11f-8a92-4ef3-bfe4-7679e35aec66",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrName"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": []
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			}

		]/**SCHEMA_DIFF*/,
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrExampleBtnFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrExampleBtn"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
	};
});
