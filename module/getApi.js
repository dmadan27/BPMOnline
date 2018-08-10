/**
 * Contoh untuk get data api dengan jQuery
 * Load terlebih dahulu jQuery
 */
define("NamaModule", ["jQuery"], function(jQuery) {
    return {
        /**
         * Method get data api
         * method ini menggunakan prinsip kerja ajax dengan bantuan jQuery
         * @param url {string}: url akses api, berupa string
         * @param type {string}: type akses api. GET / POST, berupa string
         * @param dataType {string}: tipe data balikan dari api, JSON, berupa string
         * @param data {Object}: data parameter yg dibutuhkan oleh api, berupa object
         * @param callback {function}
         * @returns berupa callback
         * 
         * catatan: bisa secara langsung tanpa menggunakan param, ini hanya contoh sederhana
         */
        getApi: function(url, type, dataType, data, callback) {        
            $.ajax({
                url: url,
                type: type,
                dataType: dataType,
                data: data,
                // fungsi untuk melakukan sesuatu sebelum menerima response dari api
                beforeSend: function() {},
                // jika sukses
                success: function(output) {
                    console.log(output);

                    // return data berupa callback
                    callback(output);
                },
                // jika gagal, log error
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR, textStatus, errorThrown);
                }
            });
        },
        /**
         * contoh implementasi penggunaan
         */
        contohGetApi: function() {
            var url = "https://helloworld.com/api";
            var type = "GET";
            var dataType = "JSON";
            var data = {
                token: "qwertyuiop",
                id: "001",
                username: "qwerty",
                type: "user",
                get: "blablabla"
            };

            this.getApi(url, type, dataType, data, function(response) {
                // response dari callback get api
                console.log(response);

                // do something or nothing
                // ...............
                // ...............
            });
        }
    };
});