///<reference types="cypress" />

describe('select date from date picker', function () {
    it('Date pick - example', function () {
        // let date = new Date()
        // cy.log(date.getMonth())
        // cy.log(date.getFullYear())
        // cy.log(date.getDate())









        let date2 = new Date()
        date2.setDate(date2.getDate() + 1000)
        let year = date2.getFullYear()
        let month = date2.getMonth()
        let date = date2.getDate()
        let wmonth = date2.toLocaleString("Default", { month: 'long' });
        let mmonth = date2.toLocaleString("Default", { month: 'short' });
        cy.log(mmonth)
        cy.log(wmonth)
        cy.log(year)
        cy.log(month)
        cy.log(date)


        // let date3 = new Date()
        // date3.setDate(date3.getDate() + 500)
        // let year = date3.getFullYear()
        // let month = date3.getMonth()
        // let date = date3.getDate()
        // let wmonth1 = date3.toLocaleString("default", { month: 'long' });
        // //let mmonth1 = date3.toLocaleString("Default",{month:'short'});

        // cy.log(wmonth1)
        //cy.log(mmonth1)
        // cy.log(year)
        // cy.log(month)
        // cy.log(date)

        cy.visit('http://webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()

        function selectMonthAndYear() {
            cy.get('.datepicker-switch').first().then(function (el) {
                if (!el.text().includes(year)) {
                    cy.get('.next').first().click()
                    selectMonthAndYear()

                }

            }).then(function () {
                cy.get('.datepicker-switch').first().then(function (el) {
                    if (!el.text().includes(wmonth)) {
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
})