var question = [
    {
        no: 1,
        name: "What are the typical mistakes when binding data?",
        type: "checkbox",
        choice: [
            "An object whose data is added to a package does not belong to the package, and to none of the packages in its dependency hierarchy",
            "Data is bound to a package that is not suitable in terms of functionality",
            "Lookup field data is not bound to a package"
        ],
        answer: [
            "An object whose data is added to a package does not belong to the package, and to none of the packages in its dependency hierarchy",
            "Lookup field data is not bound to a package"
        ],
    },
    {
        no: 2,
        name: "Which of the listed are not package components?",
        type: "radio",
        choice: [
            "Data",
            "External assemblies",
            "Schemas",
            "SQL scripts",
            "Embedded packages"
        ],
        answer: "Embedded packages",
    },
    {
        no: 3,
        name: "What is the purpose of the \"Data\" package component?",
        type: "radio",
        choice: [
            "The \"Data\" package component is lookup records that are a part of the package. These are base values of lookup, system settings, demo data, etc.",
            "The \"Data\" package component is DLL files that enable integration with third-party applications",
            "The \"Data\" package component is the main configuration element that describe the structure of data base tables, business processes and their elements, reports, lists of pictures and modules",
            "The \"Data\" package component is performs additional actions with the database before or after installing the package"
        ],
        answer: "The \"Data\" package component is lookup records that are a part of the package. These are base values of lookup, system settings, demo data, etc.",
    },
    {
        no: 4,
        name: "Specify features of the version control system storage in bpm'online",
        type: "checkbox",
        choice: [
            "The list of repositories is common for all system workspaces",
            "Packages can be added to any storage from the list",
            "Each system workspace interacts with the individual storage of the version control system",
            "A package can only be added to a storage connected to the workspace, in which it was created"
        ],
        answer: [
            "The list of repositories is common for all system workspaces",
            "Packages can be added to any storage from the list",
        ],
    },
    {
        no: 5,
        name: "What is the purpose of the \"External assemblies\" package component?",
        type: "radio",
        choice: [
            // false
            "External assemblies are main configuration elements that describe the structure of data base tables, business processes and their elements, reports, lists of pictures and modules",
            // false
            "External assemblies that perform additional actions with the database before or after installing the package",
            "External assemblies are DLL files that enable integration with third-party applications",
            // false
            "External assemblies are section and lookup records that are a part of the package. These are base values of lookup, system settings, demo data, etc."
        ],
        answer: "External assemblies are DLL files that enable integration with third-party applications",
    },
    {
        no: 6,
        name: "How to setup a calculated field on edit page?",
        type: "checkbox",
        choice: [
            "Add the handler method realization to the collection of representation model methods",
            "In the view model of the page configure the attribute, specify the dependency columns names in its properties, and specify the handler method name",
            "Specify the column for saving of the calculated value",
            "Configure calculateMethodName property in the field attribute"
        ],
        answer: "",
    },
    {
        no: 7,
        name: "Why is it not recommended to develop in a configuration currently in use by other developers (for example, Default)?",
        type: "radio",
        choice: [
            "Because your work may interfere with the work of other developers",
            "Because you cannot restore modified schemas",
            "Because you can work in other configurations"
        ],
        answer: "Because your work may interfere with the work of other developers",
    },
    {
        no: 8,
        name: "Which of the listed managers exist in the system?",
        type: "checkbox",
        choice: [
            "SQL script manager",
            "Process schema manager",
            "Entity schema manager",
            "Page schema manager",
            "Source code schema manager",
            "Workspace manager"
        ],
        answer: "",
    },
    {
        no: 9,
        name: "Specify types of pop ups in page interface.",
        type: "checkbox",
        choice: [
            "Information button (i)",
            "Buttons, fulfillment indicators and image pop ups",
            "Field pop up",
            "Dashboard pop up"
        ],
        answer: [
            "Buttons, fulfillment indicators and image pop ups",
            "Information button (i)",
            "Field pop up",
        ],
    },
    {
        no: 10,
        name: "How to run debugging tool in web browser?",
        type: "checkbox",
        choice: [
            "Ctrl + Shift + I (for Chrome and Firefox)",
            "F12",
            "F10",
            "F1"
        ],
        answer: [
            "Ctrl + Shift + I (for Chrome and Firefox)",
            "F12",
        ],
    },
    {
        no: 11,
        name: "How to set a view model property value?",
        type: "radio",
        choice: [
            "setProperty(propertyName, propertyValue)",
            "get(propertyName)",
            "set(propertyName, propertyValue, options)",
            "this.PropertyName = «PropertyValue»"
        ],
        answer: "set(propertyName, propertyValue, options)",
    },
    {
        no: 12,
        name: "In which property of the page schema structure are business rules required to be set?",
        type: "radio",
        choice: [
            "rules",
            "methods",
            "attributes",
            "diff"
        ],
        answer: "rules",
    },
    {
        no: 13,
        name: "Specify methods of using filtering for selection in lookup field.",
        type: "checkbox",
        choice: [
            "Use FILTRATION business rule",
            "Filtration configuration in lookup fields is not supported",
            "Explicit filter specification in column description attributes property for view model",
            "Use filterConditions property when configuring attributes in view model"
        ],
        answer: "",
    },
    {
        no: 14,
        name: "How to run a web service in the client application?",
        type: "checkbox",
        choice: [
            "ServiceHelper.callService(\"ServiceName\", \"Method\", callback, parameters)",
            "ServiceHelper.runService(\"ServiceName\", \"Method\", callback, parameters)",
            "ServiceHelper.runService(\"ServiceName\", \"Method\", callback, parameters, scope)",
            "ServiceHelper.callService(\"ServiceName\", \"Method\", callback, parameters, scope)"
        ],
        answer: [
            "ServiceHelper.callService(\"ServiceName\", \"Method\", callback, parameters)",
            "ServiceHelper.callService(\"ServiceName\", \"Method\", callback, parameters, scope)"
        ],
    },
    {
        no: 15,
        name: "Proper use of the DBExecutor class requires (select all that apply):",
        type: "checkbox",
        choice: [
            "Using class instances in several threads",
            "\"Wrapping\" the created instance of the class in the “using” operator",
            "Calling the Dispose() method in the class instance if it is not \"wrapped\" in the \"using\" operator",
            "Using class instances in a single thread"
        ],
        answer: "",
    },
    {
        no: 16,
        name: "How to handle an event that occurs after adding a new record to an object?",
        type: "radio",
        choice: [
            "In the Object Designer, subscribe to the \"After adding record\" event. In the built-in process of the object, add an event sub-process with the intermediate \"Wait for message\" event and specify the name of the processed object event in the \"Which message event should start the process?\" field. Add a \"Script task\" element to the subprocess and enter the triggered code",
            "In the Object Designer, subscribe to the \"After adding record\" event. In the built-in process of the object, add an event sub-process with the start message event and specify the name of the processed object event in the \"Which message event should start the process?\" field. Add a \"Script task\" element to the sub-process and enter the triggered code",
            "Publish the object in the Object Designer. Create a configuration web-service and add a method that implements the event handler logic. In the built-in object process, add a \"Script task\" and bind the event handler to the handling method in the web service"
        ],
        answer: "In the Object Designer, subscribe to the \"After adding record\" event. In the built-in process of the object, add an event sub-process with the start message event and specify the name of the processed object event in the \"Which message event should start the process?\" field. Add a \"Script task\" element to the sub-process and enter the triggered code",
    },
    {
        no: 17,
        name: "How to add user rules for finding duplicates?",
        type: "checkbox",
        choice: [
            "Add a column with values for finding duplicates to the object schema",
            "Add a stored procedure to the application database",
            "Register a stored procedure as a new rule",
            "Use existing stored procedure tsp_FindDuplicateByColumn"
        ],
        answer: "",
    },
    {
        no: 18,
        name: "Which of the following types of functions (FunctionType enumeration) are used in DataService? Select all that apply.",
        type: "checkbox",
        choice: [
            "Length",
            "None",
            "DatePart",
            "Macros",
            "Aggregation"
        ],
        answer: [
            "Length",
            "None",
            "DatePart",
            "Macros",
            "Aggregation"
        ]
    },
    {
        no: 19,
        name: "How can a package be updated?",
        type: "checkbox",
        choice: [
            "By updating the package from the version control repository",
            "By using the WorkspaceConsole utility",
            "By using a script to load the package to the database. Copy files with package updates to the bin folder of the WebAppLoader loader application",
            "By loading of package using \"Package Installation\" tool"
        ],
        answer: [
            "By updating the package from the version control repository",
            "By loading of package using \"Package Installation\" tool",
            "By using the WorkspaceConsole utility",
        ],
    },
    {
        no: 20,
        name: "What is the difference between pre-installed and user packages?",
        type: "checkbox",
        choice: [
            "Pre-installed packages cannot be changed",
            "Only bpm'online can develop pre-installed packages, but clients can develop user packages",
            "Only user packages can be stored in SVN",
            "No difference"
        ],
        answer: [
            "Pre-installed packages cannot be changed",
            "Only user packages can be stored in SVN"
        ],
    },
    {
        no: 21,
        name: "How to get the text of an executed instance query of the EntitySchemaQuery class?",
        type: "radio",
        choice: [
            "var esqQueryText = esq.GetSelectQuery(UserConnection).GetSqlText()",
            "var esqQueryText = esq.GetSqlText()",
            "var esqQueryText = esq.GetQuery(UserConnection).GetSqlText()"
        ],
        answer: "var esqQueryText = esq.GetSelectQuery(UserConnection).GetSqlText()",
    },
    {
        no: 22,
        name: "Which of the following methods are not used for creating an EntitySchemaQuery filter?",
        type: "radio",
        choice: [
            "CreateIsNullFilter()",
            "CreateFilterWithParameters()",
            "CreateIsNotNullFilter()",
            "CreateFilters()",
            "СreateExistsFilter()",
            "CreateNotExistsFilter()"
        ],
        answer: "CreateFilters()",
    },
    {
        no: 23,
        name: "Which method must be declared in a visual module?",
        type: "radio",
        choice: [
            "init",
            "details",
            "setEntitySchema",
            "render"
        ],
        answer: "render"
    },
    {
        no: 24,
        name: "How is data passed from module to module?",
        type: "radio",
        choice: [
            "By specifying a module as a dependency for a different module",
            "By using the message mechanism",
            "By using the window.history object",
            "By using the NavigationModule module"
        ],
        answer: "By using the message mechanism",
    },
    {
        no: 25,
        name: "When is the setNamePrefix method triggered? Code: \"UsrName\": { dependencies: [ {columns: [\"NeedPrefix\"], methodName: \"setNamePrefix\"}]}",
        type: "radio",
        choice: [
            "When changing values in the UsrName and NeedPrefix fields",
            "When changing values in the UsrName field",
            "When changing values in the NeedPrefix field"
        ],
        answer: "When changing values in the NeedPrefix field"
    },
    {
        no: 26,
        name: "How to hide a field on an edit page under certain conditions?",
        type: "radio",
        choice: [
            "Add a custom method to modify field visibility",
            "In the \"rules\" property of the page view model, add a rule of the FILTER type and with the VISIBLE property",
            "In the \"rules\" property of the page view model, add a rule of the BINDPARAMETER type and with the VISIBLE property",
            "Define field visibility via the diff property"
        ],
        answer: "In the \"rules\" property of the page view model, add a rule of the BINDPARAMETER type and with the VISIBLE property",
    },
    {
        no: 27,
        name: "How to get a collection of displayed records in a section list?",
        type: "radio",
        choice: [
            "this.get(\"Data\")",
            "this.get(\"Grid\")",
            "this.get(\"GridData\")",
            "this.get(GridName, \"GridData\")"
        ],
        answer: "this.get(\"GridData\")",
    },
    {
        no: 28,
        name: "What schema must be used as a parent for a detail schema with fields?",
        type: "radio",
        choice: [
            "BasePageV2",
            "BaseDetailV2",
            "BaseModulePageV2",
            "BaseGridDetailV2",
            "BaseLookupPage",
            "BaseGridPageV2",
            "BasePageV2"
        ],
        answer: "BaseDetailV2",
    },
    {
        no: 29,
        name: "Specify rule definition steps",
        type: "checkbox",
        choice: [
            "A rule has a name",
            "Rules are applied to the view model columns and not to view controls",
            "Rule parameters are set in its configuration object",
            "All rules are described in the \"rules\" property of the page view model"
        ],
        answer: "",
    },
    {
        no: 30,
        name: "How to load a utility module to a client application?",
        type: "checkbox",
        choice: [
            "Register the module as a section. Use the \"getUtilityModule\" in the custom code",
            "Add it as a dependency to the define() function when declaring a module that uses it",
            "Add it to the \"Dependencies\" block in the custom schema designer and call the \"require\" function in the custom code"
        ],
        answer: [
            "Add it to the \"Dependencies\" block in the custom schema designer and call the \"require\" function in the custom code",
            "Add it as a dependency to the define() function when declaring a module that uses it"
        ],
    },
    {
        no: 31,
        name: "Which business process element must be used for editing section records with user input?",
        type: "radio",
        choice: [
            "\"Edit page\" element",
            "\"Script task\" element",
            "\"Modify data\" element"
        ],
        answer: "\"Edit page\" element",
    },
    {
        no: 32,
        name: "Which \"internal\" Web.config setting must be used to specify the path to the catalog where the files with the schema source code will be saved when debugging server code?",
        type: "radio",
        choice: [
            "\"ExtractAllCompilerSources\" value=\"false\"",
            "\"CompilerSourcesTempFolderPath\" value=\"С:\\Src\\\"",
            "\"IncludeDebugInformation\" value=\"true\""
        ],
        answer: "\"CompilerSourcesTempFolderPath\" value=\"С:\\Src\\\"",
    },
    {
        no: 33,
        name: "What must be done to use custom types as incoming and outgoing parameters in the web service method?",
        type: "radio",
        choice: [
            "Implement a custom type class in an arbitrary namespace and connect this namespace to the web service source code schema Create a custom type instance in the web service method",
            "Implement a custom type in the web service class. Mark the type class with the [DataContract] attribute, and the class property with the [DataMember] attribute",
            "You cannot use custom types in the configuration web services. The services can only accept and return parameters of primitive types (int, char, etc.)"
        ],
        answer: "Implement a custom type in the web service class. Mark the type class with the [DataContract] attribute, and the class property with the [DataMember] attribute",
    },
    {
        no: 34,
        name: "Specify the data storage levels (DataStore)",
        type: "checkbox",
        choice: [
            "Application",
            "Request",
            "Session",
            "User",
            "System",
            "Workspace"
        ],
        answer: "",
    },
    {
        no: 35,
        name: "What EntitySchemaQuery methods are used for getting query results?",
        type: "checkbox",
        choice: [
            "FetchRecord(Id)",
            "GetEntityCollection(UserConnection)",
            "FetchRecords()",
            "GetEntity(UserConnection, Id)"
        ],
        answer: "",
    },
    {
        no: 36,
        name: "What data will be placed in which repository if the following code is executed: Dictionary dic = (Dictionary)Store.Data[DataLevel.Session][\"SomeDictionary\"]; dic[\"Key\"] = \"ChangedValue\"; dic.Add(\"NewKey\", \"NewValue\");",
        type: "radio",
        choice: [],
        answer: "No data will be placed in sessions level repository after execution of the code. To add data to the repository, write the \"dic\" dictionary with the \"SomeDictionary\" key to it.",
    },
    {
        no: 37,
        name: "How to add data to cache storage?",
        type: "checkbox",
        choice: [
            "this.Cache[\"Key\"] = \"Data\"",
            "UserConnection.SessionCache[\"Key\"] = \"Data\"",
            "Store.Cache[CacheLevel.Session][\"Key\"] = \"Data\"",
            "Page.Cache[\"Key\"] = \"Data\"",
        ],
        answer: [
            "UserConnection.SessionCache[\"Key\"] = \"Data\"",,
            "Store.Cache[CacheLevel.Session][\"Key\"] = \"Data\"",
        ]
    },
    {
        no: 38,
        name: "Which method must be called to apply changes made to an Entity?",
        type: "radio",
        choice: [
            "Entity.CompleteEditing()",
            "Entity.Save()",
            "Entity.UpdateObject()",
            "Entity.SaveChanges()"
        ],
        answer: "Entity.Save()",
    },
    {
        no: 39,
        name: "How are access rights regulated when building ESQ queries for data from connected lookups, even when the user has no access to the lookup object?",
        type: "radio",
        choice: [
            "There is no need to regulate access to connected objects, because ESQ queries can be used to obtain data from any object, regardless of access rights",
            "There is no way to regulate access rights in the ESQ queries for data from connected objects",
            "Access to connected object data is regulated by the value of the \"Joined objects administering\" (QueryJoinRightLevel) system setting"
        ],
        answer: "Access to connected object data is regulated by the value of the \"Joined objects administering\" (QueryJoinRightLevel) system setting"
    },
    {
        no: 40,
        name: "What must be done to use the external library functionality in the configuration program code (С# programming language)",
        type: "radio",
        choice: [
            "Add a library (dll file) into the package under the \"External builds\" tab. If necessary, connect the required library namespace with the \"using\" directive. Сreate instances of types from external libraries in a standard way using the \"new\" operator",
            "The application does not permit including external libraries",
            "Copy the library dll file to the application \"bin\" directory on the application server. To create instances of the types of libraries, use the following script: var t = new Namescpace.TypeName()"
        ],
        answer: "Add a library (dll file) into the package under the \"External builds\" tab. If necessary, connect the required library namespace with the \"using\" directive. Сreate instances of types from external libraries in a standard way using the \"new\" operator",
    },
    {
        no: 41,
        name: "How to enable self-service portal?",
        type: "checkbox",
        choice: [
            "Create user with type \"Portal user\"",
            "Set providerNames=\"InternalUserPassword,SSPUserPassword\" attribute in the option /configuration/terrasoft/auth of root web.config file",
            "Create user contact",
            "License user",
            "Create user with type \"Company employee\"",
        ],
        answer: [
            "License user",
            "Create user contact",
            "Create user with type \"Portal user\"",
            "Set providerNames=\"InternalUserPassword,SSPUserPassword\" attribute in the option /configuration/terrasoft/auth of root web.config file"
        ],
    },
    {
        no: 42,
        name: "How to add pop up mini card to the section?",
        type: "checkbox",
        choice: [
            "Add new module schema. Choose BaseMiniPage as parent object",
            "Add replacing client module. Choose BaseMiniPage as parent object",
            "Modify the system table SysModuleEdit with SQL query",
            "Specify the name of associated with mini page card object schema in entityShemaName property, and make at least one modification to the diff array"
        ],
        answer: [
            "Add new module schema. Choose BaseMiniPage as parent object",
            "Modify the system table SysModuleEdit with SQL query",
            "Specify the name of associated with mini page card object schema in entityShemaName property, and make at least one modification to the diff array"
        ],
    },
    {
        no: 43,
        name: "Specify interface that should implement macros class for printing form MSWord",
        type: "radio",
        choice: [
            // false
            "IExpressionConverterInterface",
            // false
            "IMacrosConverter",
            // false
            "IAttributeConverter",
            "IExpressionConverter"
        ],
        answer: "IExpressionConverter",
    },
    {
        no: 44,
        name: "Which class must be used to create a custom DB query?",
        type: "radio",
        choice: [
            "Update",
            "There is no such class. Create and call a stored procedure in the DB",
            "Select",
            "CustomQuery",
            "Delete",
            "Insert",
            "EntitySchemaQuery"
        ],
        answer: "CustomQuery",
    },
    {
        no: 45,
        name: "To disable the file system development mode, edit the \"external\" Web.config file as follows:",
        type: "radio",
        choice: [
            "Set fileDesignMode enabled=\"true\"",
            "Set compilation debug=\"true\" targetFramework=\"4.5\"",
            "Set compilation debug=\"false\" targetFramework=\"4.5\"",
            "Set fileDesignMode enabled=\"false\""
        ],
        answer: "Set fileDesignMode enabled=\"false\""
    },
    {
        no: 46,
        name: "Which of the following types of expressions (EntitySchemaQueryExpressionType enumeration) are not used DataService?",
        type: "radio",
        choice: [
            "Macros",
            // false
            "Function",
            // false
            "SubQuery",
            // false
            "ArithmeticOperation",
            // false
            "SchemaColumn",
            // false
            "Parameter"
        ],
        answer: "Macros",
    },
    {
        no: 47,
        name: "Which class implements dynamic object access rights checks?",
        type: "radio",
        choice: [
            "CurrentUser",
            "DBSecurityEngine",
            "DBEngine"
        ],
        answer: "DBSecurityEngine",
    },
    {
        no: 48,
        name: "How to set a default value for a field?",
        type: "radio",
        choice: [
            "Set the default value in the corresponding object column",
            "Set the default value in the diff property of the custom schema",
            // false
            "Set the default value via business rules",
            // false
            "Set the default value in the messages property of the custom schema"
        ],
        answer: "",
    },
    {
        no: 49,
        name: "Which access rights must a user have to be able to conduct operations with bpm’online data by the OData protocol?",
        type: "radio",
        choice: [
            "The user on whose behalf the queries will be executed must be permitted access to the \"Access to OData\" operation (CanUseODataService), as well as the object itself on the \"Access to object for external services\" detail",
            "The user on whose behalf the queries will be executed must be given system administrator permissions",
            "The user on whose behalf the queries will be executed must be permitted access to the \"Access to OData\" operation (CanUseODataService)"
        ],
        answer: "The user on whose behalf the queries will be executed must be permitted access to the \"Access to OData\" operation (CanUseODataService), as well as the object itself on the \"Access to object for external services\" detail",
    },
    {
        no: 50,
        name: "Why cannot two users develop in one application?",
        type: "radio",
        choice: [
            "Because only one account can commit changes to SVN",
            "Because when you commit changes in SVN, only the changes made by one user are fixed",
            "Because during development, one developer may temporarily damage the configuration settings which will interfere with the work of another developer."
        ],
        answer: "Because during development, one developer may temporarily damage the configuration settings which will interfere with the work of another developer."
    },
    {
        no: 51,
        name: "How to add a new user for a developer?",
        type: "radio",
        choice: [
            "Create a new contact and user. Assign the \"System administrators\" role to the new user",
            "Create a new contact and user",
            "Create a new user"
        ],
        answer: "Create a new contact and user. Assign the \"System administrators\" role to the new user",
    },
    {
        no: 52,
        name: "Attribute host of element in ConnectionStrings.config:",
        type: "radio",
        choice: [
            "Should always be \"localhost\"",
            "Should contain computer name with database",
            "Should contain computer name with Redis server"
        ],
        answer: "Should contain computer name with Redis server",
    },
    {
        no: 53,
        name: "How to setup application web site within the IIS?",
        type: "radio",
        choice: [
            "Add web site, where content catalog is a root catalog of distributive. Add one more web site, where content catalog is Terrasoft.WebApp.",
            "Add web site where content catalog is Terrasoft.WebApp.",
            "Add web site, where content catalog is a root catalog of distributive. Add path to Terrasoft.WebApp distributive as physical path for web site application with alias 0."
        ],
        answer: "Add web site, where content catalog is a root catalog of distributive. Add path to Terrasoft.WebApp distributive as physical path for web site application with alias 0."
    },
    {
        no: 54,
        name: "Using the section wizard, you have added a new lookup field to a page for a new lookup that has not been created yet. What needs to be done for this field to work properly?",
        type: "radio",
        choice: [
            "Nothing. The system automatically creates all configuration elements required for the lookup to function properly, as well as registers it in Lookup section",
            "You need to create a lookup object and edit page. The system registers a lookup automatically",
            "The system creates a lookup object automatically. You need to register the lookup in the system"
        ],
        answer: "Nothing. The system automatically creates all configuration elements required for the lookup to function properly, as well as registers it in Lookup section",
    },
    {
        no: 55,
        name: "What are the bpm'online storage types?",
        type: "checkbox",
        choice: [
            "UserStore",
            "RedisStore",
            "DataStore",
            "CacheStore"
        ],
        answer: [
            "DataStore",
            "CacheStore"
        ],
    },
    {
        no: 56,
        name: "Attribute db of element in ConnectionStrings.config:",
        type: "checkbox",
        choice: [
            "Should be unique for each application",
            "Specifies Redis database number",
            "This property is not required"
        ],
        answer: [
            "Specifies Redis database number",
            "Should be unique for each application",
        ],
    },
    {
        no: 57,
        name: "What is the section wizard used for?",
        type: "checkbox",
        choice: [
            "To set up grid columns of new system sections",
            "To edit existing sections",
            "To modify pages of existing sections (add fields, tabs and existing details)",
            "To modify grid columns of existing system sections",
            "To create new sections in the system"
        ],
        answer: [
            "To modify pages of existing sections (add fields, tabs and existing details)",
            "To create new sections in the system",
            "To edit existing sections",
        ],
    },
    {
        no: 58,
        name: "What happens to the packages that reside in the storage of the version control system when you remove a registered repository from the list of repositories?",
        type: "radio",
        choice: [
            "When you remove a repository from the list, it is not physically removed on the SVN server. If you re-add the storage to the system, all the packages from it will be ready for installation",
            "When you delete a repository, all packages that are in it will be physically deleted on the SVN server"
        ],
        answer: "When you remove a repository from the list, it is not physically removed on the SVN server. If you re-add the storage to the system, all the packages from it will be ready for installation",
    },
    {
        no: 59,
        name: "What schema must be used as a parent for a detail page schema?",
        type: "radio",
        choice: [
            "BaseGridPageV2",
            // false
            "BaseLookupPage",
            // false
            "BaseDetailV2",
            "BasePageV2",
            // false
            "BaseModulePageV2",
            // false
            "BaseGridDetailV2"
        ],
        answer: "BasePageV2",
    },
    {
        no: 60,
        name: "What schema must be used as a parent for a section page schema?",
        type: "radio",
        choice: [
            "BaseGridDetailV2",
            "BaseModulePageV2",
            "BaseLookupPage",
            "BaseGridPageV2",
            "BasePageV2",
            "BaseDetailV2"
        ],
        answer: "BaseModulePageV2",
    },
    {
        no: 61,
        name: "How to add a message to the view model?",
        type: "radio",
        choice: [
            "You cannot add messages to the view model",
            "In the view model module program code, set the message in the \"messages\" property",
            "In the client schema designer, set the message in the Messages node of the view model schema structure"
        ],
        answer: "In the view model module program code, set the message in the \"messages\" property",
    },
    {
        no: 62,
        name: "What is the difference between point-to-point and broadcast messages?",
        type: "checkbox",
        choice: [
            "When subscribing to a point-to-point message without a channel, only one subscriber will get the passed parameters",
            "A point-to-point message returns an object, while a broadcast message does not",
            "When subscribing to a broadcast message without a channel, only one subscriber will get the passed parameters",
            "A broadcast message returns an object, while the point-to-point message does not"
        ],
        answer: "",
    },
    {
        no: 63,
        name: "What are BINDPARAMETER type rules used for?",
        type: "radio",
        choice: [
            "They are used to autocomplete view model column field based on another column value",
            "They are used to configure the filtering of column values of the view model. For example, to filter a specific lookup column, depending on the value of the current state of the page",
            "They are used to configure the binding properties of one column to the values of various parameters. For example, to set the visibility or accessibility of a column depending on another column value"
        ],
        answer: "They are used to configure the binding properties of one column to the values of various parameters. For example, to set the visibility or accessibility of a column depending on another column value"
    },
    {
        no: 64,
        name: "What schema must be used as a parent for a lookup page schema?",
        type: "radio",
        choice: [
            "BaseModulePageV2",
            "BaseGridDetailV2",
            "BaseDetailV2",
            "BaseLookupPage",
            "BaseGridPageV2",
            "BasePageV2"
        ],
        answer: "BaseLookupPage",
    },
    {
        no: 65,
        name: "How to define which properties and events of a control item are available for binding?",
        type: "radio",
        choice: [
            "getBindConfig – for defining properties. AddEvents – or defining events",
            "AddEvents – for defining properties. getBindConfig – or defining events"
        ],
        answer: "getBindConfig – for defining properties. AddEvents – or defining events",
    },
    {
        no: 66,
        name: "How to add user styles to the module?",
        type: "radio",
        choice: [
            "In the client schema designer, set the module styles in the tab CSS tab",
            "In the program code, set the module styles in the LESS property",
            "In the program code, set the module styles in the CSS property",
            "In the client schema designer, set the module styles in the LESS tab"
        ],
        answer: "In the client schema designer, set the module styles in the LESS tab"
    },
    {
        no: 67,
        name: "In the client scheme designer, schema object dependencies are added to the Dependencies card. Why?",
        type: "radio",
        choice: [
            "So that a schema descriptor of an object, by which it will be loaded, would form on the client",
            "Only the schemes that depend on the define() function are added to Dependencies card",
            "To upload this scheme data on the client"
        ],
        answer: "So that a schema descriptor of an object, by which it will be loaded, would form on the client",
    },
    {
        no: 68,
        name: "How to get the view model properties?",
        type: "radio",
        choice: [
            "var propertyValue = getProperty(propertyName)",
            "var propertyValue = get(propertyName)",
            "var propertyValue = this.PropertyName",
            "set(propertyName, propertyValue, options)"
        ],
        answer: "var propertyValue = get(propertyName)",
    },
    {
        no: 69,
        name: "How to add a custom detail with editable grid to the existing section?",
        type: "checkbox",
        choice: [
            "Create detail object schema",
            "Create and configure detail schema",
            "Configure detail in replacement client module of section edit page",
            "Register associations between object, detail and detail edit page schemas with SQL queries",
            "Configure detail fields"
        ],
        answer: "",
    },
    {
        no: 70,
        name: "Which method must be overridden to add a custom action to a section (a new item in the \"Actions\" menu)?",
        type: "radio",
        choice: [
            "sectionActions",
            "getSectionActions",
            "actions",
            "getActions"
        ],
        answer: "getSectionActions",
    },
    {
        no: 71,
        name: "What needs to be added to the user module in order to use business rules functionality?",
        type: "radio",
        choice: [
            "Describe rules in the page view model \"rules\" property without adding anything",
            "The BusinessRuleModule module needs to be added to the user module dependencies list",
            "The BusinessRuleModule module needs to be added to the Dependencies collection of the user module structure",
            "The Rules module needs to be added to the user module dependencies list"
        ],
        answer: "The BusinessRuleModule module needs to be added to the user module dependencies list",
    },
    {
        no: 72,
        name: "How to get result in the callback handler of a configuration web-service if the name of the called service method is «CopyProducts»?",
        type: "radio",
        choice: [
            "var responseObject = this.GetResponce(\"CopyProductsResult\");",
            "var responseObject = this.GetResponse(«CopyProducts»);",
            "var responseObject = response.CopyProductsResult;",
            "var responseObject = response.CopyProducts;"
        ],
        answer: "var responseObject = response.CopyProductsResult;",
    },
    {
        no: 73,
        name: "What properties can only be used in edit page schemas?",
        type: "checkbox",
        choice: [
            "attributes",
            "details",
            "diff",
            "rules"
        ],
        answer: [
            "details",
            "rules"
        ]
    },
    {
        no: 74,
        name: "What is the \"diff\" client schema property?",
        type: "radio",
        choice: [
            "A parameter responsible for the message registration for this schema",
            "An array of modifications used for generating module views in system UI",
            "The name of the schema object that will be used by the module",
            "A list of schema attributes"
        ],
        answer: "An array of modifications used for generating module views in system UI",
    },
    {
        no: 75,
        name: "What are FILTRATION type rules used for?",
        type: "radio",
        choice: [
            "They are used to configure the filtering of column values of the view model. For example, to filter a specific lookup column, depending on the value of the current state of the page",
            "They are used to configure the binding properties of one column to the values of various parameters. For example, to set the visibility or accessibility of a column depending on another column value",
            "hey are used to autocomplete view model column field based on another column value"
        ],
        answer: "They are used to configure the filtering of column values of the view model. For example, to filter a specific lookup column, depending on the value of the current state of the page",
    },
    {
        no: 76,
        name: "How to add your own styles to the view model schema?",
        type: "radio",
        choice: [
            "In the view model schema designer, set the module styles in the tab CSS tab",
            "In the view model module program code, set the module styles in the CSS property",
            "Set styles in the utility module. Connect this utility module to the Dependencies card of the view model schema structure. In the view model module code, add a dependency to this utility module, using the \"css!ModuleName\" expression",
            "In the view model module program code, set the module styles in the LESS property"
        ],
        answer: "Set styles in the utility module. Connect this utility module to the Dependencies card of the view model schema structure. In the view model module code, add a dependency to this utility module, using the \"css!ModuleName\" expression",
    },
    {
        no: 77,
        name: "How to define module source code?",
        type: "radio",
        choice: [
            "Define function: module(\"Name\", [dependencies], function( ... )). The function must return either the object that is the module for the system, or module constructor function",
            "Define function: define(\"Name\", [dependencies], function( ... )). The function must return either the object that is the module for the system, or module constructor function",
            "Define function: setModule(\"Name\", [dependencies], function( ... )). The function must return either the object that is the module for the system, or module constructor function"
        ],
        answer: "Define function: define(\"Name\", [dependencies], function( ... )). The function must return either the object that is the module for the system, or module constructor function",
    },
    {
        no: 78,
        name: "How to add a message to a module?",
        type: "radio",
        choice: [
            "In the client schema designer, set the message in the \"Messages\" node of the module schema",
            "In the module program code, set the messages in the \"message\" property",
            "You cannot add messages to module"
        ],
        answer: "In the client schema designer, set the message in the \"Messages\" node of the module schema",
    },
    {
        no: 79,
        name: "Which module should be used for inheritance when adding ActionsDashboard to the new section?",
        type: "radio",
        choice: [
            "ActionsDashboardModule",
            "SectionActionsDashboard",
            "OrderActionsDashboard",
            "ActionDashboardContainer"
        ],
        answer: "SectionActionsDashboard",
    },
    {
        no: 80,
        name: "What does the this.callParent(arguments); line added to the body of the overridden method do?",
        type: "radio",
        choice: [
            "Cancels functionality of the overridden method",
            "Cancels functionality of the method from the parent schema",
            "Runs this method from the parent schema"
        ],
        answer: "Runs this method from the parent schema"
    },
    {
        no: 81,
        name: "What schema must be used as a parent for a detail schema with a list?",
        type: "radio",
        choice: [
            "BaseGridDetailV2",
            "BaseGridPageV2",
            "BaseDetailV2",
            "BaseLookupPage",
            "BasePageV2",
            "BaseModulePageV2"
        ],
        answer: "BaseGridDetailV2",
    },
    {
        no: 82,
        name: "Specify the user actions that trigger field validation on edit pages.",
        type: "checkbox",
        choice: [
            "When deleting registry records",
            "When switching focus from field with validation",
            "When opening edit pages for addition",
            "When saving edit pages"
        ],
        answer: [
            "When switching focus from field with validation",
            "When saving edit pages"
        ],
    },
    {
        no: 83,
        name: "Which class must be expanded when creating a module?",
        type: "radio",
        choice: [
            "BaseObject",
            "BaseSchema",
            "BaseModule",
            "BaseEntity"
        ],
        answer: "BaseModule",
    },
    {
        no: 84,
        name: "How to load a \"ModuleName\" module for debugging through the address bar?",
        type: "radio",
        choice: [
            "site_url/0/Nui/ViewModule.aspx?ModuleName",
            "site_url/0/Nui/ViewModule.aspx#ModuleName",
            "site_url/0/Nui/ViewModule.aspx#ModuleName=moduleName"
        ],
        answer: "site_url/0/Nui/ViewModule.aspx#ModuleName",
    },
    {
        no: 85,
        name: "What is page validation used for?",
        type: "checkbox",
        choice: [
            "For displaying a user message about incorrect values and preventing from saving the record",
            "For correction of saved database records",
            "For automatic filling of fields with appropriate values",
            "To validate if the filled in fields meet the business requirements"
        ],
        answer: [
            "For displaying a user message about incorrect values and preventing from saving the record",
            "To validate if the filled in fields meet the business requirements"
        ]
    },
    {
        no: 86,
        name: "Define the \"entitySchemaName\" client schema property",
        type: "radio",
        choice: [
            "A list of schema attributes",
            "A parameter responsible for message registration for this schema",
            "The name of the schema object that will be used by the module",
            "An array of modifications used for generating module views in system UI"
        ],
        answer: "The name of the schema object that will be used by the module",
    },
    {
        no: 87,
        name: "How to create a configuration web-service?",
        type: "radio",
        choice: [
            "In the \"Source code\" schema, define a class that inherits the Terrasoft.Configuration.Service class. Mark it with the [ServiceContract] attribute. In this class, implement service methods and data types. Mark methods with [OperationContract] attributes, and data types - with the [DataContract] attributes",
            // false
            "In the \"Source code\" schema, add an instance class Terrasoft.Configuration.Service. To add a method to a service, call the AddServiceMethod() function on an instance and pass string with the service method implementation program code as a parameter to that function",
            "In the \"Source code\" schema, define a class and mark it with the [ServiceContract] attribute. In this class, implement service methods and data types. Mark methods with the [OperationContract] attribute, and data types with the [DataContract] attribute"
        ],
        answer: "",
    },
    {
        no: 88,
        name: "How to obtain access to the object manager instance in the program code?",
        type: "checkbox",
        choice: [
            "var esManager = UserConnection.GetSchemaManager(\"EntitySchemaManager\") as EntitySchemaManager;",
            "var esManager = new EntitySchemaManager(UserConnection);",
            "var esManager = UserConnection.EntitySchemaManager;"
        ],
        answer: [
            "var esManager = UserConnection.GetSchemaManager(\"EntitySchemaManager\") as EntitySchemaManager;",
            "var esManager = UserConnection.EntitySchemaManager;"
        ]
    },
    {
        no: 89,
        name: "How to get value of column of a record?",
        type: "checkbox",
        choice: [
            "GetValue()",
            "Entity.Columns[“columnName”]",
            "GetColumnValue()",
            "GetTypedColumnValue()"
        ],
        answer: [

        ]
    },
    {
        no: 90,
        name: "What is the OData protocol used for in bpm'online?",
        type: "radio",
        choice: [
            "To build analytical reports according to the application data",
            "To perform user authentication",
            "To exchange data between bpm'online and third-party applications",
            "To remotely run processes in bpm'online"
        ],
        answer: "To exchange data between bpm'online and third-party applications",
    },
    {
        no: 91,
        name: "Which system settings should be created in order to realize standard numbering in Projects section?",
        type: "radio",
        choice: [
            "ProjectMask — mask of number template, ProjectCurrentNumber — current number",
            "ProjectCode — number template, ProjectNumber — current number",
            "ProjectCodeMask — number mask, ProjectLastNumber — current number",
            "ProjectNumberTemplate — number template, CurrentProjectNumber — number",
            "Standard numbering is not allowed in this section"
        ],
        answer: "ProjectCodeMask — number mask, ProjectLastNumber — current number",
    },
    {
        no: 92,
        name: "How to add a column to an existing object of the pre-installed package?",
        type: "radio",
        choice: [
            "Create a package and set a dependency on the package containing the object. Create an object and set the required base object as the parent one. Add the column",
            "In any user package, create a replacement object and set the required base object as the parent one. Add column",
            "Create a package and set a dependency on the package containing the object. Create a replacement object and set the required base object as the parent one. Add the column"
        ],
        answer: "Create a package and set a dependency on the package containing the object. Create a replacement object and set the required base object as the parent one. Add the column"
    },
    {
        no: 93,
        name: "What data will be placed in which repository if the following code is executed: Dictionary dic = (Dictionary)Store.Data[DataLevel.Session][\"SomeDictionary\"]; dic[\"Key\"] = \"ChangedValue\"; dic.Add(\"NewKey\", \"NewValue\");",
        type: "radio",
        choice: [
            "In the data repository of the session level, the \"NewValue\" string will be placed with the \"SomeDictionary\" key",
            "In the cache repository of the session level, the \"NewValue\" string will be placed with the \"NewKey\" key",
            "No data will be placed in the session level repository after execution of the code. To add data to the repository, write the \"dic\" dictionary with the \"SomeDictionary\" key to it.",
            "In the data repository of the session level, the \"NewValue\" string will be placed with the \"NewKey\" key"
        ],
        answer: "No data will be placed in the session level repository after execution of the code. To add data to the repository, write the \"dic\" dictionary with the \"SomeDictionary\" key to it.",
    },
    {
        no: 94,
        name: "How to setup the \"internal\" Web.config file for server side debugging during disabled file system development mode?",
        type: "checkbox",
        choice: [
            "Set fileDesignMode enabled=\"true\"",
            "Set compilation debug=\"true\" targetFramework=\"4.5\"",
            "Set \"IncludeDebugInformation\" value=\"true\"",
            "Set \"CompilerSourcesTempFolderPath\" value=\"some_path\""
        ],
        answer: [

        ]
    },
    {
        no: 95,
        name: "What features for working with object data does the Entity class provide?",
        type: "radio",
        choice: [
            "Reading and editing",
            "Reading",
            "Reading, adding, editing, deleting"
        ],
        answer: "Reading, adding, editing, deleting"
    },
    {
        no: 96,
        name: "What alternative to the SetColumnValue() method can be used to save an image to an object column?",
        type: "checkbox",
        choice: [
            "SetStreamValue(string valueName, System.IO.Stream value)",
            "SetImage(string valueName, byte[ ] streamBytes)",
            "SetBytesValue(string valueName, byte[ ] streamBytes)"
        ],
        answer: [
            "SetBytesValue(string valueName, byte[ ] streamBytes)",
            "SetStreamValue(string valueName, System.IO.Stream value)",
        ]
    },
    {
        no: 97,
        name: "What are the cache storage levels (CacheStore)?",
        type: "checkbox",
        choice: [
            "Application",
            "System",
            "Request",
            "User",
            "Workspace",
            "Session"
        ],
        answer: "",
    },
    {
        no: 98,
        name: "What is the difference between the EntitySchemaQuery (ESQ) request and Select request?",
        type: "radio",
        choice: [
            "A subrequest is added to the EntitySchemaQuery request to determine the access rights",
            "A subrequest is added to the Select request to determine the access rights"
        ],
        answer: "A subrequest is added to the EntitySchemaQuery request to determine the access rights",
    },
    {
        no: 99,
        name: "How to define code in an object process to be able to override it in the inheriting object?",
        type: "radio",
        choice: [
            "Add the code to a method",
            "Code cannot be defined in an object process",
            "Define inherited code in the \"Formula\" process element"
        ],
        answer: "Add the code to a method",
    },
    {
        no: 100,
        name: "Which service must be used to run business processes remotely from a third-party application?",
        type: "radio",
        choice: [
            "RightService.svc",
            "EntityDataService.svc",
            "ProcessEngineService.svc",
            "RunBusinessProcess.svc"
        ],
        answer: "ProcessEngineService.svc",
    },
    {
        no: 101,
        name: "EntitySchemaQuery has the following features (select all that apply):",
        type: "checkbox",
        choice: [
            "Access rights restrictions",
            "Caching mechanism",
            "Additional setup of select queries"
        ],
        answer: [
            "Access rights restrictions",
            "Caching mechanism",
            "Additional setup of select queries"
        ]
    },
    {
        no: 102,
        name: "Which objects are recommended to be used as parent objects of custom objects? Why?",
        type: "radio",
        choice: [
            "The \"Base object\" or any other object inherited from the \"Base object\" can be selected as a parent object. In this case, in addition to structure, the new object will inherit the built-in process with the implementation of object event handling",
            "Any object that has the \"Virtual\" checkbox selected. In this case, a database table will not be added for the object, which saves disk space on the database server",
            "It is not recommended to specify parent objects for custom objects. Object structure and business logic must be implemented by a developer for each custom object"
        ],
        answer: "The \"Base object\" or any other object inherited from the \"Base object\" can be selected as a parent object. In this case, in addition to structure, the new object will inherit the built-in process with the implementation of object event handling",
    },
    {
        no: 103,
        name: "Is it possible to change the base object column type? How?",
        type: "radio",
        choice: [
            "No",
            "Yes. To do this, you have to change the column object \"Type\" property value in the base object.",
            "Yes. To do this, you have to replace the base object in the user package and then change the column object \"Type\" property value.",
            "Yes. To do this, you have to replace the base object in the user package. Then, depending on the column type source data, either add a new column with the new data type or change the type of an existing column within its subtype"
        ],
        answer: "Yes. To do this, you have to replace the base object in the user package. Then, depending on the column type source data, either add a new column with the new data type or change the type of an existing column within its subtype"
    },
    {
        no: 104,
        name: "How to set a column record value?",
        type: "radio",
        choice: [
            "SetTypedColumnValue()",
            "SetValue()",
            "SetColumnValue()",
            "Entity.Columns[\"columnName\"] = value"
        ],
        answer: "SetColumnValue()",
    },
    {
        no: 105,
        name: "What does the SaveDBContent operation (the -operation parameter) of the WorkspaceConsole utility do?",
        type: "radio",
        choice: [
            "Saves the database content of the specified type in the file system. The type of saved content is specified in the -contentTypes parameter. The file system catalog to save the content is specified in the -destinationPath parameter.",
            "Exports the package hierarchy as ZIP archives to the file system from several SVN repositories. The target catalog is specified in the -destinationPath parameter. The SVN repositories are listed in the -destinationPath parameter (separated with comma).",
            "Saves the specified contents of package ZIP archives in the file system. The contents to save is specified in the -contentTypes parameter. The source catalog is specified in the -sourcePath parameter. The target catalog is specified in the -destinationPath parameter."
        ],
        answer: "Saves the database content of the specified type in the file system. The type of saved content is specified in the -contentTypes parameter. The file system catalog to save the content is specified in the -destinationPath parameter.",
    },
    {
        no: 106,
        name: "How to pass data to a sub-process and obtain its result in the primary process?",
        type: "radio",
        choice: [
            "In the primary process, add and select a sub-process Set initial values for incoming parameters before executing sub-process and read data from the same parameters after the sub-process is complete",
            "Use parameters of the primary process. Set the incoming parameter values before the sub-process execution and use them in the sub-process to get input data. Map the result to an outgoing parameter of the primary process. After the sub-process is complete, it can be used in the primary process for getting the sub-process results",
            "Use the sub-process parameters. Determine the mapping for parameters to read data passed from the primary process to the sub-process and set values for these parameters in the sub-process to pass them from the sub-process to the primary process"
        ],
        answer: "Use parameters of the primary process. Set the incoming parameter values before the sub-process execution and use them in the sub-process to get input data. Map the result to an outgoing parameter of the primary process. After the sub-process is complete, it can be used in the primary process for getting the sub-process results",
    },
    {
        no: 107,
        name: "How to modify a task parameter upon the repeated execution of a task?",
        type: "radio",
        choice: [
            "Specify the process parameter value again",
            "Task parameters cannot be modified upon the repeated execution of a task",
            "Map the modified parameter to a process parameter and modify the process parameter"
        ],
        answer: "Map the modified parameter to a process parameter and modify the process parameter"
    },
    {
        no: 108,
        name: "Which process elements must be used to build a business process that will permit a user to edit a field that he/she have ho access to?{",
        type: "checkbox",
        choice: [
            "\"Modify data\" element",
            "\"Auto-generated page\" element",
            "\"Pre-configured page\" element",
            "\"Change access rights\" element"
        ],
        answer: "",
    },
    {
        no: 109,
        name: "What system object can grant you access to the DBSecurityEngine object?",
        type: "radio",
        choice: [
            "CurrentUser",
            "AppConnection",
            "UserConnection",
        ],
        answer: "UserConnection",
    },
    {
        no: 110,
        name: "Define the \"methods\" client schema property",
        type: "radio",
        choice: [
            "A collection of base methods of the parent schema",
            "A collection of base methods that form the schema business logic. In this schema property, you can create your own methods and override base methods of the parent schema",
            "A collection of client schema dependencies",
            "A collection of mixin methods - separately generated classes with additional functionalities"
        ],
        answer: "A collection of base methods that form the schema business logic. In this schema property, you can create your own methods and override base methods of the parent schema",
    },
    {
        no: 111,
        name: "What does an object inherit from its parent object?",
        type: "radio",
        choice: [
            "Structure (columns) and logic (built-in process)",
            "Indexes",
            "Schema",
            "Structure (columns)"
        ],
        answer: "Structure (columns) and logic (built-in process)",
    },
    {
        no: 112,
        name: "What is data and cache storage used for?",
        type: "radio",
        choice: [
            "To work with files and images",
            "To store operational data. CacheStore data can be deleted depending on the size of available free memory. DataStore data can be removed only by the developer",
            "To store key business data. CacheStore data is used to store detail data. DataStore data is used to store section data"
        ],
        answer: "To store operational data. CacheStore data can be deleted depending on the size of available free memory. DataStore data can be removed only by the developer",
    },
    {
        no: 113,
        name: "How to protect bpm’online integration from CSRF attacks?",
        type: "radio",
        choice: [
            "After successful authentication, add an authentication cookie received from AuthService.svc to each subsequent request. Add a cookie with CSRF token to the request headers.",
            "After successful authentication, add an authentication cookie received from AuthService.svc to each subsequent request.",
            "None of the answers above is correct."
        ],
        answer: "After successful authentication, add an authentication cookie received from AuthService.svc to each subsequent request. Add a cookie with CSRF token to the request headers.",
    },
    {
        no: 114,
        name: "What are the architectural components of bpm'online?",
        type: "checkbox",
        choice: [
            "MSExchange server",
            "MySQL server",
            "Web services",
            "Applications server (IIS)",
            "DB server (MS SQL/Oracle)",
            "SVN server (optional)",
            "Session storage server (Redis)"
        ],
        answer: [
            "Applications server (IIS)",
            "Session storage server (Redis)",
            "DB server (MS SQL/Oracle)",
            "SVN server (optional)",
            "Web services",
        ]
    },
    {
        no: 115,
        name: "What are the functions of the SVN server (SVN)?",
        type: "checkbox",
        choice: [
            "Storing user session data",
            "Transferring changes between configurations",
            "Storing configurations and user package statuses"
        ],
        answer: [
            "Transferring changes between configurations",
            "Storing configurations and user package statuses"
        ]
    },
    {
        no: 116,
        name: "Which changes to the package hierarchy occur upon installation of a custom package from the version control repository?",
        type: "checkbox",
        choice: [
            "Installing a custom package does not affect package hierarchy",
            "Only dependencies that are installed from the version control system are set and updated. Packages installed from ZIP archives are not updated",
            "The system checks if all dependency packages are installed. If they are, they are updated. If they aren't, they are installed",
            "All dependencies of the installed package are set and updated"
        ],
        answer: [
            "Only dependencies that are installed from the version control system are set and updated. Packages installed from ZIP archives are not updated",
            "The system checks if all dependency packages are installed. If they are, they are updated. If they aren't, they are installed",
        ]
    },
    {
        no: 117,
        name: "Why is it required to add a dependency to a package?",
        type: "radio",
        choice: [
            "To gain access to the functionality (schemas) of the parent package and all packages from the hierarchy of the dependencies of the parent package",
            "Because you can add new configuration items to a package only after you have set up dependencies",
            "Because in the version control system repository you can capture packages with dependencies only"
        ],
        answer: "To gain access to the functionality (schemas) of the parent package and all packages from the hierarchy of the dependencies of the parent package",
    },
    {
        no: 118,
        name: "What is a \"configuration\"?",
        type: "radio",
        choice: [
            "A configuration is a set of objects, system files, shell and kernel that makes the software operational",
            "A configuration is a defined set of functionalities available to users of a specific workspace. A configuration consists of client modules and server elements distributed by packages"
        ],
        answer: "A configuration is a defined set of functionalities available to users of a specific workspace. A configuration consists of client modules and server elements distributed by packages"
    },
    {
        no: 119,
        name: "What is the purpose of the \"SQL scripts\" package component?",
        type: "radio",
        choice: [
            // false
            "SQL scripts are main configuration elements that describe the structure of data base tables, business processes and their elements, reports, lists of pictures and modules.",
            "SQL scripts perform additional actions with the database before or after installing the package",
            // false
            "SQL scripts are DLL files that enable integration with third-party applications",
            // false
            "SQL scripts are section and lookup records that are a part of the package. These are base values of lookups, system settings, demo data, etc."
        ],
        answer: "SQL scripts perform additional actions with the database before or after installing the package",
    },
    {
        no: 120,
        name: "What will happen, if basic packages’ dependencies are not specified during the development of custom user package?",
        type: "checkbox",
        choice: [
            "Dependencies form parent schemas, for example basic objects and basic client modules will not be available",
            "New functionality will operate only for user with administrative privileges",
            "Development of any new functionality will be impossible",
            "Saving of package configuration schemas of new section will not be available within the section wizard"
        ],
        answer: [
            "Dependencies form parent schemas, for example basic objects and basic client modules will not be available",
            "Saving of package configuration schemas of new section will not be available within the section wizard"
        ]
    },
    {
        no: 121,
        name: "What is the purpose of the \"Schemas\" package component?",
        type: "radio",
        choice: [
            "Schemas are random scripts that perform additional actions with the database before or after installing the package",
            "Schemas are DLL files that enable integration with third-party applications",
            "Schemas are section and lookup records that are a part of the package. These are base values of lookup, system settings, demo data, etc.",
            "Schemas are configuration elements that describe the structure of data base tables, business processes and their elements, reports, lists of pictures and modules"
        ],
        answer: "Schemas are configuration elements that describe the structure of data base tables, business processes and their elements, reports, lists of pictures and modules"
    },
    {
        no: 122,
        name: "You have added a detail in the system. What needs to be done for this detail to be used by the section wizard?",
        type: "radio",
        choice: [
            "The detail has to be registered in the SysDetail table",
            "The detail has to be registered in the SysModule table",
            "The detail has to be registered in the SysModuleEdit table"
        ],
        answer: "The detail has to be registered in the SysDetail table",
    },
    {
        no: 123,
        name: "Give the definition of package in bpm’online configuration.",
        type: "radio",
        choice: [
            "A bpm’online package is a set of executable files on application server that implement specific functionality",
            "A bpm’online package is a combination of configuration elements (schemas, data, scripts, external libraries) that implements specific functionality",
            "A bpm’online package is a set of configuration schemas that implement specific functionality",
            "A bpm’online package is a set of SQL scripts, procedures, functions and database views that are required for operation of application functions"
        ],
        answer: "A bpm’online package is a combination of configuration elements (schemas, data, scripts, external libraries) that implements specific functionality",
    },
    {
        no: 124,
        name: "Why is it required to bind data to a package?",
        type: "radio",
        choice: [
           "To preserve the integrity of links between objects",
           "So when installing a package to the workspace of the application that works with another database, you are still able to install object data to this package",
           "To not lose data"
        ],
        answer: "So when installing a package to the workspace of the application that works with another database, you are still able to install object data to this package",
    },
    {
        no: 125,
        name: "What are the functions of the session storage server (Redis)?",
        type: "checkbox",
        choice: [
           "Storing user session data",
           "Storing cached data",
           "Exchanging data between web farm nodes",
           "Storing application business data"
        ],
        answer: [
            "Storing user session data",
            "Storing cached data",
            "Exchanging data between web farm nodes",
        ]
    },
    {
        no: 126,
        name: "Specify the purpose of package property \"Version\".",
        type: "radio",
        choice: [
            "Is used for defining versions of connected external modules of package",
            "Information property, used neither by application, nor by version control system",
            "Is used by application for running the required version of execution files",
            "String property that is used for defining the version of function included into the package. Is used during the package update and during the creation of catalogs of version control system"
        ],
        answer: "String property that is used for defining the version of function included into the package. Is used during the package update and during the creation of catalogs of version control system"
    },
    {
        no: 127,
        name: "What schema must be used as a parent for a section schema?",
        type: "radio",
        choice: [
            "BaseSectionV2",
      ],
      answer: "BaseSectionV2",
    },
    {
        no: 128,
        name: "Specify all element types that can be composed into package",
        type: "checkbox",
        choice: [
            "Other packages",
            "Data — database records, developed in package",
            "Configuration schemas",
            "DOCX files with templates of print forms",
            "Any JavaScript source code",
            "Any SQL scripts",
            "External assemblies — third-party dll libraries required for integration with external systems"
        ],
        answer: "",
    },
    {
        no: 129,
        name: "Configure settings so that a user cannot save an invoice if the total amount of a customer's debt (taking into account the amount of the current invoice) exceeds $4,000",
        type: "essay",
        choice: [],
        answer: "",
    },
    {
        no: 130,
        name: "Create new filter \"Attention\" in the Activity section grid page (near Owner and Date filters). When turned on, only overdue activities and high priority today activities should be displayed. Filter should use current user time zone.",
        type: "essay",
        choice: [],
        answer: "",
    },
    {
        no: 131,
        name: "On the Product edit page, develop a new button or action for calculating product popularity. Popularity is calculated as the ratio of the number of products in invoice records that contain the current product, to the total number of products in invoice records. Display the calculation result as a percentage using the message window.",
        type: "essay",
        choice: [],
        answer: "",
    },
    {
        no: 132,
        name: "On the Account edit page, implement automatic calculation of the quantity of invoices for a given account and display this value, as well as the total payment amount of account invoices. Consider only invoices that have not been canceled. Calculated values should be saved in new separate fields of the account page. The edit page’s fields are visible only for accounts of the \"Customer\" type.",
        type: "essay",
        choice: [],
        answer: "",
    },
    {
        no: 133,
        name: "Download package Debug02 using the link. Install package on your development environment. This package contains customization in Contacts section (additional column values calculation programmed). As result opening of edit page is not working, white page appears and errors appear in browser console window. Your task is to use debugging skills and locate error in the code.",
        type: "essay",
        choice: [],
        answer: "",
    },
    {
        no: 134,
        name: "Create new detail “Overdue Invoices” in Account edit page. This detail should display invoices which Payment status is not equal to “Paid”. Add new column “Overdue invoices count” near the detail. This column should display the number of overdue invoices. Its value should update each time when Account edit page is opened.",
        type: "essay",
        choice: [],
        answer: "",
    },
];
