define("UsrOrderKonveksi1Page", [], function() {
	return {
		entitySchemaName: "UsrOrderKonveksi",
		attributes: {
			/**
			 * on change field product
			 * berpengaruh ke field price
			 */
			"UsrOrderKonveksiPrice": {
				dependencies: [
					{
						columns: ["UsrOrderKonveksiProduct"],
						methodName: "onChangeProduct"
					}
				]
			},
			/**
			 * on change field qty dan price
			 * berpengaruh ke field total
			 */
			"UsrOrderKonveksiTotal": {
				dependencies: [
					{
						columns: ["UsrOrderKonveksiPrice", "UsrOrderKonveksiQty"],
						methodName: "onChangePriceQty"
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
			 * method on change product
			 * setiap kali ada perubahan di field product
			 * get data product, kemudian value dari get data di pass ke field yg ada di page
			 */
			onChangeProduct: function() {
				var globalThis = this;
				var product = this.get("UsrOrderKonveksiProduct");
				
				this.set("UsrOrderKonveksiQty", 0);
				this.set("UsrOrderKonveksiTotal", 0);

				if(product && product.value != null) {
					console.log("Get data product: ");
					console.log(product);
					console.log("------------------");

					console.log("Call method getDataProduct()");
					console.log("----------------------------");

					// get data product
					this.getDataProduct(product.value, function(callback) {
						console.log("Return method getDataProduct(): ");
						console.log(callback);
						console.log("---------------");

						if(callback) {
							// set data price
							globalThis.set("UsrOrderKonveksiPrice", callback.price);
						}
						else {
							console.log("Data Tidak Ditemukan");
							console.log("--------------------");
						}
					});
				}
				else {
					// set kosong field price, qty, dan total
					this.set("UsrOrderKonveksiPrice", 0);
					this.set("UsrOrderKonveksiQty", 0);
					this.set("UsrOrderKonveksiTotal", 0);
				}
			},
			/**
			 * methode on change qty
			 * setiap kali ada perubahan di field qty
			 * cek qty dengan stok
			 * menjalankan calculate total 
			 */
			onChangePriceQty: function() {
				var globalThis = this;
				var product = this.get("UsrOrderKonveksiProduct");
				var price = this.get("UsrOrderKonveksiPrice");
				var qty = this.get("UsrOrderKonveksiQty");

				// jika price dan qty berupa angka dan nilanya lebih dari 0 
				if((!isNaN(price) && price > 0) && (!isNaN(qty) && qty > 0)) {
					// cek stok
					// this.checkStock(product, qty);

					console.log("Call method checkStock()");
					console.log("------------------------");
					this.checkStock(product.value, qty, function(callback) {
						console.log("Return data callback checkStock()");
						console.log(callback);
						console.log("---------------------------------");

						// jika checkstok true
						if(callback.status && callback.stock) {
							globalThis.set("UsrOrderKonveksiTotal", globalThis.calculateTotal(price, qty));
						}
						else if(!callback.status && callback.stock) {
							console.log("Jumlah Stock tidak mencukupi !");
							console.log("------------------------------");

							globalThis.set("UsrOrderKonveksiQty", 0);
							globalThis.set("UsrOrderKonveksiTotal", 0);
						}
						else {
							console.log("Request Gagal !");
							console.log("---------------");
						}
					});
				}
			},
			/**
			 * method get data product
			 * untuk mendapatkan data dari schema product
			 */
			getDataProduct: function(dataProduct, callback) {
				// get data dari schema
				var productSchema = Ext.create("Terrasoft.EntitySchemaQuery", {
					rootSchemaName: "UsrProductKonveksi"
				});

				// cari berdasarkan id
				productSchema.addMacrosColumn(Terrasoft.QueryMacrosType.PRIMARY_COLUMN, "Id");

				// tambahkan kolom yg ingin di get datanya
				productSchema.addColumn("UsrProductKonveksiPrice");
				productSchema.addColumn("UsrProductKonveksiStock");

				// filter data schema dengan data dr param
				var filters = Ext.create("Terrasoft.FilterGroup");
				filters.addItem(productSchema.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "Id", dataProduct));

				productSchema.filters = filters;
				// eksekusi pencarian data
				productSchema.execute(function(response) {
					if (response.success) {
						if (response.collection.getCount() > 0) {
							callback({
								'id': response.collection.getByIndex(0).get("Id"),
								'price': response.collection.getByIndex(0).get("UsrProductKonveksiPrice"),
								'stock': response.collection.getByIndex(0).get("UsrProductKonveksiStock"),
							});
						}
						else {
							console.log("Data Tidak Ditemukan");
							console.log("--------------------");
							callback(false);
						}
					}
					else {
						console.log("Request Data Gagal");
						console.log("------------------");
						callback(false);
					}
				}, this);
			},
			/**
			 * method check stock dengan qty
			 * return callback berupa true/false
			 */
			checkStock: function(product, qty, callback) {
				// get stock
				this.getDataProduct(product, function(data) {
					// callback success
					if(data) {
						// jika stock < qty
						if(data.stock < qty) {
							callback({
								status: false,
								stock: data.stock
							});
						}
						else {
							callback({
								status: true,
								stock: data.stock
							});
						}
					}
					// callback gagal
					else {
						callback({
							status: false,
							stock: false,
						});
					}
				});
			},
			/**
			 * 
			 */
			calculateTotal: function(price, qty) {
				// validasi data
				if(isNaN(price) || isNaN(qty)) {
					return false;
				}
				
				return price * qty;
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
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrName010433f8-23d3-4457-8939-14f3ec4dc173",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrOrderKonveksiNoOrder",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DATE35ab43ed-f9e0-494d-a35b-885367469d30",
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
				"name": "LOOKUP51e0eca1-70de-49a7-b8d0-f8a5670ed07e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrOrderKonveksiCustomer",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP47dadecd-7cc8-4d35-83dd-8c5890a929a2",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrOrderKonveksiProduct",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "FLOAT3a5d69ad-4678-433b-9f72-71b5f44ec483",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrOrderKonveksiPrice",
					"enabled": true,
					"isRequired": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "INTEGER5b80b54f-19b7-4eb4-8e27-f8bb8197b837",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrOrderKonveksiQty",
					"enabled": true,
					"isRequired": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "FLOAT9107d9f8-4865-4f37-a12c-cd1b811d8d88",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrOrderKonveksiTotal",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
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