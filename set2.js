let set2 = [
    {
        "id": "1",
        "pregunta" : "What are two ways a developer can get the status of an enqueued job for a class that implements the queueable interface?",
        "respuestasCorrectas": ["2","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "View the Apex flex Queue"
            },
            {
                "id" : "2",
                "titulo" : "View the Apex Jobs page"
            },
            {
                "id" : "3",
                "titulo" : "View the Apex Status page"
            },
            {
                "id" : "4",
                "titulo" : "Query the AsyncApexJob object"
            }
        ]
    },
    {
        "id": "2",
        "pregunta" : "A custom picklist field, 'Food_Preference__c', exists on a custom object. The picklist contains the following options: 'Vegan', 'Kosher', 'No Preference'. The developer must ensure a values is populated every time a record is created or updated.<br><br> What is the optimal way to ensure a value is selected every time a record is saved",
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Mark the field as Required on the field definition"
            },
            {
                "id" : "2",
                "titulo" : "Set 'use the first value in the list as the default value' to True"
            },
            {
                "id" : "3",
                "titulo" : "Mark the field as Required on the object's page layout"
            },
            {
                "id" : "4",
                "titulo" : "Write an Apex Trigger to ensure a value is selected"
            }
        ]
    },
    {
        "id": "3",
        "pregunta" : "Refer to the following code snippet for an environment that has more than 200 Accounts beloging to the 'Technology' industry: <br><br>" +
        "for (Account thisAccount : [SELECT id, Industry FROM Account LIMIT 150]){<br>" +
            "if(thisAccount.Industry == 'Technology'){<br>" +
               "thisAcount.Is_Tech__c = true;<br>"+
               "}<br>"+
            "update thisAccount;<br>"+
        "}<br><br>"+
        "When the code executes, what happens as a result of the Apex transaction?",
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "If executed in an asynchronous context, the Apex transaction is likely to fail by exceeding DML governor limit"
            },
            {
                "id" : "2",
                "titulo" : "If executed in a synchronous context, the Apex transaction is likely to fail by exceeding DML governor limit"
            },
            {
                "id" : "3",
                "titulo" : "The Apex transaction succeds regardiess of any uncaught exception and all processed accounts are updated"
            },
            {
                "id" : "4",
                "titulo" : "The apex transaction fails whith the following message: 'Sobject row was retrieved via SOQL without queriying the required field: Account.Is_Tech_c_c'"
            }
        ]
    },
    {
        "id": "4",
        "pregunta" : "A developer needs to have records with specific field values in order to test a new Apex class.<br>"+
        "What should the developer do to ensure the data is available to the test?",
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use Anonymous Apex to create the required data"
            },
            {
                "id" : "2",
                "titulo" : "Use Test.loadData() and reference a CSV file in a static resource"
            },
            {
                "id" : "3",
                "titulo" : "Use Test.loadData() and reference a JSON file in Documents"
            },
            {
                "id" : "4",
                "titulo" : "Use SOQL to quey the org for the required data"
            }
        ]
    },
    {
        "id": "5",
        "pregunta" : "An org has an existing flow that creates an Opportunity with a Update Records element. A developer must update the flow to also create a Contact and store the created Contact's ID on the Opportunity. <br><br>"+
        "Which update must the developer mmake in the flow?",
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Add a new Update Records element"
            },
            {
                "id" : "2",
                "titulo" : "Add a new Get Records element"
            },
            {
                "id" : "3",
                "titulo" : "Add a new Create Records element"
            },
            {
                "id" : "4",
                "titulo" : "Add a new Back Records element"
            }
        ]
    },
    {
        "id": "6",
        "pregunta" : "What is the result of the following code?<br><br>"+
        "Account a = New Account();<br>"+
        "Database.insert(a,false)",
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "The record will not be created and an exception will be thrown"
            },
            {
                "id" : "2",
                "titulo" : "The record will not be created and no error will be reported"
            },
            {
                "id" : "3",
                "titulo" : "The record will be created and no error will be reported"
            },
            {
                "id" : "4",
                "titulo" : "The record will be created and a message will be in the debug log"
            }
        ]
    },
    {
        "id": "7",
        "pregunta" : "Refer to the following Apex code:<br><br>"+
            "Integer x = 0;<br>"+
            "do{ <br>"+
                "x = 1;<br>"+
                "x++;<br>"+
            "}while(x < 1)<br>"+
            "System.debug(x);<br><br>"+
            "what is the value of x when it is written to the debug log",
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "0"
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
                "titulo" : "3"
            }
        ]
    },
    {
        "id": "8",
        "pregunta" : "What should a developer do to check the code coverage of a class after running all tests?",
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "View the code coverage percentage for the class using the Overall Code Coverage panel in the Developer Console Tests tab"
            },
            {
                "id" : "2",
                "titulo" : "View the Code coverage column in the list view on the apex Classes page"
            },
            {
                "id" : "3",
                "titulo" : "Select and run the class on the Apex Tests Execution page in the Developer Console"
            },
            {
                "id" : "4",
                "titulo" : "View the Class Test Percentage tab on the Apex Class list view in Salesforce Setup"
            }
        ]
    },
    {
        "id": "9",
        "pregunta" : "Universal Containers recently transitioned from Classic to Lightning Experience. <br><br>"+
        "One of its business processes requires certain values from the Opportunity object to be sent via an HTTP Rest callout to its external order management system based on an ad-hoc basis when the user presses a custom button on the Opportunity detail page. Example values are as follows <br> *Name <br> *Ammount <br> *Account<br><br>"+
        "Wich two methods should the developer implement to fufill the business requeriment?",
        "respuestasCorrectas": ["1","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Create a Lightning component that performs the HTTP Rest callout, and use a Lightning Action to expose the component on the Opportunity detail page"
            },
            {
                "id" : "2",
                "titulo" : "Create a Remote Action on the Opportunity object that executes an Apex immediate action to perform the HTTP Rest callout whenever the Opportunity is updated"
            },
            {
                "id" : "3",
                "titulo" : "Create a Visualforce page that performs the HTTPS REST callout, and use a Visualforce quick actions to expose the component on the Opportunity detail page"
            },
            {
                "id" : "4",
                "titulo" : "Create an after updated trigger on the Opportunity object that calls a helper method using Future(Callout=true) to perform the HTTP REST callout"
            }
        ]
    },
    {
        "id": "10",
        "pregunta" : "A developer is creating a page that allows users to create multiple Opportunities. The developer is asked to verify the current user's default Opportunity record type, and set certain default values based on the record type before inserting the record.<br><br>"+
        "How can the developer find the current user's default record type?",
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use Opprtunity.SObjectType.getDescribe().getRecordTypeInfos() to get a list of redord types, and iterate through them until isDefaultRecordTypeMapping() is true"
            },
            {
                "id" : "2",
                "titulo" : "Create the opportunity and check the opportunity.recordType, which will have the record ID of the current user's default record type, before inserting"
            },
            {
                "id" : "3",
                "titulo" : "Query the Profile where the ID equals userinfo.getProfileId() and then use the profile.Opportunity.getDefaultRecordtype() method"
            },
            {
                "id" : "4",
                "titulo" : "Use the Schema.userInfo.Opportunity.getDefaultRecordType() method"
            }
        ]
    },
    {
        "id": "11",
        "pregunta" : "A developer wants to mark each Account in a List<xpm><Account></xmp> as either Active or Inactive, based on the value in the LastModifiedDate field of each Account being greater than 90 days in the past.<br>"+
        "Which Apex technique shoudld the developer use?",
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "A for loop, with an if-else statement inside"
            },
            {
                "id" : "2",
                "titulo" : "A switch statement, with a for lopp inside"
            },
            {
                "id" : "3",
                "titulo" : "A if-else statement, with a for lopp inside"
            },
            {
                "id" : "4",
                "titulo" : "A for loop, with a switch statement inside"
            }
        ]
    },
    {
        "id": "12",
        "pregunta" : "Wich three statements are true regarding custom exceptions in Apex",
        "respuestasCorrectas": ["3","4","5"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "A custom exception class cannot contain member variables or methods"
            },
            {
                "id" : "2",
                "titulo" : "A custom exception class can extend other classes besides the Exception class"
            },
            {
                "id" : "3",
                "titulo" : "A custom exception class name must end whit 'Exception'"
            },
            {
                "id" : "4",
                "titulo" : "A custom exception class can implement one or many interfaces"
            },
            {
                "id" : "5",
                "titulo" : "A custom exception class must extend the system Exception class"
            }
        ]
    },
    {
        "id": "13",
        "pregunta" : "Which three Salesforce resources can be accessed from a Lightning web component",
        "respuestasCorrectas": ["1","4", "5"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Content asset file"
            },
            {
                "id" : "2",
                "titulo" : "All external libraries"
            },
            {
                "id" : "3",
                "titulo" : "Third-party web components"
            },
            {
                "id" : "4",
                "titulo" : "SVG resources"
            },
            {
                "id" : "5",
                "titulo" : "Static resources"
            }
        ]
    },
    {
        "id": "14",
        "pregunta" : "A developer must troubleshoot to pinpoint the causes of performance issues when a custom page loads in their org.<br>"+
        "Which tool should the developer use to troubleshoot?",
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "AppExchange"
            },
            {
                "id" : "2",
                "titulo" : "Developer Console"
            },
            {
                "id" : "3",
                "titulo" : "Setup Menu"
            },
            {
                "id" : "4",
                "titulo" : "Visual Studio Code IDE"
            }
        ]
    },
    {
        "id": "15",
        "pregunta" : "Cloud Kicks has a multi-screen flow that its call center agents use when handling inbound service desk calls.<br>"+
        "At one of steps in the flow, the agents should be presented with a list of order numbers and dates that are retrieved from an external order management system in real time and displayed on the screen.<br>"+
        "What should a develper use to satisfy this requirement?",
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "An invocable method"
            },
            {
                "id" : "2",
                "titulo" : "An Apex Rest class"
            },
            {
                "id" : "3",
                "titulo" : "An outbound message"
            },
            {
                "id" : "4",
                "titulo" : "An Apex controller"
            }
        ]
    },
    {
        "id": "16",
        "pregunta" : "Which three resources in an Aura component can contain JavaScript functions?",
        "respuestasCorrectas": ["1","2","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Renderer"
            },
            {
                "id" : "2",
                "titulo" : "Controller"
            },
            {
                "id" : "3",
                "titulo" : "Helper"
            },
            {
                "id" : "4",
                "titulo" : "Desing"
            }
            ,
            {
                "id" : "5",
                "titulo" : "Style"
            }
        ]
    },
    {
        "id": "17",
        "pregunta" : "A developer is asked to prevent anyone other than a user with Sales Manager profile from changing the Opporunity Status to Closed Lost if the lost reason is blank.<br><br>"+
        "Which automation allows the developer to satisfy the requirement in the most efficient manner?",
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "A record trigger flow on the Opportunity object"
            },
            {
                "id" : "2",
                "titulo" : "An approval process on the Opporunity object"
            },
            {
                "id" : "3",
                "titulo" : "An apex trigger on the Opportunity object"
            },
            {
                "id" : "4",
                "titulo" : "An error condition formula on a validation rule on Opportunity"
            }
        ]
    },
    {
        "id": "18",
        "pregunta" : "A developer must create a DrawList class that provides capabilities defined in the Sortable and Drawable interfaces<br>"+
        "public interface Sortable {<br>"+
            "void sort();<br>"+
        "}<br>"+
        "public interface Drawable {<br>"+
            "void draw();<br>"+
        "}<br>"+
        "Which is the correct implementation",
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "public class DrawList implements Sortable, Drawable{<br>"+
                    "public void sort(){/*implementation*/}<br>"+
                    "public void draw(){/*implementation*/}<br>"+
                "}"
            },
            {
                "id" : "2",
                "titulo" : "public class DrawList extends Sortable, Drawable{<br>"+
                    "public void sort(){/*implementation*/}<br>"+
                    "public void draw(){/*implementation*/}<br>"+
                "}"
            },
            {
                "id" : "3",
                "titulo" : "public class DrawList extends Sortable, extends Drawable{<br>"+
                    "public void sort(){/*implementation*/}<br>"+
                    "public void draw(){/*implementation*/}<br>"+
                "}"
            },
            {
                "id" : "4",
                "titulo" : "public class DrawList implements Sortable, implements Drawable{<br>"+
                    "public void sort(){/*implementation*/}<br>"+
                    "public void draw(){/*implementation*/}<br>"+
                "}"
            }
        ]
    },
    {
        "id": "19",
        "pregunta" : "A developer needs to implement a custom SOAP Web Service that is used by an external Web Application. The developer chooses to include helper methods that are not used by the Web Application in the implementation of the Web Service Class<br><br>"+
        "Which code segment shows the correct declaration of the Web Service Class?",
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "global class WebServiceClass{<br>"+
                "private Boolean helperMethod(){/* implementation*/]}<br>"+
                "webservice static String updateRecods(){/*implementation*/}<br>"+
                "}"
            },
            {
                "id" : "2",
                "titulo" : "webservice class WebServiceClass{<br>"+
                "private Boolean helperMethod(){/* implementation*/]}<br>"+
                "webservice static String updateRecods(){/*implementation*/}<br>"+
                "}"
            },
            {
                "id" : "3",
                "titulo" : "global class WebServiceClass{<br>"+
                "private Boolean helperMethod(){/* implementation*/]}<br>"+
                "global  String updateRecods(){/*implementation*/}<br>"+
                "}"
            },
            {
                "id" : "4",
                "titulo" : "webservice class WebServiceClass{<br>"+
                "private Boolean helperMethod(){/* implementation*/]}<br>"+
                "global static String updateRecods(){/*implementation*/}<br>"+
                "}"
            }
        ]
    },
    {
        "id": "20",
        "pregunta" : "Universal Containers has implemented an orden managment application.Each Order can have one or more Order Line items. The Order Line object is related to the Order via a master-detail relationship. For each Order Line item, the total price is calculated by multipliying the Order Line item price with the quantity ordered.<br><br>"+
        "What is the best practice to get the sum of all Order Line item totals on the Order record",
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Roll-up summary field"
            },
            {
                "id" : "2",
                "titulo" : "Apex trigger"
            },
            {
                "id" : "3",
                "titulo" : "Formula field"
            },
            {
                "id" : "4",
                "titulo" : "Quick action"
            }
        ]
    },
    {
        "id": "21",
        "pregunta" : "A team of developers is working on a source-driven project that allows them to work independently, with many different org configurations.<br>"+
        "Which type of Salesforce orgs should they use for their development?",
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Developer sandboxes"
            },
            {
                "id" : "2",
                "titulo" : "Developer orgs"
            },
            {
                "id" : "3",
                "titulo" : "Full copy sandboxs"
            },
            {
                "id" : "4",
                "titulo" : "Scratch orgs"
            }
        ]
    },
    {
        "id": "22",
        "pregunta" : "Universal Containers has a Visualforce page that displays a table of every Container__c being rented by a given Account. Recently this page is a failing with a view limit because some of the customers rent over 10.000 containers",
        "respuestasCorrectas": ['1'],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Implement pagination with a StandardSetController"
            },
            {
                "id" : "2",
                "titulo" : "Implement pagination with an OffsetController"
            },
            {
                "id" : "3",
                "titulo" : "Use JavaScript remoting with SOQL Offset"
            },
            {
                "id" : "4",
                "titulo" : "Use lazy loading and traslend list variable"
            }
        ]
    },
    {
        "id": "23",
        "pregunta" : "Universal Containers hires a developer to build a custom search page to help users find the Accounts they want. Users will be able to search on Name, Description, and custom comments field.<br><br>"+
        "Which considerations should the developer be aware of when deciding between SOQL and SOSL",
        "respuestasCorrectas": ["3","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "SOSL is able to return more records"
            },
            {
                "id" : "2",
                "titulo" : "SOQL is faster for text searches"
            },
            {
                "id" : "3",
                "titulo" : "SOQL is able to return more records"
            },
            {
                "id" : "4",
                "titulo" : "SOSL is a faster for text searches"
            }
        ]
    },
    {
        "id": "24",
        "pregunta" : "How should a developer write unit test for private method in an Apex class?",
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Mark the Apex class as global"
            },
            {
                "id" : "2",
                "titulo" : "Use the SeeAllData annotation"
            },
            {
                "id" : "3",
                "titulo" : "Use the TestVisible annotation"
            },
            {
                "id" : "4",
                "titulo" : "Add a test method in the Apex class"
            }
        ]
    },
    {
        "id": "25",
        "pregunta" : "Which statement describes the execution order when triggers are associated to the same object and event?",
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Triggers are executed in the order they are modified"
            },
            {
                "id" : "2",
                "titulo" : "Triggers are executed alphabetically by trigger name"
            },
            {
                "id" : "3",
                "titulo" : "Trigger execution order cannot be guaranteed"
            },
            {
                "id" : "4",
                "titulo" : "Triggers are executed in the order they are created"
            }
        ]
    },
    {
        "id": "26",
        "pregunta" : "A developer must implement a CheckPaymentProcessor class that provides check processing payment capabilities that adhere to what is defined for payments in the PaymentProcessor interface.<br><br>"+
        "public interface PaymentProcessor{<br>"+
        " void pay(Decimal amount();<br>"+
        "}<br><br>"+
        "Which implementation is correct to use the PaymentProcessor interface class?",
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "public class CheckPaymentProcessor extends PaymentProcessor{<br>"+
                " public void pay(Decimal ammount)<br>"+
                "}"

            },
            {
                "id" : "2",
                "titulo" : "public class CheckPaymentProcessor implements PaymentProcessor{<br>"+
                " public void pay(Decimal ammount){ /* code....*/}<br>"+
                "}"
            },
            {
                "id" : "3",
                "titulo" : "public class CheckPaymentProcessor extends PaymentProcessor{<br>"+
                " public void pay(Decimal ammount){ /* code....*/}<br>"+
                "}"
            },
            {
                "id" : "4",
                "titulo" : "public class CheckPaymentProcessor implements PaymentProcessor{<br>"+
                " public void pay Decimal ammount;<br>"+
                "}"
            }
        ]
    },
    {
        "id": "27",
        "pregunta" : "A business has a priority Order Management System (OMS) that creates orders from their website and fulfills the ordes. When the order is created in the OMS, an integration also creates an order record in Salesforce and relates it to the contact as identified by the email on the order. As the order goes through different stages in the OMS, the integration also updates it in salesforce.<br><br>"+
        "It is noticed that each update from the OMS creates a new order record in Salesforce<br>"+
        "Which two actions will prevent the duplicate order records from being created in Salesforce?",
        "respuestasCorrectas": ["2","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use the email on the contact record as an external ID"
            },
            {
                "id" : "2",
                "titulo" : "Write a before trigger on the order object to delete any duplicates"
            },
            {
                "id" : "3",
                "titulo" : "Use the order number from the OMS as an external ID"
            },
            {
                "id" : "4",
                "titulo" : "Ensure that the order number in the OMS is unique"
            }
        ]
    },
    {
        "id": "28",
        "pregunta" : "A developer wants to get access to the standard price book in the org while writing a test class that covers an OpportunityLineItem trigger<br><br>"+
        "Which method allows access to the price book?",
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use Test.getStandardPricebookId() to get standard price book ID."
            },
            {
                "id" : "2",
                "titulo" : "Use Test.loadData() and a static resource to load a standard price book"
            },
            {
                "id" : "3",
                "titulo" : "Use  @TestVisible to allow the test method to see the standard price book"
            },
            {
                "id" : "4",
                "titulo" : "use @IsTest(SeeAlData=true) and delete the existing standard price book"
            }
        ]
    },
    {
        "id": "29",
        "pregunta" : "A developer has a Visualforce page and custom controller to save Account records. The developer wants to display any validation rule violations to the use.<br><br>"+
        "How can the developer make sure that validation rule violations are displayed?",
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use a try/catch with a custom exception class"
            },
            {
                "id" : "2",
                "titulo" : "Perform the DML using the Database.upsert() method"
            },
            {
                "id" : "3",
                "titulo" : "Add custom controller attributes to display the message"
            },
            {
                "id" : "4",
                "titulo" : "include <xmp><apex:message></xmp> on the Visualforce page"
            }
        ]
    },
    {
        "id": "30",
        "pregunta" : "A developer is migrating a Visualforce page into a Lightning web component.<br><br>"+
        "The Visualforce page shows information about a single record, The developer decides to use Lightning Data Service to access record data.<br><br>"+
        "Which security consideration should the developer be aware of?",
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Lightning Data Service handles sharing rules and field-level security"
            },
            {
                "id" : "2",
                "titulo" : "The isAccesible() method must be used for field-level access check"
            },
            {
                "id" : "3",
                "titulo" :  "The with sharing keyword must be used to enforce sharing rules"
            },
            {
                "id" : "4",
                "titulo" : "Lightning Data Service ignores field-level security"
            }
        ]
    },
    {
        "id": "31",
        "pregunta" : "Since Aura application events follow the traditional publish-subscribe model, which method is used to fire an event?",
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "registerEvent()"
            },
            {
                "id" : "2",
                "titulo" : "fireEvent()"
            },
            {
                "id" : "3",
                "titulo" : "emit()"
            },
            {
                "id" : "4",
                "titulo" : "fire()"
            }
        ]
    },
    {
        "id": "32",
        "pregunta" : "A developer is debugging the following code to determine why Accounts are not being created<br><br>"+
        "List<Account> accts = getAccounts(); //getAcounnts implemented elsewhere<br>"+
        "Database.insert(accts,false)<br><br>"+
        "Which should the code be altered to help debug the issue?",
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Change the DML statement to insert accts"
            },
            {
                "id" : "2",
                "titulo" : "Collect the insert method return value in a SaveResult variable"
            },
            {
                "id" : "3",
                "titulo" : "Set the second insert method parameter to true"
            },
            {
                "id" : "4",
                "titulo" : "Add a try-catch around the insert method"
            }
        ]
    },
    {
        "id": "33",
        "pregunta" : "A developer must create a Lightning component that allows users to input Contact record information to create a Contact record, incluidind a Salary__c custom field<br>"+
        "What should the developer use, along with a lightning-record-edit-form, so that Salary__c field functions as a currency input and is only viewable and editable by users that have the correct field level permissions on Salary__c?",
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "<xmp><lightning-input type='number' value='Salary__c' formatter='currency'></lightning-input></xmp>"
            },
            {
                "id" : "2",
                "titulo" : "<xmp><lightning-input-currency value='Salary__c'></lightning-input-currency></xmp>"
            },
            {
                "id" : "3",
                "titulo" : "<xmp><lightning-formatted-number value='Salary__c' format-style='currency'></lightning-formatted-number></xmp>"
            },
            {
                "id" : "4",
                "titulo" : "<xmp><lightning-input-field field-name='Salary__c'></lightning-input-field></xmp>"
            }
        ]
    },
    {
        "id": "34",
        "pregunta" : "Universal Containers uses Master-Detail relationship and stores the availability date on each Line Item of an Order and Orders are only shipped when all of the Line Items are available.<br>"+
        "Which method should be used to calculate the estimated ship date for an Order?",
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use a MAX Roll-up Summary field on the latest availability date fields"
            },
            {
                "id" : "2",
                "titulo" : "Use a CELLING formula on each of the latest availability date fields"
            },
            {
                "id" : "3",
                "titulo" : "Use a DAYS formula on each of the availability date fields and a COUNT Roll-Up Summary field on the Order"
            },
            {
                "id" : "4",
                "titulo" : "Use a LATEST formula on each of the latest availbality date fields"
            }
        ]
    },
    {
        "id": "35",
        "pregunta" : "A developer created a child Lightning web component nested inside a parent Lightning web component. The Parent component needs to pass a string value to the child component<br>"+
        "In which two ways can this be accomplished?",
        "respuestasCorrectas": ["3","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "The parent component can use the Apex controller class to send data to the child component"
            },
            {
                "id" : "2",
                "titulo" : "The parent component can invoke a method in the child component"
            },
            {
                "id" : "3",
                "titulo" : "The parent component can use a custom event to pass the data to the child component"
            },
            {
                "id" : "4",
                "titulo" : "The parent component can use a public property to pass the data to the child component"
            }
        ]
    },
    {
        "id": "36",
        "pregunta" : "A developer has a single custom controller class that works with a Visualforce Wizard to support creating and editing multiple sObjects. The wizard accepts data from user inputs across multiple Visualforce pages and from paramater on the initial URL<br>"+
        "Which three statements are useful inside the unit test to effectivelly test the custom controller?",
        "respuestasCorrectas": ["2","3","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "public ExtendedController(ApexPages.StandardController cntrl){}"
            },
            {
                "id" : "2",
                "titulo" : "Test.setCurrentPage(pageRef);"
            },
            {
                "id" : "3",
                "titulo" : "String nextPage = controller.save().getUrl();"
            },
            {
                "id" : "4",
                "titulo" : "ApexPages.currentPage().getParameters().put('input', 'TestValue');"
            },
            {
                "id" : "5",
                "titulo" : "insert pageRef;"
            }
        ]
    },
    {
        "id": "37",
        "pregunta" : "A developer created these three Rollup Summary fields in the custom object Project__c:<br>  *Total_Timesheets__c<br> *Total_Approved_Timesheets__c<br> *Total_Rejected_Timesheet__c)<br><br>"+
        "The developer is asked to create a new field that shows the ratio between rejected and approved timesheets for a given project.<br>"+
        "Which should the developer use to implement the business requirement in order to minimize maintenance overhead?",
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Record-triggered flow"
            },
            {
                "id" : "2",
                "titulo" : "Apex trigger"
            },
            {
                "id" : "3",
                "titulo" : "Field update actions"
            },
            {
                "id" : "4",
                "titulo" : "Formula field"
            }
        ]
    },
    {
        "id": "38",
        "pregunta" : "Given the following Anonymous block:<br><br>"+
        "List<Case> casesToUpdate = new List<Case>();<br>"+
        "for(Case thisCase:[SELECT Id, Status FROM LIMIT 50000]){<br>"+
        "  thisCase.Status = 'Working';<br>"+
        '  caseToUpdate.add(thisCase);<br>'+
        ' }<br>'+
        'try{<br>'+
        ' Database.update(casesToUpdate,false);<br>'+
        '}catch(Exception e){<br>'+
        ' System.debug(e.getMessage());'+
        '}<br><br>'+
        'What should a developer considerer for an enviroment that has over 10.000 Case records?',
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "The try-catch block will handle any DML exceptions thrown"
            },
            {
                "id" : "2",
                "titulo" : "The transaction will succeed and changes will be committed"
            },
            {
                "id" : "3",
                "titulo" : "The transaction will fail due to exceeding the governor limit"
            },
            {
                "id" : "4",
                "titulo" : "the try-catch block will handle exceptions thrown by governor limits"
            }
        ]
    },
    {
        "id": "39",
        "pregunta" : "Universal Containers has a large number of custom applications that were built using a third-party JavaScript framework and exposed using Visualforce pages. The company wants to update these applications to apply styling that resembles the look and feel of Lightning Experience.<br>"+
        "What should the developer do to fufill the business request in the quickest and most effective manner?",
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Set the attribute enableLightning to true in the definition"
            },
            {
                "id" : "2",
                "titulo" : "Rewrite all Visualforce pages as Lightning components"
            },
            {
                "id" : "3",
                "titulo" : "Enable Available for Lightning Experience, Lightning Communities, and the mobile app on Visualforce pages used by the custom application"
            },
            {
                "id" : "4",
                "titulo" : "Incorporate the Salesforce Lightning Design System CSS stylesheet into the JavaScript applications"
            }
        ]
    },
    {
        "id": "40",
        "pregunta" : "A Lightning component has a wired property, searchResults, that stores a list of Opportunities. <br><br> Which definition of the Apex method, to which the searchResults property is wired, should be used?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "@AuraEnabled(cacheable=true)<br>public static List<Opportunity> search(String term) {/*implementation*/}",
            },
            {
                "id" : "2",
                "titulo" : "@AuraEnabled(cacheable=true)<br>public List<Opportunity> search(String term) {/*implementation*/}",
            },
            {
                "id" : "3",
                "titulo" : "@AuraEnabled(cacheable=false)<br>public List<Opportunity> search(String term) {/*implementation*/}"
            },
            {
                "id" : "4",
                "titulo" : "@AuraEnabled(cacheable=false)<br>public static List<Opportunity> search(String term) {/*implementation*/}"
            }
        ]
    },
    {
        "id": "41",
        "pregunta" : "Which two events need to happen when deploying to a production org?" ,
        "respuestasCorrectas": ["1","2"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "All triggers must have some test coverage.",
            },
            {
                "id" : "2",
                "titulo" : "All Apex code must have at least 75% test coverage.",
            },
            {
                "id" : "3",
                "titulo" : "All Visual flows must have at least 1% test coverage."
            },
            {
                "id" : "4",
                "titulo" : "All Workflow rules must have at least 1% test coverage."
            }
        ]
    },
    {
        "id": "42",
        "pregunta" : "How can a developer check the test coverage of autolaunched Flows before deploying them in a change set?" ,
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use the Code Coverage Setup page.",
            },
            {
                "id" : "2",
                "titulo" : "Use the ApexTestResult class.",
            },
            {
                "id" : "3",
                "titulo" : "Use the Flow Properties page."
            },
            {
                "id" : "4",
                "titulo" : "use SOQL the Tooling API."
            }
        ]
    },
    {
        "id": "43",
        "pregunta" : "What are three considerations when using the @InvocableMethod annotation in Apex?" ,
        "respuestasCorrectas": ["3","4","5"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "A method using the @InvocableMethod annotation can have multiple input parameters.",
            },
            {
                "id" : "2",
                "titulo" : "A method using the @InvocableMethod annotation must define a return value.",
            },
            {
                "id" : "3",
                "titulo" : "Only one method using the @InvocableMethod annotation can be defined per Apex class."
            },
            {
                "id" : "4",
                "titulo" : "A method using the @InvocableMethod annotation can be declared as Public or Global."
            }
            ,
            {
                "id" : "5",
                "titulo" : "A method using the @InvocableMethod annotation must be declared as static."
            }
        ]
    },
    {
        "id": "44",
        "pregunta" : "A developer created a custom order management app that uses an Apex class. The order is represented by an Order object and an OrderItem object that has a master-detail relationship to Order. During order processing, an order may be split into multiple orders. <br> <br> What should a developer do to allow their code to move some existing OrderItem records to a new Order record?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Add without sharing to the Apex class declaration.",
            },
            {
                "id" : "2",
                "titulo" : "Select the Allow reparenting option on the master-detail relationship.",
            },
            {
                "id" : "3",
                "titulo" : "Create a junction object between OrderItem and Order."
            },
            {
                "id" : "4",
                "titulo" : "Change the master-detail relationship to an external lookup relationship."
            }
        ]
    },
    {
        "id": "45",
        "pregunta" : "A developer migrated functionality from JavaScript Remoting to a Lightning web component and wants to use the existing getOpportunities() method to provide data. <br> <br> Which modification to the method is necessary?" ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "The method must be decorated with (cacheable=true).",
            },
            {
                "id" : "2",
                "titulo" : "The method must be decorated with @AuraEnabled.",
            },
            {
                "id" : "3",
                "titulo" : "The method must return a String of a serialized JSON Array."
            },
            {
                "id" : "4",
                "titulo" : "The method must return a JSON Object."
            }
        ]
    },
    {
        "id": "46",
        "pregunta" : "A developer created a Lightning web component called statusComponent to be inserted into the Account record page. <br> <br> Which two things should the developer do to make this component available?" ,
        "respuestasCorrectas": ["1","2"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Add <xmp><isExposed>true</isExposed> to the statusComponent.js-meta.xml file.</xmp>",
            },
            {
                "id" : "2",
                "titulo" : "Add <xmp><target>lightning_RecordPage</target></xmp> to the statusComponent.js-meta.xml file.",
            },
            {
                "id" : "3",
                "titulo" : "Add <xmp><masterLabel>Account</masterLabel></xmp> to the statusComponent.js-meta.xml file."
            },
            {
                "id" : "4",
                "titulo" : "Add <xmp><target>lightning_RecordaPage</target></xmp> to the statusComponent.js file."
            }
        ]
    },
    {
        "id": "47",
        "pregunta" : "A developer writes a trigger on the Account object on the before update event that increments a count field. A workflow rule alsdo increments the count field every time that an Account is created or updated. The field update in the workflow rule is configured to not re-evaluate workflow rule. <br> <br> What is the value of the count field if an Account is inserted with an initial value of zero, assuming no other automation logic is implemented on the Account?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Multiple/Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "4",
            },
            {
                "id" : "2",
                "titulo" : "2",
            },
            {
                "id" : "3",
                "titulo" : "3"
            },
            {
                "id" : "4",
                "titulo" : "1"
            }
        ]
    },
    {
        "id": "48",
        "pregunta" : "What are three capabilities of the <xmp><ltng:require></xmp> tag when loading JavaScript resources ir Aura components?" ,
        "respuestasCorrectas": ["1","2","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Specifying loading order",
            },
            {
                "id" : "2",
                "titulo" : "One-time loading for duplicate scripts",
            },
            {
                "id" : "3",
                "titulo" : "Loading files from Documents"
            },
            {
                "id" : "4",
                "titulo" : "Loading scripts in parallel"
            }
            ,
            {
                "id" : "5",
                "titulo" : "Loading externally hosted scripts"
            }
        ]
    },
    {
        "id": "49",
        "pregunta" : "An org tracks customer orders on an Order object and the line items of an Order on the Line Item object. The Line Item object has a master-detail relationship to the Order object. <br> <br> A developer has a requirement to calculate the order amount on an Order and the line amount on each Line Item based on quantity and price. <br> <br> What is the correct implementation?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Write a process on the Line Item that calculates the item amount and order amount and updates the fields on the Line Item and The Order.",
            },
            {
                "id" : "2",
                "titulo" : "Write a single before trigger on the Line that calculates the item amount and updates the order amount on the Order.",
            },
            {
                "id" : "3",
                "titulo" : "Implement the line amount as a numeric formula field and the order amount as a roll-up summary field."
            },
            {
                "id" : "4",
                "titulo" : "Implement the line amount as a currency field and the order amount as a SUM formula field."
            }
        ]
    },
    {
        "id": "50",
        "pregunta" : "While working in a sandbox, an Apex test fails when run in the Test Framework. However, running the Apex test logic in the Execute Anonymous window succeeds with no exceptions or errors. <br> <br>Why did the method fall in the sandbox test framework but succeed in the Developer Console?  </br>" ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "The test method has a syntax error in the code.",
            },
            {
                "id" : "2",
                "titulo" : "The test method relies on existing data in the sandbox.",
            },
            {
                "id" : "3",
                "titulo" : "The test method does not use System.runAs to execute as a specific user."
            },
            {
                "id" : "4",
                "titulo" : "The test method is calling an @future method."
            }
        ]
    },
    {
        "id": "51",
        "pregunta" : "For which three items can a trace flag be configured?" ,
        "respuestasCorrectas": ["1","2","5"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "User",
            },
            {
                "id" : "2",
                "titulo" : "Apex Trigger",
            },
            {
                "id" : "3",
                "titulo" : "Flow"
            },
            {
                "id" : "4",
                "titulo" : "Visualforce"
            }
            ,
            {
                "id" : "5",
                "titulo" : "Apex Class"
            }
        ]
    },
    {
        "id": "52",
        "pregunta" : "Universal Containers uses Service Cloud with a custom field, Stage__c, on the Case object. <br><br> Management wants to send a follow-up email reminder 6 hours after the Stage__c field is set to \"Waiting on Customer\". The Salesforce Administrador wants to ensure the solution used is bulk safe. <br> <br> Which automation tool should a developer recommend to meet these business requirements?" ,
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Entitlement Process",
            },
            {
                "id" : "2",
                "titulo" : "Scheduled Flow",
            },
            {
                "id" : "3",
                "titulo" : "Einstein Next Best Action"
            },
            {
                "id" : "4",
                "titulo" : "Record-Triggered Flow"
            }
        ]
    },
    {
        "id": "53",
        "pregunta" : "Universal Containers wants to back up all of the data and attachments in its Salesforce org once a month. <br> <br> Which approch should a developer use to meet this requirements?" ,
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Schedule a report.",
            },
            {
                "id" : "2",
                "titulo" : "Use the Data Loader command line.",
            },
            {
                "id" : "3",
                "titulo" : "Create a Schedulable Apex Class"
            },
            {
                "id" : "4",
                "titulo" : "Define a Data Export scheduled job."
            }
        ]
    },
    {
        "id": "54",
        "pregunta" : "A developer has the following requirements: <br> * Calculate the total amount on an Order. <br> * Calculate the line amount for each Line Item based on quantity selected and price. <br> * Move Line Items to a diferent Order if a Line Item is not in stock. <br> <br> Which relationship implementation supports these requirements on its owm?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Order has a re-parentable lookup field to Line Item.",
            },
            {
                "id" : "2",
                "titulo" : "Line Item has a re-parentable lookup field to Order.",
            },
            {
                "id" : "3",
                "titulo" : "Line Item has a re-parentable master-detail field to Order."
            },
            {
                "id" : "4",
                "titulo" : "Order has a re-parentable master-detail field to Line Item."
            }
        ]
    },
    {
        "id": "55",
        "pregunta" : "Management asked for opportunities to be automatically created for accounts with annual revenue greater than $1,000,000. A developer created the following trigger on the Account object to satisfy this requirement. <br> <br>for(Account a : Trigger.new){<br>if(a.AnnualRevenue > 1000000){<br>List<Opportunity> oppList = [SELECT Id FROM Opportunity WHERE accountid = : a.Id];<br>if(oppList.size() == 0){<br>Opportunity oppty = new Opportunity(Name = a.name , StageName = 'Prospecting',CloseDate = system.today().addDays(30));<br>insert oppty;<br>}<br>}<br>} <br> .  <br> <br> Users are able to update the account records via the UI and can see an opportunity created for high annual revenue accounts. However, when the administrador tries to upload a list of 170 accounts using Data Loader, it fails with System.Exception erros. <br> <br> Which two actions should the developer take to fix the code segment shown above?" ,
        "respuestasCorrectas": ["1","2"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Query for existing opportunities outside the for loop.",
            },
            {
                "id" : "2",
                "titulo" : "Move the DML that saves opportunities outside the for loop.",
            },
            {
                "id" : "3",
                "titulo" : "Use Database query to query the opportunities."
            },
            {
                "id" : "4",
                "titulo" : "Check if all the required field for Opportunity are being added on creation."
            }
        ]
    },
    {
        "id": "56",
        "pregunta" : "Universal Containers decides to use exclusively declarative development to build out a new Salesforce application. <br> <br> Which three options should be used to build out the database layer for the applitacion?" ,
        "respuestasCorrectas": ["1","2","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Flows",
            },
            {
                "id" : "2",
                "titulo" : "Roll-up summaries",
            },
            {
                "id" : "3",
                "titulo" : "Custom objects and field"
            },
            {
                "id" : "4",
                "titulo" : "Relationships"
            }
            ,
            {
                "id" : "5",
                "titulo" : "Triggers"
            }
        ]
    },
    {
        "id": "57",
        "pregunta" : "Universal Containers (UC) wants to lower its shipping cost while making the shipping process more efficient. The Distribution Officer advises UC to implement global addresses to allow multiple Accounts to share a default pickup address. The developer is tasked to create the supporting object and relationship for this business requirement and uses the Setup Menu to create a custom object called \"Global Address\". <br> <br> Which field should the developer add to create the most efficient model that supports the business need?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Add a lookup field on the Account object to the Global Address object.",
            },
            {
                "id" : "2",
                "titulo" : "Add a lookup field on the Global Address object to the Account object.",
            },
            {
                "id" : "3",
                "titulo" : "Add a master-detail field on the Global Address object to the Account object."
            },
            {
                "id" : "4",
                "titulo" : "Add a master-detail field on the Account object to the Global Address object."
            }
        ]
    },
    {
        "id": "58",
        "pregunta" : "A developer must create a CreditCardPayment class that provides an implementation of an existing Payment class. <br> <br> public virtual class Payment{<br> public virtual void makePayment(Decimal amount){/* implementation */}<br>} <br><br> Which is the correct implementation?" ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "public  class CreditCardPayment implements Payment{<br>public override void makePayment(Decimal amount){/* implementation */}<br>}",
            },
            {
                "id" : "2",
                "titulo" : "public  class CreditCardPayment extends Payment{<br>public override void makePayment(Decimal amount){/* implementation */}<br>}",
            },
            {
                "id" : "3",
                "titulo" : "public  class CreditCardPayment extends Payment{<br>public virtual void makePayment(Decimal amount){/* implementation */}<br>}"
            },
            {
                "id" : "4",
                "titulo" : "public  class CreditCardPayment implements Payment{<br>public virtual void makePayment(Decimal amount){/* implementation */}<br>}"
            }
        ]
    },
    {
        "id": "59",
        "pregunta" : "A developer completed modifications to a customized feature that is comprised of two elements: <br> * Apex trigger <br> * Trigger handler Apex class <br> <br> What are two factors that the developer must take into account to properly deploy the modification to the production environment?" ,
        "respuestasCorrectas": ["2","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Test methods must be declared with the testMethod keyword.",
            },
            {
                "id" : "2",
                "titulo" : "Apex class must have at least 75% code coverage org-wide.",
            },
            {
                "id" : "3",
                "titulo" : "All methods in the test classes must use @isTest."
            },
            {
                "id" : "4",
                "titulo" : "At least one line of code must be executed for the Apex trigger."
            }
        ]
    },
    {
        "id": "60",
        "pregunta" : "" ,
        "respuestasCorrectas": [""],
        "tipo": "Multiple/Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "",
            },
            {
                "id" : "2",
                "titulo" : "",
            },
            {
                "id" : "3",
                "titulo" : ""
            },
            {
                "id" : "4",
                "titulo" : ""
            }
        ]
    }
];