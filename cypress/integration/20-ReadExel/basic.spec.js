///<reference types="cypress" />

// https://blog.knoldus.com/reading-data-from-excel-file-cypress/
// ***** How to read the excel data ****

describe('To read the data from thr ecxel file inside the fixture file', () => {
    it('TS01 to read excel data', () => {
        cy.parseXlsx('cypress/fixtures/sample1.xls').then(
            jsonData => {
                console.log(jsonData.data)
            }
        )
    })

    it('read data from xcel', () => {
        cy.parseXlsx('cypress/fixtures/excelData.xlsx').then((jsonData) => {
            const rowLength = Cypress.$(jsonData[0].data).length
            for (let index = 0; index < rowLength; index++) {
                var jsonData = jsonData[index].data
                console.log(jsonData[index].data)
                cy.writeFile("cypress/fixtures/xlsxData.json", { username: jsonData[0][0], password: jsonData[0][1] })
            }
        })
    })
})