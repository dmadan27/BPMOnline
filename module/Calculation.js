define("UsrPromotionCalculationModule", [],
	function() {
		return {
			ResultTotal: 0,
			init: function() {
				
			},
			recalculate: function(_id) {
				this.getTotal(_id);
			},
			getTotal: function(_id) {
				var total = 0;
				var esq = Ext.create("Terrasoft.EntitySchemaQuery", {
					rootSchemaName: "UsrPromotionDetail"
				});
				
				esq.addColumn("Id");
				esq.addColumn("UsrTotalHFI");
				
				var filterId = esq.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "UsrPromotion", _id);
				esq.filters.add("filterId", filterId);
				
				esq.getEntityCollection(function(result) {
					if (result.success) {
						result.collection.each(function(item) {
							total = total + item.get("UsrTotalHFI");
						});
						
						this.update(_id, total);
					}
				}, this);
			},
			update: function(_id, total) {
				var update = Ext.create("Terrasoft.UpdateQuery", {
					rootSchemaName: "UsrPromotion"
				});
				
				var filters = update.filters;
				var promotionIdFilter = update.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "Id", _id);
				filters.add("promotionIdFilter", promotionIdFilter);
				
				update.setParameterValue("UsrTotal", total, Terrasoft.DataValueType.FLOAT);
				update.execute(function(result) {
					if (result.success) {
						this.ResultTotal = total;
				
						window.console.log(_id + "| total: " + total + " | success");
					}
				}, this);
			}
		};
	}
);