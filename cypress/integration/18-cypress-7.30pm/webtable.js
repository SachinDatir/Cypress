

describe('to learn handling web table', () => {
    it('table1 functionality', () => {
        let sum = 0
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
        cy.get('#t01>tbody').find('tr').each((el, i) => {
            if (i != 0) {
                let text = (el.children().last()).text()
                cy.log(text)
                sum = sum + Number(text)    //0 + 27 //27 + 56 //27+56 +80
            }
        }).then(function () {
            cy.log(sum)
            expect(sum).to.eql(159)
        })
    })

    it('table2 functionality', () => {
        let sum2 = 0
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t02>tbody').find('tr').each((el, index) => {
            if (index != 0) {
                let text = (el.children().last()).text()
                cy.log(text)
                sum2 = sum2 + Number(text)
            }
        }).then(() => {
            cy.log(sum2)
            expect(sum2).to.greaterThan(162)
        })

    })

})

describe('', () => {
    Cypress.on('uncaught:exception', () => {
        return false
    })
    it('', () => {
        cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')
        cy.get('#customers>tbody').find('tr').each((el, i) => {
            if (i != 0) {
                let sachin = (el.children()).text()
                cy.log(sachin)
            }
        })
    })
    it.only('', () => {
        let company = []
        cy.visit('https://www.techlistic.com/p/demo-selenium-practice.html')
        cy.get('#customers>tbody').find('tr').each((el, i) => {
            if (i != 0) {
                cy.get('#customers>tbody>tr').eq(i).find('td').eq(0).invoke(text).then((text)=>{
                    company.push(text)
                })
            }
            cy.log(company)
        })
    })
})