///<reference types="cypress" />
describe('window comands', () => {
    it('verify location property of window', () => {
        cy.visit('https://automationteststore.com/')
        cy.window().then((wind) => {
            //cy.log(win.location)
            expect(wind.location.href).to.eq('https://automationteststore.com/')
            expect(wind.location.pathname).to.eq('/')
            expect(wind.location.protocol).to.eq('https:')
            expect(wind.location.host).to.eq('automationteststore.com') //base url

        })
    })

    //reload()===>it refresh browser

    //should autumatically retrive
    it('verify location.reload of window', () => {
        cy.window().then((win) => {
            win.location.reload()
        })

        //cy.reload ==>by cypress method
    })
    it('verify location property of window', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=52"]').click()
        cy.get('.maintext').should('contain', 'Hair Care')
        cy.window().then((win) => {
            win.history.back()
            // cy.history.go(-1)
            cy.url().should('eq', 'https://automationteststore.com/')
        })
        cy.window().then((win) => {
            win.history.forward()
            cy.get('.maintext').should('contain', 'Hair Care')
        })
    })

    
    //by direct cypress method call====>
    it('verify location property of window', () => {
        cy.visit('https://automationteststore.com/')
        cy.hash().should('eq', '')
        cy.location('href').should('eq', 'https://automationteststore.com/')
        cy.location('pathname').should('eq', '/')
        cy.location('host').should('eq', 'automationteststore.com')
        cy.location('protocol').should('eq', 'https:')
    })
    it('verify location property of window', () => {
        cy.visit('https://automationteststore.com/')
    })
    it.only('verify location property of window', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=58"]').click()
        cy.get('.maintext').should('contain', 'Men')
        cy.go('back')
        cy.url().should('eq', 'https://automationteststore.com/')
        cy.go('forward')
        cy.get('.maintext').should('contain', 'Men')
    })
})