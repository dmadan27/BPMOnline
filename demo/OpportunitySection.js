define("OpportunitySectionV2", ["VisaHelper", "LookupUtilities", "BaseFiltersGenerateModule", "css!VisaHelper"],
		function(VisaHelper, LookupUtilities, BaseFiltersGenerateModule) {
	return {
		entitySchemaName: "Opportunity",
		attributes: {
			"ResponsibleDepartment": {
				lookupListConfig: {columns: ["SalesDirector"]}
			}
		},
		methods: {

			
			initContextHelp: function() {
				this.set("ContextHelpId", 1003);
				this.callParent(arguments);
			},

			
			initFixedFiltersConfig: function() {
				var fixedFilterConfig = {
					entitySchema: this.entitySchema,
					filters: [
						{
							name: "Owner",
							caption: this.get("Resources.Strings.OwnerFilterCaption"),
							dataValueType: Terrasoft.DataValueType.LOOKUP,
							filter: BaseFiltersGenerateModule.OwnerFilter,
							columnName: "Owner",
							defValue: this.Terrasoft.SysValue.CURRENT_USER_CONTACT
						}
					]
				};
				this.set("FixedFilterConfig", fixedFilterConfig);
			},

			
			getDefaultGridDataViewCaption: function() {
				return this.get("Resources.Strings.SectionCaption");
			},

			
			getSectionActions: function() {
				var actionMenuItems = this.callParent(arguments);
				actionMenuItems.addItem(this.getActionsMenuItem({
					Type: "Terrasoft.MenuSeparator",
					Caption: ""
				}));
				actionMenuItems.addItem(this.getActionsMenuItem({
					Caption: { bindTo: "Resources.Strings.SetOwnerActionCaption" },
					Click: {bindTo: "setOwner"},
					Enabled: {bindTo: "isSingleSelected"}
				}));
				return actionMenuItems;
			},

			
			setOwner: function() {
				var vwSysProcessFilters = Terrasoft.createFilterGroup();
				var activeRow = this.getActiveRow();
				var handler = function(args) {
					var selectedItems = args.selectedRows.getItems();
					if (!Ext.isEmpty(selectedItems)) {
						var update = this.Ext.create("Terrasoft.UpdateQuery", { rootSchemaName: "Opportunity" });
						update.filters.addItem(Terrasoft.createColumnFilterWithParameter(
								Terrasoft.ComparisonType.EQUAL, "Id", activeRow.values.Id));
						update.setParameterValue("Owner", selectedItems[0].Id, Terrasoft.DataValueType.GUID);
						update.execute(function() {
							activeRow.loadEntity(activeRow.values.Id);
						}, this);
					}
				};
				vwSysProcessFilters.name = "vwSysProcessFiler";
				vwSysProcessFilters.logicalComparisonTypes = Terrasoft.LogicalOperatorType.AND;
				var esq = this.Ext.create("Terrasoft.EntitySchemaQuery", {
					rootSchemaName: "Opportunity"
				});
				esq.addColumn("ResponsibleDepartment.SysAdminUnit");
				var filters = this.Ext.create("Terrasoft.FilterGroup");
				filters.addItem(esq.createColumnFilterWithParameter(this.Terrasoft.ComparisonType.EQUAL,
						"Id", activeRow.values.Id));
				esq.filters = filters;
				esq.getEntityCollection(function(result) {
					var collection = result.collection;
					if (!this.Ext.isEmpty(collection)) {
						var item = collection.collection.items[0];
						var responsibleDepartment = item.values["ResponsibleDepartment.SysAdminUnit"].value;
						if (responsibleDepartment) {
							var responsibleDepartmentFilter = Terrasoft.createColumnFilterWithParameter(
									Terrasoft.ComparisonType.EQUAL, "[SysAdminUnit:Contact].[SysAdminUnitInRole:SysAdminUnit].SysAdminUnitRoleId",
									responsibleDepartment);
							vwSysProcessFilters.addItem(responsibleDepartmentFilter);
						}
					}
					vwSysProcessFilters.addItem(Terrasoft.createColumnIsNotNullFilter("[SysAdminUnit:Contact].Id"));
					var config = {
						entitySchemaName: "Contact",
						captionLookup: this.get("Resources.Strings.SetOwnerActionCaption"),
						multiSelect: false,
						columnName: "Name",
						filters: vwSysProcessFilters,
						hideActions: true
					};
					LookupUtilities.Open(this.sandbox, config, handler, this, null, false, false);
				}, this);
			},
			preparePrintFormsMenuCollection: function(printForms) {
						this.callParent(arguments);
						printForms.eachKey(function(key, item) {
						if (item.values.Caption === "Quotation General Henry" && Terrasoft.SysValue.CURRENT_USER.displayValue !== "Henry@rantailaut") {
							item.set("Visible", false);
							}
						if (item.values.Caption === "Quotation General Bobby" && Terrasoft.SysValue.CURRENT_USER.displayValue !== "Bobby@rantailaut") {
							item.set("Visible", false);
							}
						if (item.values.Caption === "Quotation General Raja" && Terrasoft.SysValue.CURRENT_USER.displayValue !== "admin@rantailaut") {
							item.set("Visible", false);
							}
						if (item.values.Caption === "Quotation General Ravi" && Terrasoft.SysValue.CURRENT_USER.displayValue !== "Ravi@rantailaut") {
							item.set("Visible", false);
							}
							
						if (item.values.Caption === "Quotation Project Henry" && Terrasoft.SysValue.CURRENT_USER.displayValue !== "Henry@rantailaut") {
							item.set("Visible", false);
							}
						if (item.values.Caption === "Quotation Project Bobby" && Terrasoft.SysValue.CURRENT_USER.displayValue !== "Bobby@rantailaut") {
							item.set("Visible", false);
							}
						if (item.values.Caption === "Quotation Project Raja" && Terrasoft.SysValue.CURRENT_USER.displayValue !== "admin@rantailaut") {
							item.set("Visible", false);
							}
						if (item.values.Caption === "Quotation Project Ravi" && Terrasoft.SysValue.CURRENT_USER.displayValue !== "Ravi@rantailaut") {
							item.set("Visible", false);
							}
						}, this);
						
			}
		},
		diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/
	};
});