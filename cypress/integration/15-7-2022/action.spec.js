///<reference types="cypress" />

describe('verify the action drag and drop in cypress',function(){
    it('verify the scroll into view',function(){
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#iframe').scrollIntoView().invoke('removeAttr','target').click()
        cy.url().should('contain','IFrame')
    })
    it('verify the scroll into view',function(){
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click()
        cy.url().should('contain','Actions')
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#draggable').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable').find('p').find('b').should('have.text','Dropped!')
    })

    it.only('verify the scroll into view',function(){
        let dataTransfer = new DataTransfer()
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click()
        cy.url().should('contain','Actions')
        cy.get('#draggable').trigger('dragstart',{DataTransfer})
        cy.get('#draggable').trigger('drop',{DataTransfer})
        cy.get('#droppable').trigger('dragend',{DataTransfer},{force:true})
    })
})