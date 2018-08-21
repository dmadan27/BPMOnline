define("UsrLatihanDate1Page", [], function() {
	return {
        entitySchemaName: "UsrLatihanDate",
        /**
         * List Attributes
         */
        attributes: {
            // set attribute onchange di field create on
			"UsrLatihanDateGetCreateOn": {
				dependencies: [
					{
						columns: ["CreatedOn"],
						methodName: "onChangeCreateOn"
					}
				]
            },
            // set attribute onchange di field modify on
            "UsrLatihanDateGetModifyOn": {
				dependencies: [
					{
						columns: ["ModifiedOn"],
						methodName: "onChangeModifyOn"
					}
				]
            },
            // set attribute onchange di field date
            "UsrLatihanDateGetDate": {
				dependencies: [
					{
						columns: ["UsrLatihanDateDate"],
						methodName: "onChangeDate"
					}
				]
			}
		},
        /**
         * List Method
         */
        methods: {
            /**
             * Method construct / init
             * Run saat pertama kali page di buka
             */
            onEntityInitialized: function() {
				this.callParent(arguments);
				console.log("Running Page Latihan Date.....");
                console.log("------------------------------");
                
                this.set("UsrLatihanDateDate", new Date());
            },
            
            /**
             * Method onChangeDate
             * Run setiap kali ada perubahan di field date
             */
            onChangeCreateOn: function() {
                var value = this.get("CreatedOn");

                console.log(value);
                // this.getDate(value);
            },

            /**
             * Method onChangeDate
             * Run setiap kali ada perubahan di field date
             */
            onChangeModifyOn: function() {
                var value = this.get("UsrLatihanDateDate");

                console.log(value);
                // this.getDate(value);
            },

            /**
             * Method onChangeDate
             * Run setiap kali ada perubahan di field date
             */
            onChangeDate: function() {
                var value = this.get("UsrLatihanDateDate");
                console.log(value);
        
                // get date secara terpisah
                var newDate = this.getDate(value);
                console.log(newDate);

                var dateIndo = "Hari "+this.getDays(value, false)+", Tanggal "+newDate.date+" Bulan "+this.getMonths(value, false)+" Tahun "+newDate.year;
                
                // set date ke field
                this.set("UsrLatihanDateGetDate", dateIndo);
                this.set("UsrLatihanDateGetDateNumber", ""+newDate.date+"")

                this.set("UsrLatihanDateGetDay", "Hari Ke-"+newDate.day); // get hari dalam angka
                this.set("UsrLatihanDateGetDayText", this.getDays(value, false)); // get hari
                
                this.set("UsrLatihanDateMonthNumber", ""+newDate.month+""); // get bulan dalam angka
                this.set("UsrLatihanDateGetMonthText", this.getMonths(value, false)); // get bulan dalam text
                
                this.set("UsrLatihanDateGetYear", ""+newDate.year+""); // get tahun
            },

            /**
             * Method getDate
             * Fungsi untuk mendapatkan property date dari tgl hingga tahun
             * @param {object} date berupa object date js
             * @return {object} property day, date, month, year secara terpisah
             */
            getDate: function(date) {
                // get hari
                var day = date.getDay(); // start dari 0-6, dari hari minggu-sabtu
                // get tanggal
                var dateNumber = date.getDate();
                // get bulan
                var month = date.getMonth(); // start dari 0-11
                // get tahun
                var year = date.getFullYear();

                // return berupa object yg isinya sekumpulan pecahan dari tanggal
                return {
                    day: day,
                    date: dateNumber,
                    month: month+1, // ditambah 1 agar format bulan sesuai
                    year: year
                };
            },

            /**
             * Method getMonths
             * Fungsi untuk konversi bulan ke text, tersedia untuk indo dan inggris
             * @param {object} date berupa object date js
             * @param {boolean} english default true, jika true maka english, false indo
             * @return {string} month sesuai dgn pilihan english or not
             */
            getMonths: function(date, english = true) {
                // array months in indo
                var bulan = [
                    "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", 
                    "Agustus", "September", "Oktober", "November", "Desember"
                ];

                // array months in english
                var months = [
                    "January", "February", "March", "April", "May", "June", "July", 
                    "August", "September", "October", "November", "December"
                ];
                
                return (english) ? months[date.getMonth()] : bulan[date.getMonth()];
            },

            /**
             * Method getDays
             * Fungsi untuk konversi bulan ke text, tersedia untuk indo dan inggris
             * @param {object} date berupa object date js
             * @param {boolean} english default true, jika true maka english, false indo
             * @return {string} text day sesuai dgn pilihan english or not
             */
            getDays: function(date, english = true) {
                // array days in indo
                var hari = [
                    "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"
                ];

                // array days in english
                var days = [
                    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
                ];
                
                return (english) ? days[date.getDay()] : hari[date.getDay()];
            }
        },
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
        diff: /**SCHEMA_DIFF*/[
            {
                "operation": "insert",
                "name": "UsrName7e85b0a2-93db-4e46-ae7c-ba4e6404d1a5",
                "values": {
                    "layout": {
                        "colSpan": 24,
                        "rowSpan": 1,
                        "column": 0,
                        "row": 0,
                        "layoutName": "Header"
                    },
                    "bindTo": "UsrName"
                },
                "parentName": "Header",
                "propertyName": "items",
                "index": 0
            },
            {
                "operation": "insert",
                "name": "CreatedOn6e2f7268-e8a1-42b4-8322-526f290b409a",
                "values": {
                    "layout": {
                        "colSpan": 12,
                        "rowSpan": 1,
                        "column": 0,
                        "row": 1,
                        "layoutName": "Header"
                    },
                    "bindTo": "CreatedOn"
                },
                "parentName": "Header",
                "propertyName": "items",
                "index": 1
            },
            {
                "operation": "insert",
                "name": "STRING5f324ce7-5d84-4805-8450-02a03757d0db",
                "values": {
                    "layout": {
                        "colSpan": 12,
                        "rowSpan": 1,
                        "column": 12,
                        "row": 1,
                        "layoutName": "Header"
                    },
                    "bindTo": "UsrLatihanDateGetCreateOn",
                    "enabled": true
                },
                "parentName": "Header",
                "propertyName": "items",
                "index": 2
            },
            {
                "operation": "insert",
                "name": "ModifiedOne2a889f0-b07d-46d3-8b35-99167b9db3e0",
                "values": {
                    "layout": {
                        "colSpan": 12,
                        "rowSpan": 1,
                        "column": 0,
                        "row": 2,
                        "layoutName": "Header"
                    },
                    "bindTo": "ModifiedOn"
                },
                "parentName": "Header",
                "propertyName": "items",
                "index": 3
            },
            {
                "operation": "insert",
                "name": "STRING45501192-8138-4612-82fe-a82da675245e",
                "values": {
                    "layout": {
                        "colSpan": 12,
                        "rowSpan": 1,
                        "column": 12,
                        "row": 2,
                        "layoutName": "Header"
                    },
                    "bindTo": "UsrLatihanDateGetModifyOn",
                    "enabled": true
                },
                "parentName": "Header",
                "propertyName": "items",
                "index": 4
            },
            {
                "operation": "insert",
                "name": "UsrLatihanDateDated13bd4b1-b02a-4943-ad84-8d7f3288e9e5",
                "values": {
                    "layout": {
                        "colSpan": 24,
                        "rowSpan": 1,
                        "column": 0,
                        "row": 3,
                        "layoutName": "Header"
                    },
                    "bindTo": "UsrLatihanDateDate",
                    "enabled": true
                },
                "parentName": "Header",
                "propertyName": "items",
                "index": 5
            },
            {
                "operation": "insert",
                "name": "STRINGd6074ced-ae0b-4e47-8c96-8e383e4f42f5",
                "values": {
                    "layout": {
                        "colSpan": 18,
                        "rowSpan": 1,
                        "column": 0,
                        "row": 4,
                        "layoutName": "Header"
                    },
                    "bindTo": "UsrLatihanDateGetDate",
                    "enabled": false
                },
                "parentName": "Header",
                "propertyName": "items",
                "index": 6
            },
            {
                "operation": "insert",
                "name": "STRING26bd6b08-2795-47e4-aff6-77e3ce1898ae",
                "values": {
                    "layout": {
                        "colSpan": 12,
                        "rowSpan": 1,
                        "column": 0,
                        "row": 5,
                        "layoutName": "Header"
                    },
                    "bindTo": "UsrLatihanDateGetDay",
                    "enabled": false
                },
                "parentName": "Header",
                "propertyName": "items",
                "index": 7
            },
            {
                "operation": "insert",
                "name": "STRING1c6b67ed-14eb-4b47-9fb3-07bcf6b0bd45",
                "values": {
                    "layout": {
                        "colSpan": 12,
                        "rowSpan": 1,
                        "column": 12,
                        "row": 5,
                        "layoutName": "Header"
                    },
                    "bindTo": "UsrLatihanDateGetDayText",
                    "enabled": false
                },
                "parentName": "Header",
                "propertyName": "items",
                "index": 8
            },
            {
                "operation": "insert",
                "name": "STRINGea2862e6-ec52-4dcb-a989-9ee936f51355",
                "values": {
                    "layout": {
                        "colSpan": 12,
                        "rowSpan": 1,
                        "column": 0,
                        "row": 6,
                        "layoutName": "Header"
                    },
                    "bindTo": "UsrLatihanDateMonthNumber",
                    "enabled": false
                },
                "parentName": "Header",
                "propertyName": "items",
                "index": 9
            },
            {
                "operation": "insert",
                "name": "UsrLatihanDateGetMonthText298d07cc-b7bb-40e9-ac63-f13dab6e8ace",
                "values": {
                    "layout": {
                        "colSpan": 12,
                        "rowSpan": 1,
                        "column": 12,
                        "row": 6,
                        "layoutName": "Header"
                    },
                    "bindTo": "UsrLatihanDateGetMonthText",
                    "enabled": false
                },
                "parentName": "Header",
                "propertyName": "items",
                "index": 10
            },
            {
                "operation": "insert",
                "name": "STRINGf867f26a-0de4-4dbe-b60f-2283ecc1562c",
                "values": {
                    "layout": {
                        "colSpan": 24,
                        "rowSpan": 1,
                        "column": 0,
                        "row": 7,
                        "layoutName": "Header"
                    },
                    "bindTo": "UsrLatihanDateGetYear",
                    "enabled": false
                },
                "parentName": "Header",
                "propertyName": "items",
                "index": 11
            },
            {
                "operation": "insert",
                "name": "STRINGcaecc886-2485-4436-ab80-3319a329c5da",
                "values": {
                    "layout": {
                        "colSpan": 6,
                        "rowSpan": 1,
                        "column": 18,
                        "row": 4,
                        "layoutName": "Header"
                    },
                    "bindTo": "UsrLatihanDateGetDateNumber",
                    "enabled": false
                },
                "parentName": "Header",
                "propertyName": "items",
                "index": 12
            }
        ]/**SCHEMA_DIFF*/,
		rules: {},
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/
	};
});
