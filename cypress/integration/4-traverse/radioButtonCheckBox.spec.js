///<reference types="cypress" />




describe('verify the functionality of checkbox,radio button and Drop down', function () {

    beforeEach(function () {
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })


    it('verify the functionality for the checkBox', function () {
        cy.get('input[value="option-3"]').should('be.checked')
    })



    it('verify the functionality for the checkBox ', function () {
        cy.get('input[value="option-1"]').click().should('be.checked')
        cy.get('input[value="option-1"]').click().should('be.not.checked')
    })

    it('verify the functionality for the checkBox with check() uncheck()', function () {
        cy.get('input[value="option-2"]').check().should('be.checked')
        cy.get('input[value="option-2"]').uncheck().should('be.not.checked')
    })


    it('verify the functionality to multiple checkboxes', function () {
        cy.get('#checkboxes').find('input[type="checkbox"]').each(function (el) {
            cy.wrap(el).check().should('be.checked')
            cy.wrap(el).uncheck().should('not.be.checked')
        })
    })
    it('verify the functionality to multiple checkboxes', function () {
        cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-3', 'option-4'])
        cy.get('input[type="checkbox"]').uncheck(['option-1', 'option-2', 'option-3', 'option-4'])

    })


    it('verify the functionality for radio with click', function () {
        cy.get('input[value="green"]').click().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')

    })

    it('verify the functionality for all radio with buttons', function () {
        cy.get('#radio-buttons').find('input').each(function (el) {
            cy.wrap(el).check().should('be.checked')
        })
        cy.get('#radio-buttons').first().should('not.be.checked')

    })

    //we can select dropdown values y text andby value attribute
    // conventional drop  and the select method will work if the tag select 


    it('verify the functionality for all dropdown buttons', function () {
        cy.get('#dropdowm-menu-1').select('python').should('have.value', 'python')
        cy.get('#dropdowm-menu-1').select('JAVA').should('have.value', 'java')
        cy.get('#dropdowm-menu-2').select('Eclipse').should('have.value', 'eclipse')
        cy.get('#dropdowm-menu-2').select('TestNG').should('have.value', 'testng')


        cy.get('#dropdowm-menu-1').select('sql').should('have.contain', 'SQL')
    })

    it('verify the selection for all dropdown', function () {
        let selectValues = ['java', 'maven', 'html']
        cy.get('.section-title').first().children().each(function (el, index) {
            cy.wrap(el).select(selectValues[index]).should('have.value', selectValues[index])
        })

    })

    it('verify the functionality to whether the element enable or disable', function () {
        cy.get('input[value="cabbage"]').should('be.disabled')
    })
    it.only('verify the whether the dropdown value is disable', function () {
        cy.get('#fruit-selects').children().filter('option[disabled="disabled"]')
        .should('have.text', 'Orange').should('be.disabled')
    })


})

