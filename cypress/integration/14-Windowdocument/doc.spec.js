///<reference types="cypress" />
describe('verify the title', () => {
    before(() => {
        cy.visit('http://webdriveruniversity.com/')
    })

    it('verify the title of the page', () => {
        cy.document().then((doc) => {
            expect(doc.title).to.contain('WebDriverUniversity.com')
        })
    })
    it('validate height and width of page', () => {
        cy.document().then((doc) => {
            let JQElement = Cypress.$(doc)
            cy.log(JQElement.height())
            cy.log(JQElement.width())
            expect(JQElement.height()).to.be.within(1000, 6000)
            expect(JQElement.width()).to.be.within(100, 1000)
        })
    })
    it('validate height and width of page', () => {
        cy.document().then((doc) => {
            cy.viewport('samsung-note9', 'portrait')
            cy.viewport('samsung-note9', 'landscape')
            cy.viewport(100, 5000, 'landscape')
        })
    })
    // it('verify the title of page', () => {
    //     cy.document().then((doc) => {
    //         //  cy.get(doc)
    //         expect(doc.title).to.eql('WebDriverUniversity.com')
    //     })
    // })
    // it('validate height and width of page', () => {
    //     cy.document().then((doc) => {
    //         let jq = Cypress.$(doc)
    //         cy.log(jq.width())
    //         cy.log(jq.height())
    //     })
    // })
    // it('validate height and width of page', () => {
    //     cy.viewport('samsung-s10', 'portrait')
    //     cy.viewport('samsung-s10', 'landscape')
    //     cy.viewport(1110, 4400, "landscape")
    // })

    // it('verify the cookie with document', () => {
    //     cy.document().then((doc) => {
    //         //cy.log(doc.cookie)
    //         doc.cookie = "minskole = cypress"
    //         // cy.log(doc.cookie)
    //         doc.cookie = "minskole = javascript"
    //         cy.log(doc.cookie)
    //     })
    // })
    // it.only('cookie with document by cypress', () => {
    //     cy.setCookie('python', "selenium")
    //     cy.getCookie('python')
    //     cy.setCookie('javascript', 'cypress')
    //     cy.getCookie('cypress')
    //     cy.clearCookies('python', "selenium", 'javascript', 'cypress')
    // })
})