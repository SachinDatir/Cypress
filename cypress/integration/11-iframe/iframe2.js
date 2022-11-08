///<reference types="cypress" />

describe('verify the iframe element in cypress', () => {

    beforeEach(() => {
        cy.visit('http://webdriveruniversity.com/IFrame/index.html')
    })
    let getIframeBody = function (id) {
        return cy.get(`#${id}`)
            .its('0.contentDocument.body').should('not.be.empty')
            .then(cy.wrap)
    }

    it.skip('verify the iframe element by choosing javascript', () => {
        cy.get('#frame').then((iframe) => {
            let body = iframe[0].contentDocument.body
            cy.wrap(body).as('bdyI')
            cy.get('@bdyI').find('a[href ="index.html"]').should('have.text', 'Home')
        })
    })

    it.skip('verify the iframe element by choosing javascript', () => {
        cy.get('#frame').then((iframe) => {
            let body = iframe[0].contentDocument.body
            cy.wrap(body).as('bdyI')
            cy.get('@bdyI').find('a[href ="products.html"]').should('have.text', 'Our Products')
        })
    })

    it.skip('verify the iframe element by choosing javascript', () => {
        cy.get('#frame').then((iframe) => {
            let body = iframe[0].contentDocument.body
            cy.wrap(body).as('bdyI')
            cy.get('@bdyI').find('a[href ="../Contact-Us/contactus.html"]').should('have.text', 'Contact Us')
        })
    })


    it.skip('verify the iframe element by choosing jQuery', () => {
        cy.get('#frame').then(($iframe) => {
            let body = $iframe.contents().find('body')
            cy.wrap(body).as('bdyI')
            cy.get('@bdyI').find('a[href ="../Contact-Us/contactus.html"]').should('have.text', 'Contact Us')
        })
    })

    it('to verify the iframe element by getIframeBody', () => {
        getIframeBody('frame').then(function (body) {
            cy.wrap(body).as('body')
            cy.get('@body').find('#frame').should('have.text', "Home")
        })
    })
    it.only('TC-04 iframe using external Plugin',()=>{
        cy.frameLoaded('#frame')
        cy.iframe('#frame').find('a[href ="../Contact-Us/contactus.html"]')
    })
})