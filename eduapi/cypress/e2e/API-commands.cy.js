describe('Test with login via API', () => {
    beforeEach(() => {
        cy.loginViaAPI();
    });

    it('Should access the main dashboard', () => {
        cy.url().should('include', '/#!main');
        cy.get('.dashboard').should('be.visible');
    });
});
