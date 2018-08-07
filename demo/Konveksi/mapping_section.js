// section customer
var customerKonveksi = {
    title: "Customer Konveksi",
    code: "UsrCustomerKonveksi",
    page: [
        // field full name for name
        {
            name: "Full Name",
            code: "UsrName",
            type: "string",
            requireDB: true,
            readOnly: false,
        },
        // field full name for lookup
        {
            name: "Full Name",
            code: "UsrCustomerKonveksiFullNameLookup",
            type: {
                type: "lookup",
                from: "Contact"
            },
            requireDB: true,
            readOnly: false,
        },
        // field address
        {
            name: "Address",
            code: "UsrCustomerKonveksiAddress",
            type: "string",
            requireDB: false,
            readOnly: false,
        },
        // field mobile phone
        {
            name: "Mobile Phone",
            code: "UsrCustomerKonveksiMobilePhone",
            type: "string",
            requireDB: true,
            readOnly: false,
        }
        // field email
        {
            name: "Email",
            code: "UsrCustomerKonveksiEmail",
            type: "string",
            requireDB: false,
            readOnly: false,
        },
    ],
};

// section product
var productKonveksi = {
    title: "Product Konveksi",
    code: "UsrProductKonveksi",
    page: [
        // field code product
        {
            name: "Code Product",
            code: "UsrName",
            type: "string",
            requireDB: true,
            readOnly: false,
        },
        // field name product
        {
            name: "Name Product",
            code: "UsrProductKonveksiNameProduct",
            type: "string",
            requireDB: true,
            readOnly: false,
        },
        // field price
        {
            name: "Price",
            code: "UsrProductKonveksiPrice",
            type: "decimal",
            requireDB: true,
            readOnly: false,
        },
        // field stock
        {
            name: "Stock",
            code: "UsrProductKonveksiStock",
            type: "integer",
            requireDB: true,
            readOnly: false,
        },
        // field description
        {
            name: "Description",
            code: "UsrProductKonveksiDescription",
            type: "string",
            requireDB: true,
            readOnly: false,
        },
    ],
};

// section order
var orderKonveksi = {
    title: "Order Konveksi",
    code: "UsrOrderKonveksi",
    page: [
        // field code order
        {
            name: "Code Order",
            code: "UsrName",
            type: "string",
            requireDB: true,
            readOnly: false,
        },
        // field date
        {
            name: "Date",
            code: "UsrOrderKonveksiDate",
            type: "date",
            requireDB: true,
            readOnly: false,
        },
        // field customer name
        {
            name: "Customer Name",
            code: "UsrOrderKonveksiCustomerName",
            type: "string",
            requireDB: true,
            readOnly: false,
        },
        // field discount
        {
            name: "Discount",
            code: "UsrOrderKonveksiDiscount",
            type: "decimal",
            requireDB: false,
            readOnly: false,
        },
        // field total
        {
            name: "Total",
            code: "UsrOrderKonveksiTotal",
            type: "decimal",
            requireDB: true,
            readOnly: false,
        },
    ],
};

// section detail order
var detailOrderKonveksi = {
    title: "Detail Order Konveksi",
    code: "UsrDetailOrderKonveksi",
    page: [
        // field id order
        {
            name: "Id Order",
            code: "UsrDetailOrderKonveksiIdOrder",
            type: {
                type: "lookup",
                from: "Order Konveksi"
            },
            requireDB: true,
            readOnly: false,
        },
        // field product
        {
            name: "Product",
            code: "UsrDetailOrderKonveksiProduct",
            type: {
                type: "lookup",
                from: "Product Konveksi"
            },
            requireDB: true,
            readOnly: false,
        },
        // field price
        {
            name: "Price",
            code: "UsrDetailOrderKonveksiPrice",
            type: "decimal",
            requireDB: true,
            readOnly: false,
        },
        // field qty
        {
            name: "Qty",
            code: "UsrDetailOrderKonveksiQty",
            type: "integer",
            requireDB: true,
            readOnly: false,
        },
        // field subtotal
        {
            name: "Sub Total",
            code: "UsrDetailOrderKonveksiSubTotal",
            type: "decimal",
            requireDB: true,
            readOnly: false,
        }
    ],
};

// section supplier
var supplierKonveksi = {
    title: "Supplier Konveksi",
    code: "UsrSupplierKonveksi",
    page: [
        // field name supplier for name
        {
            name: "Name Supplier",
            code: "UsrName",
            type: "string",
            requireDB: true,
            readOnly: false,
        },
        // field name supplier for lookup
        {
            name: "Name Supplier",
            code: "UsrSupplierKonveksiNameSupplierLookup",
            type: {
                type: "lookup",
                from: "Account"
            },
            requireDB: true,
            readOnly: false,
        },
        // field address
        {
            name: "Address",
            code: "UsrSupplierKonveksiAddress",
            type: "string",
            requireDB: false,
            readOnly: false,
        },
        // field phone
        {
            name: "Phone",
            code: "UsrSupplierKonveksiPhone",
            type: "string",
            requireDB: true,
            readOnly: false,
        }
        // field email
        {
            name: "Email",
            code: "UsrSupplierKonveksiEmail",
            type: "string",
            requireDB: false,
            readOnly: false,
        },
    ],
};

// section purchase
var purchaseKonveksi = {

}