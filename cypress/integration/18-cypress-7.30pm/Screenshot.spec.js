///<reference types="cypress" />
//describe('to learn screenshot functionality', () => {
// beforeEach(()=>{
//     cy.visit('https://www.flipkart.com/')
// })
// it('TC-1 to take screenshot of firstpage',()=>{
//     cy.screenshot('flipkart')
// })
// it('TC-2 to take  screenshot of clipped image',()=>{
//    cy.screenshot('flipcartClip'),{clip:{x:12,y:13,width:300,heigth:200}}
//     cy.screenshot('flipkart3',{capture:"fullPage"})
//     cy.screenshot('flipkart4',{capture:"viewport"})
//      cy.screenshot('flipkart5',{capture:"runner"})
// })
// it.only('TC-1 to take screenshot of firstpage',()=>{
// cy.get('._3-PJz-').screenshot('flipkart6')
// })
//})

// describe('to learn screenshot functionality', () => {
//     beforeEach(() => {
//         cy.visit('https://www.amazon.in/')
//     })
//     it('TC-1 to take screenshot of firstpage', () => {
//         cy.screenshot('amazon')
//     })
//     it('TC-2 to take  screenshot of clipped image', () => {
//         cy.screenshot('amazonClip'), { clip: { x: 12, y: 13, width: 300, heigth: 200 } }
//         cy.screenshot('amazon3', { capture: "fullPage" })
//         cy.screenshot('amazon4', { capture: "viewport" })
//         cy.screenshot('amazon5', { capture: "runner" })
//     })
//     it.only('TC-1 to take screenshot of firstpage', () => {
//         cy.get('[aria-label="Amazon"]').screenshot('amazon6')
//     })


// })

describe('',()=>{
    beforeEach(()=>{
        cy.visit('https://www.snapdeal.com/')
    })
    it('',()=>{
        cy.screenshot('snapdeal')
    })
       it('TC-2 to take  screenshot of clipped image', () => {
        cy.screenshot('snapdealClip'), { clip: { x: 12, y: 13, width: 300, heigth: 200 } }
        cy.screenshot('snapdeal3', { capture: "fullPage" })
        cy.screenshot('snapdeal4', { capture: "viewport" })
        cy.screenshot('snapdeal5', { capture: "runner" })
    })
    it.only('',()=>{
        cy.get('[title="Snapdeal"]').eq(0).screenshot('snapdeal6')
    })

})