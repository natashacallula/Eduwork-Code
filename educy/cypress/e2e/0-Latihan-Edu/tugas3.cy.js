/// <reference types="cypress" />

describe('Working with inputs', () => {
    it('Visit the website',() => {
       cy.visit('http://zero.webappsecurity.com/login.html')
       cy.url().should('include', 'login.html')

       //Type username
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')

        //Type password
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')

        //Click checkbox keep me signed in
        cy.get('#user_remember_me').click()

    });
 });