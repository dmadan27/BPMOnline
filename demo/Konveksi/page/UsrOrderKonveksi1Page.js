define("UsrOrderKonveksi1Page", ["UsrGetDataSchemaModule"], function(UsrGetDataSchemaModule) {
	return {
		entitySchemaName: "UsrOrderKonveksi",
		attributes: {
			/**
             * onChange di field order
             * berpengaruh ke field address, email, dan mobile phone
             * running method onChangeFullName
             */
            "UsrCustomerKonveksi2Address": {
                dependencies: [
                    {
                        columns: ["UsrCustomerKonveksi2FullName"],
                        methodName: "onChangeFullName"
                    }
                ]
            }
		},
		methods: {
			/**
             * method construct
             * yang pertama kali dijalankan
             */
            onEntityInitialized: function() {
                this.callParent(arguments);

                console.log("Running module Customer Konveksi...");
                console.log("-----------------------------------");
			},
			/**
			 * 
			 */
			getDataDetail: function(id, callback) {
				var search = {
					id: "UsrDetailOrderKonveksiIdOrder"
					data: id
				};
				// set column yg ingin di get
                UsrGetDataSchemaModule.setColumn("UsrDetailOrderKonveksiIdOrder");
                UsrGetDataSchemaModule.setColumn("UsrDetailOrderKonveksiProduct");
				UsrGetDataSchemaModule.setColumn("UsrDetailOrderKonveksiPrice");
				UsrGetDataSchemaModule.setColumn("UsrDetailOrderKonveksiQty");
				UsrGetDataSchemaModule.setColumn("UsrDetailOrderKonveksiSubTotal");

                UsrGetDataSchemaModule.getDataSchemaById("UsrDetailOrderKonveksi", search, function(response) {
                    callback(response);
                });
			}
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrOrderKonveksiFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrOrderKonveksi"
				}
			},
			"UsrSchema1Detail1110ba96": {
				"schemaName": "UsrSchema1Detail",
				"entitySchemaName": "UsrDetailOrderKonveksi",
				"filter": {
					"detailColumn": "UsrDetailOrderKonveksiIdOrder",
					"masterColumn": "UsrName"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrNamefbdb4089-1cd0-4757-9f02-03c0c7a9958b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DATEe819f0b5-b07a-47a0-a1b5-41490408212e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrOrderKonveksiDate",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP5931093c-8895-408e-8175-f946fe159eb1",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrOrderKonveksiCustomerName2",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FLOATa389395d-7e9b-4fda-ab36-4f12c570ac7f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrOrderKonveksiDiscount",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "FLOAT4d1de4cf-4584-4e67-b312-8586bef4c4c6",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrOrderKonveksiTotal",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Tab5749fcefTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab5749fcefTabLabelTabCaption"
					},
					"items": []
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrSchema1Detail1110ba96",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab5749fcefTabLabel",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/
	};
});
