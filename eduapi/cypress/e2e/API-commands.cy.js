describe('Test with login via API', () => {
    beforeEach(() => {
        cy.loginViaAPI();
    });

    it('Should access the main dashboard', () => {
        cy.url().should('include', '/#!main');
        cy.get('#dashboard').should('be.visible'); 
    });

    it('Should have session cookies set', () => {
        // Memastikan cookies telah ter-set setelah login via API
        cy.getCookie('sessionID').should('exist');
        cy.getCookie('userId').should('exist');
        cy.getCookie('userName').should('exist');
    });
});
