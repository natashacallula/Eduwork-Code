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

Cypress.Commands.add('loginbank', (validusername, validpassword) =>{
    cy.clearCookies()
    cy.clearAllLocalStorage()
   
    cy.get('#user_login').type(validusername)
    cy.get('#user_password').type(validpassword)
    cy.get('input[name="submit"]').click()
   });
   
Cypress.Commands.add('loginsauce', (username, password)=>{
    cy.clearCookies()
    cy.clearAllLocalStorage()

    cy.url().should('include', 'saucedemo.com')

    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})

Cypress.Commands.add('cartsauce', () =>{
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', 'cart.html')
    cy.get('#checkout').click()
})