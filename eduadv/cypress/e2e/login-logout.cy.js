/// <reference types ="cypress" />

describe('Login & Logout Test', () => {
    beforeEach(()=> {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    });
    it('Should try to login with invalid data', () => {
        cy.fixture("bank").then(bank => {
            const invalidusername = bank.inuser
            const invalidpassword = bank.inpass

            cy.get('#login_form').should('be.visible')
            cy.get('#user_login').type(invalidusername)
            cy.get('#user_password').type(invalidpassword)
            cy.get('input[name="submit"]').click()

            cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
        })
    });

    it('Should try to login with valid data', () => {
        cy.fixture("bank").then(bank => {
            const validusername = bank.user
            const validpassword = bank.pass
            
            cy.get('#login_form').should('be.visible')

            cy.loginbank(validusername, validpassword)

            //Assertion
            cy.get('h2').should('contain.text', 'Cash Accounts')
        })
    });

    it('Should logiut from the application', () => {
        cy.fixture("bank").then(bank => {
            const validusername = bank.user
            const validpassword = bank.pass

            cy.get('#login_form').should('be.visible')
            
            cy.loginbank(validusername, validpassword)

            cy.get('h2').should('contain.text', 'Cash Accounts')

            cy.contains('username').click()
            cy.get('#logout_link').click()

            cy.get('#signin_button').should('be.visible')
        })
    });
    
  })