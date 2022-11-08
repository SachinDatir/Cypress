///<reference types="cypress" />

import payload from '../../fixtures/intercept.json'
describe('verify the intercept concept', function () {
    it('verify the get comment functionality', function () {
        cy.intercept({
            "method": "GET",
            "url": "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function ({ response, request }) {
            // cy.log(response)
            cy.log(request)
            expect(response.statusCode).to.eql(200)
            cy.get('.network-comment')
                .should('have.text', response.body.body)
        })
    })

    it('verify the post comment functionality', function () {
        cy.intercept({
            "method": "POST",
            "url": "https://jsonplaceholder.cypress.io/comments"
        }).as('postComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@postComment').then(function ({ response, request }) {
            // cy.log(response)
            cy.log(request)
            expect(response.statusCode).to.eql(201)
            cy.get('.network-post-comment')
                .should('have.text', 'POST successful!')
        })
    })




    it('verify the put comment functionality', function () {
        cy.intercept({
            "method": "PUT",
            "url": " https://jsonplaceholder.cypress.io/comments/1"
        }).as('putComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@putComment').then(function ({ response, request }) {
            //cy.log(response)
            cy.log(request)
            expect(response.statusCode).to.eql(200)

            cy.get('.network-put-comment')
                .should('contain', '')
        })
    })

    it('verify the getComment API with stubbed data :body', function () {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }, {
            statusCode: 200,
            body: {
                "postId": 2,
                "id": 1,
                "language": "marathi",
                "name": "sachin datir",
                "email": "sdatir83@gmail.com",
                "body": "i am learning cypress"
            }
        }).as('getComment')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
    })

    it('verify the getComment API with stubbed data :status code', () => {
        cy.intercept({
            url: "https://jsonplaceholder.cypress.io/comments/1",
            method: "GET",
        }, {
            statusCode: 404
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
    })

    it.only('verify the getComment API with stubbed data :body using fixture', function () {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }, {
            statusCode: 200,
            body: payload
        }).as('getComment')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
    })

})