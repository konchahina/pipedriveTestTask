# pipedriveTestTask

You can use GitHub Actions Push Button to run tests via GitHub Actions.

To setup tests locally:

1. Perform __npm i__
2. Populate __cypress.env.json__ file with password provided:
    
            { 
                "DEFAULT_PASSWORD": "<your_password>" 
            }

3. Run __npx cypress open__ to open Cypress runner or run __npx cypress run e2e__ to run all e2e specs without launching Cypress Runner
