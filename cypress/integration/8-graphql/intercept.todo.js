///<reference types="cypress" />
describe('conditional based', () => {
    it('toggle testcase', () => {
        cy.intercept({
            method: "POST",
            url: "http://localhost:3000/"
        }).as('allToDo')

        cy.visit('http://localhost:1234/')
        cy.wait('@allToDo').then(({ response }) => {
            // cy.log(res)
            let completed = response.body.data.allTodos[0].completed
            if (completed) {
                cy.get('.todo').first().should('have.class', 'completed')
                cy.get('.todo').first().find('.toggle').click()
            }
            else {
                cy.get('.todo').first().should('not.have.class', 'completed')
                cy.get('.todo').first().find('.toggle').click()
            }
        })
    })

})