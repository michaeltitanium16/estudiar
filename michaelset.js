let michaelset = [
    {
        "id": "295",
        "pregunta" : "Universal Containers has large number of custom applications that were built using a third-party javaScript framework and exposed using Visualforce pages. The Company wants to update these applications to apply styling that resembles the look and feel of Lightning Experience. What should the developer do to fulfill the business request in the quickest and most effective manner?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Incorporate the Salesforce Lightning Design System CSS stylesheet into the JavaScript applications.",
            },
            {
                "id" : "2",
                "titulo" : "Rewrite all Visualforce pages asLightning components.",
            },
            {
                "id" : "3",
                "titulo" : "Set the attribute enableLightning to true in the definition."
            }
            ,
            {
                "id" : "4",
                "titulo" : "EnableAvailable for Lightning Experience, Lightning Communities, and the mobile app on Visualforce pages used by the custom application."
            }
        ]
    },
    {
        "id": "290",
        "pregunta" : "While writing an Apexclass, a developer wants to make sure that all functionality being developed is handled as specified by the requirements. <br> <br> Which approach should the developer use to be sure that the Apex class is working according tospecifications?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Include a try/catchblock to the Apex class.",
            },
            {
                "id" : "2",
                "titulo" : "Run the code in an Execute Anonymous block in the Developer Console.",
            },
            {
                "id" : "3",
                "titulo" : "Create a test class to execute the business logic and run the test in the Developer Console."
            }
            ,
            {
                "id" : "4",
                "titulo" : "Include a savepoint and Database. rollback ()."
            }
        ]
    },
    {
        "id": "289",
        "pregunta" : "A developer has a requirement to create an Order When an Opportunity reaches a \"Closed-Won\" status. <br> <br> Which tool should be used to implement this requirement?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Process Builder",
            },
            {
                "id" : "2",
                "titulo" : "Lightning Component",
            },
            {
                "id" : "3",
                "titulo" : "Lightning"
            },
            {
                "id" : "4",
                "titulo" : "Apex trigger"
            }
        ]
    },
    {
        "id": "288",
        "pregunta" : "Which process automation should be used to send an outbound message without using Apex code?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Workflow Rule",
            },
            {
                "id" : "2",
                "titulo" : "Process Builder",
            },
            {
                "id" : "3",
                "titulo" : "Approval Process"
            },
            {
                "id" : "4",
                "titulo" : "Flow Builder"
            }
        ]
    },
    {
        "id": "287",
        "pregunta" : "A developer created these three Rollup Summary fields in the custom object, Project_c: <br> Total_Timesheets__c <br> Total_Approved_Timesheets__c <br> Total_Rejected_Timesheet__c <br>  The developer is asked to create a new field that shows the ratio between rejected and approved timesheets for a given project. <br> <br>What are two benefits of choosing a formula held instead of an Apex trigger tofulfill the request? " ,
        "respuestasCorrectas": ["2","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "A test class will validate the formula field during deployment",
            },
            {
                "id" : "2",
                "titulo" : "A formula field will trigger existing automation when deployed.",
            },
            {
                "id" : "3",
                "titulo" : "A formula field will calculate the retroactively for existing records"
            },
            {
                "id" : "4",
                "titulo" : "Using aformula field reduces maintenance overhead."
            }
        ]
    },
    {
        "id": "283",
        "pregunta" : "A developer has two custom controller extensions where each has a save() method. <br> <br> Which save() method will be called for the following Visualforce page? <br> <br> <xmp> <apex:page standardController =”Account”,extensions=”ExtensionA, ExtensionB”></xmp> <xmp> <apex:commandButton action =”{!save}” value=”Save”/></xmp> <xmp> </apex:page></xmp>" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Runtime error will be generated",
            },
            {
                "id" : "2",
                "titulo" : "Standard controller save()",
            },
            {
                "id" : "3",
                "titulo" : "ExtensionB save()"
            },
            {
                "id" : "4",
                "titulo" : "ExtensionA save()"
            }
        ]
    },
    {
        "id": "282",
        "pregunta" : "A Salesforce Administrator used Flow Builder to create a flownamed ‘’accountOnboarding’’. The flow must be used inside an Aura component. <br> <br> Which tag should a developer use to display the flow in the component?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Lightning-flow",
            },
            {
                "id" : "2",
                "titulo" : "Aura:flow",
            },
            {
                "id" : "3",
                "titulo" : "Lightning:flow"
            },
            {
                "id" : "4",
                "titulo" : "Aura:flow"
            }
        ]
    },
    {
        "id": "277",
        "pregunta" : "The values 'High', 'Medium', and 'Low' are Identified as common values for multiple picklist across different object. What is an approach a developer can take to streamline maintenance of the picklist and their values, while also restricting the values to the ones mentioned above?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Create the Picklist on each object and use a Global Picklist Value Set containing the Values.",
            },
            {
                "id" : "2",
                "titulo" : "Create the Picklist on each object as a required field and select \"Display values alphabeticaly, not in the order entered\".",
            },
            {
                "id" : "3",
                "titulo" : "Create the Picklist on each object and select \"Restrict picklist to the values defined in the value set\"."
            },
            {
                "id" : "4",
                "titulo" : "Create the Picklist on each and add a validation rule to ensure data integrity."
            }
        ]
    },
    {
        "id": "276",
        "pregunta" : "What is the maximum number of SOQL queries used by the following code? <br> <br> <xmp>List<Account> aList = [SELECT Id FROM Account LIMIT 5];</xmp> for (Account a : aList){ <xmp>List<Contact> cList = [SELECT Id FROM Contact WHERE AccountId = :a.Id); }</xmp>" ,
        "respuestasCorrectas": ["2"],
        "tipo": "Multiple/Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "5",
            },
            {
                "id" : "2",
                "titulo" : "6",
            },
            {
                "id" : "3",
                "titulo" : "1"
            },
            {
                "id" : "4",
                "titulo" : "2"
            }
        ]
    },
    {
        "id": "275",
        "pregunta" : "A developer has to identify a method in en Apex class that performs resource intensive actions in memory by iterating over the result set of a SOQL statement on the account. The method also performs a SOQL statement to save the changes to the database. <br> <br>  Which two techniques should the developer implement as a best practice to ensure transaction control and avoid exceeding governor limits?" ,
        "respuestasCorrectas": ["3","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use the @ReadOnly annotation to bypass the number of rows returned by a SOQL.",
            },
            {
                "id" : "2",
                "titulo" : "Use Partial DHL statements to ensure only valid data is committed.",
            },
            {
                "id" : "3",
                "titulo" : "Use the Database.Savepoint method to enforce database integrity."
            },
            {
                "id" : "4",
                "titulo" : "Use the System.Limit class to monitor the current CPU governor limit consumption."
            }
        ]
    },
    {
        "id": "274",
        "pregunta" : "Which declarative process automation feature supports iterating over multiple records?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Flows",
            },
            {
                "id" : "2",
                "titulo" : "Validation Rules",
            },
            {
                "id" : "3",
                "titulo" : "Approval Process"
            },
            {
                "id" : "4",
                "titulo" : "Workflow rules"
            }
        ]
    },
    {
        "id": "273",
        "pregunta" : "A developer must create an Apex class, ContactController, that a Lightning component can use to search for Contact records. <br> User of the Lightning component should only be able to search Contact records to which they have access. <br> <br> Which two will restrict the records correctly?" ,
        "respuestasCorrectas": ["2","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "public class ContactController",
            },
            {
                "id" : "2",
                "titulo" : "public with sharing class ContactController",
            },
            {
                "id" : "3",
                "titulo" : "public without sharing class ContactController"
            },
            {
                "id" : "4",
                "titulo" : "public inherited sharing class ContactController"
            }
        ]
    },
    {
        "id": "271",
        "pregunta" : "What are three ways for a developer to execute tests in an org?" ,
        "respuestasCorrectas": ["2","3","4"],
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
                "titulo" : "Setup Menu"
            },
            {
                "id" : "4",
                "titulo" : "Salesforce DX"
            },
            {
                "id" : "5",
                "titulo" : "Metadata API"
            }
        ]
    },
    {
        "id": "270",
        "pregunta" : "What is the order of operations when a record is saved in Salesforce?" ,
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Process flows, triggers, workflow, commit",
            },
            {
                "id" : "2",
                "titulo" : "Workflow, process flows, triggers, commit",
            },
            {
                "id" : "3",
                "titulo" : "Workflow, triggers, process flows, commit"
            },
            {
                "id" : "4",
                "titulo" : "Triggers, workflow, process flows, commit"
            }
        ]
    },
    {
        "id": "269",
        "pregunta" : "A developer must provide a custom user interface when users edit a Contact. Users must be able to use the interface in Salesforce Classic and Lightning Experience. <br> <br> What should the developer do to provide the custom user interface?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Override the Contact’s Edit button with a Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience.",
            },
            {
                "id" : "2",
                "titulo" : "Override the Contact’s Edit button with a Visualforce page in Salesforce Classic and a Lightning page in Lightning Experience",
            },
            {
                "id" : "3",
                "titulo" : "Override the Contact’s Edit button with a Lightning component in Salesforce Classic and a Lightning component in Lightning Experience."
            },
            {
                "id" : "4",
                "titulo" : "Override the Contact’s Edit button with a Lightning page in Salesforce Classic and a Visualforce page in  Lightning Experience."
            }
        ]
    },
    {
        "id": "266",
        "pregunta" : "Which Salesforce feature allows a developer to see when a user last logged in to Salesforce if real-time notification is not required?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Asynchronous Data Capture Events",
            },
            {
                "id" : "2",
                "titulo" : "Developer Log",
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
        "id": "265",
        "pregunta" : "A business implemented a magnification plan to encourage its customers to watch some educational videos. <br> <br> Customers can watch videos over several days, and their progress is recorded. Award points are granted to customers for all completed videos. When the video is marked as completed in Salesforce, an external web service must be called so that points can be awarded to the user. <br> <br>  A developer implemented these requirements in the after update trigger by making a calf to an external web service. However, a System.CalloutException is occurring. <br> <br> What should the developer do to fix this error?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Surround the external call with a try-catch block to handle the exception.",
            },
            {
                "id" : "2",
                "titulo" : "Write a REST service to integrate with the external web service.",
            },
            {
                "id" : "3",
                "titulo" : "Move the callout to an asynchronous method with structure (callout=true) annotation."
            },
            {
                "id" : "4",
                "titulo" : "Replace the after update trigger with a before insert trigger."
            }
        ]
    },
    {
        "id": "264",
        "pregunta" : "Which standard field is required when creating a new contact record?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "LastName",
            },
            {
                "id" : "2",
                "titulo" : "Name",
            },
            {
                "id" : "3",
                "titulo" : "AccountId"
            },
            {
                "id" : "4",
                "titulo" : "FirstName"
            }
        ]
    },
    {
        "id": "263",
        "pregunta" : "Get Cloudy Consulting (GCC) has a multitude of servers that host its customers’ websites. GCC wants to provide a servers status page that is always on display in its call center. It should update in real time with any changes made to any servers. To accommodate this on the server side, a developer created a server Update platform event. <br> <br> The developer is working on a Lightning web component to display the information." ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "import ( subscribe, unsubscribe, onError ) from 'lightning/empApi'",
            },
            {
                "id" : "2",
                "titulo" : "import ( subscribe, unsubscribe, onError ) from 'lightning/MessageChannel'",
            },
            {
                "id" : "3",
                "titulo" : "import ( subscribe, unsubscribe, onError ) from 'lightning/ServerUpdate'"
            },
            {
                "id" : "4",
                "titulo" : "import ( subscribe, unsubscribe, onError ) from 'lightning/pubsub'"
            }
        ]
    },
    {
        "id": "262",
        "pregunta" : "What should a developer use to fix a Lightning web component bug in a sandbox?" ,
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Developer Console",
            },
            {
                "id" : "2",
                "titulo" : "Force.com IDE",
            },
            {
                "id" : "3",
                "titulo" : "Execute Anonumous"
            },
            {
                "id" : "4",
                "titulo" : "VS Code"
            }
        ]
    },
    {
        "id": "261",
        "pregunta" : "Which two operations can be performed using a formula field?" ,
        "respuestasCorrectas": ["3","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Displaying the last four digits of an encrypted Social Security number",
            },
            {
                "id" : "2",
                "titulo" : "Triggering a Process Builder",
            },
            {
                "id" : "3",
                "titulo" : "Displaying an Image based on the Opportunity Amount"
            },
            {
                "id" : "4",
                "titulo" : "Calculating a score on a Lead based on the information from another field"
            }
        ]
    },
    {
        "id": "260",
        "pregunta" : "A developer creates a Lightning web component that imports a method within an Apex class. When a Validate button is pressed, the method runs to execute complex validations. <br> <br> In this implementation scenario, which artifact is part of the Controller according to the MVC architecture?" ,
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "HTML file",
            },
            {
                "id" : "2",
                "titulo" : "JavaScript file",
            },
            {
                "id" : "3",
                "titulo" : "XML file"
            },
            {
                "id" : "4",
                "titulo" : "Apex class"
            }
        ]
    },
    {
        "id": "257",
        "pregunta" : "How should a custom user interface be provided when a user edits an Account in Lightning Experience?" ,
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Override the Account's Edit button with Lightning Flow",
            },
            {
                "id" : "2",
                "titulo" : "Override the Account's Edit button with Lightning Action",
            },
            {
                "id" : "3",
                "titulo" : "Override the Account's Edit button with Lightning page."
            },
            {
                "id" : "4",
                "titulo" : "Override the Account's Edit button with Lightning component."
            }
        ]
    },
    {
        "id": "254",
        "pregunta" : "Universal Containers stores the availability date on each Line Item of an Order and Orders are only shipped when all of the Line Items are available. Which method should be used to calculate the estimated shipdate for an Order?" ,
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use a CEILING formula on each of the Latest availability date fields.",
            },
            {
                "id" : "2",
                "titulo" : "Use a DAYS formula on each of the availability date fields and a COUNT Roll-Up Summary field on the Order.",
            },
            {
                "id" : "3",
                "titulo" : "Use a LATEST formula on each of the latest availability date fields."
            },
            {
                "id" : "4",
                "titulo" : "Use a Max Roll-Up Summary field on the Latest availability date fields."
            }
        ]
    },
    {
        "id": "251",
        "pregunta" : "Universal Containers has an order system that uses an Order Number to identify an order for customers and service agents. Order will be imported into Salesforce." ,
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
                "titulo" : "Number with External ID"
            },
            {
                "id" : "4",
                "titulo" : "Indirect Lookup"
            }
        ]
    },
    {
        "id": "247",
        "pregunta" : "A developer is asked to create a Visualforce page that lists the contacts owned by the current user. This component will be embedded In a Lightning page. <br> <br> Without writing unnecessary code, which controller should be used for this purpose? " ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Standard list controller",
            },
            {
                "id" : "2",
                "titulo" : "Standard controller",
            },
            {
                "id" : "3",
                "titulo" : "Lightning controller"
            },
            {
                "id" : "4",
                "titulo" : "Custom controller"
            }
        ]
    },
    {
        "id": "246",
        "pregunta" : "A developer must create a ShippingCalculator class that cannot be instantiated and must include a working default implementation of a calculate method, that sub-classes can override. <br> <br> What is the correct implementation of the ShippingCalculator class?" ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Public abstract class ShippingCalculator {<br> public override calculate() { /*implementation*/ <br> } }",
            },
            {
                "id" : "2",
                "titulo" : "Public abstract class ShippingCalculator { <br> public virtual void calculate(){ /*implementation*/ } }",
            },
            {
                "id" : "3",
                "titulo" : "Public abstract class ShippingCalculator { <br> public abstract calculate() { /*implementation*/ } }"
            },
            {
                "id" : "4",
                "titulo" : "Public abstract class ShippingCalculator { <br> public void calculate() { /*implementation*/ } }"
            }
        ]
    },
    {
        "id": "242",
        "pregunta" : "Given the following block code <br> <xmp>try{ List <Accounts> retrievedRecords = [SELECT Id FROM Account WHERE Website = null]; }catch(Exception e){ //manage exception logic }</xmp>  <br> <br> What should a developer do to ensure the code execution is disrupted if the retrievedRecordslist remains empty after the SOQL query? " ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Check the state of the retrieveRecords variable and throw a custom exception if the variable is empty",
            },
            {
                "id" : "2",
                "titulo" : "Check the state of the retrievedRecords variable and use System.assert(false) if the variable is empty",
            },
            {
                "id" : "3",
                "titulo" : "Check the state of the retrievedRecords variable and access the first element of the list if the variable is empty."
            },
            {
                "id" : "4",
                "titulo" : "Replace the retrievedRecords variable declaration from a List of Account to a single Account."
            }
        ]
    },
    {
        "id": "241",
        "pregunta" : "A developer uses a loop to check eachContact in a list. When a Contact with the Title of “Boss” is found, the Apex method should jump to the first line of code outside of the for loop. <br> <br> Which Apex solution will let the developer implement this requirement? " ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "break;",
            },
            {
                "id" : "2",
                "titulo" : "Continue",
            },
            {
                "id" : "3",
                "titulo" : "Next"
            },
            {
                "id" : "4",
                "titulo" : "Exit"
            }
        ]
    },
    {
        "id": "240 ",
        "pregunta" : "Which code should be used to update an existing Visualforce page that uses standard Visualforce components so that the page matches the look and feel of Lightning Experience?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "<xmp><apex:page lightningStyleSheets=”true”></xmp>",
            },
            {
                "id" : "2",
                "titulo" : "<xmp><apex:page></xmp>",
            },
            {
                "id" : "3",
                "titulo" : "<xmp><apex:commandButton styleClass=\"slds-vf-button_brand\" value=\"Refresh the Page\"></xmp>"
            },
            {
                "id" : "4",
                "titulo" : "<xmp>apex:actionStatus</xmp>"
            }
        ]
    },
    {
        "id": "238",
        "pregunta" : "An Apex method, getAccounts, that returns a List of Accounts given a search Term, is available for Lighting Web components to use. What is the correct definition of a Lighting Web component property that uses the getAccounts method?" ,
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "@AuraEnabled(getAccounts, ‘$searchTerm’) <br> accountList;",
            },
            {
                "id" : "2",
                "titulo" : "@wire(getAccounts, ‘$searchTerm’) <br> accountList;",
            },
            {
                "id" : "3",
                "titulo" : "@AuraEnabled(getAccounts,{searchTerm: ‘$searchTerm’}) accountList;"
            },
            {
                "id" : "4",
                "titulo" : "@wire(getAccounts, {searchTerm: ‘$searchTerm’}) <br> accountList;"
            }
        ]
    },
    {
        "id": "237",
        "pregunta" : "What is a key difference between a Master-Detail Relationship and a Lookup Relationship?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "A Master-Detail Relationship detail record inherits the sharing and security of its master record.",
            },
            {
                "id" : "2",
                "titulo" : "When a record of a master object in a Lookup Relationship is deleted, the detail records are also deleted.",
            },
            {
                "id" : "3",
                "titulo" : "A Lookup Relationship is arequired field on an object."
            },
            {
                "id" : "4",
                "titulo" : "When a record of a master object in a Master-Detail Relationship is deleted, the detail records are kept and not deleted."
            }
        ]
    },
    {
        "id": "235",
        "pregunta" : "Universal Container use a simple order Management app. On the Order Lines, the order line total is calculated by multiplying the item price with the quantity ordered. There is a Master-Detail relationship between the Order and the Order Lines object. <br> <br> What is the practice to get the sum of all order line totals on the order header?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Roll-Up Summary Field",
            },
            {
                "id" : "2",
                "titulo" : "Apex Trigger",
            },
            {
                "id" : "3",
                "titulo" : "Process Builder"
            },
            {
                "id" : "4",
                "titulo" : "Declarative Roll-Up Summaries App"
            }
        ]
    },
    {
        "id": "234",
        "pregunta" : "A developer is tasked with performing a complex validation using Apex aspart of advanced business logic. certain criteria are met for a PurchaseOrder, the developer must throw a custom exception. <br> <br> What is the correct way for the developer to declare a class that can be used as an exception?" ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "public class PurchaseOrderException implements Exception ()",
            },
            {
                "id" : "2",
                "titulo" : "public class PurchaseOrderException extends Exception ()",
            },
            {
                "id" : "3",
                "titulo" : "public class PurchaseOrder implements Exception ()"
            },
            {
                "id" : "4",
                "titulo" : "public class PurchaseOrder extends Exception ()"
            }
        ]
    },
    {
        "id": "233",
        "pregunta" : "What should be used to create scratch orgs?" ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Developer Console",
            },
            {
                "id" : "2",
                "titulo" : "Salesforce CLI",
            },
            {
                "id" : "3",
                "titulo" : "Workbench"
            },
            {
                "id" : "4",
                "titulo" : "Sandbox refresh"
            }
        ]
    },
    {
        "id": "230",
        "pregunta" : "Which Apex class contains methods to return the amount of resources that have been used for a particular governor, such as the number of DML statements?" ,
        "respuestasCorrectas": ["4"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Exception",
            },
            {
                "id" : "2",
                "titulo" : "Messaging",
            },
            {
                "id" : "3",
                "titulo" : "OrgLimits"
            },
            {
                "id" : "4",
                "titulo" : "Limits"
            }
        ]
    },
    {
        "id": "228",
        "pregunta" : "A developer of Universal Containers is tasked with implementing a new Salesforce application that must be able to by their company's Salesforce administrator. <br> <br> Which three should be considered for building out the business logic layer of the application? " ,
        "respuestasCorrectas": ["1","2","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Workflows",
            },
            {
                "id" : "2",
                "titulo" : "Validation Rules",
            },
            {
                "id" : "3",
                "titulo" : "Process Builder"
            },
            {
                "id" : "4",
                "titulo" : "Scheduled Jobs"
            }
            ,
            {
                "id" : "5",
                "titulo" : "Invocable Actions"
            }
        ]
    },
    {
        "id": "224",
        "pregunta" : "A developer needs an Apex method that can process Account or Contact records. Which method signature should the developer use?" ,
        "respuestasCorrectas": ["2"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Public void doWork(Record theRecord)",
            },
            {
                "id" : "2",
                "titulo" : "Public void doWork(sObject theRecord)",
            },
            {
                "id" : "3",
                "titulo" : "Public void doWork(Account Contact)"
            },
            {
                "id" : "4",
                "titulo" : "Public void doWork(Account || Contact)"
            }
        ]
    },
    {
        "id": "222",
        "pregunta" : "A developer identifies the following triggers on the Expense_c object: <br> DeleteExpense,<br> applyDefaultstoexpense <br>validateexpenseupdate <br> <br> The triggers process before delete, before insert,and before update events respectively. <br> <br> Which two techniques should the developer implement to ensure trigger best practice are followed?" ,
        "respuestasCorrectas": ["3","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Unify the before insert and before update triggers and use Process Builder for the delete action.",
            },
            {
                "id" : "2",
                "titulo" : "Maintain all three triggers on the Expense__c object, but move the Apex logic out for the trigger definition.",
            },
            {
                "id" : "3",
                "titulo" : "Create helper classes to execute the appropriate logic when a record is saved."
            },
            {
                "id" : "4",
                "titulo" : "Unify all three triggers in a single trigger on the Expense__c object that includes all events."
            }
        ]
    },
    {
        "id": "221",
        "pregunta" : "A company has been adding data to Salesforce and has not done a good Job of limiting the creation of duplicate Lead records. The developer is considering writing an Apex process to identify duplicates and merge the records together. <br> <br> Which two statements are valid considerations when using merged?" ,
        "respuestasCorrectas": ["2","4"],
        "tipo": "Multiple/",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "The field values on the master record are overwritten by the records being merged.",
            },
            {
                "id" : "2",
                "titulo" : "Merge is supported with accounts, contacts, cases, and leads.",
            },
            {
                "id" : "3",
                "titulo" : "External ID fields can be used with the merge method."
            },
            {
                "id" : "4",
                "titulo" : "The merge method allows up to three records, including the master and two additional records with the same sObject type, to be merged into the master record."
            }
        ]
    },
    {
        "id": "220",
        "pregunta" : "Which two characteristics are true for Aura component events?" ,
        "respuestasCorrectas": ["1","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Calling event, stopPropagation ( ) may or may not stop the event propagation based of the current propagation phase.",
            },
            {
                "id" : "2",
                "titulo" : "If a container component needs to handle a component event, add a handleFacets='' attribute to Its handler.",
            },
            {
                "id" : "3",
                "titulo" : "Only parent components that create subcomponents (either in their markup or programmatically) can handle events."
            },
            {
                "id" : "4",
                "titulo" : "The event propagates to every owner In the containment hierarchy."
            }
        ]
    },
    {
        "id": "212",
        "pregunta" : "A developer is asked to create a Visualforce page that displays some Account fields as well as fields configured on the page layout for related Contacts <br> <br>How should the developer implement this request?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "<xmp>Use the <apex:relatedList> tag </xmp>",
            },
            {
                "id" : "2",
                "titulo" : "Create a controller extension.",
            },
            {
                "id" : "3",
                "titulo" : "<xmp>Use the <apex:include> tag.</xmp>"
            },
            {
                "id" : "4",
                "titulo" : "Add a method to the standard controller."
            }
        ]
    },
    {
        "id": "211",
        "pregunta" : "What are two best practices when it comes to Lightning Web Component events?" ,
        "respuestasCorrectas": ["1","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use event.target to communicate data to elements that aren't in the same shadow tree.",
            },
            {
                "id" : "2",
                "titulo" : "Use events configuredwith bubbles: false and composed:false.",
            },
            {
                "id" : "3",
                "titulo" : "Use CustomEvent to pass data from a child to a parent component."
            },
            {
                "id" : "4",
                "titulo" : "Use event.detail to communicate data to elements in the same shadow tree"
            }
        ]
    },
    {
        "id": "210",
        "pregunta" : "Which three process automations can immediately send an email notification to the owner of an Opportunity when its Amount is changed to be greater than $10,000? " ,
        "respuestasCorrectas": ["1","3","5"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Workflow Rule",
            },
            {
                "id" : "2",
                "titulo" : "Flow Builder",
            },
            {
                "id" : "3",
                "titulo" : "Approval Process"
            },
            {
                "id" : "4",
                "titulo" : "Escalation Rule"
            }
            ,
            {
                "id" : "5",
                "titulo" : "Process Builder"
            }
        ]
    },
    {
        "id": "204",
        "pregunta" : "What can used to delete components from production?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "A change set deployment with a destructiveChanges XML file",
            },
            {
                "id" : "2",
                "titulo" : "A change set deployment with the delete option checked",
            },
            {
                "id" : "3",
                "titulo" : "An ant migration tool deployment with a destructiveChanges XML file and an empty package.xml file"
            },
            {
                "id" : "4",
                "titulo" : "An ant migration tool deployment with a desctuctiveChanges XML file and the components to delete in the package.xml file"
            }
        ]
    },
    {
        "id": "203",
        "pregunta" : "What are two benefits of using declarative customizations over code?" ,
        "respuestasCorrectas": ["1","3"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Declarative customizations automatically update with each Salesforce release.",
            },
            {
                "id" : "2",
                "titulo" : "Declarative customizations automatically generate test classes.",
            },
            {
                "id" : "3",
                "titulo" : "Declarative customizations automatically generate test classes."
            },
            {
                "id" : "4",
                "titulo" : "Declarative customizations generally require less maintenance."
            }
        ]
    },
    {
        "id": "202",
        "pregunta" : "A developer is creating a test coverage for a class and needs to insert records to validate functionality. <br> <br>  Which method annotation should be used to create records for every method in the test class?" ,
        "respuestasCorrectas": ["3"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "@BeforeTest",
            },
            {
                "id" : "2",
                "titulo" : "@isTest(SeeAllData=True)",
            },
            {
                "id" : "3",
                "titulo" : "@TestSetup"
            },
            {
                "id" : "4",
                "titulo" : "@PreTest"
            }
        ]
    },
    {
        "id": "201",
        "pregunta" : "A developer must write an Apex method that will be called from a Lightning component. The method may delete an Account stored in theaccountRecvariable. <br> <br> Which method should a developer use to ensure only users that should be able to delete Accounts can successfully perform deletions?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Schema.sObjectType.Account.isDeletable()",
            },
            {
                "id" : "2",
                "titulo" : "Account.isDeletable()",
            },
            {
                "id" : "3",
                "titulo" : "accountRec.isDeletable()"
            },
            {
                "id" : "4",
                "titulo" : "accountRec.sObjectType.isDeletable()"
            }
        ]
    },
    {
        "id": "200",
        "pregunta" : "Universal Containers wants Opportunities to no longer be editable when reaching the Closed/Won stage. <br> How should a developer accomplish this?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Use a validation rule.",
            },
            {
                "id" : "2",
                "titulo" : "Use the Process Automation settings.",
            },
            {
                "id" : "3",
                "titulo" : "Use Flow Builder."
            },
            {
                "id" : "4",
                "titulo" : "Mark fields as read-only on the page layout."
            }
        ]
    },
    {
        "id": "199",
        "pregunta" : "Which two conditions cause workflow rules to fire?" ,
        "respuestasCorrectas": ["2","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Changing the territory assignments of accounts and opportunities",
            },
            {
                "id" : "2",
                "titulo" : "Updating records using the bulk API",
            },
            {
                "id" : "3",
                "titulo" : "Converting leads to person accounts"
            },
            {
                "id" : "4",
                "titulo" : "An Apex Batch process that changes field values"
            }
        ]
    },
    {
        "id": "192",
        "pregunta" : "Which three web technologies can be integrated into a Visualforce page? (" ,
        "respuestasCorrectas": ["1","2","5"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "JavaScript",
            },
            {
                "id" : "2",
                "titulo" : "CSS",
            },
            {
                "id" : "3",
                "titulo" : "Java"
            },
            {
                "id" : "4",
                "titulo" : "PHP"
            }
            ,
            {
                "id" : "5",
                "titulo" : "HTML"
            }
        ]
    },
    {
        "id": "191",
        "pregunta" : "Universal Containers stores Orders and Line Items in Salesforce. For security reason, financial representatives are allowed to see information on the Order such as order amount, but they are not allowed to see the Line items on the Order.<br> <br>  Which type of relationship should be used?" ,
        "respuestasCorrectas": ["1"],
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
                "titulo" : "Indirect lookup"
            },
            {
                "id" : "4",
                "titulo" : "Master Detail"
            }
        ]
    },
    {
        "id": "190",
        "pregunta" : "Which three operations affect the number of times a trigger can fire" ,
        "respuestasCorrectas": ["1","2","5"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Process Flows",
            },
            {
                "id" : "2",
                "titulo" : "Workflow Rules",
            },
            {
                "id" : "3",
                "titulo" : "Criteria-based Sharing calculations"
            },
            {
                "id" : "4",
                "titulo" : "Email messages"
            }
            ,
            {
                "id" : "5",
                "titulo" : "Roll-Up Summary fields"
            }
        ]
    },
    {
        "id": "186",
        "pregunta" : "Assuming that 'name; is a String obtained by an <apex:inputText> tag on a Visualforce page. <br> <br> Which two SOQL queries performed are safe from SOQL injections?" ,
        "respuestasCorrectas": ["2","4"],
        "tipo": "Multiple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "<xmp>String query = 'SELECT Id FROM Account WHERE Name LIKE \''%' + String.escapeSingleQuotes(name) + '%\''; List<Account> results = Database.query(query);</xmp>",
            },
            {
                "id" : "2",
                "titulo" : "<xmp>String query = 'SELECT Id FROM Account WHERE Name LIKE \''%' + String.escapeSingleQuotes(name) + '%\''; List<Account> results = Database.query(query);</xmp>",
            },
            {
                "id" : "3",
                "titulo" : "<xmp>String query = 'SELECT Id FROM Account WHERE Name LIKE \''%' + name + '%\''; List<Account> results = Database.query(query);</xmp>"
            },
            {
                "id" : "4",
                "titulo" : "<xmp>String query = '%' + name + '%'; List<Account> results = [SELECT Id FROM Account WHERE Name LIKE :query];</xmp>"
            }
        ]
    },
    {
        "id": "184",
        "pregunta" : "A developer creates a new Apex trigger with a helper class, and writes a test class that only exercises 95% coverage of new Apex helper class. Change Set deployment to production fails with the test coverage warning \"Test coverage of selected Apex Trigger is 0%, at least 1% test coverage is required\"<br> <br> Whatshould the developer do to successfully deploy the new Apex trigger and helper class?" ,
        "respuestasCorrectas": ["1"],
        "tipo": "Simple",
        "respuestas": [
            {
                "id" : "1",
                "titulo" : "Create a test class and methods to cover the Apex trigger",
            },
            {
                "id" : "2",
                "titulo" : "Run the tests using the 'Run All Tests' method.",
            },
            {
                "id" : "3",
                "titulo" : "Remove the falling test methods from the test class."
            },
            {
                "id" : "4",
                "titulo" : "Increase the test class coverage on the helper class"
            }
        ]
    },
    {
        "id": "",
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
    },
    {
        "id": "",
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
    },
    {
        "id": "",
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
    },
    {
        "id": "",
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
    },
    {
        "id": "",
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
    },
    {
        "id": "",
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