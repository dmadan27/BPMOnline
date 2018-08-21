define("UsrExampleDate1Page", [], function() {
	return {
		entitySchemaName: "UsrExampleDate",
        
        /**
         * List Attributes
         */
        attributes: {
            // set attribute onchange di field create on
			"UsrExampleDateCreatedOn": {
				dependencies: [
					{
						columns: ["CreatedOn"],
						methodName: "onChangeCreatedOn"
					}
				]
            },
            // set attribute onchange di field modify on
            "UsrExampleDateModifiedOn": {
				dependencies: [
					{
						columns: ["ModifiedOn"],
						methodName: "onChangeModifiedOn"
					}
				]
            },
            // set attribute onchange di field date
            "UsrExampleDateGetDate": {
				dependencies: [
					{
						columns: ["UsrExampleDateFullDate"],
						methodName: "onChangeFullDate"
					}
				]
			}
        },
        
        /**
         * List Methods
         */
        methods: {
            /**
             * Method construct / init
             * Run saat pertama kali page di load / buka
             */
            onEntityInitialized: function() {
				this.callParent(arguments);
				console.log("Running Page Example Date.....");
                console.log("------------------------------");
                
                // set default value
               this.setDefaultValue();
            },

            /**
             * Set Default value di field Name, Created On, Modified On, dan Full Date
             * Value berupa object date() today
             */
            setDefaultValue: function() {
                var today = new Date();
                
                // set name
                this.setName(today);
                
                // set created on
                this.set("CreatedOn", today);

                // set modified on
                this.set("ModifiedOn", today);

                // set full date
                this.set("UsrExampleDateFullDate", today);
            },

            /**
             * @param {object} date object date()
             */
            setName: function(date) {
                var fullDate = this.getFullDate(date);          
                var newDate = fullDate.dayText.indonesia + ', ' + fullDate.date + ' ' +
                            fullDate.monthText.indonesia + ' ' + fullDate.year;

                console.log(newDate);
                console.log(fullDate);

                this.set("UsrName", newDate);
            },

            /**
             * Method onChangeDate
             * Run setiap kali ada perubahan di field date
             */
            onChangeCreatedOn: function() {
                var date = this.getFullDate(this.get("CreatedOn"));
                var minute = (date.minute < 10) ? '0'+date.minute : date.minute;

                this.set("UsrExampleDateCreatedOn", (parseInt(date.month)+1)+'/'+date.date+'/'+date.year);
                this.set("UsrExampleDateTimeCreatedOn", date.hour+':'+minute);
            },

            /**
             * Method onChangeDate
             * Run setiap kali ada perubahan di field date
             */
            onChangeModifiedOn: function() {
                var date = this.getFullDate(this.get("ModifiedOn"));
                var minute = (date.minute < 10) ? '0'+date.minute : date.minute;

                this.set("UsrExampleDateModifiedOn", (parseInt(date.month)+1)+'/'+date.date+'/'+date.year);
                this.set("UsrExampleDateTimeModifiedOn", date.hour+':'+minute);
            },

            /**
             * Method onChangeFullDate
             * Run setiap kali ada perubahan di field full date
             */
            onChangeFullDate: function() {
                var date = this.getFullDate(this.get("UsrExampleDateFullDate"));
                
                this.set("UsrExampleDateGetDate", ''+date.date+'');
                this.set("UsrExampleDateGetMonth", ''+(parseInt(date.month)+1)+'');
                this.set("UsrExampleDateGetYear", ''+date.year+'');
                this.set("UsrExampleDateGetDayIndo", date.dayText.indonesia);
                this.set("UsrExampleDateGetDayEng", date.dayText.english);
                this.set("UsrExampleDateGetMonthIndo", date.monthText.indonesia);
                this.set("UsrExampleDateGetMonthEnglish", date.monthText.english);
            },

            /**
             * Method getMonths
             * Fungsi untuk konversi bulan ke text, tersedia untuk indo dan inggris
             * @param {object} date berupa object date js
             * @param {boolean} english default true, jika true maka english, false indo
             * @return {string} month sesuai dgn pilihan english or not
             */
            getMonths: function(date, english = true) {
                // array months
                var months = {
                    // month in indonesia 
                    indonesia: [
                        "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", 
                        "Agustus", "September", "Oktober", "November", "Desember"    
                    ],
                    // month in english
                    english: [
                        "January", "February", "March", "April", "May", "June", "July", 
                        "August", "September", "October", "November", "December"
                    ],
                };

                return (english) ? months.english[date.getMonth()] : months.indonesia[date.getMonth()];
            },

            /**
             * Method getDays
             * Fungsi untuk konversi bulan ke text, tersedia untuk indo dan inggris
             * @param {object} date berupa object date js
             * @param {boolean} english default true, jika true maka english, false indo
             * @return {string} text day sesuai dgn pilihan english or not
             */
            getDays: function(date, english = true) {
                // array days
                var days = {
                    // days in indonesia
                    indonesia: [
                        "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"
                    ],
                    // days in english
                    english: [
                        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
                    ],
                };
                
                return (english) ? days.english[date.getDay()] : days.indonesia[date.getDay()];
            },

            /**
             * Method getFullDate
             * Fungsi untuk mendapatkan semua element/property dari object date
             * @param {object} date berupa object date() js
             * @return {object} object yang isinya kumpulan property dari date(), dari hari hingga waktu
             */
            getFullDate: function(date) {
                return {
                    day: date.getDay(),
                    dayText: {
                        indonesia: this.getDays(date, false),
                        english: this.getDays(date),
                    },
                    date: date.getDate(),
                    month: date.getMonth(),
                    monthText: {
                        indonesia: this.getMonths(date, false),
                        english: this.getMonths(date)
                    },
                    year: date.getFullYear(),
                    hour: date.getHours(),
                    minute: date.getMinutes(),
                    second: date.getSeconds(),
                    millisecond: date.getMilliseconds(),
                    time: date.getTime(),
                };
            }
        },
        
        modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrExampleDateFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrExampleDate"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrName7fa34b71-58b9-4866-a72d-2bf5657afaf9",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrName",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGf3343d5a-5f8f-4c9d-8077-d1bb7075676a",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 18,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrExampleDateTimeCreatedOn",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CreatedOnebb0fd2f-58e2-4b0a-9b1c-5c2e4809d9d0",
				"values": {
					"layout": {
						"colSpan": 9,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "CreatedOn"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "STRING5cbc755e-1eb1-4f2c-8d93-a00a14fe815b",
				"values": {
					"layout": {
						"colSpan": 9,
						"rowSpan": 1,
						"column": 9,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrExampleDateCreatedOn",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "STRING12aceab4-223a-49e5-afe6-3fe749053699",
				"values": {
					"layout": {
						"colSpan": 6,
						"rowSpan": 1,
						"column": 18,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrExampleDateTimeModifiedOn",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ModifiedOn93a66000-e8ba-40b8-9a08-4e97b9735187",
				"values": {
					"layout": {
						"colSpan": 9,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "ModifiedOn"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "STRING48aee4dd-eb7b-493f-904b-da0920ddcf67",
				"values": {
					"layout": {
						"colSpan": 9,
						"rowSpan": 1,
						"column": 9,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "UsrExampleDateModifiedOn",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "STRING30739b2d-f060-423f-84b9-270793594370",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 9,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrExampleDateGetDate",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "STRINGe3e6f47d-356b-454e-8d44-eeabd04a9b21",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 14,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrExampleDateGetMonth",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "STRINGe9dcec19-512a-403f-b754-7e788117f571",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 19,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrExampleDateGetYear",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "UsrExampleDateFullDate4e44a0ce-407d-4b2b-8610-898f9db3000f",
				"values": {
					"layout": {
						"colSpan": 9,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "UsrExampleDateFullDate"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "STRING93621ffa-f2cb-49e5-9cdf-99890b854d15",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "UsrExampleDateGetDayIndo",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "STRING2531377a-787c-4f63-986c-13fc2e056a7a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 4,
						"layoutName": "Header"
					},
					"bindTo": "UsrExampleDateGetDayEng",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "STRING45fdd0c0-013e-4752-b6c9-cbfde5cb9cff",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Header"
					},
					"bindTo": "UsrExampleDateGetMonthIndo",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "STRINGef8ada1b-6381-4f05-a06d-17f02fdadddf",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 5,
						"layoutName": "Header"
					},
					"bindTo": "UsrExampleDateGetMonthEnglish",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 14
			}
		]/**SCHEMA_DIFF*/
	};
});
