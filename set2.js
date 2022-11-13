let set2 = [
    {
        "id": "1",
        "pregunta" : "What are to ways a developer can get the status of an enqueued job for a class that implements the queueable interface?",
        "respuestasCorrectas": ["2,3"],
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
        "pregunta" : "A custom picklist field, 'Food_Preference__c', exists on a custom object. The picklist contains the following optios: 'Vegan', 'Kosher', 'No Preference'. The developer must ensure a values is populated every time a rcord is created or updated.<br> What is the optimal way to ensure a value is selected every time a record is saved",
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
                "titulo" : "Write an Apex Trigger to ensure a value is selectd"
            }
        ]
    },
    {
        "id": "3",
        "pregunta" : "Refer to the following code snippet for an environment that has more than 200 Accounts beloging to the 'Technology' industry: <br><br>" +
        "for (Account thisAccount : [SELECT id, Industry FROM Account LIMI 150]){<br>" +
            "if(thisAccount.Industry == 'Technology'){<br>" +
               "thisAcount.Is_Tech__c = true;<br>"+
               "}<br>"+
            "update thisAccount;<br>"+
        "}<br>"+
        "when the code executes, what happends as a result of the apex transaction?",
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "If executed in an asynchronous context, the Apex transaction is likely to fail bu exceeding DML governor limit"
            },
            {
                "id" : "2",
                "titulo" : "If executed in a synchronous context, the Apex transaction is likely to fail bu exceeding DML governor limit"
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
        "pregunta" : "An org has an existing flow that creats an Opportunity with a Update Records element. A developer mast update the flow to also create a Contact and store the created Contact's ID on the opportunity. <br>"+
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
        "pregunta" : "What is the result of the following code?<br>"+
        "Database.insert(a,false)",
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "The record will not be created and an exception wil be thrown"
            },
            {
                "id" : "2",
                "titulo" : "The record will not be created and no error will be reported"
            },
            {
                "id" : "3",
                "titulo" : "the record will be created and no error will be reported"
            },
            {
                "id" : "4",
                "titulo" : "The record will be created and a message will be in the debug log"
            }
        ]
    },
    {
        "id": "7",
        "pregunta" : "Refer to the following Apex code:<br>"+
            "Integer x = 0<br>"+
            "do{ <br>"+
                "x = 1<br>"+
                "x++<br>"+
            "}while(x < 1)<br>"+
            "System.debug(x)<br>"+
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
                "titulo" : "View the code coverage percentage fo the class using the Overall Code Coverage panel in the Deveveloper Console Tests tab"
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
        "pregunta" : "Universal Containers recently transitioned from Classic to Ligthning Experience. <br>"+
        "One of its business processes requires certain values from the Opportunity object to be sent via an HHTP Rest callout to its external order management system based on an ad-hoc basis when the user presses a custom button on the Opportunity detail page. Example values are as follows (Name, Ammount, Account)<br>"+
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
        "pregunta" : "A developer is creating a page that allows users to create multiple Opportunitues. The developer is asked to verify the current user`s default Opportunity record tupe, and set certain default values based on the record type before inserting the record.<br>"+
        "How can the developer find the current user's defaut record type?",
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use Opprtunity.SObjectType.getDescribe().getRecordTypeInfos() to get a list of redord types, and iterate throught them until isDefaultRecordTypeMApping() is true"
            },
            {
                "id" : "2",
                "titulo" : "Create the opportunity and check the opportunity.recordType, which will have the record ID of the current user's default record type, before inserting"
            },
            {
                "id" : "3",
                "titulo" : "Query the Profile where the ID equals userinfo.getProfileId() and then use the profile.Opportunity.getDefaultRecurdtype() method"
            },
            {
                "id" : "4",
                "titulo" : "Use the Schema.userInfo.Opportunity.getDefaultRecordType() method"
            }
        ]
    },
    {
        "id": "11",
        "pregunta" : "A developer wants to mark each Account in a List<Account> as either Active or Inactive, based on the value in the LastModifiedDate field of each Account being greater than 90 days in the past.<br>"+
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
                "titulo" : "A custom exception class namemust end whit 'Exception"
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
                "titulo" : " Content asset file"
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
                "titulo" : "static resources"
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
        "pregunta" : "Cloud Kicks has a multti-screen flow that its call center agents use when handling inbound service desk calls.<br>"+
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
        "pregunta" : "A developer is asked to prevent anyone other than a user with Sales Manager profile from changing the Opporunity Status to Closed Lost if the lost reason is blank.<br>"+
        "Which automation allows the developer to satisfy the requirement in the most efficent manner?",
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "A record triger flow on the Opportunity object"
            },
            {
                "id" : "2",
                "titulo" : "An aproval process on the Opporunity object"
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
        "pregunta" : "A developer must create a DrawList calss that provides capabilities definied in the Sortable and Drawable interfaces<br>"+
        "public interface Sortable {<br>"+
            "void sort();<br>"+
        "}<br>"+
        "public interface Sortable {<br>"+
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
        "pregunta" : "Which code sgement shows the correct declaration of the Web Service Class?",
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
        "pregunta" : "Universal Containers has implemented an orden managment application.Each Order can have one or more Order Line items. The Order Line object is related to the Order via a master-detail relationship. For each Order Line item, the total price is calculated by multipliying the Order Line item price with the quantity ordered.<br>"+
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
        "id": "40",
        "pregunta" : "A Lightning component has a wired property, searchResults, that stores a list of Opportunities. <br> <br> Which definition of the Apex method, to which the searchResults property is wired, should be used?" ,
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
        "respuestasCorrectas": ["1"],
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
        "pregunta" : "What are three capabilities of the <ltng:require> tag when loading JavaScript resources ir Aura components?" ,
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
                "id" : "4",
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