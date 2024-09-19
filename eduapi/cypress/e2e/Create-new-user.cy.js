describe('Create New User', () => {
    it('Sucessfully create new user', () => {
        var user = {
            "name" : "Loid Forger",
            "job" : "SPY"
         }
         
        cy.request ('POST','https://reqres.in/api/users',user).then((response) => {
            expect(response.status).equal(201)
        })
    })
})