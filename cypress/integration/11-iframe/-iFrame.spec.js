///<reference types="cypress" />

describe(' verify the iframe elementin cypress', () => {

    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
    })


    let getIframeBody = function (id) {
        return cy.get(`#${id}`)
            .its('0.contentDocument.body').should('not.be.empty')
            .then(cy.wrap)
    }
    it('to verify the iframe element by using javascript', () => {

        cy.get('#frame').then((iframe) => {
            let body = iframe[0].contentDocument.body
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('a[href="index.html"]').should('contain', 'Home')
        })
    })
    it('verify the iframe element by jquery method', () => {
        cy.get('#frame').click().then(($iframe) => {
            let body = $iframe.contents().find('body')
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('a[href="products.html"]').should('contain', 'Our Products')
        })

    })

    it.only('to verify the iframe element by getIframeBody', () => {
        getIframeBody('frame').then(function (bdy) {
            cy.wrap(bdy).as('body')
            cy.get('@body').find('a[href ="../Contact-Us/contactus.html"]').should('have.text', 'Contact Us')
        })
    })
})