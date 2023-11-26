///<reference types="cypress" />
import data from '../../fixtures/details.json'

describe('', function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('Using fixture by import', () => {
        cy.fixture('details').then((data) => {
            cy.log(data)
            //cy.visit('https://www.kesari.in/')
           
        })
    })
})