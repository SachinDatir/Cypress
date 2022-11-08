///<reference types="cypress" />
describe('select date from date picker', () => {

    it.skip('date pick examples', () => {
        let date2 = new Date()
        date2.setDate(date2.getDate() + 152)
        let year = date2.getFullYear()
        let Month = date2.getMonth()
        let date = date2.getDate()
        let wmonth1 = date2.toLocaleString("default", { month: "long" });
        let mmonth1 = date2.toLocaleString("default", { month: "short" })
        cy.log(mmonth1)
        cy.log(wmonth1)
        cy.log(year)
        cy.log(Month)
        cy.log(date)

        cy.visit('http://webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()

        function selectMonthAndYear() {
            cy.get('.datepicker-switch').first().then((el) => {
                if (!el.text().includes(year)) {
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }
            }).then(() => {
                cy.get('.datepicker-switch').first().then((el) => {
                    if (!el.text().includes(mmonth1)) {
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }
                })
            })
        }
        function selectFutureDate() {
            cy.contains(date).click()

        }
        selectMonthAndYear()
        selectFutureDate()

    })

    it.only('date pick examples', () => {
        let date = new Date()
        date.setDate(date.getDate()+368)
        let Year = date.getFullYear()
        let month = date.getMonth()
        let DATE = date.getDate()
        let mmonth = date.toLocaleString("Default", { month: "long" })
        //let wmonth = date.toLocaleString("Default", { month: "short" })
        cy.log(mmonth)
        //cy.log(wmonth)
        cy.log(Year)
        cy.log(month)
        cy.log(DATE)

        cy.visit('http://webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()

        function selectMonthAndYear() {
            cy.get('.datepicker-switch').first().then((el) => {
                if (!el.text().includes(Year)) {
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }
            }).then(() => {
                cy.get('.datepicker-switch').first().then((el) => {
                    if (!el.text().includes(mmonth)) {
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }
                })
            })
        }
        function selectFutureDate(){
            cy.contains(DATE).click()
        }
        selectMonthAndYear()
        selectFutureDate()
    })
})



