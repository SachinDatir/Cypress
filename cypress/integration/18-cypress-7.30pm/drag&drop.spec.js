///<reference types="cypress" />
describe('To learn drag and drop functionality', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    beforeEach(() => {
        cy.visit('https://demo.anhtester.com/drag-and-drop-demo.html')
    })
    // it('TC-01 To verify drag & drop using trigger', () => {
    //     let dataTransfer = new DataTransfer()
    //     cy.get('#todrag>span').first().trigger('dragstart', { dataTransfer })
    //     cy.get('#mydropzone').trigger('drop', { dataTransfer })
    //     cy.get('#todrag>span').first().trigger('dragend', { dataTransfer })
    //     cy.get('#todrag>span').eq(2).trigger('dragend', { dataTransfer })
    //     cy.get('#droppedlist').should('contain', 'Draggable 1')
    //     cy.get('#todrag>span').should('have.length', 2)
    // })
    it('TC-03 To scroll to a particular element', () => {
        cy.get('.footer > div > div > h4').eq(0).scrollIntoView()
    })

    it('TC-02To verify drag & drop using trigger', () => {
        let dataTransfer = new DataTransfer()
        cy.get('#todrag>span').eq(3).trigger('dragstart', { dataTransfer })
        cy.get('#mydropzone').trigger('drop', { dataTransfer })
        cy.get('#todrag>span').eq(3).trigger('dragend', { dataTransfer })
        cy.get('#droppedlist').should('contain', 'Draggable 4')
        cy.get('#todrag>span').should('have.length', 3)

    })

})