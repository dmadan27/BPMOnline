/**
 * Module untuk get data schema
 * 
 * Version: Alpha 0.1
 * 
 * How to Use:
 * 1. Load Module
 * 2. call method setColumn first, dan set column yg ingin di get datanya
 * 3. call method getDataSchemaById
 * 4. untuk get data dari hasil method, gunakan konsep callback js
 * 
 * Catatan:
 * MASIH TAHAP DEVELOPMENT
 * Komentari setiap console.log disaat module dipakai untuk Production
 */
define("UsrGetDataSchemaModule", [], function() {
    return {
        /**
         * Property column
         * sebagai penampung column apa saja untuk pencarian di schema
         */
        column: [],
        /**
         * Method init
         * method test, hapus saat Production
         */
        init: function() {
            console.log("Execute Module UsrGetDataSchema");
            console.log("-------------------------------");
        },
        /**
         * Method setColumn
         * set property column sesuai dgn inputan yg diinginkan
         * @param nameColumn: nama column
         */
        setColumn: function(nameColumn) {
            this.column.push(nameColumn);
        },
        /**
         * Method getColumn
         * untuk get data property column yg sudah diset sebelumnya
         * @param schema: var schema di method getDataSchema
         */
        getColumn: function(schema) {
            this.column.forEach(function(item){
                // console.log(item);
                schema.addColumn(item);
            });
        },
        /**
         * Method get data schema
         * untuk get data sesuai dgn schema yg dipilih
         * @param nameSchema: nama schema yang dicari
         * @param data: data yang ingin dicari di schema
         * @param respone: output berupa callback
         * @returns berupa response callback
         */
        getDataSchemaById: function(nameSchema, data, response) {
            var globalThis = this;

            // get data schema
            var schema = Ext.create("Terrasoft.EntitySchemaQuery", {
                rootSchemaName: nameSchema
            });
            schema.addMacrosColumn(Terrasoft.QueryMacrosType.PRIMARY_COLUMN, "Id");

            // get column yang sudah di set
            this.getColumn(schema);
            
            // filter data yang dicari dengan data yg ada di schema
            var filters = Ext.create("Terrasoft.FilterGroup");
            filters.addItem(schema.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "Id", data));
            schema.filters = filters;
            schema.execute(function(resultExecute) {
                // jika eksekusi sukses
                if (resultExecute.success) {
                    if (resultExecute.collection.getCount() > 0) {
                        // callback response
                        response({
                            status: true,
                            data: globalThis.setResponseExecute(resultExecute)
                        });
                        // reset column
                        globalThis.column = [];
                    }
                    else {
                        // callback response
                        response({status: false});
                        // reset column
                        globalThis.column = [];    
                    }
                }
                else {
                    // callback response
                    response({status: false});
                    // reset column
                    globalThis.column = [];
                }
            }, this);
        },
        /**
         * Method untuk set data respone di result execute
         * @param resultExecute: var hasil execute di method getDataSchema
         * @returns data berupa object yang sesuai dgn column yg sudah si set
         */
        setResponseExecute: function(resultExecute) {
            var result = {};
            this.column.forEach(function(item) {
                // add property baru ke object result sesuai dgn item yg ada di column
                Object.defineProperty(result, item, { value: resultExecute.collection.getByIndex(0).get(item) });
            });
            
            console.log("Result method setResponseExecute: ");
            console.log(result);
            console.log("----------------------------------");

            return result;
        }
    };
});