/**
 * Module untuk get data schema
 * Version: Beta 1.0
 * 
 * Fitur:
 * get data schema berdasarkan id
 * get data schema berdasarkan filter / tidak
 * 
 * How To Use:
 * 1. Load module ini di module yg ingin di pakai
 * 2. jika ingin menggunakan getDataSchemaById:
 *      2.1 panggil method setColumn pertama kali, set column yg ingin di get
 *      2.2 panggil method getDataSchemaById
 * 3. jika ingin menggunakan getAllDataSchema:
 *      3.1 panggil method setColumn pertama kali, set column yg ingin di get
 *      3.2 panggil method setFilter jika ingin menggunakan filter, jika tidak abaikan
 *      3.3 panggil method getAllDataSchema
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
         * Property filter
         * Sebagai penampung filter apa saja untuk pencarian di schema
         */
        filter: [],
        /**
         * Method init - construct
         * method test, hapus saat Production
         */
        init: function() {
            console.log("Running Module UsrGetDataSchema");
            console.log("-------------------------------");
        },
        /**
         * Method setColumn
         * set property column sesuai dgn inputan yg diinginkan
         * @param column: nama column (harus sesuai dgn di section wizard), dapat berupa object ataupun string
         *      jika object, maka memiliki 2 property:
         *      object.name: nama column asli, object.alias: alias dari column asli untuk mempermudah pemanggilan
         * @param alias: alias dari nama column, default false.
         *      jika true, maka column harus berupa object
         */
        setColumn: function(column, alias = false) {
            // jika alias diisi
            if(alias) {
                this.column.push({
                    column: column, 
                    alias: alias
                });
            }
            else {
                this.column.push(column);
            }
        },
        /**
         * Method getColumn
         * untuk get data property column yg sudah diset sebelumnya
         * @param esq: var create shcema
         */
        getColumn: function(esq) {
            // jika column ada isinya
            if(this.column.length > 0) {
                this.column.forEach(function(item){
                    // jika item dengan alias
                    if(typeof(item) == "object") { 
                        esq.addColumn(item.column, item.alias);
                    }
                    // jika item tanpa alias
                    else {
                        esq.addColumn(item);
                    }
                });
            }
            // jika kolom tidak ada isinya, maka set default Id
            else { 
                esq.addColumn("Id");
            }
        },
        /**
         * Method setFilter
         * set property filter sesuai dgn inputan yg diinginkan
         * @param column: nama colum (harus sesuai dgn di section wizard)
         * @param value: nilai dari yg ingin di filter
         * @param equal: berupa boolean, dan defaultnya true. jika true maka data yg dicari adalah yg sama
         *      jika false, maka data yg dicari adalah yg tidak sama
         */
        setFilter: function(column, value, equal = true) {
            this.filter.push({
                column: column, 
                value: value, 
                equal: equal
            });
        },
        /**
         * Method getFilter
         * untuk get data property filter yg sudah diset sebelumnya
         * @param esq: var create shcema
         * @param logical: logic untuk filter pencarian, berupa boolean.
         *      default false. jika false maka filter menggunakan OR
         *      jika true maka filter menggunakan AND
         */
        getFilter: function(esq, logical = false) {
            // jika filter di set
            if(this.filter.length > 0) {
                var i = 0;
                
                // logical filter (AND/OR)
                esq.filters.logicalOperation = (!logical) ? 
                    Terrasoft.LogicalOperatorType.OR : Terrasoft.LogicalOperatorType.AND;
                
                // pecah filter
                this.filter.forEach(function(item) {
                    i++;
                    var tempColumn = item.column;
                    var tempValue = item.value;
                    var tempNameFilter = item.column+i;
                    var tempValueFilter = (item.equal) ? 
                        esq.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, tempColumn, tempValue) : 
                        esq.createColumnFilterWithParameter(Terrasoft.ComparisonType.NOT_EQUAL, tempColumn, tempValue);
                    
                    // add filter ke esq
                    esq.filters.add(tempNameFilter, tempValueFilter);
                });
            }
        },
        /**
         * Method getDataSchemaById
         * untuk get data sesuai dgn schema yg dipilih
         * @param schema: nama schema yang dicari
         * @param id: data yang ingin dicari di schema, dapat berupa object/string
         *      jika object maka formatnya ada 2 property yaitu:
         *      search.id: mencari berdasarkan column apa, default id
         *      search.data: data yg akan dibandingkan dengan id
         *      jika bukan object maka search berupa data yg ingin dicari
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
         * Method getAllDataSchema
         * untuk get semua data di schema yg dipilih
         * @param schema: nama schema yang dicari
         * @param logical: logic untuk filter pencarian, berupa boolean.
         *      default false. jika false maka filter menggunakan OR
         *      jika true maka filter menggunakan AND
         * @param callbackResponse: output berupa callback
         * @returns berupa response callback
         */
        getAllDataSchema: function(schema, logical = false, callbackResponse) {
            var globalThis = this;

            // inisialiasi create schema
            var esq = Ext.create("Terrasoft.EntitySchemaQuery", {
                rootSchemaName: schema
            });

            // get column yg sudah di set
            this.getColumn(esq);

            // filter by and conditional filter
            this.getFilter(esq, logical); 

            // get data sesuai dgn filter
            esq.getEntityCollection(function(result) {
                // jika ada error processing
                if(!result.success) {
                    callbackResponse({
                        status: false, 
                        message: "Data Query Error"
                    });

                    // reset column dan filter
                    globalThis.column = [];
                    globalThis.filter = [];
                    return;
                }
                
                // jika sukses
                var data = globalThis.getResultEntity(result, false);
                var message = (data.length < 1) ? "Data Not Found" : null;
                callbackResponse({
                    status: true, 
                    data: data,
                    message: null
                });
                
                // reset column dan filter
                globalThis.column = [];
                globalThis.filter = [];
            }, this);
        },
        /**
         * Method untuk get data response di result entity
         * @param resultEntity: var hasil entity di method getDataSchema
         * @param byId: true untuk result byId/data satuan, false untuk data set/banyak
         * @returns data berupa object/array yang sesuai dgn column yg sudah si set
         */
        getResultEntity: function(resultEntity, byId = true) {
            var globalThis = this;
            var result = (byId) ? {} : [];
            
            // jika byId true, atau untuk data satuan
            if(byId) {
                // pecah
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
            // jika byId false, untuk data set
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