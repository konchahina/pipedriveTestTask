# pipedriveTestTask

To setup repository:

1. Perform __npm i__
2. Populate __cypress.env.json__ file with your default password in the form:
    
            { 
                "DEFAULT_PASSWORD": "your_password" 
            }

4. Run __npx cypress open__ to open Cypress runner or run __npx cypress run e2e__ to run all e2e specs without launching Cypress Runner
5. Additional you can use GitHub Actions Push Button to run tests via GitHub Actions.
