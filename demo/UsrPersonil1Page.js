define("UsrPersonil1Page", ["BusinessRuleModule","ConfigurationConstants","jQuery"], function(BusinessRuleModule, ConfigurationConstants, jQuery) {
	return {
		entitySchemaName: "UsrPersonil",
		details: /**SCHEMA_DETAILS*/{
			"UsrSchema2Detail039a819a": {
				"schemaName": "UsrSchema2Detail",
				"entitySchemaName": "UsrSTA",
				"filter": {
					"detailColumn": "UsrSAhli",
					"masterColumn": "Id"
				}
			},
			"UsrSchema3Detail394abfc4": {
				"schemaName": "UsrSchema3Detail",
				"entitySchemaName": "UsrPP",
				"filter": {
					"detailColumn": "UsrPPPersonil",
					"masterColumn": "Id"
				}
			},
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrPersonilFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrPersonil"
				}
			}
		}/**SCHEMA_DETAILS*/,
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrName712307ea-5621-4f32-8a53-91e24fa4a5f3",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrName"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrJabatanPerson39ba83ea-56bc-4ccc-b461-84842194344d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"labelConfig": {},
					"enabled": true,
					"contentType": 3,
					"bindTo": "UsrJabatanPerson"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP8609ef78-40a8-42cd-b168-1210cef20549",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 19,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrKelulusanS1",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrS1Person10f92f21-4155-45d2-a33b-e17e9f52245f",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"labelConfig": {},
					"enabled": true,
					"contentType": 3,
					"bindTo": "UsrS1Person"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrNipPerson29969a2d-9bbb-4dc9-a08c-f24592b8831b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrNipPerson"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUPdb68bfad-80c6-4373-8eda-f481df87848a",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 19,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrKelulusanS2",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "UsrS2Persond178cfb1-1db0-43ea-ad78-54e118e12f2c",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 12,
						"row": 2,
						"layoutName": "Header"
					},
					"labelConfig": {},
					"enabled": true,
					"contentType": 3,
					"bindTo": "UsrS2Person"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "UsrcatatanPersonc3e75123-a1ac-499b-9397-c16367f3c1b3",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrcatatanPerson"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "UsrStatusPerson04d24af9-268c-4c2a-aa33-a8a9188eee69",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrStatusPerson"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "UsrKatePerson7d1b4c55-9789-4678-8142-e19860dad99c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrKatePerson",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "UsrIjazahde203f56-932c-4e0b-9a42-5d421288e561",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "UsrIjazah"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "UsrPhone324ee97c-07a2-430d-9f8a-ca6fdb727cba",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "UsrPhone"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "UsrKTPFile41a132f8-1876-4b14-bfd3-d4c318c7f4fa",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Header"
					},
					"bindTo": "UsrKTPFile"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "UsrFotof1e56573-4943-41e7-8507-02a05e94d692",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 5,
						"layoutName": "Header"
					},
					"bindTo": "UsrFoto"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "UsrNPWP7dd05d73-bbeb-4cfc-9983-5bd194ecc9f3",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "Header"
					},
					"bindTo": "UsrNPWP"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "UsrSPTa0a709dd-bed4-40ae-a710-370d25df22ad",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 6,
						"layoutName": "Header"
					},
					"bindTo": "UsrSPT"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 15
			},
			{
				"operation": "insert",
				"name": "Tab59531c79TabLabel",
				"values": {
					"caption": "Sertifikasi",
					"items": []
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrSchema2Detail039a819a",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab59531c79TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab8900ceb1TabLabel",
				"values": {
					"caption": "Data Proyek",
					"items": []
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrSchema3Detail394abfc4",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab8900ceb1TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabc4620ec6TabLabel",
				"values": {
					"caption": "Attachments and notes",
					"items": []
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "Tabc4620ec6TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrNotesControlGroup",
				"values": {
					"itemType": 15,
					"items": [],
					"caption": "Notes"
				},
				"parentName": "Tabc4620ec6TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrNotes",
				"values": {
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
				"parentName": "UsrNotesControlGroup",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/,
		attributes: {
			"UsrPhone": {
				dependencies: [
					{
						columns: ["UsrContact"],
						methodName: "GetPhone"
					}
				]
			},
			"UsrName": {
				dependencies: [
					{
						columns: ["UsrNipPerson"],
						methodName: "setDataApi"
					}
				]
			},
			// "UsrJabatanPerson": {
			// 	dependencies: [
			// 		{
			// 			columns: ["UsrNipPerson"],
			// 			methodName: "",
			// 		}
			// 	]
			// },
			// "UsrS1Person": {
			// 	dependencies: [
			// 		{
			// 			columns: ["UsrNipPerson"],
			// 			methodName: "",
			// 		}
			// 	]
			// }
			//,
			// "UsrName":{
			// 	dependencies:[
			// 		{
			// 			columns: ["UsrNipPerson"],
			// 			methodName: "GetAPI"
			// 		}
			// 	]
			// },
			// "UsrJabatanPerson":{
			// 	dependencies:[
			// 		{
			// 			columns: ["UsrNipPerson"],
			// 			methodName: "GetAPI"
			// 		}
			// 	]
			// }
			// ,
			// "UsrS1Person":{
			// 	dependencies:[
			// 		{
			// 			columns: ["UsrNipPerson"],
			// 			methodName: "GetAPI"
			// 		}
			// 	]
			// },
			// "UsrKelulusanS1":{
			// 	dependencies:[
			// 		{
			// 			columns: ["UsrNipPerson"],
			// 			methodName: "GetAPI"
			// 		}
			// 	]
			// },
			// "UsrS2Person":{
			// 	dependencies:[
			// 		{
			// 			columns: ["UsrNipPerson"],
			// 			methodName: "GetAPI"
			// 		}
			// 	]
			// },
			// "UsrKelulusanS2":{
			// 	dependencies:[
			// 		{
			// 			columns: ["UsrNipPerson"],
			// 			methodName: "GetAPI"
			// 		}
			// 	]
			// }
		},
		methods: {
			GetPhone:function(){
				var nama = this.get("UsrContact").displayValue;
				this.set("UsrName", nama);
				
				var usrSubId = this.get("UsrContact")?this.get("UsrContact").value:null;
				if(usrSubId){
					var select = Ext.create("Terrasoft.EntitySchemaQuery", {
						rootSchemaName: "Contact"
					});
					select.addMacrosColumn(Terrasoft.QueryMacrosType.PRIMARY_COLUMN, "Id");
					select.addColumn("MobilePhone");
					var filters = Ext.create("Terrasoft.FilterGroup");
					filters.addItem(select.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "Id",usrSubId));
					select.filters = filters;
					select.execute(function(response) {
						if (response.success) {
							if (response.collection.getCount() > 0) {
								var usrTypeService = response.collection.getByIndex(0).get("MobilePhone");

								// console.log(usrTypeService);

								this.set("UsrPhone", usrTypeService);
							}
						}}, this);
				}
			},
			// method set data api ke field2
			setDataApi: function(){
				// this global
				var globalThis = this;
				var nip = this.get("UsrNipPerson");

				// jika nip ada nilainya
				if(nip != '') {
					this.getDataApi(function(response){
						if(response){
							console.log(nip);

							// set nama
							if(response.data[0].nm_peg && 
								(response.data[0].nm_peg != '' || response.data[0].nm_peg != null)){
								globalThis.set("UsrName", response.data[0].nm_peg);
							}
							
							// set telepon
							if(response.data[0].phone && 
								(response.data[0].phone != '' || response.data[0].phone != null)){
								globalThis.set("UsrPhone", response.data[0].phone);
							}
							
							// set jabatan - lookup
							if(response.data[0].posisi && 
								(response.data[0].posisi != '' || response.data[0].posisi != null)){
								globalThis.setLookup("UsrJabPersonil", "UsrJabatanPerson", response.data[0].posisi);	
							}

							// set s1 - lookup
							if(response.data[0].pend_s1 && 
								(response.data[0].pend_s1 != '' || response.data[0].pend_s1 != null)){
								globalThis.setLookup("UsrS1Personil", "UsrS1Person", response.data[0].pend_s1);
							}

							// set tahun lulus s1 - lookup
							if(response.data[0].lulus_s1 && 
								(response.data[0].lulus_s1 != '' || response.data[0].lulus_s1 != null)){
								globalThis.setLookup("UsrTahunKelulusanLkp", "UsrKelulusanS1", response.data[0].lulus_s1);
							}

							// set s2 - lookup
							if(response.data[0].lulus_s2 && 
								(response.data[0].pend_s2 != '' || response.data[0].pend_s2 != null)){
								globalThis.setLookup("UsrS2Personil", "UsrS2Person", response.data[0].pend_s2);
							}
							
							// set tahun lulus s2 - lookup
							if(response.data[0].lulus_s2 && 
								(response.data[0].lulus_s2 != '' || response.data[0].lulus_s2 != null)){
								globalThis.setLookup("UsrTahunKelulusanLkp", "UsrKelulusanS2", response.data[0].lulus_s2);
							}
						}
						else{
							console.log("NIP Tidak Ditemukan");
							// set data jadi null / kosong
							globalThis.resetData();
						}

					}, nip);
				}
				else{
					console.log("Tidak Ada Inputan NIP");
					// set data jadi null / kosong
					this.resetData();
				}
			},
			// get data dari api
			getDataApi: function(response, nip) {
				$.ajax({
					url: "https://hcis.wika.co.id/services/rest/",
					type: "GET",
					dataType: "JSON",
					data: {
						"format": "json",
						"method": "syncCRM",
						"pin": "9dLwAp",
						"nip": nip,
					},
					success: function(output) {
						console.log(output);
						// handling output data
						if(output.total_seluruh_data > 0) {
							response(output);
						}
						else {
							response(false);
						}
					},
					error: function (jqXHR, textStatus, errorThrown) { // log error
           		 		console.log(jqXHR, textStatus, errorThrown);
			        }
				});
			},
			// fungsi untuk get data lookup yg sesuai dgn dr api, dan menset field lookup sesuai dgn data api
			setLookup: function(lookup, fieldLookup, data) {
				// get data lookup
				var dataLookup = Ext.create("Terrasoft.EntitySchemaQuery", {
					rootSchemaName: lookup
				});

				dataLookup.addMacrosColumn(Terrasoft.QueryMacrosType.PRIMARY_COLUMN, "Name");

				// console.log(dataLookup.addMacrosColumn(Terrasoft.QueryMacrosType.PRIMARY_COLUMN, "Id"));

				var filters = Ext.create("Terrasoft.FilterGroup");
				filters.addItem(dataLookup.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "Name", data));
				dataLookup.filters = filters;
				dataLookup.execute(function(response) {
					console.log("Response: ");
					console.log(response);
					if (response.success) {
						// console.log("Response Collection: ");
						// console.log(response.collection.getCount());
						if (response.collection.getCount() > 0) {
							// get id lookup
							var usrTypeService = response.collection.getByIndex(0).get("Name");
							// console.log(usrTypeService);
							this.set(fieldLookup, {value:usrTypeService, displayValue:data});					
						}
					}
				}, this);
			},
			validData: function(){

			},
			// reset form
			resetData: function() {
				this.set("UsrName", "");
				this.set("UsrcatatanPerson", "");
				this.set("UsrStatusPerson", null);
				this.set("UsrJabatanPerson", null);
				this.set("UsrS1Person", null);
				this.set("UsrKelulusanS1", null);
				this.set("UsrS2Person", null);
				this.set("UsrKelulusanS2", null);
				this.set("UsrPhone", "");
			}
		},
		rules: {
			"UsrContact": {
				FiltrationCategoryBySubCategory: {
					ruleType: BusinessRuleModule.enums.RuleType.FILTRATION,
					autocomplete: true,
					autoClean: true,
					baseAttributePatch: "Type",
					comparisonType: Terrasoft.ComparisonType.EQUAL,
					type: BusinessRuleModule.enums.ValueType.CONSTANT,
					value: "ac278ef3-e63f-48d9-ba34-7c52e92fecfe"
				}
			},
			/*	
			"UsrPPPersonil": {
				FiltrationProductByUsrneed: {
					ruleType: BusinessRuleModule.enums.RuleType.FILTRATION,
					autocomplete: true,
					autoClean: true,
					baseAttributePatch: "UsrSTA",
					comparisonType: Terrasoft.ComparisonType.EQUAL,
					type: BusinessRuleModule.enums.ValueType.ATTRIBUTE,
					attribute: "UsrPPSTA"
				}
			},
			"UsrPPSertifikasi": {
				FiltrationProductByUsrneed: {
					ruleType: BusinessRuleModule.enums.RuleType.FILTRATION,
					autocomplete: true,
					autoClean: true,
					baseAttributePatch: "UsrSTA",
					comparisonType: Terrasoft.ComparisonType.EQUAL,
					type: BusinessRuleModule.enums.ValueType.ATTRIBUTE,
					attribute: "UsrPPSTA"
				}
			}
		*/	
		}
	};
});
