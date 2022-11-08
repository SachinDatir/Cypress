///<reference types="cypress" />
describe('Window command', () => {
    // before(() => {
    //     cy.visit('http://webdriveruniversity.com/')
    // })
    it.skip('verify location property of window', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.window().then((win) => {
            cy.log(win)
            expect(win.location.hash).to.eq('')
            expect(win.location.host).to.eq('webdriveruniversity.com')
            expect(win.location.href).to.eq('http://webdriveruniversity.com/')
            expect(win.innerHeight).to.eq(660)
            expect(win.isSecureContext).to.eq(false)
            expect(win.GoogleAnalyticsObject).to.eq('ga')
        })
    })

    it('verify reload of window', () => {
        cy.visit('http://webdriveruniversity.com/')
        //  cy.reload()
        cy.window().then((win => {
            win.location.reload()
        }))
    })

    it.only('Window - navigation commands', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').click()
        cy.get('.maintext').should('have.text', 'Makeup')
       
        cy.window().then((win) => {
            win.history.forward()
            cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=36_39"]').should('contain', 'Eyes')
            // win.history.go(-1)
            // cy.url().should('eq', 'https://automationteststore.com/')
        })
        cy.window().then((win) => {
            // win.history.back()
            win.history.go(-1)
            cy.url().should('eq', 'https://automationteststore.com/')
        })
    })


})