describe('Update Data User', () => {
    it('Sucessfully update data user', () => {
        var user = {
            "name" : "Loid Forger",
            "job" : "Psychiatrist"
         }
         
        cy.request ('PUT','https://reqres.in/api/users/2',user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)
        })
    })
})