/// <reference types ="cypress" />

describe('Login & Logout Test', () => {
    beforeEach(()=> {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')

        cy.get('h3').should('contain.text',
            'Our Bank is trusted by over 1,000,000 customers world wide.')
         });

    it('Should display feedback content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')

        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('h3').should('have.text', 'Feedback')
    });

    it('Should display homepage content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')

        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')

        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')

        cy.contains('Online Banking').should('be.visible')
    });

});