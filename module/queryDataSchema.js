/**
 * 
 */
define("queryDataSchemaModule", [], 
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
             * @param {string} schema
             * @param {object} data
             * @return {function}
             */
            insert: function(schema, data) {
                
            },

            /**
             * @param {string} schema
             * @param {string} id
             * @param {object} data : property column, value, type
             * @param {function} callback
             * @return {function} berupa response callback dalam bentuk object
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
             * @param {string} schema
             * @param {string} id
             * @param {function} callback
             * @return {function} berupa callback response
             */
            delete: function(schema, id, callback) {

            },

            /**
             * @param {string} type
             * @returns {object}
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