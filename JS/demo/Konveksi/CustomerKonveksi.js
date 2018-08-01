define("UsrCustomerKonveksi1Page", [], function() {
	return {
		entitySchemaName: "UsrCustomerKonveksi",
		attributes: {
			// on change field name customer
			// berpengaruh ke field email
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

				if (nameCustomer.value && (nameCustomer.value != null || nameCustomer.value != "")) {
					console.log("Name Customer: ");
					console.log(nameCustomer.value);
					console.log("-------------------------------------------");

					console.log("Call method getDataContact(): ");
					this.getDataContact(nameCustomer.value, function(callback){
						console.log("-------------------------------------------");
						console.log("Return Data dari getDataContact()");
						console.log(callback);

						// set field name
						globalThis.set("UsrName", callback.full_name);
						// set field address
						globalThis.set("UsrCustomerKonveksiEmail", callback.email);
						// set field phone
						globalThis.set("UsrCustomerKonveksiPhone", callback.mobile_phone);

						console.log(globalThis.get("UsrName"));
						console.log(globalThis.get("UsrCustomerKonveksiEmail"));
						console.log(globalThis.get("UsrCustomerKonveksiPhone"));
					});

					
					// console.log(getData);
				}
				else {
					console.log("Tidak Ada Perubahan Data di Field Nama Customer");
				}
				
			},
			/**
			 * 
			 */
			getDataContact: function(data, callback) {
				// get data dari schema
				var contact = Ext.create("Terrasoft.EntitySchemaQuery", {
					rootSchemaName: "Contact"
				});

				// console.log(contact.addMacrosColumn(Terrasoft.QueryMacrosType.PRIMARY_COLUMN, "Id"));
				
				// cari berdasarkan id
				contact.addMacrosColumn(Terrasoft.QueryMacrosType.PRIMARY_COLUMN, "Id");
				
				// tambahkan kolom yg saling berelasinya untuk get data lainnya
				// pastikan semuanya harus sesuai dgn di schema yg dituju
				contact.addColumn("Name");
				contact.addColumn("Type");
				contact.addColumn("Account");
				contact.addColumn("JobTitle");
				contact.addColumn("Department");
				contact.addColumn("MobilePhone");
				contact.addColumn("Email");

				// filter data schema dengan data dr param
				var filters = Ext.create("Terrasoft.FilterGroup");
				filters.addItem(contact.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "Id", data));
				
				contact.filters = filters;
				// eksekusi pencarian data
				contact.execute(function(response) {
					console.log("Responce Execute: ");
					console.log(response);

					// jika sukses akses data schema
					if (response.success) {
						console.log("Response Collection: ");
						console.log(response.collection.getCount());

						// jika data ada yg sama
						if (response.collection.getCount() > 0) {
							// console.log("Data Kontak dengan ID Contact "+data+" :");
							// console.log("-------------------------------------------");

							// console.log("ID : "+response.collection.getByIndex(0).get("Id"));
							// console.log("-------------------------------------------");

							// console.log("Full Name : "+response.collection.getByIndex(0).get("Name"));
							// console.log("-------------------------------------------");
							
							// console.log("Type : "+response.collection.getByIndex(0).get("Type"));
							// console.log(response.collection.getByIndex(0).get("Type"));
							// console.log("-------------------------------------------");
							
							// console.log("Account : "+response.collection.getByIndex(0).get("Account"));
							// console.log(response.collection.getByIndex(0).get("Type"));
							// console.log("-------------------------------------------");
							
							// console.log("Full Job Title : "+response.collection.getByIndex(0).get("JobTitle"));
							// console.log(response.collection.getByIndex(0).get("Type"));
							// console.log("-------------------------------------------");
							
							// console.log("Department : "+response.collection.getByIndex(0).get("Department"));
							// console.log(response.collection.getByIndex(0).get("Type"));
							// console.log("-------------------------------------------");
							
							// console.log("Mobile Phone : "+response.collection.getByIndex(0).get("MobilePhone"));
							// console.log("-------------------------------------------");
							
							// console.log("Email : "+response.collection.getByIndex(0).get("Email"));
							// console.log("-------------------------------------------");

							var returnContact = {
								'id': response.collection.getByIndex(0).get("Id"),
								'full_name': response.collection.getByIndex(0).get("Name"),
								'type': response.collection.getByIndex(0).get("Type"),
								'account': response.collection.getByIndex(0).get("Account"),
								'full_job_title': response.collection.getByIndex(0).get("JobTitle"),
								'department': response.collection.getByIndex(0).get("Department"),
								'mobile_phone': response.collection.getByIndex(0).get("MobilePhone"),
								'email': response.collection.getByIndex(0).get("Email"),
							};
							
							callback(returnContact);
							// return returnContact;
						}
						else {
							console.log("Data Tidak Ada yang Cocok dengan di Kontak");
							callback(false);
						}
					}
					else {
						console.log("Response Execute Gagal");
						callback(false);
					}
				}, this);
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