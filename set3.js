let set3 = [
    {
        "id": "1",
        "pregunta" : "A developer must create a CreditCardPayment class that provides an implementation of an existing Payment class <br> <br> public virtual class Payment { <br>public virtual void makePayment (Decimal amount) { /*implementation*/ }<br> } <br><br> Which is the correct implementation?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "public class CreditCardPayment implements Payment {<br>public override void makePayment (Decimal amount) { /*implementation*/ } <br>}",
            },
            {
                "id" : "2",
                "titulo" : "public class CreditCardPayment extends Payment {<br>public virtual void makePayment Decimal amount) { /* implementation*/ } <br>}",
            },
            {
                "id" : "3",
                "titulo" : "public class CreditCardPayment extends Payment {<br>public override void makePayment (Decimal amount) { /*implementation*/ }<br>}"
            },
            {
                "id" : "4",
                "titulo" : "public class CreditCardPayment implements Payment{ <br>public virtual void makePayment (Decimal amount) { /*implementation*/}<br>}"
            }
        ]
    },
    {
        "id": "2",
        "pregunta" : "Where are two locations a developer can look to find information about the status of batch or future methods? " ,
        "respuestasCorrectas": ["3","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Paused Flow Interviews component ",
            },
            {
                "id" : "2",
                "titulo" : "Developer Console",
            },
            {
                "id" : "3",
                "titulo" : "Apex Flex Queue"
            },
            {
                "id" : "4",
                "titulo" : "Apex Jobs"
            }
        ]
    },
    {
        "id": "3",
        "pregunta" : "A recursive transaction is initiated by a DML statement creating records for these two objects <br> • Accounts  <br> • Contacts  <br> <br> Within the transaction, the Account trigger hits a stack depth of 16. <br> <br> Which statement is true regarding the outcome of the transaction?" ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "The Account records are rolled back and the Contact records are committed",
            },
            {
                "id" : "2",
                "titulo" : "The transaction succeeds and all changes are committed to the database.",
            },
            {
                "id" : "3",
                "titulo" : "The transaction fails and all the changes are rolled back."
            },
            {
                "id" : "4",
                "titulo" : "The transaction fails only if the Contact trigger stack depth is greater or equal to 16. "
            }
        ]
    },
    {
        "id": "4",
        "pregunta" : "Flow Builder uses an Apex Action to provide additional information about multiple Contacts, stored in a custom class, ContactInfo <br> <br>Which is the correct definition of the Apex method that gets the additional information? " ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "@InvocableMethod(label='Additional Info')<br>public static ContactInfo getinfo (Id contactId) <br>{/*implementation */}",
            },
            {
                "id" : "2",
                "titulo" : "@InvocableMethod(label='Additional Info')<br>public static List<xmp><ContactInfo></xmp> getinfo (List<xmp><Id></xmp> contactIds) <br>{/*implementation */}",
            },
            {
                "id" : "3",
                "titulo" : "@InvocableMethod(label='Additional Info')<br>public List<xmp><ContactInfo></xmp> getinfo (List<xmp><Id></xmp> contactIds) <br>{/*implementation */}"
            },
            {
                "id" : "4",
                "titulo" : "@InvocableMethod(label='Additional Info')<br>public ContactInfo getinfo (Id contactId) <br>{/*implementation */}"
            }
        ]
    },
    {
        "id": "5",
        "pregunta" : "A third-party vendor created an unmanaged Lightning web component. The Salesforce Administrator wishes to expose the component only on Record Page Layouts <br> <br> Which two actions should the developer take to accomplish this business objective? " ,
        "respuestasCorrectas": ["2","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Specify lightningCommunity__Page as a target in the XML file.",
            },
            {
                "id" : "2",
                "titulo" : "Ensure isExposed is set to true on the XML file.",
            },
            {
                "id" : "3",
                "titulo" : "Specify lightning__RecordPage as a target in the XML file"
            },
            {
                "id" : "4",
                "titulo" : "Specify lightningCommunity__Page_Layout as a target in the XML file. "
            }
        ]
    },
    {
        "id": "6",
        "pregunta" : "Which code in a Visualforce page and/or controller might present a security vulnerability? " ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "<xmp><apex:outputField value=\"{!ctrl.userInput}\"/> </xmp>",
            },
            {
                "id" : "2",
                "titulo" : "<xmp><apex:outputText escape=\"false\" value=\"{!#CurrentPage.parameters.userInput}\" /></xmp>",
            },
            {
                "id" : "3",
                "titulo" : "<xmp> <apex:outputField escape=\"false\" value={!ctrl.userInput}\" /></xmp>"
            },
            {
                "id" : "4",
                "titulo" : "<xmp><apex:outputText value=\"{!#CurrentPage.parameters.user.Input}\" /> </xmp>"
            }
        ]
    },
    {
        "id": "7",
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
                "titulo" : "Built-in standard and custom set controllers"
            },
            {
                "id" : "4",
                "titulo" : "Log capturing via the Debug Logs Setup page "
            }
        ]
    },
    {
        "id": "8",
        "pregunta" : "Universal Containers (UC) uses a custom object called Vendor. The Vendor custom object has a master-detail relationship with the standard Account object. <br> <br> Based on some internal discussions, the UC administrator tried to change the master-detail relationship to a lookup relationship, but was not able to do so.  <br> <br>What is a possible reason that this change was not permitted? " ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Some of the Vendor records have null for the Account field.",
            },
            {
                "id" : "2",
                "titulo" : "The Account object has a roll-up summary field on the Vendor object.",
            },
            {
                "id" : "3",
                "titulo" : "The Account object does not allow changing a field type for a custom field."
            },
            {
                "id" : "4",
                "titulo" : "The organization wide default for the Vendor object is Public Read/Write. "
            }
        ]
    },
    {
        "id": "9",
        "pregunta" : "A developer needs to prevent the creation of Request__c records when certain conditions exist in the system. A RequestLogic class exists that checks the conditions <br><br> What is the correct implementation? " ,
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "trigger RequestTrigger on Request__c (after insert){<br>if(RequestLogic.isValid(Request__c)) <br>Request.addError('Your request cannot be created at this time.'); <br>} ",
            },
            {
                "id" : "2",
                "titulo" : "trigger RequestTrigger on Request__c (after insert){<br>RequestLogic.validateRecords(trigger.new);<br>} ",
            },
            {
                "id" : "3",
                "titulo" : "trigger RequestTrigger on Request__c (before insert){<br>if(RequestLogic.isValid(Request__c)) <br>Request.addError('Your request cannot be created at this time.'); <br>} "
            },
            {
                "id" : "4",
                "titulo" : "trigger RequestTrigger on Request__c (before insert){<br>RequestLogic.validateRecords(trigger.new);<br>} "
            }
        ]
    },
    {
        "id": "10",
        "pregunta" : "What does the Lightning Component framework provide to developers? " ,
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Support for Classic and Lightning UIs",
            },
            {
                "id" : "2",
                "titulo" : "Templates to create custom components ",
            },
            {
                "id" : "3",
                "titulo" : "Extended governor limits for applications "
            },
            {
                "id" : "4",
                "titulo" : "Prebuilt components that can be reused "
            }
        ]
    },    
    {
        "id": "11",
        "pregunta" : "Which exception type cannot be caught?" ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "A Custom Exception",
            },
            {
                "id" : "2",
                "titulo" : "LimitException",
            },
            {
                "id" : "3",
                "titulo" : "NoAccessException"
            },
            {
                "id" : "4",
                "titulo" : "CalloutException"
            }
        ]
    },
    {
        "id": "12",
        "pregunta" : "When a user edits the Postal Code on an Account, a custom Account text field named Timezone must be updated based on the values in another custom object called PostalCodeToTimezone__c <br> <br> What is the optimal way to implement this feature? " ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Build a flow with Flow Builder.",
            },
            {
                "id" : "2",
                "titulo" : "Create a formula field. ",
            },
            {
                "id" : "3",
                "titulo" : "Create an account approval process."
            },
            {
                "id" : "4",
                "titulo" : "Build an account assignment rule. "
            }
        ]
    },
    {
        "id": "13",
        "pregunta" : "What is an example of a polymorphic lookup field in Salesforce?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "A custom field, Link__c, on the standard Contact object that looks up to an Account or a Campaign ",
            },
            {
                "id" : "2",
                "titulo" : "The LeadId and ContactId fields on the standard Campaign Member object",
            },
            {
                "id" : "3",
                "titulo" : "The WhatId field on the standard Event object"
            },
            {
                "id" : "4",
                "titulo" : "The ParentId field on the standard Account object "
            }
        ]
    },
    {
        "id": "14",
        "pregunta" : "A credit card company needs to implement the functionality for a service agent to process damaged or stolen credit cards. When the customers call in, the service agent must gather many pieces of information. A developer is tasked to implement this functionality. <br> <br> What should the developer use to satisfy this requirement in the most efficient manner? " ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Lightning Component ",
            },
            {
                "id" : "2",
                "titulo" : "Apex Trigger ",
            },
            {
                "id" : "3",
                "titulo" : "Approval Process "
            },
            {
                "id" : "4",
                "titulo" : "Flow Builder "
            }
        ]
    },
    {
        "id": "15",
        "pregunta" : "Which two statements are true about getter and setter methods as they relate to Visualforce? " ,
        "respuestasCorrectas": ["2","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Getter methods must be named get Variable and setter methods must be named set Variable. ",
            },
            {
                "id" : "2",
                "titulo" : "A corresponding setter method is required for each getter method.",
            },
            {
                "id" : "3",
                "titulo" : "Setter methods always have to be declared global."
            },
            {
                "id" : "4",
                "titulo" : "Getter methods pass values from a controller to a page. "
            }
        ]
    },
    {
        "id": "16",
        "pregunta" : "The Salesforce Administrator created a custom picklist field Account_Status__c, on the Account object. This picklist has possible values of  \"Inactive\"  and  \"Active\". As part of a new business process, management wants to ensure an opportunity record is created only for Accounts marked as Active. A developer is asked to implement this business requirement. <br> <br> Which automation tool should be used to fulfill the business need?" ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Entitlement Process ",
            },
            {
                "id" : "2",
                "titulo" : "Salesforce Flow",
            },
            {
                "id" : "3",
                "titulo" : "Outbound Messaging"
            },
            {
                "id" : "4",
                "titulo" : "Approval Process "
            }
        ]
    },
    {
        "id": "17",
        "pregunta" : " What should a developer use to script the deployment and unit test execution as part of continuous integration? " ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Developer Console",
            },
            {
                "id" : "2",
                "titulo" : "Execute Anonymous",
            },
            {
                "id" : "3",
                "titulo" : "Salesforce CLI"
            },
            {
                "id" : "4",
                "titulo" : "VS Code"
            }
        ]
    },
    {
        "id": "18",
        "pregunta" : "An Opportunity needs to have an amount rolled up from a custom object that is not in a master-detail relationship.<br><br> How can this be achieved? <br> <br> " ,
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Write a trigger on the Opportunity object and use an aggregate function to sum the amount for all related child objects under the Opportunity",
            },
            {
                "id" : "2",
                "titulo" : " Use the Metadata API to create real-time roll-up summaries.",
            },
            {
                "id" : "3",
                "titulo" : "Use the Streaming API to create real-time roll-up summaries. "
            },
            {
                "id" : "4",
                "titulo" : "Write a trigger on the child object and use an aggregate function to sum the amount for all related child objects under the Opportunity. "
            }
        ]
    },
    {
        "id": "19",
        "pregunta" : "A lead developer creates an Apex interface called Laptop. Consider the following code snippet: <br> <br> public class SilverLaptop{<br>//code implementation <br>}  <br> <br> How can a developer use the Laptop interface within the Silverlaptop class?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "@Extends(class=\"Laptop\")<br>public class SilverLaptop",
            },
            {
                "id" : "2",
                "titulo" : "@Interface(class=\"Laptop\")<br>public class SilverLaptop",
            },
            {
                "id" : "3",
                "titulo" : "public class SilverLaptop implements Laptop"
            },
            {
                "id" : "4",
                "titulo" : "public class SilverLaptop extends Laptop"
            }
        ]
    },
    {
        "id": "20",
        "pregunta" : "How many Accounts will be inserted by the following block of code?  <br> <br> for (Integer i = 0 ; i < 500 ; i++){<br>Account a = new Account (Name = 'New Account ' + i);<br>insert a ;<br>}" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "0",
            },
            {
                "id" : "2",
                "titulo" : "150",
            },
            {
                "id" : "3",
                "titulo" : "100"
            },
            {
                "id" : "4",
                "titulo" : "500"
            }
        ]
    },
    {
        "id": "21",
        "pregunta" : "The Job_Application__c custom object has a field that is a master-detail relationship to the Contact object, where the Contact object is the master.<br <br> As part of a feature implementation, a developer needs to retrieve a list containing all Contact records where the related Account Industry is \"Technology\", while also retrieving the Contact's Job_Application__c records. <br> <br> Based on the object's relationships, what is the most efficient statement to retrieve the list of Contacts? " ,
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "[SELECT Id , (SELECT Id FROM Job_Application__c) FROM Contact WHERE Account.Industry = 'Technology'];",
            },
            {
                "id" : "2",
                "titulo" : "[SELECT Id , (SELECT Id FROM Job_Applications__c) FROM Contact WHERE Accounts.Industry = 'Technology'];",
            },
            {
                "id" : "3",
                "titulo" : "[SELECT Id , (SELECT Id FROM Job_Applications__r) FROM Contact WHERE Accounts.Industry = 'Technology'];"
            },
            {
                "id" : "4",
                "titulo" : "[SELECT Id , (SELECT Id FROM Job_Applications__r) FROM Contact WHERE Account.Industry = 'Technology'];"
            }
        ]
    },
    {
        "id": "22",
        "pregunta" : "A PrimaryId__c custom field exists on the Candidate__c custom object. The field is used to store each candidate's id number and is marked as Unique in the schema definition <br> <br> As part of a data enrichment process, Universal Containers has a CSV file that contains updated data for all candidates in the system. The file contains each Candidate's primary ld as a data point. Universal Containers wants to upload this information into Salesforce, while ensuring all data rows are correctly mapped to a candidate in the system. <br> <br> Which technique should the developer implement to streamline the data upload? " ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Update the PrimaryId__c field definition to mark it as an External Id.",
            },
            {
                "id" : "2",
                "titulo" : "Upload the CSV into a custom object related to Candidate__c",
            },
            {
                "id" : "3",
                "titulo" : "Create a before insert trigger to correctly map the records"
            },
            {
                "id" : "4",
                "titulo" : "Create a before save fiow to correctly map the records."
            }
        ]
    },
    {
        "id": "23",
        "pregunta" : "What is a benefit of developing applications in a multi-tenant environment? " ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Default out-of-the-box configuration",
            },
            {
                "id" : "2",
                "titulo" : "Unlimited processing power and memory",
            },
            {
                "id" : "3",
                "titulo" : "Enforced best practices for development"
            },
            {
                "id" : "4",
                "titulo" : "Access to predefined computing resources"
            }
        ]
    },
    {
        "id": "24",
        "pregunta" : "What are three capabilities of the <xmp><ltng:require></xmp> tag when loading JavaScript resources in Aura components?" ,
        "respuestasCorrectas": ["3","4","5"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Loading files from Documents",
            },
            {
                "id" : "2",
                "titulo" : "Loading externally hosted scripts ",
            },
            {
                "id" : "3",
                "titulo" : "Specifying loading order"
            },
            {
                "id" : "4",
                "titulo" : "One-time loading for duplicate scripts "
            }
            ,
            {
                "id" : "5",
                "titulo" : "Loading scripts in parallel"
            }
        ]
    },
    {
        "id": "25",
        "pregunta" : "A developer created a new after insert trigger on the Lead object that creates Task records for each Lead. <br> <br> After deploying to production, an existing outside integration that inserts Lead records in batches to Salesforce is occasionally reporting total batch failures being caused by the Task insert statement. This causes the Integration process in the outside system to stop, requiring a manual restart. <br> <br> Which change should the developer make to allow the integration to continue when some records in a batch cause failures due to the Task insert statement, so that manual restarts are not needed?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use the Database method with allOrNone set to false",
            },
            {
                "id" : "2",
                "titulo" : " Remove the Apex class from the integration user's profile.",
            },
            {
                "id" : "3",
                "titulo" : "Use a try-catch block after the insert statement"
            },
            {
                "id" : "4",
                "titulo" : "Deactivate the trigger before the integration runs. "
            }
        ]
    },
    {
        "id": "26",
        "pregunta" : "A business has a proprietary Order Management System (OMS) that creates orders from their website and fulfills the orders. When the order is created in the OMS, an integration also creates an order record in Salesforce and relates it to the contact as identified by the email on the order. As the order goes through different stages in the OMS, the integration also updates it in Salesforce. <br> <br> It is noticed that each update from the OMS creates a new order record in Salesforce. <br> <br> Which two actions will prevent the duplicate order records from being created in Salesforce? " ,
        "respuestasCorrectas": ["3","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use the email on the contact record as an external ID.",
            },
            {
                "id" : "2",
                "titulo" : "Write a before trigger on the order object to delete any duplicates",
            },
            {
                "id" : "3",
                "titulo" : "Ensure that the order number in the OMS is unique."
            },
            {
                "id" : "4",
                "titulo" : "Use the order number from the OMS as an external ID."
            }
        ]
    },
    {
        "id": "27",
        "pregunta" : "How should a developer write unit tests for a private method in an Apex class? " ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use the TestVisible annotation",
            },
            {
                "id" : "2",
                "titulo" : "Add a test method in the Apex class.",
            },
            {
                "id" : "3",
                "titulo" : "Use the SeeAllData annotation."
            },
            {
                "id" : "4",
                "titulo" : "Mark the Apex class as global."
            }
        ]
    },
    {
        "id": "28",
        "pregunta" : "Which annotation exposes an Apex class as a RESTful web service? " ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "@RemoteAction",
            },
            {
                "id" : "2",
                "titulo" : "@HttpInvocable",
            },
            {
                "id" : "3",
                "titulo" : "@RestResource"
            },
            {
                "id" : "4",
                "titulo" : "@AuraEnabled"
            }
        ]
    },
    {
        "id": "29",
        "pregunta" : "Universal Containers has a support process that allows users to request support from its engineering team using a custom object, Engineering_Support__c. <br> <br> Users should be able to associate multiple Engineering_Support__c records to a single Opportunity record. Additionally, aggregate information about the Engineering_Support__c records should be shown on the Opportunity record. <br> <br> What should a developer implement to support these requirements? " ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Lookup field from Engineering_Support__c to Opportunity",
            },
            {
                "id" : "2",
                "titulo" : "Master-detail field from Engineering_Support__c",
            },
            {
                "id" : "3",
                "titulo" : "Lookup field from Opportunity to Engineering_Support__c"
            },
            {
                "id" : "4",
                "titulo" : "Master-detail field from Opportunity to Engineering_Support__c"
            }
        ]
    },
    {
        "id": "30",
        "pregunta" : "Given the following Anonymous block:  <br> <br> List <xmp><Case></xmp> casesToUpdate = new List <xmp><Case></xmp>();<br>for(Case thisCase : [SELECT Id, Statud FOM Case LIMIT 50000]){<br>thisCase.Status = 'Working';<br>casesToUpdate.add(thisCase);<br>}<br>try{<br>Database.update(casesToUpdate,false);<br>}catch(Exception e){<br>System.debug(e.getMessage());<br>} <br> <br> What should a developer consider for an environment that has over 10,000 Case records? " ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "The try-catch block will handle exceptions thrown by governor limits. ",
            },
            {
                "id" : "2",
                "titulo" : "The transaction will fail due to exceeding the governor limit.",
            },
            {
                "id" : "3",
                "titulo" : "The try-catch block will handle any DML exceptions thrown."
            },
            {
                "id" : "4",
                "titulo" : "The transaction will succeed and changes will be committed. "
            }
        ]
    },
    {
        "id": "31",
        "pregunta" : "A developer is creating an app that contains multiple Lightning web components. <br> <br> One of the child components is used for navigation purposes. When a user clicks a button called Next in the child component, the parent component must be alerted so it can navigate to the next page. <br> <br> How should this be accomplished?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Create a custom event.",
            },
            {
                "id" : "2",
                "titulo" : "Call a method in the Apex controller",
            },
            {
                "id" : "3",
                "titulo" : "Update a property on the parent."
            },
            {
                "id" : "4",
                "titulo" : "Fire a notification "
            }
        ]
    },
    {
        "id": "32",
        "pregunta" : "What are two characteristics related to formulas? " ,
        "respuestasCorrectas": ["2","4"],
        "tipo": "Multiple/Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Formulas can reference themselves.",
            },
            {
                "id" : "2",
                "titulo" : "Formulas are calculated at runtime and are not stored in the database.",
            },
            {
                "id" : "3",
                "titulo" : "Fields that are used in a formula field can be deleted or edited without editing the formula. "
            },
            {
                "id" : "4",
                "titulo" : "Formulas can reference values in related objects. "
            }
        ]
    },
    {
        "id": "33",
        "pregunta" : "A developer has an Apex controller for a Visualforce page that takes an ID as a URL parameter. <br> <br> How should the developer prevent a cross site scripting vulnerability? " ,
        "respuestasCorrectas": ["4"],
        "tipo": "Multiple/Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "ApexPages.currentPage().getParameters().get('url_param')",
            },
            {
                "id" : "2",
                "titulo" : "String.ValueOf(ApexPages.currentPage().getParameters().get('url_param'))",
            },
            {
                "id" : "3",
                "titulo" : "ApexPages.currentPage().getParameters().get('url_param').excapeHtml4()",
            },
            {
                "id" : "4",
                "titulo" : "String.escapeSingleQuotes(Apex.currentPage().getParameters().get('url_param'))"
            }
        ]
    },
    {
        "id": "34",
        "pregunta" : " A developer wants to mark each Account in a List<Account> as either Active or Inactive, based on the value in the LastModifiedDate field of each Account being greater than 90 days in the past. <br> <br>  Which Apex technique should the developer use?" ,
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : " A for loop, with a switch statement inside",
            },
            {
                "id" : "2",
                "titulo" : "An if-else statement, with a for loop inside",
            },
            {
                "id" : "3",
                "titulo" : "A switch statement, with a for loop inside"
            },
            {
                "id" : "4",
                "titulo" : "A for loop, with an if-else statement inside "
            }
        ]
    },
    {
        "id": "35",
        "pregunta" : "Universal Hiring is using Salesforce to capture job applications. A salesforce administrator created two custom objects: Job__c acting as the master object, Job_Applitacion__c acting as the detail. <br> <br> Within the Job__c object, a custom multi-select picklist, Preferred_Locations__c , contains a list of approved states for the position. Each Job_Application__c record relates to a Contact within the system through a master-detail relationship <br> <br> Recruiters have requested the ability to view whether the Contact's Mailing State value matches a value selected on the Preferred_Locations__c field, within the Job_Application__c record. Recruiters would like this value to be kept in sync, if changes occur to the Contact's Mailing State or if the Job's Preferred_Locations__c field is updated. <br> <br> What is the recommended tool a developer should use to meet the business requirement? " ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Record-triggered flow",
            },
            {
                "id" : "2",
                "titulo" : "Apex trigger",
            },
            {
                "id" : "3",
                "titulo" : "Process Builder"
            },
            {
                "id" : "4",
                "titulo" : "Formula field "
            }
        ]
    },
    {
        "id": "36",
        "pregunta" : " A developer migrated functionality from JavaScript Remoting to a Lightning web component and wants to use the existing geTOpportunities() method to provide data. <br> <br>  " ,
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "The method must be decorated with (cacheable=true)",
            },
            {
                "id" : "2",
                "titulo" : "The method must return a String of a serialized JSON Array",
            },
            {
                "id" : "3",
                "titulo" : "The method must return a JSON Object"
            },
            {
                "id" : "4",
                "titulo" : "The method must be decorated with @AuraEnabled."
            }
        ]
    },
    {
        "id": "37",
        "pregunta" : "What is the value of the Trigger.old context variable in a before insert trigger?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "null",
            },
            {
                "id" : "2",
                "titulo" : "An empty list of sObjects",
            },
            {
                "id" : "3",
                "titulo" : "A list of newly created sObjects without IDs"
            },
            {
                "id" : "4",
                "titulo" : "Undefined "
            }
        ]
    },
    {
        "id": "38",
        "pregunta" : "Considering the following code snippet:  <br> <br>  public static void insertAccount(List<xmp><Account></xmp> theseAccounts){<br>for(Account thisAccount : theseAccounts){<br>if(thisAccount.website == null){<br>thisAccount.website = 'https://www.deno.com';<br>}<br>}<br>update theseAccounts; <br>} <br<br> When the code executes, a DML exception is thrown. <br> <br> How should the developer modify the code to ensure exceptions are handled gracefully?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Implement a try/catch block for the DML.",
            },
            {
                "id" : "2",
                "titulo" : "Implement the upsert DML statement",
            },
            {
                "id" : "3",
                "titulo" : "Remove null items from the list of Accounts"
            },
            {
                "id" : "4",
                "titulo" : "Implement Change Data Capture. "
            }
        ]
    },
    {
        "id": "39",
        "pregunta" : "What is the result of the following code? <br> <br> Account a = new Account();<br>Database.insert(a,false);" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "The record will not be created and no error will be reported.",
            },
            {
                "id" : "2",
                "titulo" : "The record will not be created and an exception will be thrown.",
            },
            {
                "id" : "3",
                "titulo" : "The record will be created and a message will be in the debug log."
            },
            {
                "id" : "4",
                "titulo" : "The record will be created and no error will be reported "
            }
        ]
    },
    {
        "id": "40",
        "pregunta" : "An Approval Process is defined in the Expense_Item__c object. A business rule dictates that whenever a user changes the Status to 'Submitted on an Expense_Report__c record, all the Expense_Item__c records related to the expense report must enter the approval process individually.<br> <br>A developer is asked to explore if this automation can be implemented without writing any Apex code.  <br><br> Which statement is true regarding this automation request?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "This can only be automated with Apex code",
            },
            {
                "id" : "2",
                "titulo" : " The developer can use a record triggered flow with Actions.",
            },
            {
                "id" : "3",
                "titulo" : "This approval step cannot be automated and must be done manually."
            },
            {
                "id" : "4",
                "titulo" : "The developer can use Einstein Next Best Actions."
            }
        ]
    },
    {
        "id": "41",
        "pregunta" : "The OrderHelper class is a utility class that contains business logic for processing orders. Consider the following code snippet:  <br><br> public class without sharing OrderHelper{<br> // code implementation<br> } <br> <br> A developer needs to create a constant named DELIVERY MULTIPLIER with a value of 4.15. The value of the constant should not change at any time in the code. <br> <br> How should the developer dedare the DELIVERY_MULTIPLIER constant to meet the business objectives?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "static decimal DELIVERY_MULTIPLIER = 4.15;",
            },
            {
                "id" : "2",
                "titulo" : "decimal DELIVERY_MULTIPLIER = 4.15;",
            },
            {
                "id" : "3",
                "titulo" : "static final decimal DELIVERY_MULTIPLIER = 4.15;"
            },
            {
                "id" : "4",
                "titulo" : "constant decimal DELIVERY_MULTIPLIER = 4.15;"
            }
        ]
    },
    {
        "id": "42",
        "pregunta" : "Which code displays the contents of a Visualforce page as a PDF? " ,
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "<xmp><apex:page contentType=\"pdf\"></xmp>",
            },
            {
                "id" : "2",
                "titulo" : "<xmp><apex:page contentType=\"application/pdf\"></xmp>",
            },
            {
                "id" : "3",
                "titulo" : "<xmp><apex:page renderAs=\"application/pdf\"></xmp>",
            },
            {
                "id" : "4",
                "titulo" : "<xmp><apex:page renderAs=\"pdf\"></xmp>"
            }
        ]
    },
    {
        "id": "43",
        "pregunta" : "An org has an existing flow that creates an Opportunity with an Update Records element. A developer must update the flow to also create a Contact and store the created Contact's ID on the Opportunity. <br> <br> Which update must the developer make in the flow?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Add a new Update Records element",
            },
            {
                "id" : "2",
                "titulo" : "Add a new Get Records element.",
            },
            {
                "id" : "3",
                "titulo" : "Add a new Create Records element."
            },
            {
                "id" : "4",
                "titulo" : "Add a new Roll Back Records element. "
            }
        ]
    },
    {
        "id": "44",
        "pregunta" : "Which three data types can a SOQL query return? " ,
        "respuestasCorrectas": ["1","2","5"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "List",
            },
            {
                "id" : "2",
                "titulo" : "Integer",
            },
            {
                "id" : "3",
                "titulo" : "Double"
            },
            {
                "id" : "4",
                "titulo" : "Long"
            }
            ,
            {
                "id" : "5",
                "titulo" : "sObject"
            }
        ]
    },
    {
        "id": "45",
        "pregunta" : "Which statement describes the execution order when triggers are associated to the same object and event?" ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Triggers are executed alphabetically by trigger name.",
            },
            {
                "id" : "2",
                "titulo" : "Trigger execution order cannot be guaranteed.",
            },
            {
                "id" : "3",
                "titulo" : "Triggers are executed in the order they are created."
            },
            {
                "id" : "4",
                "titulo" : " Triggers are executed in the order they are modified. "
            }
        ]
    },
    {
        "id": "46",
        "pregunta" : " Managers at Universal Containers want to ensure that only decommissioned containers are able to be deleted in the system. To meet the business requirement a Salesforce developer adds \"Decommissioned\" as a picklist value for the Status__c custom field within the Container__c object.  <br> <br> Which tool should the developer use to enforce only Container records with a status of \"Decommissioned\" can be deleted?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Apex trigger",
            },
            {
                "id" : "2",
                "titulo" : "After record-triggered flow",
            },
            {
                "id" : "3",
                "titulo" : "Validation rule"
            },
            {
                "id" : "4",
                "titulo" : "Before record-triggered flow"
            }
        ]
    },
    {
        "id": "47",
        "pregunta" : "Universal Containers has created a unique process for tracking container repairs. A custom field, Status__c, has been created within the Container__c custom object. A developer is tasked with sending notifications to multiple external systems every time the value of the Status__c picklist changes. <br> <br> Which two tools should the developer use to meet the business requirement and ensure low maintenance of the solution? " ,
        "respuestasCorrectas": ["1","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Apex trigger",
            },
            {
                "id" : "2",
                "titulo" : "Record-Triggered flow",
            },
            {
                "id" : "3",
                "titulo" : "Apex callouts"
            },
            {
                "id" : "4",
                "titulo" : "Platform event"
            }
        ]
    },
    {
        "id": "48",
        "pregunta" : "Which three code lines are required to create a Lightning component on a Visualforce page? " ,
        "respuestasCorrectas": ["2","3","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "<xmp><apex:slds/></xmp>",
            },
            {
                "id" : "2",
                "titulo" : "@Lightning.createComponent",
            },
            {
                "id" : "3",
                "titulo" : "<xmp><apex:includeLightning/></xmp>"
            },
            {
                "id" : "4",
                "titulo" : "@Lightning.use"
            }
            ,
            {
                "id" : "5",
                "titulo" : "@Lightning.useComponent"
            }
        ]
    },
    {
        "id": "49",
        "pregunta" : "When using SalesforceDX, what does a developer need to enable to create and manage scratch orgs? " ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Dev Hub",
            },
            {
                "id" : "2",
                "titulo" : "Production",
            },
            {
                "id" : "3",
                "titulo" : "Sandbox"
            },
            {
                "id" : "4",
                "titulo" : "Environment Hub "
            }
        ]
    },
    {
        "id": "50",
        "pregunta" : " Universal Containers wants a list button to display a Visualforce page that allows users to edit multiple records  <br> <br> Which Visualforce feature supports this requirement? " ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "controller extension ",
            },
            {
                "id" : "2",
                "titulo" : "recordSetVar page attribute",
            },
            {
                "id" : "3",
                "titulo" : "<xmp><apex:ListButton>tag</xmp>"
            },
            {
                "id" : "4",
                "titulo" : "custom controller"
            }
        ]
    },
    {
        "id": "51",
        "pregunta" : "A developer creates a custom exception as shown below:  <br> <br> public class ParityException extends Exception() <br> <br> What are two ways the developer can fire the exception in Apex? " ,
        "respuestasCorrectas": ["2","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "new ParityException('parity does now match');",
            },
            {
                "id" : "2",
                "titulo" : "throw new ParityException();",
            },
            {
                "id" : "3",
                "titulo" : "throw new ParityException('parity does not match');"
            },
            {
                "id" : "4",
                "titulo" : "new ParityException();"
            }
        ]
    },
    {
        "id": "52",
        "pregunta" : "When importing and exporting data into Salesforce, which two statements are true?" ,
        "respuestasCorrectas": ["2","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Data import wizard is an application that is installed on your computer",
            },
            {
                "id" : "2",
                "titulo" : "Bulk API can be used to import large data volumes in development environments without bypassing the storage limits",
            },
            {
                "id" : "3",
                "titulo" : " Bulk API can be used to bypass the storage limits when importing large data volumes in development environments."
            },
            {
                "id" : "4",
                "titulo" : "Developer and Developer Pro sandboxes have different storage limits "
            }
        ]
    },
    {
        "id": "53",
        "pregunta" : "NO SE VE TODA LA PREGUNTA AQUI VA UNA PARTE <bR <br> public with sharing class Calculator <br>{<br>public void doCalculations() {<br>StatusFetcher sFetcher = new Status Fetcher(); <br>if(sFetcher.isActive()){<br>//do calculations here <br>}<br>}<br>}<br> <br<br> The Status Fercher class successfully compiled and saved. However, the Calculator class has a compile time error. <br> <br> How should the developer fix this code?" ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Change the class declaration for the Calculator class to public with inherited sharing",
            },
            {
                "id" : "2",
                "titulo" : "Make the isActive method in the StatusFetcher class public",
            },
            {
                "id" : "3",
                "titulo" : " Make the doCalculations method in the Calculator class private"
            },
            {
                "id" : "4",
                "titulo" : "Change the class declaration for the StatusFetcher class to public with inheritd sharing"
            }
        ]
    },
    {
        "id": "54",
        "pregunta" : "A developer has a single custom controller class that works with a Visualforce Wizard to support creating and editing multiple sObjects. The wizard accepts data from user inputs across multiple Visualforce pages and from a parameter on the initial URL. <br> <br> Which three statements are useful inside the unit test to effectively test the custom controller? " ,
        "respuestasCorrectas": ["1","2","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "String nextPage = controller.save().getUrl();",
            },
            {
                "id" : "2",
                "titulo" : "ApexPages.currentPage().getParameters().put('input', 'TestValue');",
            },
            {
                "id" : "3",
                "titulo" : "insert pageRef;"
            },
            {
                "id" : "4",
                "titulo" : "Test.setCurrentPage(pageRef);"
            }
            ,
            {
                "id" : "5",
                "titulo" : "public ExtendedController(ApexPages.StandardController cntrl) { } "
            }
        ]
    },
    {
        "id": "55",
        "pregunta" : "While working in a sandbox, an Apex test fails when run in the Test Framework. However, running the Apex test logic in the Execute Anonymous window succeeds with no exceptions or errors. <br> <br>Why did the method fall in the sandbox test framework but succeed in the Developer Console?  </br>" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "The test method has a syntax error in the code.",
            },
            {
                "id" : "2",
                "titulo" : "The test method does not use System.runAs to execute as a specific user.",
            },
            {
                "id" : "3",
                "titulo" : "The test method relies on existing data in the sandbox."
            },
            {
                "id" : "4",
                "titulo" : "The test method is calling an @future method. "
            }
        ]
    },
    {
        "id": "56",
        "pregunta" : "What are two ways for a developer to execute tests in an org? " ,
        "respuestasCorrectas": ["2","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Bulk API ",
            },
            {
                "id" : "2",
                "titulo" : "Developer Console ",
            },
            {
                "id" : "3",
                "titulo" : "Tooling API"
            },
            {
                "id" : "4",
                "titulo" : "Metadata API "
            }
        ]
    },
    {
        "id": "57",
        "pregunta" : " A team of many developers work in their own individual orgs that have the same configuration as the production org <br> <br> Which type of org is best suited for this scenario?" ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Developer Edition",
            },
            {
                "id" : "2",
                "titulo" : "Full Sandbox",
            },
            {
                "id" : "3",
                "titulo" : "Partner Developer Edition"
            },
            {
                "id" : "4",
                "titulo" : "Developer Sandbox "
            }
        ]
    },
    {
        "id": "58",
        "pregunta" : "Which two process automations can be used on their own to send Salesforce Outbound Message? " ,
        "respuestasCorrectas": ["1","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Workflow Rule",
            },
            {
                "id" : "2",
                "titulo" : "Process Builder ",
            },
            {
                "id" : "3",
                "titulo" : "Flow Builder"
            },
            {
                "id" : "4",
                "titulo" : "Strategy Builder"
            }
        ]
    },
    {
        "id": "59",
        "pregunta" : "A developer created a weather app that contains multiple Lightning web components. <br><br> One of the components, called Toggle, has a toggle for Fahrenheit or Celsius units. Another component, called Temperature, displays the current temperature in the unit selected in the Toggle component. <br><br> When a user toggles from Fahrenheit to Celsius or vice versa in the Toggle component, the information must be sent to the Temperature component so the temperature can be converted and displayed. <br><br> What is the recommended way to accomplish this? " ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Create a custom event to handle the communication between components",
            },
            {
                "id" : "2",
                "titulo" : ". Use an application event to communicate between the components.",
            },
            {
                "id" : "3",
                "titulo" : "The Toggle component should call a method in the Temperature component"
            },
            {
                "id" : "4",
                "titulo" : " Use Lightning Message Service to communicate between the components. "
            }
        ]
    },
    {
        "id": "60",
        "pregunta" : "A development team wants to use a deployment script to automatically deploy to a sandbox during their development cycles.  <br> <br>Which two tools can they use to run a script that deploys to a sandbox?" ,
        "respuestasCorrectas": ["1","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Ant Migration Tool",
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
                "titulo" : "Developer Console"
            }
        ]
    },
    {
        "id": "61",
        "pregunta" : "A developer wants to get access to the standard price book in the org while writing a test class that covers an OpportunityLineItem trigger. <br> <br> Which method allows access to the price book? " ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use @IsTest(SeeAllData=true) and delete the existing standard price book.",
            },
            {
                "id" : "2",
                "titulo" : "Use @TestVisible to allow the test method to see the standard price book ID",
            },
            {
                "id" : "3",
                "titulo" : "Use Test.getStandardPricebookId() to get the standard price book ID"
            },
            {
                "id" : "4",
                "titulo" : "Use Test.loadData() and a static resource to load a standard price book"
            }
        ]
    },
    {
        "id": "62",
        "pregunta" : "A large corporation stores Orders and line items in Salesforce for different lines of business. Users are allowed to see Orders across the entire organization, but, for security purposes, should only be able to see the line Items for Orders in their line of business.  <br> <br> Which type of relationship should be used between Line Items and Orders ?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Lookup",
            },
            {
                "id" : "2",
                "titulo" : "Direct Lookup",
            },
            {
                "id" : "3",
                "titulo" : "Master-Detail"
            },
            {
                "id" : "4",
                "titulo" : "Indirect Lookup"
            }
        ]
    },
    {
        "id": "63",
        "pregunta" : " In the following example, which sharing context will yttethod execute when it is invoked? <br> <br> public Class myClass {<br> public void myMethod (){ /* implementation */}<br> }" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : " Sharing rules will be inherited from the calling context",
            },
            {
                "id" : "2",
                "titulo" : "Sharing rules will be enforced by the instantiating class",
            },
            {
                "id" : "3",
                "titulo" : "Sharing rules will not be enforced for the running user"
            },
            {
                "id" : "4",
                "titulo" : "Sharing rules will be enforced for the running user. "
            }
        ]
    },
    {
        "id": "64",
        "pregunta" : "Universal Containers implemented a private sharing model for the Account object. A custom Account search tool was developed with Apex to help sales representatives find accounts that match multiple criteria they specify. Since its release, users of the tool report they can see Accounts they do not own.  <br> <br> What should the developer use to enforce sharing permissions for the currently logged-in user while using the custom search tool?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use the with sharing keyword on the class declaration.",
            },
            {
                "id" : "2",
                "titulo" : "Use the without sharing keyword on the class declaration",
            },
            {
                "id" : "3",
                "titulo" : "Use the Userinfo Apex class to filter all SOQL queries to returned records owned by the logged-in user."
            },
            {
                "id" : "4",
                "titulo" : "Use the schema describe calls to determine if the logged-in user has access to the Account object. "
            }
        ]
    },
    {
        "id": "65",
        "pregunta" : "A developer writes a trigger on the Account object on the before update event that increments a count field. A workflow rule also increments the count field every time that an Account is created or updated. The field update in the workflow rule is configured to not re-evaluate workflow rules. <br> <br> What is the value of the count field if an Account is inserted with an initial value of zero, assuming no other automation logic is implemented on the Account?" ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "1",
            },
            {
                "id" : "2",
                "titulo" : "2",
            },
            {
                "id" : "3",
                "titulo" : "4"
            },
            {
                "id" : "4",
                "titulo" : "3"
            }
        ]
    },
];