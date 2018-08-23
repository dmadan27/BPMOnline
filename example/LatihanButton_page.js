define("UsrExampleBtn1Page", [], function() {
	return {
		entitySchemaName: "UsrExampleBtn",
        attributes: {},
        methods: {

            /**
             * 
             */
            onClickTest1: function() {
                console.log("Clicked Test Button 1");
            },

        },
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
                        bintTo: "Resources.Strings.TestBtn1Caption"
                    },
                    click: {
                        bindTo: "onClickTest1"
                    },
                    // enabled: {
                    //     bindTo: ""
                    // },
                    "style": Terrasoft.controls.ButtonEnums.style.BLUE
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
		]/**SCHEMA_DIFF*/
	};
});
