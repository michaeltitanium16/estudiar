let set4 = [
    {
        "id": "2",
        "pregunta" : "A custom object Trainer_c has a lookup field to another custom object Gym___c.<br>Which SOQL query will get the record forthe Viridian City gym and it's trainers?",
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "SELECT Id, (SELECT Id FROM Trainers) FROM Gym_C WHERE Name . Viridian City Gym'"
            },
            {
                "id" : "2",
                "titulo" : "SELECT Id, (SELECT Id FROM Trainer_c) FROM Gym_c WHERE Name - Viridian City Gym'"
            },
            {
                "id" : "3",
                "titulo" : "SELECT ID FROM Trainer_c WHERE Gym__r.Name -Viridian City Gym'"
            },
            {
                "id" : "4",
                "titulo" : "SELECT Id, (SELECT Id FROM Trainers) FROM Gym_C WHERE Name - Viridian City Gym'"
            }
        ]
    },
    {
        "id": "3",
        "pregunta" : "An org has two custom objects:<br> *Plan_c, that has a master-detail relationship to the Account object.<br>*Plan_item_c, that has a master-detail relationship to the plan_C object.<br><br> What should a developer use to create a Visualforce section in the Account page layout that displays all of the plan.. Account and all of the Plan_item_c records related to those plan_c records.",
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "A controller extension with a custom controller"
            },
            {
                "id" : "2",
                "titulo" : "A controller extension with a custom controller"
            },
            {
                "id" : "3",
                "titulo" : "A standard controller with a controller extension"
            },
            {
                "id" : "4",
                "titulo" : "Acustom controller by itself"
            }
        ]
    },
    {
        "id": "4",
        "pregunta" : "An Apex method, getAccounts, that returns a List of Accounts given a searchTerm, is available for Lightning Web components to use<br>br> What is the correct definition of a Lightning Web component property that uses thegetAccountsmethod?",
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "<xmp>@wire(getAccounts, {searchTerm: '$searchTeam'}) AccountList;</xmp> "
            },
            {
                "id" : "2",
                "titulo" :  "<xmp>@AuraEnabled(getAccounts, '$searchTeam') AccountList;</xmp> "
            },
            {
                "id" : "3",
                "titulo" :  "<xmp>@AuraEnabled(getAccounts, {searchTerm: '$searchTeam'}) AccountList;</xmp> "
            },
            {
                "id" : "4",
                "titulo" :  "<xmp>@wire(getAccounts, '$searchTeam') AccountList;</xmp> "
            }
        ]
    },
    {
        "id": "5",
        "pregunta" : "Which statement should be used to allow some of the records in a list of records to be inserted if others fail to be inserted?",
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "insert records"
            },
            {
                "id" : "2",
                "titulo" : "Database.insert(records, true)"
            },
            {
                "id" : "3",
                "titulo" : "insert (records, false)"
            },
            {
                "id" : "4",
                "titulo" : "Database.insert(records, false)"
            }
        ]
    },
    {
        "id": "7",
        "pregunta" : "Universal Container uses Salesforce to create orders.<br> When an order is created, itneeds to sync with the-in-house order fulfillment system. The order fulfillment system can accept SOAP messages over the HTTPS. If the connection fails, messages should be retried for up to 24 hours.<br><br>What is the recommended approach to sync the orders inSalesforce with the order fulfillment system?",
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Set up a Workflow Rule outbound message to the order fulfillment system."
            },
            {
                "id" : "2",
                "titulo" : "Create an after insert trigger on the Order object to make a callout to the order fulfilment system"
            },
            {
                "id" : "3",
                "titulo" : "Write an Apex SOAP service to integrate with the order fulfillment system."
            },
            {
                "id" : "4",
                "titulo" : "Use Process Bulkier to call an invocable Apex method that sends a message to the order fulfilment system."
            }
        ]
    },
    {
        "id": "8",
        "pregunta" : "What are two ways a developer can get the status of an enquered job for a class that queueable interface?",
        "respuestasCorrectas": ["1","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "View the apex status Page"
            },
            {
                "id" : "2",
                "titulo" : "View the apex flex Queue"
            },
            {
                "id" : "3",
                "titulo" : "View the apex Jobs page"
            },
            {
                "id" : "4",
                "titulo" : "Query the AsyncApexJobe object"
            }
        ]
    },
    {
        "id": "9",
        "pregunta" : "A developer needs to create a custom button for the Account object that, when clicked, will perform a series of calculation and redirect the user to a custom visualforce page.<br><br>Which three attributes need to bedefined with values in the <xmp><apex:page></xmp> tag to accomplish this?. Choose 3 answers",
        "respuestasCorrectas": ["1","2","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "renderAs"
            },
            {
                "id" : "2",
                "titulo" : "standard Controller"
            },
            {
                "id" : "3",
                "titulo" : "readOnly"
            },
            {
                "id" : "4",
                "titulo" : "Action"
            },
            {
                "id" : "5",
                "titulo" : "extensions"
            }
        ]
    },
    {
        "id": "10",
        "pregunta" : "Universal Containers wants Opportunities to no longer be editable when it reaches the Closed/Won stage<br><br> Which two strategies can a developer use to accomplish this?",
        "respuestasCorrectas": ["3","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use the Process Automation settings."
            },
            {
                "id" : "2",
                "titulo" : "Use an after-save flow."
            },
            {
                "id" : "3",
                "titulo" : "Use a trigger."
            },
            {
                "id" : "4",
                "titulo" : "Use a validation rule."
            }
        ]
    },
    {
        "id": "12",
        "pregunta" : "A developer is creating a Lightning web component to show a list of sales records.<br>The Sales Representative user should be able to see thecommission-field on each record. The Sales Assistance user should be able to see all field on the record except the commission field.<br><br>How should this be enforced so that the component works for both users without showing any errors?",
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use Lightning Data Service to get the collection of sales records."
            },
            {
                "id" : "2",
                "titulo" : "Use Lightning Locker Service to enforce sharing rules and field-level security."
            },
            {
                "id" : "3",
                "titulo" : "Use with SECURITY_EMFORCED in the SOQL that fetches the data for the component."
            },
            {
                "id" : "4",
                "titulo" : "Use security. stripInaccessible to remove fields inaccessible to the current user."
            }
        ]
    },
    {
        "id": "13",
        "pregunta" : "Which statement is true about developing in a multi-tenant environment?",
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Governor limits prevent apex from impactiong the performance of multiple tenants on the same instance"
            },
            {
                "id" : "2",
                "titulo" : "Apex sharing controls access to records fomr multiple tenants on the same instance"
            },
            {
                "id" : "3",
                "titulo" : "Global apex classes can be referenced from multiple tenants on the same instance"
            },
            {
                "id" : "4",
                "titulo" : "Org-level data security controls which users cansee data from multiple tenants on the same instance"
            }
        ]
    },
    {
        "id": "14",
        "pregunta" : "A developer needs to save a List of existing Account records named myAccounts to the database, but the records do not contain Salesforce Id values. Only the valueof a custom text field configured as an External ID with an API name of Foreign_Key__c is known. <br><br> Which two statements enable the developer to save the records to the database without an Id?",
        "respuestasCorrectas": ["1", "3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Upsert myAccounts Foreign_Key__c;"
            },
            {
                "id" : "2",
                "titulo" : "UpsertmyAccounts(Foreign_Key__c);"
            },
            {
                "id" : "3",
                "titulo" : "Database.upsert (myAccounts, Foreign_Key__c);"
            },
            {
                "id" : "4",
                "titulo" : "Database.upsert(myAccounts).Foreign_Key__c;"
            }
        ]
    },
    {
        "id": "15",
        "pregunta" : "A developer needs to prevent the creation of Request_c records when certain conditions exist in the system. <br><br> A RequestLogic class exists to checks the conditions. What is the correct implementation?",
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Trigger RequestTrigger on Request (after insert) <xmp>{ RequestLogic.validateRecords {trigger.new}; } </xmp>"
            },
            {
                "id" : "2",
                "titulo" : "Trigger RequestTrigger on Request (before insert) <xmp>{ RequestLogic.validateRecords {trigger.new}; } </xmp>"
            },
            {
                "id" : "3",
                "titulo" : "Trigger RequestTrigger on Request (before insert) <xpm>{ if (RequestLogic.isvalid{Request}) Request.addError('Your request cannot be created at this time.');} </xpm>" 
            },
            {
                "id" : "4",
                "titulo" : "Trigger RequestTrigger on Request (after insert) <xpm>{ if (RequestLogic.isValid{Request}) Request.addError('Your request cannot be created atthis time.'); } </xpm>"
            }
        ]
    },
    {
        "id": "16",
        "pregunta" : "The Account object in an organization has a master detail relationship to a child object called Branch. The following automations exist: <br><br> *Rollup summary fields<br> *Custom validation rules<br>  *Duplicate rules <br><br> A developer created a trigger on the Account object <br><br> What two things should the developer consider while testing the trigger code?",
        "respuestasCorrectas": ["1","2"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Rollup summary fields can cause the parent record to go through Save."
            },
            {
                "id" : "2",
                "titulo" : "The trigger may fire multiple times during a transaction."
            },
            {
                "id" : "3",
                "titulo" : "Duplicate rules are executed once all DML operations commit to the database."
            },
            {
                "id" : "4",
                "titulo" : "Duplicate rules are executed once all DML operations commit to the database."
            }
        ]
    },
    {
        "id": "17",
        "pregunta" : "How should a developer write unit tests for a private method in an Apex class?",
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use the SeeAllData annotation."
            },
            {
                "id" : "2",
                "titulo" : "Add a test method in the Apex class."
            },
            {
                "id" : "3",
                "titulo" : "Use the TestVisible annotation."
            },
            {
                "id" : "4",
                "titulo" : "Mark the Apex class as global."
            }
        ]
    },
    {
        "id": "18",
        "pregunta" : "A developer needs to confirm that an Account trigger is working correctly without changing the organization’s data. What would the developer do to test the Account trigger? ",
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use the Test menu on the developer Console to run all test classes for the account trigger."
            },
            {
                "id" : "2",
                "titulo" : "Use the New button on the Salesforce Accounts Tab to create a new Account record."
            },
            {
                "id" : "3",
                "titulo" : "Use the Open Execute Anonymous feature on the Developer Console to run an ‘insert Account’ DML statement"
            },
            {
                "id" : "4",
                "titulo" : "Use Deply from the Force.comIDE to deploy an ‘insert Account’ Apex class."
            }
        ]
    },
    {
        "id": "19",
        "pregunta" : "A developer wants to import 500 Opportunity records into a sandbox. Why should the developer choose to use data Loader instead of Data Import Wizard?",
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Data Loader runs from the developer's browser."
            },
            {
                "id" : "2",
                "titulo" : "Data Import Wizard does not support Opportunities."
            },
            {
                "id" : "3",
                "titulo" : "Data Loader automatically relates Opportunities to Accounts."
            },
            {
                "id" : "4",
                "titulo" : "Data Import Wizard can not import all 500 records."
            }
        ]
    },
    {
        "id": "20",
        "pregunta" : "A developer writes a single trigger on the Account object on the after insert and after update events. A workflow rule modifies a field every timean Account is created or updated. <br><br> How many times will the trigger fire if a new Account is inserted, assuming no other automation logic is implemented on the Account?",
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "4"
            },
            {
                "id" : "2",
                "titulo" : "1"
            },
            {
                "id" : "3",
                "titulo" : "2"
            },
            {
                "id" : "4",
                "titulo" : "8"
            }
        ]
    },
    {
        "id": "21",
        "pregunta" : "An after trigger on the Account object performs a DML update operation on all of the child Opportunities ofan Account. There are no active triggers on the Opportunity object, yet a “maximum trigger depth exceeded error occurs in certain situations. <br><br> Which two reasons possibly explain the Account trigger firing recursively? (Choose two.)",
        "respuestasCorrectas": ["1","2"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Changes to Opportunities are causing cross-object workflow field updates to be made on the Account."
            },
            {
                "id" : "2",
                "titulo" : "Changes to Opportunities are causing roll-up summary fields to update on the Account."
            },
            {
                "id" : "3",
                "titulo" : "Changes are being made to the Account during an unrelated parallel save operation."
            },
            {
                "id" : "4",
                "titulo" : "Changes are being made to the Account during Criteria Based Sharing evaluation."
            }
        ]
    },
    {
        "id": "22",
        "pregunta" : "A developer must troubleshoot to pinpoint the causes of performance issues when a custom page loads in their org.<br><br> Which tool should the developer use to troubleshoot?",
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "AppExchange"
            },
            {
                "id" : "2",
                "titulo" : "Salesforce CLI"
            },
            {
                "id" : "3",
                "titulo" : "Visual Studio Core IDE"
            },
            {
                "id" : "4",
                "titulo" : "Developer Console"
            }
        ]
    },
    {
        "id": "23",
        "pregunta" : "A develop completed modification to a customized feature that is comprised of two elements: <br> * Apex trigger <br> *Trigger handler Apex class <br><br> What are two factors that the developer must take into account to properly deploy the modification to the production environment?",
        "respuestasCorrectas": ["1", "2"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Apex classes must have at least 75% code coverage org-wide."
            },
            {
                "id" : "2",
                "titulo" : "At least one line of code must be executed for the Apex trigger."
            },
            {
                "id" : "3",
                "titulo" : "All methods in the test classes must use @isTest."
            },
            {
                "id" : "4",
                "titulo" : "Test methods must be declared with the testMethod keyword."
            }
        ]
    },
    {
        "id": "24",
        "pregunta" : "A developer needs to have records with specific field values in order to test a new Apex class <br><br> What should the developer do to ensure the data is available to the test?",
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use Anonymous Apex tocreate the required data"
            },
            {
                "id" : "2",
                "titulo" : "<xmp>Use Test.loadData() < > and reference a CSV file in a static resource.</xmp>"
            },
            {
                "id" : "3",
                "titulo" : "Use SOQL to query the org for the required data."
            },
            {
                "id" : "4",
                "titulo" : "Use Test.loadDataO and reference a JSON file in Documents."
            }
        ]
    },
    {
        "id": "25",
        "pregunta" : "Which Salesforce feature allows a developer to see when a user last logged in to Salesforce if real-time notification is not required?",
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Asynchronous Data Capture Events"
            },
            {
                "id" : "2",
                "titulo" : "Developer Log"
            },
            {
                "id" : "3",
                "titulo" : "Event Monitoring Log"
            },
            {
                "id" : "4",
                "titulo" : "Calendar Events"
            }
        ]
    },
    {
        "id": "26",
        "pregunta" : "<xmp> List<Account> aList =[SELECT Id FROM Account];</xmp> <br> <xmp> for (Account a : aList){</xmp><br><xpm> List<Account> cList =[SELECT Id FROM Contact WHERE AccountId = :a.Id];</xmp><br<xmp>}<br><br> What should a developer do to correct the code so that there is no chance of hitting a governor limit?",
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Rework the code and eliminate the for loop."
            },
            {
                "id" : "2",
                "titulo" : "Combine the two SELECT statements into a single SOQL statement."
            },
            {
                "id" : "3",
                "titulo" : "Add a WHERE clause to the first SELECT SOQL statement."
            },
            {
                "id" : "4",
                "titulo" : "Add a LIMITclause to the first SELECT SOQL statement."
            }
        ]
    },
    {
        "id": "27",
        "pregunta" : "Which salesforce org has a complete duplicate copy of theproduction org including data and configuration?",
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Developer Pro Sandbox"
            },
            {
                "id" : "2",
                "titulo" : "Partial Copy Sandbox"
            },
            {
                "id" : "3",
                "titulo" : "Production"
            },
            {
                "id" : "4",
                "titulo" : "Full Sandbox"
            }
        ]
    },
    {
        "id": "33",
        "pregunta" : "A Next Best Action strategy uses an Enhance Element that invokes an Apex method to determine a discount level for a Contact, based on a number of factors. What is the correct definition of the Apex method?",
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "@InvocableMethod<br> global static ListRecommendation getLevel(List<xpm><ContactWrapper></xmp> input) { /*implementation*/ }</xmp>"
            },
            {
                "id" : "2",
                "titulo" : "@InvocableMethod <xpm>globalstatic List<List<Recommendation>> getLevel(List<ContactWrapper> input) { /*implementation*/ }</xpm>"
            },
            {
                "id" : "3",
                "titulo" : "@InvocableMethod <xpm> global List<List<Recommendation>> getLevel(List<ContactWrapper> input) { /*implementation*/ } </xpm>"
            },
            {
                "id" : "4",
                "titulo" : "@InvocableMethod global RecommendationGetLevel (ContactWrapper input)"
            }
        ]
    },
    {
        "id": "34",
        "pregunta" : "A developer is debugging the following code to determinate why Accounts are not being created Account a =new Account(Name = 'A'); Database.insert(a, false); How should the code be altered to help debug the issue?",
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Add a System.debug() statement before the insert method"
            },
            {
                "id" : "2",
                "titulo" : "Add a try/catch around the insert method"
            },
            {
                "id" : "3",
                "titulo" : "Set the second insert method parameter to TRUE"
            },
            {
                "id" : "4",
                "titulo" : "Collect the insert method return value a Saveresult variable"
            }
        ]
    },
    {
        "id": "36",
        "pregunta" : "code below deserializes input into a list of Accounts.<br>"+
        "<xpm> Public class AcctCreator{<xpm><br>"+
        "<xpm> String acctsJson = getAccountsJson();</xpm><br>"+
        "<xpm> List<Account> accts = (List<Account>) JSON.deserialize(acctsJson,List<Account>.class );</xmp>"+
        "<xpm> //...DML to insert accounts</xpm"+
        "<xpm> }</xpm>"+
        "<xpm> //...other code including getAccountsJson implementation</xpm>"+
        "<xpm> }</xpm><br><br>"+
        "Which code modification should be made to insert the Accounts so that field-level security is respected?",
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "01: Public with sharing class AcctCreator"
            },
            {
                "id" : "2",
                "titulo" : "05: If (SobjectType.Account, isCreatable())"
            },
            {
                "id" : "3",
                "titulo" : "05: Accts = database.stripinaccesible (accts, Database. CREATEABLE);"
            },
            {
                "id" : "4",
                "titulo" : "05: SobjectAcessDecision sd= Security,stripINaccessible(AccessType,CREATABLE,"
            }
        ]
    },
    {
        "id": "37",
        "pregunta" : "A developer has a VF page and custom controller tosave Account records. The developer wants to display any validation rule violation to the user.<br><br> How can the developer make sure that validation rule violations are displayed?",
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Add custom controller attributes to display the message."
            },
            {
                "id" : "2",
                "titulo" : "<xmp>Include <apex:messages> on the Visualforce page.</xmp>"
            },
            {
                "id" : "3",
                "titulo" : "Use a try/catch with a custom exception class."
            },
            {
                "id" : "4",
                "titulo" : "Perform the DML using the Database.upsert() method"
            }
        ]
    },
    {
        "id": "40",
        "pregunta" : "Which two sfdx commands can be used to add testing data to a Developer sandbox?",
        "respuestasCorrectas": ["1","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Forced: data:bulk:upsert"
            },
            {
                "id" : "2",
                "titulo" : "Forced: data: object :upsert"
            },
            {
                "id" : "3",
                "titulo" : "Forced: data: tree: upsert"
            },
            {
                "id" : "4",
                "titulo" : "Forced: data:async:upsert"
            }
        ]
    },
    {
        "id": "42",
        "pregunta" : "Which two statements are true about Getter and Setter methods as they relate to Visualforce?",
        "respuestasCorrectas": ["3","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Setter methods always have to be declared global."
            },
            {
                "id" : "2",
                "titulo" : "There is no guarantee for the order in which Getter methods are called."
            },
            {
                "id" : "3",
                "titulo" : "A corresponding Setter method is required for each Getter method."
            },
            {
                "id" : "4",
                "titulo" : "Getter methods pass values from a controller to a page."
            }
        ]
    },
    {
        "id": "43",
        "pregunta" : "As part of a data cleanup strategy, AW Computing wants to proactively delete associated opportunity records when the related Account is deleted.<br>br> Which automation tool should be used to meet this business requirement?",
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Workflow Rules"
            },
            {
                "id" : "2",
                "titulo" : "Scheduled job"
            },
            {
                "id" : "3",
                "titulo" : "Record-Triggered Flow"
            },
            {
                "id" : "4",
                "titulo" : "Process Builder"
            }
        ]
    },
    {
        "id": "44",
        "pregunta" : "What are two ways that a controller and extension can be specified on a Visualforce page?",
        "respuestasCorrectas": ["2","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "a@pex:page=Account extends='myControllerExtension'"
            },
            {
                "id" : "2",
                "titulo" : "Qo apex:page standardController='Account' extensions='myControllerExtension'"
            },
            {
                "id" : "3",
                "titulo" : "apex:page controllers='Account, myControllerExtension'"
            },
            {
                "id" : "4",
                "titulo" : "apex:page controller='Account' extensions='myControllerExtension''"
            }
        ]
    },
    {
        "id": "46",
        "pregunta" : "A developer is building custom search functionality that uses SOSL to search account and contact records that match search terms provided by the end user. The feature is exposed through a Lightning web component, and the end user is ableto provide a list of terms to search.<br>br> Consider the following code snippet:"+
        "@AuraEnabled<br>"+
        "<xmp>public static <List<List<sObject>> searchTerms(List<String> termList){</xmp>"+
        "<xmp><List<List<sObject>> result = new <List<List<sObject>>();</xmp>"+
        "<xmp>for(String term : termList){</xmp>"+
        "<xmp>   result.addAll([FIND :term IN ALL FIELDS RETURNING Account(Name), Contact(FirstName,LastName)]);</xmp>"+
        " <xmp>}</xmp> <br> return result; <br> <br>}"+
        "What is the maximum number of search terms the end user can provide to successfully execute the search without exceeding a governor limit?",
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "20"
            },
            {
                "id" : "2",
                "titulo" : "150"
            },
            {
                "id" : "3",
                "titulo" : "200"
            },
            {
                "id" : "4",
                "titulo" : "2000"
            }
        ]
    },
    {
        "id": "47",
        "pregunta" : "A primaryid_c custom field exists on the candidate_c custom object. The filed is used to store each candidate's id number and is marked as Unique in the schema definition.<br><br>As part of a data enrichment process. Universal Containers has a CSV file that contains updated data for all candidates in the system, the file contains each Candidate's primary id as a data point. Universal Containers wants to upload this information into Salesforce, while ensuring all data rows are correctly mapped to a candidate in the system.<br><br> Which technique should the developer implement to streamline the data upload?",
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Create a Process Builder on the Candidate_c object to map the records."
            },
            {
                "id" : "2",
                "titulo" : "Create a before Insert trigger to correctly map the records."
            },
            {
                "id" : "3",
                "titulo" : "Update the primaryid__c field definition to mark it as an External Id"
            },
            {
                "id" : "4",
                "titulo" : "Upload the CSV into a custom object related to Candidate_c."
            }
        ]
    },
    {
        "id": "49",
        "pregunta" : "Universal Containers recently transitioned from Classic to Lighting Experience. One of its business processes requires certain value from the opportunity object to be sent via HTTP REST callout to its external order management system based on a user-initiated action on the opportunity page. Example values are as follow <br> *Name <br>*Ammount<br>*Account<br><br> Which two methods should the developer implement to fulfill the business requirement? (Choose 2 answers)",
        "respuestasCorrectas": ["1","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Create a Lightning component that performs the HTTP REST callout, and use a Lightning Action to expose the component on the Opportunity detail page."
            },
            {
                "id" : "2",
                "titulo" : "Create a Process Builder on the Opportunity object that executes an Apex immediate action to perform the HTTP REST callout whenever the Opportunity is updated."
            },
            {
                "id" : "3",
                "titulo" : "Create an after update trigger on the Opportunity object that calls a helper method using @Future(Callout=true) to perform the HTTP REST callout."
            },
            {
                "id" : "4",
                "titulo" : "Create aVisualforce page that performs the HTTP REST callout, and use a Visualforce quick action to expose the component on the Opportunity detail page."
            }
        ]
    },
    {
        "id": "52",
        "pregunta" : "A developerneeds to create a custom button for the Account object that, when clicked, will perform a series of calculations and redirect the user to a custom Visualforce page. The developer wants to ensure the Visualforce page matches the Lightning Experience user interface. <br><br> <xmp>What attribute needs to be defined within the <apex:page> tag to meet the requirement?</xmp>",
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "applyHtmlTag='true'"
            },
            {
                "id" : "2",
                "titulo" : "wizard=true'"
            },
            {
                "id" : "3",
                "titulo" : "setup='true'"
            },
            {
                "id" : "4",
                "titulo" : "lightningStylesheets='true'"
            }
        ]
    },
    {
        "id": "53",
        "pregunta" : "A Salesforce Administrator is creating a record-triggered flow. Whencertain criteria are met, the flow must call an Apex method to execute complex validation involving several types of objects.<br> When creating the Apex method, which annotation should a developer use to ensure the method <br><br> Can be used within the flow?",
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "@future"
            },
            {
                "id" : "2",
                "titulo" : "@RemoteAction"
            },
            {
                "id" : "3",
                "titulo" : "@InvocableMethod"
            },
            {
                "id" : "4",
                "titulo" : "@AuraEnaled"
            }
        ]
    },
    {
        "id": "54",
        "pregunta" : "Which two statements are accurate regarding Apex classes and interfaces?",
        "respuestasCorrectas": ["3","4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Classes are finalby default."
            },
            {
                "id" : "2",
                "titulo" : "Inner classes are public by default."
            },
            {
                "id" : "3",
                "titulo" : "Interface methods are public by default."
            },
            {
                "id" : "4",
                "titulo" : "A top-level class can only have one inner class level."
            }
        ]
    },
    {
        "id": "55",
        "pregunta" : "What should a developer do to check the code coverage of a class after running all tests?",
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "View the Code Coverage column in the list view on the Apex Classes page."
            },
            {
                "id" : "2",
                "titulo" : "View the Class Test Percentage tab on the Apex Class fist view m Salesforce Setup."
            },
            {
                "id" : "3",
                "titulo" : "View Use cede coverage percentage for the class using the Overall Code Coverage panel in the Developer Console Tests tab"
            },
            {
                "id" : "4",
                "titulo" : "Select and run the class on the Apex Test Execution page in the Developer Console."
            }
        ]
    },
    {
        "id": "56",
        "pregunta" : "A developer is tasked to perform a security review of theContactSearch Apex class that exists in the system. Whithin the class, the developer identifies the following method as a security threat: <br>"+
        "<xmp>List<Contact> performSearch(String lastName){ </xmp><br>"+
        "return Database.query('Select Id, FirstName, LastName FROM Contact WHERE LastName Like %'+lastName+'%); <br>}><br><br>"+
        "What are two ways the developer can update the method to prevent a SOQL injection attack? Choose 2 answers",
        "respuestasCorrectas": ["1","2"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use variable binding and replace the dynamic query with a static SOQL."
            },
            {
                "id" : "2",
                "titulo" : "Use the escapeSingleQuote method tosanitize the parameter before its use."
            },
            {
                "id" : "3",
                "titulo" : "Use a regular expression on the parameter to remove special characters."
            },
            {
                "id" : "4",
                "titulo" : "Use the @Readonly annotation and the with sharing keyword on the class."
            }
        ]
    },
    {
        "id": "57",
        "pregunta" : "Where are two locations a developercan look to find information about the status of asynchronous or future methods? Choose 2 answers",
        "respuestasCorrectas": ["1","2"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Apex Flex Queue"
            },
            {
                "id" : "2",
                "titulo" : "Apex Jobs"
            },
            {
                "id" : "3",
                "titulo" : "Paused Flow Interviews component"
            },
            {
                "id" : "4",
                "titulo" : "Time-Based Workflow Monitor"
            }
        ]
    },
    {
        "id": "58",
        "pregunta" : "Which three statements are true regarding trace flags? (Choose three.)",
        "respuestasCorrectas": ["3","4","5"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Setting trace flags automatically cause debug logs to begenerated."
            },
            {
                "id" : "2",
                "titulo" : "Logging levels override trace flags."
            },
            {
                "id" : "3",
                "titulo" : "Trace flags override logging levels."
            },
            {
                "id" : "4",
                "titulo" : "If active trace flags are not set, Apex tests execute with default logging levels."
            },
            {
                "id" : "5",
                "titulo" : "Trace flags can be set in the Developer Console, Setup, or using the ToolingAPI."
            }
        ]
    },
    {
        "id": "60",
        "pregunta" : "A large corporation stones Orders and Line Items In Salesforce for different lines of business. Users are a.. see Orders across the entire organization, but, for security purposes, should only be able to see the Line If Orders in their lineof business.<br><br> Which type of relationship should be used between Line Items and Orders?",
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Master-Detail"
            },
            {
                "id" : "2",
                "titulo" : "Lookup"
            },
            {
                "id" : "3",
                "titulo" : "Direct Lookup"
            },
            {
                "id" : "4",
                "titulo" : "Indirect Lookup"
            }
        ]
    },
    {
        "id": "61",
        "pregunta" : "A Licensed_Professional__c custom object exist in the system with two Master-Detailfields for the following objects: Certification__c and Contact. Users with the 'Certification Representative' role can access the Certification records they own and view the related Licensed Professionals records, however users with the 'Salesforce representative' role report they cannot view any Licensed professional records even though they own the associated Contact record. What are two likely causes of users in the 'Sales Representative' role not<br><br> being able to access the Licensed Professional records? Choose 2 answers",
        "respuestasCorrectas": ["1","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "The organization's sharing rules for Licensed_Professional__c have not finished their recalculation process"
            },
            {
                "id" : "2",
                "titulo" : "The organization recently modified the Sales representative role to restrict Read/Write access to Licensed_Professional__c"
            },
            {
                "id" : "3",
                "titulo" : "The organization has a private sharing model for Certification__c, and Contact is the primary relationship in the Licensed_Professional__c object"
            },
            {
                "id" : "4",
                "titulo" : "The organization has a private sharing model for Certification__c, and Certification__c is the primary relationship in the Licensed_Professional__c object."
            }
        ]
    },
    {
        "id": "62",
        "pregunta" : "A developer must build application that tracks which Accounts have purchase specific pieces of equal products. Each Account could purchase many pieces of equipment.<br><br> How should the developer track that an Account has purchased a piece of equipment.",
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use the Asset object."
            },
            {
                "id" : "2",
                "titulo" : "Use a Custom object."
            },
            {
                "id" : "3",
                "titulo" : "Use a Master-Detail on Product to Account"
            },
            {
                "id" : "4",
                "titulo" : "Use a Lookup on Account to product."
            }
        ]
    },
    {
        "id": "63",
        "pregunta" : "Adeveloper created a new trigger that inserts a Task when a new Lead is created. After deploying to production, an outside integration chat reads task records is periodically reporting errors.<br><br> Which change should the developer make to ensure the integrationis not affected with minimal impact to business logic?",
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Deactivate the trigger before the integration runs."
            },
            {
                "id" : "2",
                "titulo" : "Use a try-catch block after the insert statement."
            },
            {
                "id" : "3",
                "titulo" : "Remove the Apex class from the integration user's profile."
            },
            {
                "id" : "4",
                "titulo" : "Use the Database method with all or None set to false"
            }
        ]
    },
    {
        "id": "65",
        "pregunta" : "what are the three languages used in the visualforce page?",
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Javascript, CSS, HTML"
            },
            {
                "id" : "2",
                "titulo" : "Apex, Json, SQL"
            },
            {
                "id" : "3",
                "titulo" : "C++, CSS, query"
            }
        ]
    },
    {
        "id": "66",
        "pregunta" : "How does the Lightning Component framework help developersimplement solutions faster?",
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "By providing an Agile process with default steps"
            },
            {
                "id" : "2",
                "titulo" : "By providing code review standards and processes"
            },
            {
                "id" : "3",
                "titulo" : "By providing device-awareness for mobile and desktops"
            },
            {
                "id" : "4",
                "titulo" : "By providing change history and version control"
            }
        ]
    },
    {
        "id": "68",
        "pregunta" : "Which two are phases in the Aura application event propagation framework? Choose 2 answers",
        "respuestasCorrectas": ["3","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Emit"
            },
            {
                "id" : "2",
                "titulo" : "Control"
            },
            {
                "id" : "3",
                "titulo" : "Default"
            },
            {
                "id" : "4",
                "titulo" : "Bubble"
            }
        ]
    },
    {
        "id": "69",
        "pregunta" : "Universal Containers wants to assess the advantages of declarative development versus programmatic customization for specific use cases in its Salesforce implementation.<br><br> What are two characteristics of declarative development over programmatic customization?",
        "respuestasCorrectas": ["2","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Declarative development has higher design limits and query limits."
            },
            {
                "id" : "2",
                "titulo" : "Declarative development can be done using the Setup UI."
            },
            {
                "id" : "3",
                "titulo" : "Declarativedevelopment does not require Apex test classes."
            },
            {
                "id" : "4",
                "titulo" : "Declarative code logic does not require maintenance or review."
            }
        ]
    },
    {
        "id": "70",
        "pregunta" : "What can be developed using the LightningComponent framework?",
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Hosted web applications"
            },
            {
                "id" : "2",
                "titulo" : "Single-page web apps"
            },
            {
                "id" : "3",
                "titulo" : "Dynamic web sites"
            },
            {
                "id" : "4",
                "titulo" : "Salesforce integrations"
            }
        ]
    },
    {
        "id": "71",
        "pregunta" : "Which action causes a before trigger to fire by default for Accounts?",
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Renaming or replacing picklist"
            },
            {
                "id" : "2",
                "titulo" : "Importing data using the Data Loader and the Bulk API"
            },
            {
                "id" : "3",
                "titulo" : "Converting Leads to Contact accounts"
            },
            {
                "id" : "4",
                "titulo" : "Updating addresses using the Mass Address update tool"
            }
        ]
    },
    {
        "id": "74",
        "pregunta" : "Given the following Apex statement:<br><br> Account myAccount = [SELECT Id, Name FROM Account]; <br<br> What occurs when more than one Account is returned by the SOQL query?",
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "The variable, myAccount, is automaticallycast to the List data type."
            },
            {
                "id" : "2",
                "titulo" : "The first Account returned is assigned tomyAccount."
            },
            {
                "id" : "3",
                "titulo" : "The query fails and an error is written to the debug log."
            },
            {
                "id" : "4",
                "titulo" : "An unhandled exception is thrown and the code terminates."
            }
        ]
    },
    {
        "id": "83",
        "pregunta" : "In the Lightning UI, where should a developer look to find information about a Paused Flow Interview?",
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "On the Paused Row Interviews related List for a given record"
            },
            {
                "id" : "2",
                "titulo" : "In the Paused Interviews section of the Apex Flex Queue"
            },
            {
                "id" : "3",
                "titulo" : "In the system debug log by Altering on Paused Row Interview"
            },
            {
                "id" : "4",
                "titulo" : "On the Paused Row Interviews component on the Home page"
            }
        ]
    },
    {
        "id": "86",
        "pregunta" : "A developer receives an error when trying to call a global server-side method using the @remoteAction decorator. <br>br> How can the developer resolve the error?",
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Change the function signature to be private static."
            },
            {
                "id" : "2",
                "titulo" : "Add static to the server-side method signature."
            },
            {
                "id" : "3",
                "titulo" : "A Decoratethe server-side method with (static=true)."
            },
            {
                "id" : "4",
                "titulo" : "Decorate the server-side method with (static=false)."
            }
        ]
    },
    {
        "id": "88",
        "pregunta" : "Which three per-transaction limits have higher governor limits in asynchronous Apex transactions?",
        "respuestasCorrectas": ["1","3","5"],
        "tipo": "Muliple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Maximum CPU time"
            },
            {
                "id" : "2",
                "titulo" : "Maximum heap size"
            },
            {
                "id" : "3",
                "titulo" : "Total SOQL queries"
            },
            {
                "id" : "4",
                "titulo" : "Maximum execution time"
            },
            {
                "id" : "5",
                "titulo" : "Records returned by SOQL"
            }
        ]
    },
    {
        "id": "92",
        "pregunta" : "A developer created a trigger on the Account object and wants to test if the trigger is properly bulklfield. The developer team decided that the trigger should be tested with 200 account records with unique names.<br><br> What two things should be done to create the test data within the unit test with the least amount of code?",
        "respuestasCorrectas": ["2","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use the @isTest(isParallel=true) annotation in the test class."
            },
            {
                "id" : "2",
                "titulo" : "Use Test.loadData to populate data in your test methods."
            },
            {
                "id" : "3",
                "titulo" : "Use the@isTest(seeAllData=true) annotation in the test class."
            },
            {
                "id" : "4",
                "titulo" : "Use the@isTest(seeAllData=true) annotation in the test class."
            }
        ]
    },
    {
        "id": "93",
        "pregunta" : "A developer needs to allow users to complete a form on an Account record that will create a record for a custom object. The form needs to display different fields depending on the user's job role. The functionality should only be available to a small group of users.<br><br> Which three things should the developer do to satisfy these requirements?",
        "respuestasCorrectas": ["1","2","5"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Add a dynamic action to the Account record page."
            },
            {
                "id" : "2",
                "titulo" : "Create a custom permission forthe users."
            },
            {
                "id" : "3",
                "titulo" : "Create a Lightning web component."
            },
            {
                "id" : "4",
                "titulo" : "Add a dynamic action to the user's assigned page layouts."
            },
            {
                "id" : "5",
                "titulo" : "Create a dynamic form."
            }
        ]
    },
    {
        "id": "94",
        "pregunta" : "Universal Containers (UC) decided it will notto send emails to support personnel directly from Salesforce in the event that an unhandled exception occurs. Instead, UC wants an external system be notified of the error.<br><br> What is the appropriate publish/subscribe logic to meet these requirements?",
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Publish the error event using the addError() method and have the external system subscribe to the event using CometD."
            },
            {
                "id" : "2",
                "titulo" : "Publish the error event using the Eventbus.publish() method and have the external system subscribe to the event using CometD."
            },
            {
                "id" : "3",
                "titulo" : "Have the external system subscribe to the BatchApexError event, no publishing is necessary."
            },
            {
                "id" : "4",
                "titulo" : "Publish the error event using the addError() method and write a trigger to subscribe to the event and xxºnotify the external system."
            }
        ]
    },
    {
        "id": "95",
        "pregunta" : "A developer Is Integrating with a legacy on-premise SQL database. What should the developer use to ensure the data being Integrated is matched to the right records in Salesforce?",
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Lookup field"
            },
            {
                "id" : "2",
                "titulo" : "External ID field"
            },
            {
                "id" : "3",
                "titulo" : "Formula field"
            },
            {
                "id" : "4",
                "titulo" : "External Object"
            }
        ]
    },
    {
        "id": "96",
        "pregunta" : "A developer is migrating a Visualforce page into a Lightning web component. The Visualforce page shows information about a single record. The developer decides to use Lightning Data Service to access record data.<br><br> Which security consideration should the developer be aware of?",
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Lightning Data Service handles sharing rules and field-level security."
            },
            {
                "id" : "2",
                "titulo" : "Lightning Data Service ignores field-level security."
            },
            {
                "id" : "3",
                "titulo" : "The with sharingkeyword must be used to enforce sharing rules."
            },
            {
                "id" : "4",
                "titulo" : "The isAccessible ( ) method must be used for field-level access checks"
            }
        ]
    },
    {
        "id": "97",
        "pregunta" : "A workflow updates the value of a custom field for an existing Account.<br><br> How can a developer access the updated custom fieldvalue from a trigger?",
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "By writing, a Before Update trigger and accessing the field value from Trigger.new"
            },
            {
                "id" : "2",
                "titulo" : "By writing an After Insert trigger and accessing the field value from Trigger.old"
            },
            {
                "id" : "3",
                "titulo" : "By writing an After Update trigger and accessing the field value from Trigger.old"
            },
            {
                "id" : "4",
                "titulo" : "By writing a Before Insert trigger and accessing the field value from Trigger.new"
            }
        ]
    },
    {
        "id": "99",
        "pregunta" : "A developer observes that an Apex test method fails in the Sandbox. To identify the issue, the developer copies the code inside the test method and executes it via the Execute Anonymous tool in the Developer Console. The code then executes with no exceptions or errors. Why did the test method fail in the sandbox and pass in the Developer Console?",
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "The test method has a syntax error in the code."
            },
            {
                "id" : "2",
                "titulo" : "The test method relies on existing data in the sandbox."
            },
            {
                "id" : "3",
                "titulo" : "The test method is calling an @future method."
            },
            {
                "id" : "4",
                "titulo" : "The test method does not useSystem.runAs to execute as a specific user."
            }
        ]
    },
    {
        "id": "100",
        "pregunta" : "A developer needs to join data received from an integration with an external system with parent records in Salesforce. The data set does not contain the Salesforce IDs of the parent records, but it does have a foreign key attribute that can be used to identify the parent.<br><br> Which action will allow the developer to relate records in the data model without knowingthe Salesforce ID?",
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Create a custom field on the child object of type Foreign Key"
            },
            {
                "id" : "2",
                "titulo" : "Create and populate a custom field on the parent object marked as Unique"
            },
            {
                "id" : "3",
                "titulo" : "Create and populate a custom field on the parent object marked as an External ID."
            },
            {
                "id" : "4",
                "titulo" : "Create acustom field on the child object of type External Relationship."
            }
        ]
    },
    {
        "id": "102",
        "pregunta" : "A Visual Flow uses an apex Action to provide additional information about multiple Contacts, stored in a custom class, contactInfo. <br><br>Which is the correct definition of the Apex method that gets additional information?",
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "@InvocableMethod(label='Additional Info')<br><xmp>public List<ContactInfo> getInfo(List<Id> contactIds) { /*implementation*/ }</xmp>"
            },
            {
                "id" : "2",
                "titulo" : "@InvocableMethod(label='additional Info')<br>public static ContactInfo getInfo(Id contactId){ /*implementation*/ }"
            },
            {
                "id" : "3",
                "titulo" : "@invocableMethod(label)='Additional Info')<br><xmp>public static List<ContactInfo> getInfo(List<Id> contactIds) { /*implementation*/ }</xmp>"
            },
            {
                "id" : "4",
                "titulo" : "@InvocableMethod(Label='additional Info') public ContactInfo(Id contactId) { /*implementation*/ }"
            }
        ]
    },
    {
        "id": "103",
        "pregunta" : "A Salesforce developer wants to review their code changes immediately and does not want to install anything on their computer or on the org.<br><br> Which tool is best suited?",
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Developer Console"
            },
            {
                "id" : "2",
                "titulo" : "Salesforce Extension for VSCode"
            },
            {
                "id" : "3",
                "titulo" : "Setup Menu"
            },
            {
                "id" : "4",
                "titulo" : "Third-party apps from App Exchange"
            }
        ]
    },
    {
        "id": "105",
        "pregunta" : "A developer is asked to create a Visualforce page for Opportunities that allows users to save ormerge the current record.<br><br> Which approach should the developer to meet this requirement?",
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "A custom controller"
            },
            {
                "id" : "2",
                "titulo" : "A custom controller extension"
            },
            {
                "id" : "3",
                "titulo" : "A custom controller extension"
            },
            {
                "id" : "4",
                "titulo" : "Standard controller methods"
            }
        ]
    },
    {
        "id": "106",
        "pregunta" : "Which process automation should be used to post a message to Chatter without using Apex code?",
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Outbound Message"
            },
            {
                "id" : "2",
                "titulo" : "Entitlement Process"
            },
            {
                "id" : "3",
                "titulo" : "Strategy Builder"
            },
            {
                "id" : "4",
                "titulo" : "Flow Builder"
            }
        ]
    },
    {
        "id": "108",
        "pregunta" : "A developer is asked to explore if this automation can be implemented without writing any Apex code. <br><br>",
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "This approval step cannot be automated and must be done manually."
            },
            {
                "id" : "2",
                "titulo" : "The developer can use Einstein Next Best Actions."
            },
            {
                "id" : "3",
                "titulo" : "The developer can use a record"
            },
            {
                "id" : "4",
                "titulo" : "The developer can use record triggered flow with Actions."
            }
        ]
    },
    {
        "id": "109",
        "pregunta" : "Which two statements accurately represent the MVC frameworkimplementation in Salesforce? Choose 2",
        "respuestasCorrectas": ["1","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Validation rules enforce business rules and represent the Controller (C) part of the MVC framework"
            },
            {
                "id" : "2",
                "titulo" : "Lightning component HTML files represent the Model (M) part of the MVC framework."
            },
            {
                "id" : "3",
                "titulo" : "Triggers that create records represent the Model (M) part of the MVC framework."
            },
            {
                "id" : "4",
                "titulo" : "Standard and Custom objects used in the app schema represent the View (V) part of the MVC framework"
            }
        ]
    },
    {
        "id": "115",
        "pregunta" : "Which aspect of Apex programming is limited due to multitenancy?",
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "The number of active Apex classes"
            },
            {
                "id" : "2",
                "titulo" : "The number of methods in an Apex Class"
            },
            {
                "id" : "3",
                "titulo" : "The number of records processed in a loop"
            },
            {
                "id" : "4",
                "titulo" : "The number of records returned from database queries"
            }
        ]
    },
    {
    "id": "117",
    "pregunta" : "A developer wants to retrieve the Contacts and Users with the email address 'dev@uc.com'.<br><br> Which SOSL statement should the developer use?",
    "respuestasCorrectas": ["1"],
    "tipo": "Simple",
    "respuestas": [
        {
            "id" : "1",
            "titulo" : "FIND {dev@uc.com} IN Email Fields RETURNING Contact (Email), User (Email)"
        },
        {
            "id" : "2",
            "titulo" : "FIND {Email = 'dev@uc.com'} IN Contact, User"
        },
        {
            "id" : "3",
            "titulo" : "FIND {Email = 'dev@uc.com'} RETURNING Contact (Email), User (Email)"
        },
        {
            "id" : "4",
            "titulo" : "FIND Email IN Contact, User FOR {dev2uc.com}"
        }
    ]
    },
    {
        "id": "123",
        "pregunta" : "A developer Edition org has five existing accounts. A developer wants to add 10 more accounts for … <br><br> The following code is executed in the Developer Console using the Executor Anonymous window: <br>br>"+
        "Integer x =1;<br><xmp>List<Account> newAccounts();<br>do{</xmp><br>Account acct = new Account(Name= 'New Account '  + x++);<br>newAccounts.add(acct);<br> while (x<10); <br><br> How many total accounts will bein the org after this code is executed? ",
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "5"
            },
            {
                "id" : "2",
                "titulo" : "6"
            },
            {
                "id" : "3",
                "titulo" : "10"
            },
            {
                "id" : "4",
                "titulo" : "15"
            }
        ]
    },
    {
        "id": "127",
        "pregunta" : "If apex code executes inside the execute() method of an Apex class when implementing the Batchable<br><br> interface, which statement are true regarding governor limits? Choose 2 answers",
        "respuestasCorrectas": ["1","2"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "The Apex governor limits might be higher due to the asynchronous nature of the transaction."
            },
            {
                "id" : "2",
                "titulo" : "The apex governor limits arereset for each iteration of the execute() method."
            },
            {
                "id" : "3",
                "titulo" : "The Apex governor limits are relaxed while calling the constructor of the Apex class."
            },
            {
                "id" : "4",
                "titulo" : "The Apex governor limits cannot be exceeded due to the asynchronous nature of the transaction,"
            }
        ]
    },
    {
        "id": "129",
        "pregunta" : "In which two ways can the try/catch be enclosed to enforce object and field-level permissions and prevent the DML statement from being executed if the current logged-in user does not have the appropriate level of access?",
        "respuestasCorrectas": ["1","2"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use if (Schema, sobjectType, Contact, isUpdatable ())"
            },
            {
                "id" : "2",
                "titulo" : "Use if (Schema , sobjectType. Contact. Field, Is_Active_c. is Updateable ())"
            },
            {
                "id" : "3",
                "titulo" : "Use if (Schema.sObjectType.Contact.isAccessible ())"
            },
            {
                "id" : "4",
                "titulo" : "Use if (thisContact.Owner = = UserInfo.getuserId ())"
            }
        ]
    },
    {
        "id": "130",
        "pregunta" : "The following automations already exist on the Account object:<br>*A workflow rule that updates a field when a certain criteria is met<br> *A custom validation on a field<br>*A How that updates related contact records<br> Adeveloper created a trigger on the Account object.<br><br>What should the developer consider while testing the trigger code?",
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "The flow may be launched multiple times."
            },
            {
                "id" : "2",
                "titulo" : "Workflow rules will fire only after the trigger has committed all DML operations to the database."
            },
            {
                "id" : "3",
                "titulo" : "A workflow rule field update will cause the custom validation to run again."
            },
            {
                "id" : "4",
                "titulo" : "The trigger may fire multiple times during a transaction."
            }
        ]
    },
    {
        "id": "132",
        "pregunta" : "Which two statements true about Getter and Setter methods as they relate to Visualforce? Choose 2 answers",
        "respuestasCorrectas": ["1","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Getter methods can pass a value from a controller to a page."
            },
            {
                "id" : "2",
                "titulo" : "There is no guarantee for the order in which Getter or Setter methods are executed."
            },
            {
                "id" : "3",
                "titulo" : "Setter methods always have to be declared global."
            },
            {
                "id" : "4",
                "titulo" : "Setter methods can pass a value from a controller to a page."
            }
        ]
    },
    {
        "id": "138",
        "pregunta" : "A developer needs to update an unrelated object when a record gets saved. Which two trigger types should thedeveloper create?",
        "respuestasCorrectas": ["3","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "After insert"
            },
            {
                "id" : "2",
                "titulo" : "After update"
            },
            {
                "id" : "3",
                "titulo" : "Before update"
            },
            {
                "id" : "4",
                "titulo" : "Before update"
            }
        ]
    },
    {
        "id": "139",
        "pregunta" : "Which two settings must be defined in order to update a record of a junction object?",
        "respuestasCorrectas": ["2","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Read access on the primary relationship"
            },
            {
                "id" : "2",
                "titulo" : "Read/Write access on the secondary relationship"
            },
            {
                "id" : "3",
                "titulo" : "Read/Write access on the primaryrelationship"
            },
            {
                "id" : "4",
                "titulo" : "Read/Write access on the junction object"
            }
        ]
    },
    {
        "id": "140",
        "pregunta" : "Which two are phases in the Salesforce Application Event propagation framework?",
        "respuestasCorrectas": ["2","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Bubble"
            },
            {
                "id" : "2",
                "titulo" : "Bubble"
            },
            {
                "id" : "3",
                "titulo" : "Bubble"
            }
        ]
    },
    {
        "id": "142",
        "pregunta" : "A developer wants to invoke on outbound message when a record meets a specific criteria.<br><br> Which three features satisfy this use case?",
        "respuestasCorrectas": ["1","2","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Approval Process has the capacity to check the record criteria and send an outbound message without Apex Code"
            },
            {
                "id" : "2",
                "titulo" : "Process builder can be used to check the record criteria and send an outboundmessage with Apex Code."
            },
            {
                "id" : "3",
                "titulo" : "workflows can be used to check the record criteria and send an outbound message."
            },
            {
                "id" : "4",
                "titulo" : "Process builder can be used to check the record criteria and send an outbound messagewithout Apex Code"
            },
            {
                "id" : "4",
                "titulo" : "Visual Workflow can be used to check the record criteria and send an outbound message without Apex"
            }
        ]
    },
    {
        "id": "143",
        "pregunta" : "A developer created a Visualforce page and custom controller to display the account type field as shown below. Custom controller code:<br><br><xmp> public classcustomCtrlr{</xmp><br><xmp>private Account theAccount; public String actType;</xmp><br><xmp>public customCtrlr() {</xmp><br>theAccount = [SELECT Id, Type FROM Account WHERE Id =:apexPages.currentPage().getParameters().get('id')]; actType = theAccount.Type; ]}<br><br> Visualforce page snippet: TheAccount Type is {!actType} The value of the account type field is not being displayed correctly on the page. Assuming the custom controller is property referenced on the Visualforce page.<br><br> what should the developer do to correct the problem?",
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Add a gettermethod for the actType attribute."
            },
            {
                "id" : "2",
                "titulo" : "Change theAccount attribute to public."
            },
            {
                "id" : "3",
                "titulo" : "Change theAccount attribute to public."
            },
            {
                "id" : "4",
                "titulo" : "Change theAccount attribute to public."
            }
        ]
    },
    
];