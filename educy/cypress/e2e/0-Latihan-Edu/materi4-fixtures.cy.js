/// <reference types="cypress" />

describe('Fixtures & Static data', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/login.html')
      })

    it('Should fill username maunal', () => {
        cy.url().should('include', 'login.html')
        cy.get('#user_login').clear()
        cy.get('#user_login').type('natasha.callula')
    });

    it('Should fill password manual', () => {
        cy.url().should('include', 'login.html')
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('ayambakarpakbudi')
    });
    it('login with fixtures',() => {
        
        cy.fixture("data1").then(data1 => {
            const username = data1.username
            const password = data1.password
            
            //Visit the website
            cy.url().should('include', 'login.html')

            //Type username
            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)
            
            //Type password
            cy.get('input[name="user_password"]').clear()
            cy.get('input[name="user_password"]').type(password)

            //Click login button
            cy.get('input[name="submit"]').click()
            cy.get('.alert.alert-error')
            .should('be.visible')
            .and('contain.text', 'Login and/or password are wrong.');
        })
     });
 });