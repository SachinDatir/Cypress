describe('to learn calender functionality', () => {
    it.only('date pick examples', () => {
        let date = new Date()
        date.setDate(date.getDate() + 1000)
        let Year = date.getFullYear()
        let month = date.getMonth()
        let DATE = date.getDate()
        //let mmonth = date.toLocaleString("Default", { month: "long" })
        let wmonth = date.toLocaleString("Default", { month: "short" })//convert into string
        // cy.log(mmonth)
        cy.log(wmonth)
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
                    if (!el.text().includes(wmonth)) {
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }
                })
            })
        }
        function selectFutureDate() {
            cy.contains(DATE).click()
        }
        selectMonthAndYear()
        selectFutureDate()
    })
})




