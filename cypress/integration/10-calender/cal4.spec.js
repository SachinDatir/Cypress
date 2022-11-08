///<reference types="cypress" />
describe('', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    it('', () => {

        let todayDate = new Date()
        let date = todayDate.getDate()
        todayDate.setDate(todayDate.getDate() + 30)
        let month = todayDate.getMonth()
        let Year = todayDate.getFullYear()
        let Mmonth = todayDate.toLocaleString('default', { month: 'long' })

        cy.log(Mmonth)
        cy.log(todayDate)
        cy.log(date)
        cy.log(month)
        cy.log(Year)



        cy.visit('https://demo.automationtesting.in/Datepicker.html')
        cy.get('[class="imgdp"]').click()
        function selectMonthAndYear() {
            cy.get('.ui-datepicker-title').then((el) => {
                if (!el.text().includes(Year)) {
                    cy.get('[title="Next"]').click()
                    selectMonthAndYear()
                }
            })
            cy.get('.ui-datepicker-title').then((el) => {
                if (!el.text().includes(Mmonth)) {
                    cy.get('[title="Next"]').click()
                    selectMonthAndYear()
                }
            })
            function setDate() {
                cy.contains(date).click({ force: true })
            }
            setDate()
        }
        selectMonthAndYear()
    })

    it.only('TC-02 To verify particular date before currentdate is Selecting', () => {
        let caldata = new Date()
        let date = caldata.getDate()
        caldata.setDate(date - 1500)
        let date1 = caldata.getDate()
        let month = caldata.getMonth()
        let year = caldata.getFullYear()
        cy.log(caldata)
        cy.log(date)
        cy.log(month)
        cy.log(year)
        cy.log(date1)
        let smonth = caldata.toLocaleString('default', { month: 'short' })
        cy.log(smonth)

        cy.visit('https://demo.automationtesting.in/Datepicker.html')
        cy.get('[class="imgdp"]').click()
        function selectMonthAndYear() {
            cy.get('[class="ui-datepicker-title"]').then((el) => {
                if (!el.text().includes(year)) {
                    cy.get('[title="Prev"]').click()
                    selectMonthAndYear()
                }
            })
            cy.get('[class="ui-datepicker-title"]').then((el) => {
                if (!el.text().includes(year)) {
                    cy.get('[title="Prev"]').click()
                    selectMonthAndYear()
                }
            })
            function setDate() {
                cy.contains(date1).click({ force: true })
            }
            setDate()
        }
        selectMonthAndYear()
    })
})