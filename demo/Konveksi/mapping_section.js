// section customer
var customerKonveksi = {
    title: "Customer Konveksi",
    code: "UsrCustomerKonveksi",
    page: [
        // field full name
        {
            name: "Full Name",
            code: "UsrCustomerKonveksiFullName",
            type: "string",
            requireDB: true,
        },
        // field address
        {
            name: "Address",
            code: "UsrCustomerKonveksiAddress",
            type: "string",
            requireDB: false,
        },
        // field email
        {
            name: "Email",
            code: "UsrCustomerKonveksiEmail",
            type: "string",
            requireDB: false,
        },
        // field mobile phone
        {
            name: "Mobile Phone",
            code: "UsrCustomerKonveksiMobilePhone",
            type: "string",
            requireDB: true,
        }
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
            code: "UsrProductKonveksiCodeProduct",
            type: "string",
            requireDB: true,
        },
        // field name product
        {
            name: "Name Product",
            code: "UsrProductKonveksiNameProduct",
            type: "string",
            requireDB: true,
        },
        // field price
        {
            name: "Price",
            code: "UsrProductKonveksiPrice",
            type: "decimal",
            requireDB: true,
        },
        // field stock
        {
            name: "Stock",
            code: "UsrProductKonveksiStock",
            type: "integer",
            requireDB: true,
        },
        // field description
        {
            name: "Description",
            code: "UsrProductKonveksiDescription",
            type: "string",
            requireDB: true,
        },
    ],
};

// section order
var order = {
    title: "Order Konveksi",
    code: "UsrOrderKonveksi",
    page: [
        // field code order
        {
            name: "Code Product",
            code: "UsrProductKonveksiCodeProduct",
            type: "string",
            requireDB: true,
        },
    ],
};

// section detail order
var detailOrder = {
    title: "Detail Order Konveksi",
    code: "UsrDetailOrderKonveksi",
    page: [],
};

// section supplier
var supplierKonveksi = {

};