/// <reference types="cypress" />

describe('Commands', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/login.html')
      })
    it('login with fixtures & commands',() => {
        
        cy.fixture("data1").then(data1 => {
            const username = data1.username
            const password = data1.password

            //Type username & Password
            cy.loginbank(username, password)
            
            //Assertion
            cy.get('.alert.alert-error')
            .should('be.visible')
            .and('contain.text', 'Login and/or password are wrong.');
        })
     });
 });