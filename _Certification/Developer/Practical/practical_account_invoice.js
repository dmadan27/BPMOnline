define("AccountPageV2", [], function() {
    return {
        entitySchemaName: "Account",
        methods: {
            /**
             * Method construct
             */
            onEntityInitialized: function() {
                var scope = this;

                this.callParent(arguments);
                
                this.getInvoice(function(response) {
                    console.log(response);
                    
                    if(response.status){
                        scope.set("UsrQuantityInvoice", response.quantity);
                        scope.set("UsrTotalAmount", response.totalAmount);
                    }
                    else{
                        scope.set("UsrQuantityInvoice", 0);
                        scope.set("UsrTotalAmount", 0);
                    }
                });
            },

            /**
             * method to get data invoice with account link
             * @param {function} callback
             * @returns {function} response callback
             */
            getInvoice: function(callback) {
                var esq = Ext.create("Terrasoft.EntitySchemaQuery", {
                    rootSchemaName: "Invoice"
                });

                // add column
                esq.addColumn("Number");
                esq.addColumn("Amount");
                esq.addColumn("PaymentStatus");

                // add filter account
                var filter = esq.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "Account", this.get("Id"));
                esq.filters.add("filter", filter);

                // execute query
                esq.getEntityCollection(function(result) {
                    if(!result.success) {
                        callbackResponse({
                            status: false, 
                            message: "Data Query Error"
                        });
    
                        return;
                    }

                    var data = [];
                    var quantity = 0;
                    var totalAmount = 0;

                    result.collection.each(function(item) {
                        var temp = {};
                        var paymentStatus = item.get("PaymentStatus").displayValue;
                        var amount = item.get("Amount");

                        temp.Number = item.get("Number");
                        temp.Amount = amount;
                        temp.PaymentStatus = paymentStatus;

                        // if not payment canceled, calculate amount and quantity
                        if(paymentStatus != "Canceled") {
                            quantity++;
                            totalAmount += amount;
                        }
                    });

                    callbackResponse({
                        status: true, 
                        data: data,
                        quantity: quantity,
                        totalAmount: totalAmount,
                        message: null
                    });

                }, this);

            }
        },
    };
});