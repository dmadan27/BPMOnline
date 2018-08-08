/**
 * Module untuk get data schema
 * 
 * Version: Alpha 0.3
 * 
 * How to Use:
 * 1. Load Module
 * 2. add module name in module yg mau dipake
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
         * Method init - construct
         * method test, hapus saat Production
         */
        init: function() {
            console.log("Execute Module UsrGetDataSchema");
            console.log("-------------------------------");
        },
        /**
         * Method setColumn
         * set property column sesuai dgn inputan yg diinginkan
         * @param column: nama column, dapat berupa object ataupun string
         * jika object, maka memiliki 2 property:
         * object.name: nama column asli, object.alias: alias dari column asli untuk mempermudah pemanggilan
         * @param alias: alias dari nama column, default false.
         * jika true, maka column harus berupa object
         */
        setColumn: function(column, alias = false) {
            // jika alias diisi
            if(alias) {
                this.column.push({column: column, alias: alias});
            }
            else {
                this.column.push(column);
            }
        },
        /**
         * Method getColumn
         * untuk get data property column yg sudah diset sebelumnya
         * @param schema: var schema di method getDataSchema
         */
        getColumn: function(schema) {
            this.column.forEach(function(item){
                // console.log(item);

                // jika item dengan alias
                if(typeof(item) == "object") { 
                    schema.addColumn(item.column, item.alias);
                }
                // jika item tanpa alias
                else {
                    schema.addColumn(item);
                }
            });
        },
        /**
         * Method getDataSchemaById
         * untuk get data sesuai dgn schema yg dipilih
         * @param schema: nama schema yang dicari
         * @param id: data yang ingin dicari di schema, dapat berupa object/string
         * jika object maka formatnya ada 2 property yaitu:
         * search.id: mencari berdasarkan column apa, default id
         * search.data: data yg akan dibandingkan dengan id
         * jika bukan object maka search berupa data yg ingin dicari
         * @param callbackResponse: output berupa callback
         * @return berupa response callback
         */
        getDataSchemaById: function(schema, id, callbackResponse){
            var globalThis = this;

            // inisialiasi create schema
            var esq = Ext.create("Terrasoft.EntitySchemaQuery", {
                rootSchemaName: schema
            });

            // get column yg sudah di set
            this.getColumn(esq);

            // get data sesuai dgn id
            esq.getEntity(id, function(result) {
                // jika ada error processing
                if(!result.success) {
                    callbackResponse({
                        status: false, 
                        message: "Data Query Error"
                    });

                    // reset column
                    globalThis.column = [];
                    return;
                }
                // jika sukses
                var data = globalThis.getResultEntity(result);
                // var message = () ? "Data Tidak Ditemukan" : null;
                callbackResponse({
                    status: true, 
                    data: data,
                    message: null
                });

                // reset column
                globalThis.column = [];
            }, this);
        },
        /**
         * 
         */
        getAllDataSchema: function(schema, filterBy = false, callbackResponse) {
            var globalThis = this;

            // inisialiasi create schema
            var esq = Ext.create("Terrasoft.EntitySchemaQuery", {
                rootSchemaName: schema
            });

            // get column yg sudah di set
            this.getColumn(esq);

            // get data sesuai dgn filter
            esq.getEntityCollection(function(result) {
                // jika ada error processing
                if(!result.success) {
                    callbackResponse({
                        status: false, 
                        message: "Data Query Error"
                    });

                    // reset column
                    globalThis.column = [];
                    return;
                }

                // jika sukses
                // var data = globalThis.getResultEntity(result, false);
                // var message = () ? "Data Tidak Ditemukan" : null;
                callbackResponse({
                    status: true, 
                    data: result.collection,
                    message: null
                });

                // reset column
                globalThis.column = [];
            }, this);
        },
        /**
         * Method untuk get data response di result entity
         * @param resultEntity: var hasil entity di method getDataSchema
         * @returns data berupa object/array yang sesuai dgn column yg sudah si set
         */
        getResultEntity: function(resultEntity, byId = true) {
            var globalThis = this;
            var result = (byId) ? {} : [];
            
            // jika byId true, atau untuk data satuan
            if(byId) {
                this.column.forEach(function(item) {
                    // jika column dgn alias
                    if(typeof(item) == "object"){
                        // add property baru ke object result sesuai dgn item yg ada di column
                        Object.defineProperty(result, item.alias, 
                            { value: resultEntity.entity.get(item.alias) }
                        );
                    }
                    // jika column tanpa alias
                    else{
                        // add property baru ke object result sesuai dgn item yg ada di column
                        Object.defineProperty(result, item, 
                            { value: resultEntity.entity.get(item) }
                        );
                    }
                });
            }
            else {
                // pecah hasil result collection
                resultEntity.collection.each(function(value) {
                    var temp = {};
                    // pecah column
                    globalThis.column.forEach(function(item) {
                        if(typeof(item) == "object"){
                            Object.defineProperty(temp, item.alias, 
                                { value: value.get(item.alias) }
                            );
                        }   
                        else{
                            Object.defineProperty(temp, item, 
                                { value: value.get(item) }
                            );
                        }     
                    });
                    result.push(temp);
                });
            }
                        
            console.log("Result method getResultEntity: ");
            console.log(result);
            console.log("----------------------------------");

            return result;
        }
    };
});