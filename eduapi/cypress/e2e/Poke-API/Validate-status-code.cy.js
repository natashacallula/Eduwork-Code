/// <reference types= "cypress"/>
describe('Validate Status Code Automation API', () => {
    it('Successfully validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
        cy.get('@ditto').its('status').should('equal', 200)
    });

    it('Successfully validate status code with params', () => {
        cy.request({
            method: 'GET',
            url : 'https://reqres.in/api/users?pages=2&per_pages=1&delay=3'
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    });
})