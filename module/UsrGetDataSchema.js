/**
 * Module untuk get data schema
 */
define("UsrGetDataSchema", [], 
    function() {
        return {
            /**
             * Property column
             * sebagai penampung column untuk pencarian di schema
             */
            column: [],
            /**
             * 
             */
            init: function() {
                console.log("Execute Module UsrGetDataSchema");
            },
            /**
             * Method setColumn
             * set property column sesuai dgn inputan yg diinginkan
             * @param nameColumn: nama column
             */
            setColumn: function(nameColumn) {
                this.column.push(column);
            },
            /**
             * Method getColumn
             * untuk get data property column yg sudah diset sebelumnya
             * @param schema: var schema di method getDataSchema
             */
            getColumn: function(schema) {
                this.column.forEach(function(item){
                    schema.addColumn(item);
                });
            },
            /**
             * Method get data schema
             * untuk get data sesuai dgn schema yg dipilih
             * @param nameSchema: nama schema yang dicari
             * @param data: data yang ingin dicari di schema
             * @param respone: output berupa callback
             * return berupa response callback
             */
            getDataSchema: function(nameSchema, data, response) {
                var globalThis = this;

                // get data schema
                var schema = Ext.create("Terrasoft.EntitySchemaQuery", {
					rootSchemaName: nameSchema
                });
                schema.addMacrosColumn(Terrasoft.QueryMacrosType.PRIMARY_COLUMN, "Id");

                // get column yang sudah di set
                this.getColumn(schema);
                
                // filter data dengan data yg ada di schema
                var filters = Ext.create("Terrasoft.FilterGroup");
				filters.addItem(schema.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "Id", data));
                schema.filters = filters;
                schema.execute(function(resultExecute) {
                    if (resultExecute.success) {
                        if (resultExecute.collection.getCount() > 0) {
                            response({
                                status: true,
                                data: globalThis.setResponseExecute(resultExecute, globalThis.column)
                            });
                        }
                        else {
                            response({status: false});    
                        }
                    }
                    else {
                        response({status: false});
                    }
                }, this);
            },
            /**
             * Method untuk set data respone di result execute
             * @param resultExecute: var hasil execute di method getDataSchema
             * @param column: property column
             */
            setResponseExecute: function(resultExecute, column) {
                var result = {};
                column.forEach(function(item) {
                    result.item = resultExecute.collection.getByIndex(0).get(item);    
                });

                return result;
            }
        };
    }
);