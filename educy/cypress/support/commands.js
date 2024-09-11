// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginbank', (username, password) =>{
 cy.clearCookies()
 cy.clearAllLocalStorage()

 cy.get('#user_login').clear()
 cy.get('#user_login').type(username)

 cy.get('input[name="user_password"]').clear()
 cy.get('input[name="user_password"]').type(password)

 cy.get('input[name="submit"]').click()
})

Cypress.Commands.add('paypayee', (amount, description) =>{

    cy.get ('a[href="/bank/redirect.html?url=pay-bills.html"]').click()
    cy.url().should('include', 'pay-bills.html')

    cy.get('#sp_amount').clear()
    cy.get('#sp_amount').type(amount)

    cy.get('#sp_date').click()
    cy.get('#ui-datepicker-div').click()

    cy.get('#sp_description').clear()
    cy.get('#sp_description').type(description)
    cy.get('#pay_saved_payees').click()
   })

   Cypress.Commands.add('newpayee', (payeename, payeeaddress, account, details) =>{
    
    //Open add new payee
    cy.get('.ui-state-default.ui-corner-top').contains('Add New Payee').click();
    cy.url().should('include', 'pay-bills.html')
    
    cy.get('#np_new_payee_name').clear()
    cy.get('#np_new_payee_name').type(payeename)

    cy.get('#np_new_payee_address').clear()
    cy.get('#np_new_payee_address').type(payeeaddress)
    
    cy.get('#np_new_payee_account').clear()
    cy.get('#np_new_payee_account').type(account)

    cy.get('#np_new_payee_details').clear()
    cy.get('#np_new_payee_details').type(details)

    cy.get('#add_new_payee').click()
    
   })

   Cypress.Commands.add('foreigncurrency', (amount) =>{

    cy.get('.ui-state-default.ui-corner-top').contains('Purchase Foreign Currency').click();
    cy.url().should('include', 'pay-bills.html')
            
    cy.get('#pc_currency').select('Japan (yen)')
            
    cy.get('#pc_amount').click()
    cy.get('#pc_amount').type(amount)
    cy.get('#pc_inDollars_false').click()

    cy.get('#pc_calculate_costs').click()
    cy.get('#purchase_cash').click()
   })
