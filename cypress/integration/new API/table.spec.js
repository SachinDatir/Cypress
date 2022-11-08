// beforeEach(function () {
//     cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
// })



// describe('verify the table', function () {
//     it('verify the addition value for the table', function () {
//         let sum = 0
//         cy.get('#t01').find('tr').each(function (row, index) {
//             if (index != 0) {
//                 sum = sum + Number(row.children().last().text())
//             }
//         }).then(function () {
//             expect(sum).to.eq(159)
//         })
//     })

//     it('verify the addition value for the table', function () {
//         let sum = 0
//         cy.get('#t02').find('tr').each(function (row, index) {
//             if (index != 0) {
//                 sum = sum + Number(row.children().last().text())
//             }

//         }).then(function () {
//             expect(sum).to.eq(163)
//         })
//     })
// })

beforeEach(function () {
    cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
})
describe('to check checkboxes and radiobutton functionality', () => {
it('TC-01 by using check',()=>{
    cy.get('input[value="red"]').check().should('be.checked')
    cy.get('input[value="red"').uncheck().should('not.be.checked')
})
})