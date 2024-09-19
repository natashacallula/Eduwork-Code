/// <reference types="cypress" />

describe('Pokemon API Tests', () => {
    it('Should get data for Ditto from Pokemon API', () => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto')
            .then((response) => {
                expect(response.status).equal(200);

                // Assert that the response body contains specific data
                expect(response.body.name).equal('ditto');
                expect(response.body.id).equal(132);
                expect(response.body.base_experience).equal(101);

                // Assert that the types array contains 'normal' as a type
                expect(response.body.types[0].type.name).equal('normal');

                // Assert that the height & weight is a number greater than 0
                expect(response.body.height).to.be.a('number').and.be.greaterThan(0);
                expect(response.body.weight).to.be.a('number').and.be.greaterThan(0);
            });
    });
});
