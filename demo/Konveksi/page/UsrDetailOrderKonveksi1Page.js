define("UsrDetailOrderKonveksi1Page", ["UsrGetDataSchemaModule"], function(UsrGetDataSchemaModule) {
	return {
		entitySchemaName: "UsrDetailOrderKonveksi",
		attributes: {
            /**
             * 
             */
			"UsrDetailOrderKonveksiSubTotal": {
				dependencies: [
					{
						columns: ["UsrDetailOrderKonveksiPrice", "UsrDetailOrderKonveksiQty"],
						methodName: "onChangePriceQty"
					}
				]
            },
            /**
             * 
             */
			"UsrDetailOrderKonveksiPrice": {
				dependencies: [
					{
						columns: ["UsrDetailOrderKonveksiProduct"],
						methodName: "onChangeProduct"
					}
				]
			}
		},
		methods: {
            /**
             * 
             */
			onEntityInitialized: function() {
                this.callParent(arguments);

                console.log("Running module detail order");
				console.log("-----------------------------------");
				
				// set default price - qty
				this.set("UsrDetailOrderKonveksiPrice", 0);
				this.set("UsrDetailOrderKonveksiQty", 0);
			},
			onChangeProduct: function() {
				var product = this.get("UsrDetailOrderKonveksiProduct");
				var globalThis = this;

				if(product != null) {
					this.getDataProduct(product.value, function(response) {
						console.log(response);
						globalThis.set("UsrDetailOrderKonveksiPrice", response.data.price);
					});		
				}
				else {
					this.set("UsrDetailOrderKonveksiPrice", 0);
					this.set("UsrDetailOrderKonveksiQty", 0);
				}
			},
			/**
			 * 
			 */
        	onChangePriceQty: function() {
				// get data price
				var price = this.get("UsrDetailOrderKonveksiPrice");

				// get data qty
				var qty = this.get("UsrDetailOrderKonveksiQty");

				// handling error - jika ada inputan minus, maka jgn calculate dan set jadi 0
				if(qty < 0){
					// this.set("UsrDetailOrderKonveksiPrice", 0);
					this.set("UsrDetailOrderKonveksiQty", 0);
				}
				else {
					// set subtotal
					// var subTotal = this.calculateSubTotal(price, qty);
					// this.set("UsrDetailOrderKonveksiSubTotal", subTotal);
					this.set("UsrDetailOrderKonveksiSubTotal", this.calculateSubTotal(price, qty));
				}
			},
			/**
			 * 
			 */
			getDataProduct: function(id, callback) {
				// set column yg ingin di get
                UsrGetDataSchemaModule.setColumn("UsrProductKonveksiPrice", "price");
                UsrGetDataSchemaModule.setColumn("UsrProductKonveksiStock", "stock");

				// example get by id
                UsrGetDataSchemaModule.getDataSchemaById("UsrProductKonveksi", id, function(response) {
                    callback(response);
				});
				
				// example get by filter
				// set filter
				// UsrGetDataSchemaModule.setFilter("Id", id);
				// UsrGetDataSchemaModule.getAllDataSchema("Contact", false, function(response) {
				// 	console.log(response);
                //     callback(response);
				// });
			},
			/**
			 * 
			 */
			calculateSubTotal: function(price, qty) {
				return price * qty;
			},
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "LOOKUP2dec4be3-051d-4ae6-b94f-934a31590774",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrDetailOrderKonveksiIdOrder",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP812bcbec-f094-4ee4-a8c3-e6f05b9c0ea6",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrDetailOrderKonveksiProduct",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FLOAT9202d283-bc7b-4aab-9847-b33562272a83",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrDetailOrderKonveksiPrice",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "INTEGER7191f384-41da-4949-bfff-f26ec5a0d1bd",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrDetailOrderKonveksiQty",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "FLOATb07b98e2-866f-49c7-9bd3-63cb576fecb4",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrDetailOrderKonveksiSubTotal",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_DIFF*/
	};
});
