describe('Delete Data User', () => {
    it('Sucessfully delete data user', () => {
        cy.request ('DELETE','https://reqres.in/api/users/2').then((response) => {
            expect(response.status).equal(204);
            expect(response.body).to.be.empty;    
            expect(response.headers['content-length']).to.equal('0');
        })
    })
})