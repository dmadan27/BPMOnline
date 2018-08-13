/**
 * 
 */
define("UsrQueryDataSchemaModule", [], 
    function() {
        return {
            /**
             * 
             */
            init: function() {
                console.log("Running Module UsrQueryDataSchemaModule");
                console.log("------------------------------------");
            },
            /**
             * @param schema {string}
             * @param data {object}
             */
            insert: function(schema, data) {

            },
            /**
             * @param schema {string}
             * @param id {string}
             * @param data {object}: property column, value, type
             * @param callback {function}
             * @return {callback} berupa response callback dalam bentuk object
             */
            update: function(schema, id, data, callback) {
                // inisialiasi create schema for update
                var update = Ext.create("Terrasoft.UpdateQuery", {
                    rootSchemaName: schema
                });
                
                // set update by id
                update.enablePrimaryColumnFilter(id);
                // set value update
                update.setParameterValue(data.column, data.value, this.getDataType(data.type));
                update.execute(function(result) {
                    console.log(result);                    
                    var message = (result.success) ? null : result.errorInfo.message;
                    callback({
                        status: result.success,
                        message: message,
                    });
                }, this);
            },
            /**
             * @param schema {string}
             * @param id {string}
             */
            delete: function(schema, id) {

            },
            /**
             * @param type {string} 
             */
            getDataType: function(type) {
                switch (type {
                    case 'FLOAT':
                        return Terrasoft.DataValueType.FLOAT;
                        break;
                    
                    case 'INTEGER':
                        return Terrasoft.DataValueType.INTEGER;
                        break;

                    case 'BOOLEAN':
                        return Terrasoft.DataValueType.BOOLEAN;
                        break;

                    case 'LOOKUP':
                        return Terrasoft.DataValueType.LOOKUP;
                        break;

                    case 'GUID':
                        return Terrasoft.DataValueType.GUID;
                        break;

                    case 'TEXT':
                        return Terrasoft.DataValueType.TEXT;
                        break;

                    // default text
                    default:
                        return Terrasoft.DataValueType.TEXT;
                        break;
                }
            },
        };
    }
);