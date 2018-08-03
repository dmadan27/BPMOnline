define("UsrCustomerKonveksi1Page", ["UsrGetDataSchemaModule"], function(UsrGetDataSchemaModule) {
	return {
		entitySchemaName: "UsrCustomerKonveksi",
		attributes: {
			/**
			 * 
			 */
			"UsrCustomerKonveksiEmail": {
				dependencies: [
					{
						columns: ["UsrCustomerKonveksiNameCustomer"],
						methodName: "onChangeCustomer"
					}
				]
			}
		},
		methods: {
			/**
			 * method yg pertama kali dijalankan saat page dijalankan
			 */
			onEntityInitialized: function() {
				this.callParent(arguments);
				console.log("Welcome, Call Init Function");
				console.log("---------------------------");

				UsrGetDataSchemaModule.init();	
			},
			/**
			 * method on change customer
			 * setiap kali ada perubahan di field name customer, maka method dijalankan
			 * untuk mendapatkan value dari data Contact, yg kemudian valuenya di passing ke field yg ada di page
			 */
			onChangeCustomer: function() {
				// global this
				var globalThis = this;

				// get data nama customer
				var nameCustomer = this.get("UsrCustomerKonveksiNameCustomer");

				if (nameCustomer && (nameCustomer.value != null || nameCustomer.value != "")) {
					console.log("Name Customer: ");
					console.log(nameCustomer.value);
					console.log("---------------");

					console.log("Method getDataContact() running...");
					console.log("----------------------------------");
					this.getDataContact(nameCustomer.value, function(response) {
						console.log("Response dari getDataContact");
						console.log(data);
						console.log("-----------------------------");

						if(response.status){
							globalThis.set("UsrName", response.data.Name);
							globalThis.set("UsrCustomerKonveksiEmail", response.data.Email);
							globalThis.set("UsrCustomerKonveksiPhone", response.data.Phone);
						}
						
					});
				}
				else {
					console.log("Tidak Ada Perubahan Data di Field Nama Customer");
				}
				
			},
			getDataContact: function(data, responseData){
				console.log("Column Sebelum: ");
				console.log(UsrGetDataSchemaModule.column);
				console.log("----------------");

				UsrGetDataSchemaModule.setColumn("Name");
				UsrGetDataSchemaModule.setColumn("Type");
				UsrGetDataSchemaModule.setColumn("Account");
				UsrGetDataSchemaModule.setColumn("JobTitle");
				UsrGetDataSchemaModule.setColumn("Department");
				UsrGetDataSchemaModule.setColumn("MobilePhone");
				UsrGetDataSchemaModule.setColumn("Email");

				console.log("Column Sesudah: ");
				console.log(UsrGetDataSchemaModule.column);
				console.log("----------------");

				UsrGetDataSchemaModule.getDataSchemaById("Contact", data, function(response) {
					console.log("Response method getDataSchemaById: ");
					console.log(response);
					console.log("-----------------------------------");

					responseData(response);
				})
			},
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrCustomerKonveksiFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrCustomerKonveksi"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "LOOKUPbc49b136-5328-4312-b88a-b537b20f9389",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCustomerKonveksiNameCustomer",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.LOOKUPbc49b13653284312b88ab537b20f9389LabelCaption"
						}
					},
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING836929b3-222b-44ce-8caa-3f862c330b20",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCustomerKonveksiPhone",
					"labelConfig": {
						"caption": {
							"bindTo": "Resources.Strings.STRING836929b3222b44ce8caa3f862c330b20LabelCaption"
						}
					},
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRINGbcdcbdfe-8549-43d2-91c1-ad0729a96c94",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCustomerKonveksiEmail",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
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