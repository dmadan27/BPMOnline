define("UsrPromotion1Page", ["UsrPromotionCalculationModule"], function(UsrPromotionCalculationModule) {
	return {
		entitySchemaName: "UsrPromotion",
		details: /**SCHEMA_DETAILS*/{
			"UsrSchema146Detailb104da9a": {
				"schemaName": "UsrSchema146Detail",
				"entitySchemaName": "UsrPromotionDetail",
				"filter": {
					"detailColumn": "UsrPromotion",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrName4857fad2-7cdb-4eab-af91-7b15cdf56088",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrName",
					"enabled": true
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOATb39e4226-4fd0-4b85-9f58-77cfc0d70cb9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrTotal",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP659d44a7-a2c8-4090-8c1b-ff453ebb9c71",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrBranch",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tabc9b8d054TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabc9b8d054TabLabelTabCaption"
					},
					"items": []
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrSchema146Detailb104da9a",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabc9b8d054TabLabel",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/,
		methods: {
			onCloseClick: function() {
				var Id = this.get("Id");
				UsrPromotionCalculationModule.recalculate(Id);
				this.callParent(arguments);
			},
			onSaved: function() {
				var Id = this.get("Id");
				UsrPromotionCalculationModule.recalculate(Id);
				this.callParent(arguments);
			}
		},
		rules: {},
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/
	};
});
