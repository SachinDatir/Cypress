///<reference types="cypress" />

describe('verify the UI',()=>{
    it('verify the number of todos',()=>{
        cy.visit('http://localhost:1234/')
        cy.get('.todo').should('have.length',23)
    })

    it('add new todo',()=>{
        let text = 'javascript new'
        cy.visit('http://localhost:1234/')
        cy.get('.new-todo').type(text)
        cy.get('.new-todo').type('{enter}')
        cy.wait(4000)
        cy.reload()
        cy.get('.todo').last().should('have.text',text)
    })
    it('update todo',()=>{
        cy.visit('http://localhost:1234/')
        cy.get('.todo').first().find('div').find('input').click()
        cy.get('.todo').first().should('have.class','completed')
    })

    it.only('delete todo',()=>{
        cy.visit('http://localhost:1234/')
        cy.get('.destroy').first().click({force: true})

    })
})