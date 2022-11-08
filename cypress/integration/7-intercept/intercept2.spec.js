///<reference types="cypress" />

describe('verify the count of user', () => {
    beforeEach(() => {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts"
        }, {
            body: {
                "postId": 2,
                "id": 1,
                "language": "marathi",
                "name": "sachin datir",
                "email": "sdatir83@gmail.com",
                "body": "i am learning javascript cypress"
            }
        }).as('getUsers')

    })

    it('verify the total number of user', function () {
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.contains('/posts').click()
        cy.wait('@getUsers').then(function ({ response, request }) {
            //cy.log(response)
            expect(response.statusCode).to.eql(200)

        })
        cy.get('@getUsers').then(function ({ response }) {
            // cy.log(response)
            expect(response.body).to.have.keys(["postId", "id", "language", "name", "email", "body"])
            expect(response.body.length).to.eq()
        })
    })

    it.only('verify the total number of user', function () {
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', { fixture: "intercept" }).as('getUsers')
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.contains('/posts').click()
        cy.wait('@getUsers').then(function ({ response }) {
            cy.log(response)
            //expect(response.statusCode).to.eq(200)
            expect(response.body).to.have.keys(["postId", "id", "language", "name", "email", "body"])

        })
        // cy.wait('@getUsers').then(function ({ response }) {
        //      cy.log(response)
        //     //expect(response.body.length).to.eq(6)
        // })
    })



})