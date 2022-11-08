describe('verify the count ofuser', () => {
    beforeEach(() => {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts"
        }).as('getUsers')
    })

    it('verify the total number of user', () => {
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.contains('/posts').click()
        cy.wait('@getUsers').then(({ response }) => {
            /// cy.log(response)
            expect(response.statusCode).to.eq(200)
        })
        cy.get('@getUsers').then(({ response }) => {
            //  cy.log(response)
            expect(response.statusCode).to.eql(200)
            expect(response.body.length).to.eq(100)
        })
    })
})