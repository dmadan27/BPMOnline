/**
 * Template module
 * berupa source code yang isinya fungsi2, var, ataupun data2 yang dibungkus didalam object
 */
define("nameModule", [], 
    function() {
        return {
            /**
             * object A
             * bisa tipe data string, integer, float, array, object, dll
             */
            objectA: 'String',
            /**
             * object B
             * bisa tipe data string, integer, float, array, object, dll
             */
            objectB: 100,
            /**
             * Object C
             * bisa tipe data string, integer, float, array, object, dll
             */
            objectC: 250.54,
            /**
             * Object D
             * bisa tipe data string, integer, float, array, object, dll
             */
            objectD: [1, 2, 3, 'A', 'B'],
            /**
             * Object E
             * bisa tipe data string, integer, float, array, object, dll
             */
            objectD: {
                name: 'Ramadan Saputra',
                age: 23,
                status: true,
            },
            /**
             * Object F
             * selain  tipe data, bisa menampung function juga
             */
            objectF: function() {
                console.log(true);
            },
            /**
             * method init
             */
            init: function() {
                console.log("Hello World");
            },
            /**
             * method A
             * bisa berupa fungsi yang sifatnya procedural
             */
            methodA: function() {
                console.log(true);
            },
            /**
             * method B
             * bisa berupa fungsi yang mengembalikan nilai
             */
            methodB: function() {
                return true;
            },
            /**
             * method C
             * bisa fungsi yang bergantung dari param/argument
             */
            methodC: function(paramA, paramB, paramC) {
                return paramA+paramB+paramC;
            },
        };
});