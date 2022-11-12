let set2 = [
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