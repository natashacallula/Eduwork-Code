/// <reference types ="cypress" />

describe('Searchbox Test', () => {
    before(()=> {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });
    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('some text {enter}')
        cy.wait(2000);
        cy.get('h2').should('contain.text', 'Search Result')
    });
  })
