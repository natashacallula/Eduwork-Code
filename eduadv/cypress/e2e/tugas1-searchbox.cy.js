/// <reference types ="cypress" />

describe('Searchbox Test', () => {
    beforeEach(()=> {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('Should type into the search box, submit, and then verify the assertion -1' , () => {
        cy.get('#searchTerm').type('Online{enter}')
        cy.wait(2000);
        cy.get('a[href="/online-banking.html"]')
        .should('contain.text', 'Zero - Free Access to Online Banking');
    });

    it('Should type into the search box, submit, and then verify the assertion -2' , () => {
        cy.get('#searchTerm').type('Online{enter}')
        cy.wait(2000);
        cy.get('a[href="/bank/online-statements.html"]')
        .should('contain.text', 'Zero - Online Statements');
    });

    it('Should type into the search box, submit, and then verify the assertion -3' , () => {
        cy.get('#searchTerm').type('Online{enter}')
        cy.wait(2000);
        cy.get('a[href="/online-banking.html"]')
        .should('contain.text', 'Zero - Free Access to Online Banking')
        cy.get('a[href="/bank/online-statements.html"]')
        .should('contain.text', 'Zero - Online Statements');
    });
  })
