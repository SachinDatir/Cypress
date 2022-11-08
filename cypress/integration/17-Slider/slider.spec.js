describe('Slider suit', () => {
    it('verify the title on contact us form', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('a[href="Contact-Us/contactus.html"]').invoke('removeAttr', 'target').click()
        cy.get('h2[name="contactme"]').should('have.text', 'CONTACT US')
        //invoke('removeAttr','target')
        //invoke method is use for jQuery method call()
    })

    it("Slider Test - Built from CSS", () => {
        cy.visit('http://127.0.0.1:5500/cypress/integration/17-Slider/index2.html')
        cy.get('div#slide-2').click({ force: true });
        cy.get('div#slide-3').click({ force: true })
        cy.get('a[href="#slide-1"]').click()
        cy.url().should('include', '#slide-1')
        cy.get('a[href="#slide-2"]').click()
        cy.url().should('include', '#slide-2')
    })

    it.only('Slider Test - input type=range', () => {
        cy.visit('http://127.0.0.1:5500/cypress/integration/17-Slider/index3.html')
        cy.get('#rangeone').invoke('val', '50').trigger('change');
        cy.get('p#one').should('have.text', '50')
        cy.get('#rangetwo').invoke('val', '80').trigger('change')
        cy.get('p#two').should('have.text', '80')
    })
    it('https://testautomationpractice.blogspot.com/', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get("div#slider span").invoke('attr', 'style', 'left:70%;')
    })

})