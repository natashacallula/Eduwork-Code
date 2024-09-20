/// <reference types="cypress" />

describe('Pokemon API Tests', () => {
    it('Should get data for Ditto from Pokemon API', () => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto')
            .then((response) => {
                expect(response.status).equal(200);

                // Assert that the types array
                expect(response.body.abilities[0].ability.name).to.eq('limber');
                expect(response.body.abilities[0].ability.url).to.eq('https://pokeapi.co/api/v2/ability/7/');
            });
    });
});