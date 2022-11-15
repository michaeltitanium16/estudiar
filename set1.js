let set1 = [
    {
        "id": "1",
        "pregunta" : "The Account object in an organization has a master-detail relationship to a child object called Branch. The following automations exist: <br> * Roll-up summary fields <br> *Custom validation rules <br>*Duplicate rules   <br> <br>A developer created a trigger on the Account object. <br> <br> Which two things should the developer consider while testing the trigger code? " ,
        "respuestasCorrectas": ["1","2"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "The trigger may fire multiple times during a transaction. ",
            },
            {
                "id" : "2",
                "titulo" : "Rollup summary fields can cause the parent record to go through Save",
            },
            {
                "id" : "3",
                "titulo" : "The validation rules will cause the trigger to fire again."
            }
            ,
            {
                "id" : "4",
                "titulo" : "Duplicate rules are executed once all DML operations commit to the database."
            }
        ]
    },
    {
        "id": "2",
        "pregunta" : "What should a developer use to obtain the Id and Name of all the Leads, Accounts, and Contacts that have the company name '\"Universal Containers'\' ?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "SELECT lead(id, name), account (id, name), contact (id, name) FROM Lead, Account, Contact WHERE Name = 'Universal Containers'",
            },
            {
                "id" : "2",
                "titulo" : "FIND Universal Containers' IN CompanyName Fields RETURNING lead(id, name), account (id, name), contact (id, name)",
            },
            {
                "id" : "3",
                "titulo" : "FIND 'Universal Containers' IN Name Fields RETURNING lead(id, name), account (id, name), contact (id, name)"
            }
            ,
            {
                "id" : "4",
                "titulo" : "SELECT Lead.id, Lead. Name, Account. Id, Account.Name, Contact.Id, Contact.Name FROM Lead, Account, Contact WHERE CompanyName = 'Universal Containers'"
            }
        ]
    },
    {
        "id": "3",
        "pregunta" : "A PrimaryId__c custom field exists on the Candidate__c custom object. The field is used to store each candidate's id number and is marked as Unique in the schema definition. <br> As part of a data enrichment process, Universal Containers has a CSV file that contains updated data for all candidates in the system. The file contains each Candidate's primary id as a data point. Universal Containers wants to upload this information into Salesforce, while ensuring all data rows are correctly mapped to a candidate in the system. <br> Which technique should the developer implement to streamline the data upload?" ,
        "respuestasCorrectas": ["2"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Upload the CSV into a custom object related to candidate",
            },
            {
                "id" : "2",
                "titulo" : "Update the primaryId__c field definition to mark it as an External Id.",
            },
            {
                "id" : "3",
                "titulo" : "Create a before insert trigger to correctly map the records."
            },
            {
                "id" : "4",
                "titulo" : "Create a before save flow to correctly map the records."
            }
        ]
    },
    {
        "id": "4",
        "pregunta" : "Cloud Kicks has a multi-screen flow that its call center agents use when handling Inbound service desk calls. <br> At one of the steps in the flow, the agents should be presented with a list of order numbers and dates that are retrieved from an external order management system in real time and displayed on the screen. <br> What should a developer use to satisfy this requirement? " ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "An invocable method",
            },
            {
                "id" : "2",
                "titulo" : "An Apex REST class",
            },
            {
                "id" : "3",
                "titulo" : "An Apex controller"
            },
            {
                "id" : "4",
                "titulo" : "An outbound message "
            }
        ]
    },
    {
        "id": "5",
        "pregunta" : "A Next Best Action strategy uses an Enhance element that invokes an Apex method to determine a discount level for a Contact, based on a number of factors. <br> What is the correct definition of the Apex method? " ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "@InvocableMethod <br>global Recommendation getLevel (contactWrapper input)<br> { /* implementation*/ }",
            },
            {
                "id" : "2",
                "titulo" : "@InvocableMethod <br>global static ListRecommendation getLevel (List<contactWrapper> input)<br> { /*implementation*/ }",
            },
            {
                "id" : "3",
                "titulo" : "InvocableMethod <br> global static List<List<Recommendation>> getLevel (List<contactWrapper> input)<br> { /* implementation*/ } "
            },
            {
                "id" : "4",
                "titulo" : "InvocableMethod <br>global List<List<Recommendation>> getLevel (List<contactWrapper> input) <br>{ /*implementation / } "
            }
        ]
    },
    {
        "id": "6",
        "pregunta" : "Where are two locations a developer can look to find Information about the status of batch or future methods?" ,
        "respuestasCorrectas": ["2","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Paused Flow Interviews component",
            },
            {
                "id" : "2",
                "titulo" : "Apex Jobs",
            },
            {
                "id" : "3",
                "titulo" : "Developer Console"
            },
            {
                "id" : "4",
                "titulo" : "Apex Flex Queue "
            }
        ]
    },
    {
        "id": "7",
        "pregunta" : "What can be used to override the Account's standard Edit button for Lightning Experience? " ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Lightning page",
            },
            {
                "id" : "2",
                "titulo" : "Lightning component",
            },
            {
                "id" : "3",
                "titulo" : "Lightning flow"
            },
            {
                "id" : "4",
                "titulo" : "Lightning action "
            }
        ]
    },
    {
        "id": "8",
        "pregunta" : "In terms of the MVC paradigm, what are two advantages of implementing the view layer of a Salesforce application using Lightning Web Component-based development over Visualforce?" ,
        "respuestasCorrectas": ["1","2"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Rich component ecosystem",
            },
            {
                "id" : "2",
                "titulo" : "Self-contained and reusable units of an application",
            },
            {
                "id" : "3",
                "titulo" : "Log capturing via the Debug Logs Setup page"
            },
            {
                "id" : "4",
                "titulo" : "Built-in standard and custom set controllers "
            }
        ]
    },
    {
        "id": "9",
        "pregunta" : " A developer created this Apex trigger that calls Myclass .myStaticMethod: <br> trigger myTrigger on Contact (before insert) { <br> Myclass.myStaticMethod(trigger.new); } <br> <br> The developer creates a test class with a test method that calls Myclass.myStaticMethod directly, resulting in 81% overall code coverage. <br> What happens when the developer tries to deploy the trigger and two classes to production, assuming no other code exists?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "The deployment fails because the Apex trigger has no code coverage.",
            },
            {
                "id" : "2",
                "titulo" : "The deployment passes because both classes and the trigger were included in the deployment.",
            },
            {
                "id" : "3",
                "titulo" : "The deployment passes because the Apex code has the required > 75% code coverage."
            },
            {
                "id" : "4",
                "titulo" : "The deployment fails because no assertions were made in the test method."
            }
        ]
    },
    {
        "id": "10",
        "pregunta" : " The following code snippet is executed by a Lightning web component in an environment with more than 2,000 lead records: <br> @AuraEnabled <br> public void static updateLeads () { <br> for (Lead thislead [SELECT Origin__c FROM Lead] ) { <br> thisLead. LeadSource = thisLead.origin; <br> update thisLead; <br> } <br> } <br> Which governor limit will likely be exceeded within the Apex transaction?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Total number of records retrieved by SOQL queries",
            },
            {
                "id" : "2",
                "titulo" : "Total number of records processed as a result of DML statements",
            },
            {
                "id" : "3",
                "titulo" : "Total number of DML statements issued"
            },
            {
                "id" : "4",
                "titulo" : "Total number of SOQL queries issued"
            }
        ]
    },
    {
        "id": "11",
        "pregunta" : "Which Lightning code segment should be written to declare dependencies on a Lightning component, c:accountList, that is used in a Visualforce page? " ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {         
                "id" : "1",
                "titulo" : "<xmp><aura:component access='\"GLOBAL'\" extends='\"ltng:outApp'\"> </xmp>  <xmp> <aura:dependency resource='\"c:accountList'\"/></xmp>  <xmp> </aura:component></xmp>",
            },
            {
                "id" : "2",
                "titulo" : "<xmp><aura: application access='\"GLOBAL'\" extends='\"ltng:outApp'\"> </xmp> <xmp> <aura: dependency resource='\"c:accountList'\"/> </xmp> <xmp> </aura: application> </xmp>",
            },
            {
                "id" : "3",
                "titulo" : "<xmp><aura: application access='\"GLOBAL'\"> </xmp> <xmp> <aura:dependency resource='\"c:accountList'\"/> </xmp> <xmp> </aura: application></xmp>",
            },
            {
                "id" : "4",
                "titulo" : "<xmp> <aura: component access='\"GLOBAL'\"> </xmp><xmp>  <aura:dependency resource='\"c:accountList'\"/> </xmp> <xmp> </aura:component> </xmp>",
            }        
        ]
    },
    {
        "id": "12",
        "pregunta" : "A business has a proprietary Order Management System (OMS) that creates orders from their website and fulfills the orders. When the order is created in the OMS, an integration also creates an order record in Salesforce and relates it to the contact as identified by the email on the order. As the order goes through different stages in the OMS, the integration also updates it in Salesforce. <br>  It is noticed that each update from the OMS creates a new order record in Salesforce. <br>  Which two actions will prevent the duplicate order records from being created in Salesforce?" ,
        "respuestasCorrectas": ["1","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use the order number from the OMS as an external ID",
            },
            {
                "id" : "2",
                "titulo" : "Write a before trigger on the order object to delete any duplicates.",
            },
            {
                "id" : "3",
                "titulo" : "Ensure that the order number in the OMS is unique."
            },
            {
                "id" : "4",
                "titulo" : "Use the email on the contact record as an external ID."
            }
        ]
    },
    {
        "id": "13",
        "pregunta" : "The sales management team at Universal Containers requires that the Lead Source field of the Lead record be populated when a Lead is converted. <br> What should be done to ensure that a user populates the Lead Source field prior to converting a Lead?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use a formula field.",
            },
            {
                "id" : "2",
                "titulo" : "Create an after trigger on Lead.",
            },
            {
                "id" : "3",
                "titulo" : "Use a validation rule."
            },
            {
                "id" : "4",
                "titulo" : "Use Lead Conversion field mapping."
            }
        ]
    },
    {
        "id": "14",
        "pregunta" : "How does the Lightning Component framework help developers implement solutions faster?" ,
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "By providing change history and version control",
            },
            {
                "id" : "2",
                "titulo" : "By providing code review standards and processes",
            },
            {
                "id" : "3",
                "titulo" : "By providing an Agile process with default steps"
            },
            {
                "id" : "4",
                "titulo" : "By providing device-awareness for mobile and desktops"
            }
        ]
    },
    {
        "id": "15",
        "pregunta" : "What are three characteristics of change set deployments?" ,
        "respuestasCorrectas": ["2","3","5"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Change sets can be used to transfer records.",
            },
            {
                "id" : "2",
                "titulo" : "Change sets can only be used between related organizations.",
            },
            {
                "id" : "3",
                "titulo" : "Sending a change set between two orgs requires a deployment connection."
            },
            {
                "id" : "4",
                "titulo" : "Change sets can deploy custom settings data"
            },
            {
                "id" : "5",
                "titulo" : "Deployment is done in a one-way, single transaction"
            }
        ]
    },
    {
        "id": "16",
        "pregunta" : "A development team wants to use a deployment script to automatically deploy to a sandbox during their development cycles. <br> Which two tools can they use to run a script that deploys to a sandbox?" ,
        "respuestasCorrectas": ["1","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "VsCode",
            },
            {
                "id" : "2",
                "titulo" : "Change Sets",
            },
            {
                "id" : "3",
                "titulo" : "SFDX CLI"
            },
            {
                "id" : "4",
                "titulo" : "Developer Console "
            }
        ]
    },
    {
        "id": "17",
        "pregunta" : "Consider the following code snippet: <br> public static List<Lead> obtainAllFields (Set<Id> leadIds) { <br> List<Lead> result = new List<Lead> ; for (Id leadId : leadIds) { <br> result.add([SELECT FIELDS (ALL) FROM Lead WHERE Id = :leadId); <br> return result;  }" ,
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Avoid using variables as query filters.",
            },
            {
                "id" : "2",
                "titulo" : "Avoid executing queries without a limit clause.",
            },
            {
                "id" : "3",
                "titulo" : "Avoid returning an empty List of records."
            },
            {
                "id" : "4",
                "titulo" : "Avoid performing queries inside for loops."
            }
        ]
    },
    {
        "id": "18",
        "pregunta" : "A developer created these three Rollup Summary fields in the custom object, Project_c: <br> Total_Timesheets__c <br> Total_Approved_Timesheets__c <br> Total_Rejected_Timesheet__c <br>  The developer is asked to create a new field that shows the ratio between rejected and approved timesheets for a given project.  <br> Which should the developer use to implement the business requirement in order to minimize maintenance overhead?" ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Apex trigger",
            },
            {
                "id" : "2",
                "titulo" : "Formula field",
            },
            {
                "id" : "3",
                "titulo" : "Record-triggered flow"
            },
            {
                "id" : "4",
                "titulo" : "Field Update actions "
            }
        ]
    },
    {
        "id": "19",
        "pregunta" : "When a user edits the Postal Code on an Account, a custom Account text field named '\"Timezone'\" must be updated based on the values in a PostalCodeToTimezone__c custom object. <br> Which two automation tools can be used to implement this feature?" ,
        "respuestasCorrectas": ["1","2"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Account trigger",
            },
            {
                "id" : "2",
                "titulo" : "Fast Field Updates record-triggered flow",
            },
            {
                "id" : "3",
                "titulo" : "Approval process"
            },
            {
                "id" : "4",
                "titulo" : "Quick actions"
            }
        ]
    },
    {
        "id": "20",
        "pregunta" : "A developer wrote Apex code that calls out to an external system. <br> How should a developer write the test to provide test coverage?" ,
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Write a class that extends HTTPCalloutMock.",
            },
            {
                "id" : "2",
                "titulo" : "Write a class that extends WebServiceMock.",
            },
            {
                "id" : "3",
                "titulo" : "Write a class that implements WebServiceMock."
            },
            {
                "id" : "4",
                "titulo" : "Write a class that implements HTTPCalloutMock."
            }
        ]
    },
    {
        "id": "21",
        "pregunta" : "A custom Visualforce controller calls the Apex Bages.addMessage() method, but no messages are rendering on the page. <br> Which component should be added to the Visualforce page to display the message?" ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "<xmp><apex:message for=\"info\"/></xmp>",
            },
            {
                "id" : "2",
                "titulo" : "<xmp><apex: pageMessages /></xmp>",
            },
            {
                "id" : "3",
                "titulo" : "<xmp><apex:facet name=\"messages\" /></xmp>",
            },
            {
                "id" : "4",
                "titulo" : "<xmp><apex:pageMessages  severity=\"info\"/></xmp>"
            }
        ]
    },
    {
        "id": "22",
        "pregunta" : "While working in a sandbox, an Apex test fails when run in the Test Framework. However, running the Apex test logic in the Execute Anonymous window succeeds with no exceptions or errors <br> Why did the method fail in the sandbox test framework but succeed in the Developer Console?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "The test method relies on existing data in the sandbox",
            },
            {
                "id" : "2",
                "titulo" : "The test method does not use System.runas to execute as a specific user.",
            },
            {
                "id" : "3",
                "titulo" : "The test method has a syntax error in the code."
            },
            {
                "id" : "4",
                "titulo" : "The test method is calling an @future method."
            }
        ]
    },
    {
        "id": "23",
        "pregunta" : "Which three steps allow a custom Scalable Vector Graphic (SVG) to be included in a Lightning web component?" ,
        "respuestasCorrectas": ["2","3","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Import the SVG as a content asset file.",
            },
            {
                "id" : "2",
                "titulo" : "Import the static resource and provide a JavaScript property for it.",
            },
            {
                "id" : "3",
                "titulo" : "Upload the SVG as a static resource."
            },
            {
                "id" : "4",
                "titulo" : "Reference the property in the HTML template."
            }
            ,
            {
                "id" : "5",
                "titulo" : "Reference the import in the HTML template."
            }
        ]
    },
    {
        "id": "24",
        "pregunta" : "What are two use cases for executing Anonymous Apex code?" ,
        "respuestasCorrectas": ["1","2"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "To run a batch Apex class to update all Contacts",
            },
            {
                "id" : "2",
                "titulo" : "To schedule an Apex class to run periodically",
            },
            {
                "id" : "3",
                "titulo" : "To add unit test code coverage to an org"
            },
            {
                "id" : "4",
                "titulo" : "To delete 15,000 Inactive Accounts in a single transaction after a deployment "
            }
        ]
    },
    {
        "id": "25",
        "pregunta" : "A developer created a Lightning web component called statusComponent to be inserted into the Account record page. <br> Which two things should the developer do to make this component available?" ,
        "respuestasCorrectas": ["1","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "<xmp>Add <target>lightning Recordpage</target> to the statusComponent.js-meta.xml file.</xmp>",
            },
            {
                "id" : "2",
                "titulo" : "<xmp>Add <masterLabel>Account</masterLabel> to the statuscomponent.js-meta.xml file. </xmp>",
            },
            {
                "id" : "3",
                "titulo" : "<xmp>Add <isExposed>true</isExposed to the statuscomponent.js-meta.xml file</xmp>"
            },
            {
                "id" : "4",
                "titulo" : "<xmp>Add <target>lightning_RecordPage</target> to the statusComponent.js file.</xmp>"
            }
        ]
    },
    {
        "id": "26",
        "pregunta" : "A developer is implementing an Apex class for a financial system. Within the class, the variables 'creditAmount' and 'debitAmount' should not be able to change once a value is assigned. <br> In which two ways can the developer declare the variables to ensure their value can only be assigned one time?" ,
        "respuestasCorrectas": ["1","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use the final keyword and assign its value in the class constructor.",
            },
            {
                "id" : "2",
                "titulo" : "Use the static keyword and assign its value in the class constructor.",
            },
            {
                "id" : "3",
                "titulo" : "Use the final keyword and assign its value when declaring the variable."
            },
            {
                "id" : "4",
                "titulo" : "Use the static keyword and assign its value in a static initializer"
            }
        ]
    },
    {
        "id": "27",
        "pregunta" : "Einstein Next Best Action is configured at Universal Containers to display recommendations to internal users on the Account detail page. <br> If the recommendation is approved, a new opportunity record and task should be generated. If the recommendation is rejected, an Apex method must be executed to perform a callout to an external system.  <br> Which three factors should a developer keep in mind when implementing the Apex method?" ,
        "respuestasCorrectas": ["1","2","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "The method must be defined as static",
            },
            {
                "id" : "2",
                "titulo" : "The method must use the Future annotation",
            },
            {
                "id" : "3",
                "titulo" : "The method must use the @AuraEnabled annotation."
            },
            {
                "id" : "4",
                "titulo" : "The method must be defined as public."
            },
            {
                "id" : "5",
                "titulo" : "The method must use the InvocableMethod annotation."
            }
        ]
    },
    {
        "id": "28",
        "pregunta" : "A developer wants to send an outbound message when a record meets a specific criteria. <br> Which two features satisfy this use case? " ,
        "respuestasCorrectas": ["2","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Entitlement Process can be used to check the record criteria and send an outbound message without Apex code.",
            },
            {
                "id" : "2",
                "titulo" : "Approval Process can be used to check the record criteria and send an outbound message without Apex code.",
            },
            {
                "id" : "3",
                "titulo" : "Next Best Action can be used to check the record criteria and send an outbound message."
            },
            {
                "id" : "4",
                "titulo" : "Flow Builder can be used to check the record criteria and send an outbound message."
            }
        ]
    },
    {
        "id": "29",
        "pregunta" : "Which three statements are true regarding custom exceptions in Apex?" ,
        "respuestasCorrectas": ["1","2","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "A custom exception class must extend the system Exception class.",
            },
            {
                "id" : "2",
                "titulo" : "A custom exception class can implement one or many interfaces.",
            },
            {
                "id" : "3",
                "titulo" : "A custom exception class cannot contain member variables or methods."
            },
            {
                "id" : "4",
                "titulo" : "A custom exception class name must end with '\"Exception'\"."
            }
            ,
            {
                "id" : "5",
                "titulo" : "A custom exception class can extend other classes besides the exception class. "
            }
        ]
    },
    {
        "id": "30",
        "pregunta" : "Which two statements are true about using the @testSetup annotation in an Apex test class?" ,
        "respuestasCorrectas": ["2","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Records created in the test setup method cannot be updated in individual test methods.",
            },
            {
                "id" : "2",
                "titulo" : "The @testSetup annotation is not supported when the @isTest(See AllData=True) annotation is used.",
            },
            {
                "id" : "3",
                "titulo" : "In a test setup method, test data is inserted once and made available for all test methods in the test class."
            },
            {
                "id" : "4",
                "titulo" : "A method defined with the @testSetup annotation executes once for each test method in the test class and counts towards system limits. "
            }
        ]
    },
    {
        "id": "31",
        "pregunta" : "A custom object Trainer__c has a lookup field to another custom object Gym__c. <br> Which SOQL query will get the record for the Viridian City Gym and all it's trainers?" ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "SELECT ID, (SELECT ID FROM Trainer__c) FROM Gym__c WHERE Name = 'Viridian City Gym'",
            },
            {
                "id" : "2",
                "titulo" : "SELECT ID, (SELECT ID FROM Trainers__r) FROM Gym__c WHERE Name = 'Viridian City Gym'",
            },
            {
                "id" : "3",
                "titulo" : "SELECT ID, (SELECT ID FROM Trainers__c) FROM Gym__c WHERE Name = 'Viridian City Gym'",
            },
            {
                "id" : "4",
                "titulo" : "SELECT ID FROM Trainer__c WHERE Gym__r.Name = 'Viridian City Gym' "
            }
        ]
    },
    {
        "id": "32",
        "pregunta" : " Universal Containers has a support process that allows users to request support from its engineering team using a custom object, Engineering_Support__c. <br>  Users should be able to associate multiple Engineering_Support__c records to a single Opportunity record. Additionally, aggregate information about the Engineering_Support__c records should be shown on the Opportunity record. <br> Which relationship field should be implemented to support these requirements?" ,
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Lookup field from Engineering_Support__c Opportunity",
            },
            {
                "id" : "2",
                "titulo" : "Master-detail field from Opportunity to Engineering_Support__c",
            },
            {
                "id" : "3",
                "titulo" : "Lookup field from Opportunity to Engineering_Support__c",
            },
            {
                "id" : "4",
                "titulo" : "Master-detail field from Engineering_Support__c to Opportunity"
            }
        ]
    },
    {
        "id": "33",
        "pregunta" : "Refer to the following code snippet, that is part of a custom controller for a Visualforce page: <br> public void update Contact (Contact thiscontact) { <br> thiscontact. IS_Active__c = false;<br> try { <br> update thisContact; <br> } catch (Exception e) { String errorMessage = 'As error ocurred while updating the Contact. ' e.getMessage() }; <br> ApexPages.addimessage (new ApexPages.message (ApexPages.severity. FATAL, errorMessage)); } } <br> <br> In which two ways can the try/catch be enclosed to enforce object and field-level permissions and prevent the DML statement from being executed if the current logged-in user does not have the appropriate level of access? " ,
        "respuestasCorrectas": ["1","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use if (Schema.sobjectType.Contact.isAccessible())",
            },
            {
                "id" : "2",
                "titulo" : "Use if (Schema.sobjectType.Contact.isUpdateable())",
            },
            {
                "id" : "3",
                "titulo" : "Use if (Schema.sobjectIype.contact.fields.Is_Active_c.isUpdateable())",
            },
            {
                "id" : "4",
                "titulo" : "Use if(thiscontact. ownerId == UserInfo.getUserId())"
            }
        ]
    },
    {
        "id": "34",
        "pregunta" : "A developer needs to create a baseline set of data (Accounts, Contacts, Products, Assets) for an entire suite of tests allowing them to test independent requirements for various types of Salesforce Cases. <br> Which approach can efficiently generate the required data for each unit test?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Create test data before Test.startTest() in the unit test",
            },
            {
                "id" : "2",
                "titulo" : "Create a mock using the Stub API.",
            },
            {
                "id" : "3",
                "titulo" : "Use @Testsetup with a void method"
            },
            {
                "id" : "4",
                "titulo" : "Add @IsTest (seeAlldata=true) at the start of the unit test class."
            }
        ]
    },
    {
        "id": "35",
        "pregunta" : "A software company uses the following objects and relationships: <br> • Case: to handle customer support issues <br>  • Defect__c: a custom object to represent known issues with the company's software <br> Case_Defect__c: a junction object between Case and Defect__c to represent that a defect is a cause of a customer issue <br> <br> Case and Defect__c have Private organization-wide defaults. <br> What should be done to share a specific Case_Defect__c record with a user?   " ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Share the parent Case record",
            },
            {
                "id" : "2",
                "titulo" : "Share the parent Defect__c record.",
            },
            {
                "id" : "3",
                "titulo" : "Share the parent Case and Defect__c records"
            },
            {
                "id" : "4",
                "titulo" : "Share the Case_Defect__c record"
            }
        ]
    },
    {
        "id": "36",
        "pregunta" : "Refer to the following Apex code: <br> Integer x = 0; <br> do { <br> X = 1; <br> X++; } <br> while (x < 1);<br> System.debug (x); <br> <br> What is the value of x when it is written to the debug log?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "0"
            },
            {
                "id" : "2",
                "titulo" : "1",
            },
            {
                "id" : "3",
                "titulo" : "2"
            },
            {
                "id" : "4",
                "titulo" : "3"
            }
        ]
    },
    {
        "id": "37",
        "pregunta" : "A developer is asked to prevent anyone other than a user with Sales Manager profile from changing the Opportunity Status to Closed Lost if the lost reason is blank. <br>  <br> Which automation allows the developer to satisfy this requirement in the most efficient manner?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "An error condition formula on a validation rule on Opportunity",
            },
            {
                "id" : "2",
                "titulo" : "An approval process on the Opportunity object",
            },
            {
                "id" : "3",
                "titulo" : "A record trigger flow on the Opportunity object"
            },
            {
                "id" : "4",
                "titulo" : "An Apex trigger on the Opportunity object "
            }
        ]
    },
    {
        "id": "38",
        "pregunta" : "One of its business processes requires certain values from the Opportunity object to be sent via an HTTP REST callout to its external order management system based on an ad-hoc basis when the user presses a custom button on the Opportunity detail page. Example values are as follows: <br>  • Name <br>  • Amount <br> • Account  <br > <br>  Which two methods should the developer implement to fulfill the business requirement?" ,
        "respuestasCorrectas": ["2","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Create an after update trigger on the Opportunity object that calls a helper method using @Future (Callout=true) to perform the HTTP REST callout.",
            },
            {
                "id" : "2",
                "titulo" : "Create a Lightning component that performs the HTTP REST callout, and use a Lightning Action to expose the component on the Opportunity detail page.",
            },
            {
                "id" : "3",
                "titulo" : "Create a Visualforce page that performs the HTTP REST callout, and use a Visualforce quick action to expose the component on the Opportunity detail page."
            },
            {
                "id" : "4",
                "titulo" : " Create a Remote Action on the Opportunity object that executes an Apex immediate action to perform the HTTP REST callout whenever the Opportunity is updated. "
            }
        ]
    },
    {
        "id": "39",
        "pregunta" : "AW Computing tracks order information in custom objects called Order__c and Order_Line__c. Currently, all shipping information is stored in the Order__c object. <br> <br> The company wants to expand its order application to support split shipments so that any number of Order_Line__c records on a single Order__c can be shipped to different locations. <br> <br> What should a developer add to fulfill this requirement?" ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Order_Shipment_Group__c object and master-detail field on Order_Line__c ",
            },
            {
                "id" : "2",
                "titulo" : "Order_Shipment_Group__c object and master-detail fields to order_c and Order_Line__c",
            },
            {
                "id" : "3",
                "titulo" : "Order_Shipment_Group__c object and master-detail field on Order_Shipment_Group__c"
            },
            {
                "id" : "4",
                "titulo" : "Order_Shipment_Group__c object and master-detail field on Order__c "
            }
        ]
    },
    {
        "id": "40",
        "pregunta" : "A developer considers the following snippet of code:   <br> <br> Boolean isOK; <br>integer x; <br> String thestring = 'Hello'; <br>  if (isOK == false && thestring == 'Hello'){ <br> x = 1; <br> }else if(isOK == true && thestring == 'Hello'){<br>x = 2;<br> } else if(isOK != null && thestring == 'Hello'){<br> x = 3; <br> } else{<br> x = 4;<br> }" ,
        "respuestasCorrectas": ["4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "2",
            },
            {
                "id" : "2",
                "titulo" : "3",
            },
            {
                "id" : "3",
                "titulo" : "1"
            },
            {
                "id" : "4",
                "titulo" : "4"
            }
        ]
    },
    {
        "id": "41",
        "pregunta" : "A developer has an integer variable called maxAttempts. The developer needs to ensure that once maxAttempts is Initialized, it preserves its value for the length of the Apex transaction; while being able to share the variable's state between trigger executions. <br> <br> How should the developer declare maxAttempts to meet these requirements? " ,
        "respuestasCorrectas": ["3"],
        "tipo": "Multiple/Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Declare maxAttempts as a member variable on the trigger definition.",
            },
            {
                "id" : "2",
                "titulo" : "Declare maxAttempts as a variable on a helper class.",
            },
            {
                "id" : "3",
                "titulo" : "Declare maxAttempts as a constant using the static and final keywords."
            },
            {
                "id" : "4",
                "titulo" : "Declare maxAttempts as a private static variable on a helper class"
            }
        ]
    },
    {
        "id": "42",
        "pregunta" : "Since Aura application events follow the traditional publish-subscribe model, which method is used to fire an event?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "fire ()",
            },
            {
                "id" : "2",
                "titulo" : "registerEvent()",
            },
            {
                "id" : "3",
                "titulo" : "fireEvent ()"
            },
            {
                "id" : "4",
                "titulo" : "emit()"
            }
        ]
    },
    {
        "id": "43",
        "pregunta" : "Universal Containers has a large number of custom applications that were built using a third-party JavaScript framework and exposed using Visualforce pages. The company wants to update these applications to apply styling that resembles the look and feel of Lightning Experience. <br> <br> What should the developer do to fulfill the business request in the quickest and most effective manner?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Incorporate the Salesforce Lightning Design System CSS stylesheet into the JavaScript applications.",
            },
            {
                "id" : "2",
                "titulo" : "Enable Available for Lightning Experience, Lightning Communities, and the mobile app on Visualforce pages used by the custom application.",
            },
            {
                "id" : "3",
                "titulo" : "Set the attribute enableLightning to true in the definition."
            },
            {
                "id" : "4",
                "titulo" : "Rewrite all Visualforce pages as Lightning components."
            }
        ]
    },
    {
        "id": "44",
        "pregunta" : "Which action may cause triggers to fire?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Renaming or replacing a picklist entry ",
            },
            {
                "id" : "2",
                "titulo" : "Changing a user's default division when the transfer division option is checked",
            },
            {
                "id" : "3",
                "titulo" : "Updates to Feed Items"
            },
            {
                "id" : "4",
                "titulo" : "Cascading delete operations "
            }
        ]
    },
    {
        "id": "45",
        "pregunta" : "Which two are best practices when it comes to Aura component and application event handling?" ,
        "respuestasCorrectas": ["1","2"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Reuse the event logic in a component bundle, by putting the logic in the helper.",
            },
            {
                "id" : "2",
                "titulo" : "Handle low-level events in the event handler and re-fire them as higher-level events. ",
            },
            {
                "id" : "3",
                "titulo" : "Use component events to communicate actions that should be handled at the application level."
            },
            {
                "id" : "4",
                "titulo" : "Try to use application events as opposed to component events. "
            }
        ]
    },
    {
        "id": "46",
        "pregunta" : "In the following example, which sharing context will myMethod execute when it is invoked? <br> <br> public class myclass { <br> public void myMethod() { /* implementation */ } }" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Sharing rules will be inherited from the calling context.",
            },
            {
                "id" : "2",
                "titulo" : "Sharing rules will not be enforced for the running user.",
            },
            {
                "id" : "3",
                "titulo" : " Sharing rules will be enforced by the instantiating class."
            },
            {
                "id" : "4",
                "titulo" : "Sharing rules will be enforced for the running user. "
            }
        ]
    },
    {
        "id": "47",
        "pregunta" : "What are two ways for a developer to execute tests in an org? " ,
        "respuestasCorrectas": ["3","2"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Bulk API",
            },
            {
                "id" : "2",
                "titulo" : "Tooling API",
            },
            {
                "id" : "3",
                "titulo" : "Developer Console"
            },
            {
                "id" : "4",
                "titulo" : "Metadata API "
            }
        ]
    },
    {
        "id": "48",
        "pregunta" : "When importing and exporting data into Salesforce, which two statements are true? " ,
        "respuestasCorrectas": ["1","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Developer and Developer Pro sandboxes have different storage limits.",
            },
            {
                "id" : "2",
                "titulo" : "Data import wizard is an application that is installed on your computer.",
            },
            {
                "id" : "3",
                "titulo" : "Bulk API can be used to bypass the storage limits when importing large data volumes in development environments."
            },
            {
                "id" : "4",
                "titulo" : "Bulk API can be used to import large data volumes in development environments without bypassing the storage limits."
            }
        ]
    },
    {
        "id": "49",
        "pregunta" : "An org tracks customer orders on an Order object and the line items of an Order on the Line Item object. The Line Item object has a master-detail relationship to the Order object. <br> <br>  A developer has a requirement to calculate the order amount on an Order and the line amount on each Line Item based on quantity and price.  <br> <br> What is the correct implementation? " ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Write a process on the Line Item that calculates the item amount and order amount and updates the fields on the Line Item and the Order.",
            },
            {
                "id" : "2",
                "titulo" : "Implement the line amount as a numeric formula field and the order amount as a roll-up summary field.",
            },
            {
                "id" : "3",
                "titulo" : "Implement the line amount as a currency field and the order amount as a SUM formula field"
            },
            {
                "id" : "4",
                "titulo" : "Write a single before trigger on the Line Item that calculates the item amount and updates the order amount on the Order. "
            }
        ]
    },
    {
        "id": "50",
        "pregunta" : "An Opportunity needs to have an amount rolled up from a custom object that is not in a master-detail relationship. <br> <br> How can this be achieved?" ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Write a trigger on the Opportunity object and use an aggregate function to sum the amount for all related child objects under the Opportunity.",
            },
            {
                "id" : "2",
                "titulo" : "Write a trigger on the child object and use an aggregate function to sum the amount for all related child objects under the Opportunity.",
            },
            {
                "id" : "3",
                "titulo" : "Use the Streaming API to create real-time roll-up summaries."
            },
            {
                "id" : "4",
                "titulo" : "Use the Metadata API to create real-time roll-up summaries. "
            }
        ]
    },  
    {
        "id": "51",
        "pregunta" : "A developer created a custom order management app that uses an Apex class. The order is represented by an Order object and an OrderItem object that has a master-detail relationship to Order. During order processing, an order may be split into multiple orders. <br> <br> What should a developer do to allow their code to move some existing OrderItem records to a new Order record? " ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Create a junction object between OrderItem and Order.",
            },
            {
                "id" : "2",
                "titulo" : "Change the master-detail relationship to an external lookup relationship.",
            },
            {
                "id" : "3",
                "titulo" : "Select the Allow reparenting option on the master-detail relationship. "
            },
            {
                "id" : "4",
                "titulo" : "Add without sharing to the Apex class declaration. "
            }
        ]
    },  
    {
        "id": "52",
        "pregunta" : "Which scenario is valid for execution by unit tests?" ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Load data from a remote site with a callout.",
            },
            {
                "id" : "2",
                "titulo" : "Set the created date of a record using a system method.",
            },
            {
                "id" : "3",
                "titulo" : "Execute anonymous Apex as a different user."
            },
            {
                "id" : "4",
                "titulo" : "Generate a Visualforce PDF with getContentAsPDF()."
            }
        ]
    },  
    {
        "id": "53",
        "pregunta" : "Given the following Anonymous block: <br> <br> List<Case> casesToUpdate = new List<case>();<br>for (Case thisCase : [SELECT Id, Status FROM Case LIMIT 50000]) { <br>thisCase. Status = 'Working';<br>casestoupdate.add(thiscase); <br>}<br>try{<br>Database.update (casesToUpdate, false); <br>} catch (Exception e) { <br>System.debug(e.getMessage ()); <br>} <br> <br> What should a developer consider for an environment that has over 10,000 Case records?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : " The transaction will fail due to exceeding the governor limit.",
            },
            {
                "id" : "2",
                "titulo" : "The transaction will succeed and changes will be committed. ",
            },
            {
                "id" : "3",
                "titulo" : "The try-catch block will handle any DML exceptions thrown"
            },
            {
                "id" : "4",
                "titulo" : "The try-catch block will handle exceptions thrown by governor limits."
            }
        ]
    },  
    {
        "id": "54",
        "pregunta" : "Cloud Kicks Fitness, an ISV Salesforce partner, is developing a managed package application. One of the application modules allows the user to calculate body fat using the Apex class, BodyFat, and its method, calculateBodyFatt). The product owner wants to ensure this method is accessible by the consumer of the application when developing customizations outside the ISV's package namespace.  <br> br> Which approach should a developer take to ensure calculateBodyFato is accessible outside the package namespace? " ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Declare the class as global and use the public access modifier on the method.",
            },
            {
                "id" : "2",
                "titulo" : "Declare the class as public and use the global access modifier on the method. ",
            },
            {
                "id" : "3",
                "titulo" : "Declare the class and method using the global access modifier."
            },
            {
                "id" : "4",
                "titulo" : "Declare the class and method using the public access modifier."
            }
        ]
    },  
    {
        "id": "55",
        "pregunta" : " When using SalesforceDx, what does a developer need to enable to create and manage scratch orgs? " ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Production ",
            },
            {
                "id" : "2",
                "titulo" : "Dev Hub",
            },
            {
                "id" : "3",
                "titulo" : "Environment Hub"
            },
            {
                "id" : "4",
                "titulo" : "Sandbox"
            }
        ]
    },  
    {
        "id": "56",
        "pregunta" : " What can be developed using the Lightning Component framework? " ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Salesforce integrations",
            },
            {
                "id" : "2",
                "titulo" : "Single-page web apps ",
            },
            {
                "id" : "3",
                "titulo" : "Salesforce Classic and Lightning user interface pages"
            },
            {
                "id" : "4",
                "titulo" : "Hosted web applications "
            }
        ]
    },  
    {
        "id": "57",
        "pregunta" : " A developer has a requirement to write Apex code to update a large number of account records on a nightly basis. The system administrator needs to be able to schedule the class to run after business hours on an as-needed basis. <br> <br> Which class definition should be used to successfully implement this requirement?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "global inherited sharing class ProcessAccount Processor implements Database. Batchable<sobject>",
            },
            {
                "id" : "2",
                "titulo" : "global inherited sharing class ProcessAccount Processor implements Database. Batchable<sobject>, Schedulable ",
            },
            {
                "id" : "3",
                "titulo" : "global inherited sharing class ProcessAccountProcessor implements Schedulable"
            },
            {
                "id" : "4",
                "titulo" : "global inherited sharing class ProcessAccount Processor implements Queueable "
            }
        ]
    },  
    {
        "id": "58",
        "pregunta" : " A developer has identified a method in an Apex class that performs resource intensive actions in memory by iterating over the result set of a SOQL statement on the account. The method also performs a DML statement to save the changes to the database. <br> <br> Which two techniques should the developer implement as a best practice to ensure transaction control and avoid exceeding governor limits? " ,
        "respuestasCorrectas": ["2","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use partial DML statements to ensure only valid data is committed",
            },
            {
                "id" : "2",
                "titulo" : "Use the system.Limit class to monitor the current CPU governor limit consumption. ",
            },
            {
                "id" : "3",
                "titulo" : "Use the @Readonly annotation to bypass the number of rows returned by a SOQL."
            },
            {
                "id" : "4",
                "titulo" : "Use the Database. Savepoint method to enforce database integrity."
            }
        ]
    },  
    {
        "id": "59",
        "pregunta" : "Universal Containers implemented a private sharing model for the Account object. A custom Account search tool was developed with Apex to help sales representatives find accounts that match multiple criteria they specify. Since its release, users of the tool report they can see Accounts they do not own. <br> <br> What should the developer use to enforce sharing permissions for the currently logged in user while using the custom search tool?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use the schema describe calls to determine if the logged-in user has access to the Account object.",
            },
            {
                "id" : "2",
                "titulo" : "Use the UserInfo Apex class to filter all SOQL queries to returned records owned by the logged-in user. ",
            },
            {
                "id" : "3",
                "titulo" : "Use the with sharing keyword on the class declaration"
            },
            {
                "id" : "4",
                "titulo" : "Use the without sharing keyword on the class declaration. "
            }
        ]
    },  
    {
        "id": "60",
        "pregunta" : "Which three statements are accurate about debug logs? " ,
        "respuestasCorrectas": ["1","2","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Debug logs can be set for specific users, classes, and triggers.",
            },
            {
                "id" : "2",
                "titulo" : "Debug log levels are cumulative, where FINE log level includes all events logged at the DEBUG, INFO, WARN, and ERROR levels.",
            },
            {
                "id" : "3",
                "titulo" : "System debug logs are retained for 24 hours. "
            },
            {
                "id" : "4",
                "titulo" : "Only the 20 most recent debug logs for a user are kept. "
            }
            ,
            {
                "id" : "5",
                "titulo" : "The maximum size of a debug log is 5 MB."
            }
        ]
    }
    
];