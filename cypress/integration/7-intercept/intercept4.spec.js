///<reference types="cypress" />

import Payload from '../../fixtures/intercept1.json'
describe('Intercept concept', () => {
    it('veify the GetComment API', () => {
        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('GetComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@GetComment').then(({ response, request }) => {
            cy.log(response)
            expect(response.statusCode).to.eq(200)
            expect(response.body.body).contains('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium')
            cy.get('.network-comment').should('have.text', response.body.body)
            cy.log(request)
            expect(request.httpVersion).to.eq('1.1')
        })
    })

    it('verify the post comment', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://jsonplaceholder.cypress.io/comments'
        }).as('PostComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@PostComment').then(({ response, request }) => {
            //   cy.log(response)
            cy.log(request)
            expect(response.statusCode).to.eq(201)
            //   cy.log(response.body.body)
            expect(response.body.body).to.eq("You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE")
            cy.get('.network-post-comment').should('have.text', 'POST successful!')
            expect(request.url).contains("https://jsonplaceholder.cypress.io/comments")
        })
    })


    it('verfy the getcomment by stubbed data:body', () => {
        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }, {
            body: {
                "postId": 1,
                "id": 1,
                "name": "Sachin Datir",
                "email": "Skd@gmail.com",
                "body": "I am learning Intercept"
            }
        }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(({response}) => {
            cy.log(response)
             expect(response.body.email).to.contains('Skd@gmail.com')
            expect(response.body.body).to.contain('I am learning Intercept')
        })
    })




    it('verfy the getcomment by stubbed data:statusCode', () => {
        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }, {
            statusCode:404
        }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
    
    })

    it.only('verfy the getcomment by stubbed data:Fixture data',()=>{
        cy.intercept({
            method:'GET',
            url:'https://jsonplaceholder.cypress.io/comments/1'
        },{
            body:Payload
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then((res)=>{
            cy.log(res.response.body.name)
            //expect(res.body.name).to.contain('Pankaj more')
        })
    })
})