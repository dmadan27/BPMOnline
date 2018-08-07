define("UsrCustomerKonveksi21Page", [], function() {
	return {
		entitySchemaName: "UsrCustomerKonveksi2",
		attributes: {
            /**
             * onChange di field full name customer
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
             * method onChangeFullName
             * setiap kali ada perubahan di field full name akan mengubah field email dan phone
             * menjalankan method getDataContact()
             */
            onChangeFullName: function() {
                var globalThis = this;
                var fullName = this.get("UsrCustomerKonveksi2FullName");

                // console.log(fullName);

                if(fullName != null){
                    this.getDataContact(fullName.value, function(response) {
                        if(response.status){
                            var data = response.data;

                            // set data dari callback
                            globalThis.set("UsrName", data.Name);
                            globalThis.set("UsrCustomerKonveksi2Email", data.Email);
                            globalThis.set("UsrCustomerKonveksi2MobilePhone", data.MobilePhone);
                            console.log(globalThis.get("UsrName"));
                        }
                    });
                }
                else{
                    this.resetField();
                }
            },
            /**
             * method getDataContact
             * untuk get data contact sesuai id yang dipilih
             * @param id: id contact
             * @param callback: response callback yang akan di olah
             * @returns berupa callback
             */
            getDataContact: function(id, callback) {
                // set column yg ingin di get
                UsrGetDataSchemaModule.setColumn("Name");
                UsrGetDataSchemaModule.setColumn("Email");
                UsrGetDataSchemaModule.setColumn("MobilePhone");

                UsrGetDataSchemaModule.getDataSchemaById("Contact", id, function(response) {
                    callback(response);
                });
            },
            /**
             * method resetField
             * untuk mereset field menjadi kosong/null
             * mereset field name, email, dan phone
             */
            resetField: function() {
                this.set("UsrName", null);
                this.set("UsrCustomerKonveksi2Address", null);
                this.set("UsrCustomerKonveksi2Email", null);
                this.set("UsrCustomerKonveksi2MobilePhone", null);
            }
        },
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrCustomerKonveksi2File",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrCustomerKonveksi2"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "LOOKUP5b35d9bd-3198-46f9-ae38-17ffa0ede3c1",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCustomerKonveksi2FullName",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCustomerKonveksi2Addressa3a3a67f-39ee-4849-82ac-b1c749cc7c99",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCustomerKonveksi2Address",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING7e613235-d1fd-4da6-a3f4-bcfaa34b752e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCustomerKonveksi2MobilePhone",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRING8891f9c2-d167-4cbf-9724-80de1dfeb039",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCustomerKonveksi2Email",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
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
					"bindTo": "UsrNotes",
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
