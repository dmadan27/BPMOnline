define("UsrCustomerKonveksi1Page", ["UsrGetDataSchemaModule"], function(UsrGetDataSchemaModule) {
	return {
		entitySchemaName: "UsrCustomerKonveksi",
        attributes: {
            /**
             * onChange di field full name customer
             * berpengaruh ke field address, email, dan mobile phone
             * running method onChangeFullName
             */
            "UsrCustomerKonveksiAddress": {
                dependencies: [
                    {
                        columns: ["UsrCustomerKonveksiFullNameLookup"],
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
                var fullName = this.get("UsrCustomerKonveksiFullNameLookup");

                // console.log(fullName);

                if(fullName != null){
                    this.getDataContact(fullName.value, function(response) {
                        if(response.status){
                            var data = response.data;

                            // set data dari callback
                            globalThis.set("UsrName", data.Name);
                            globalThis.set("UsrUsrCustomerKonveksiEmail", data.Email);
                            globalThis.set("UsrCustomerKonveksiMobilePhone", data.MobilePhone);
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
                this.set("UsrUsrCustomerKonveksiEmail", null);
                this.set("UsrCustomerKonveksiMobilePhone", null);
            }
        },
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "LOOKUP71d8f2a9-816b-4f5c-9505-21a3dd5a3fc6",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCustomerKonveksiFullNameLookup",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING4286588d-00d9-4600-82cc-9ca2239b7998",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCustomerKonveksiAddress",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING83309d61-2819-42f1-8a85-838649dca88c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrUsrCustomerKonveksiEmail",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRING10b6d15b-325c-41d7-abe1-e9fa2251372c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCustomerKonveksiMobilePhone",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_DIFF*/
	};
});
