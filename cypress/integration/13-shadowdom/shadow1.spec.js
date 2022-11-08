///<reference types="cypress" />

describe('validate the shadow dom element', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/cypress/integration/13-shadowdom/index.html')
    })
   
    it('validate the normal input text box', () => {
        cy.get('#channelname').type('sachin').should('have.value', 'sachin')
    })
    it('validate shadow dom element', () => {
        cy.contains('Add Shadow DOM').click()
        cy.get('#shadowHost').shadow().find('h2').should('have.text', 'I belong to Shadow DOM')
    })
    it('validate the input textbox in shadowdom', () => {
        cy.contains('Add Shadow DOM').click()
        cy.get('#shadowHost').shadow().find('#name').type('sachin').should('have.value', 'sachin')
    })
    it('validate the shadowdom element', () => {
        cy.contains('Add Shadow DOM').click()
        cy.get('#shadowHost').then((el) => {
            // cy.log(el)
            let [dom] = el.get()
            expect(dom.shadowRoot.querySelector('h2').textContent).to.equal('I belong to Shadow DOM')
        })
    })
    it.only('validate the input textbox in shadowdom',()=>{
        cy.contains('Add Shadow DOM').click()
        cy.get('h2').first().should('have.text','I belong to Regular/Light Dom')
    })
})