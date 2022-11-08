///<reference types="cypress" />

describe('Validate the kesari tours', () => {
    beforeEach(() => {
        cy.visit('https://www.kesari.in/')
    })

    it.skip('Validate the each tab link', () => {
        let arr = []
        cy.get('#main-menu>ul>li').find('a:first').each((el) => {
            let href = el.attr('href')
            //    cy.log(href)
            arr.push(href)
        })
            .then(() => {
                cy.get('#main-menu>ul>li').each((ele, index) => {
                    let text = ele.find('a:first')
                    // cy.log(text)
                    if (text.attr('href').startsWith('/')) {
                        cy.wrap(text).click({ force: true })
                        cy.url().should('contain', arr[index])
                    }
                })
            })
    })
    it('Validate URl using click on each tab', () => {
        let response = ["/Group-Tours", "/Speciality-Tours", "/Speciality-Tours/Low-Price-Tours",
            "/Tailor-Made", "http://www.kesarimice.in", "/kesari-forex", "/visa", "/cruises", "/Deals", "/About-Us"]
        cy.visit('https://www.kesari.in/')
        cy.get('nav[id="main-menu"]').find('ul:first').children().each((el) => {
              let text = el.find('a').first()
              if(text.attr('href').startsWith('/')){
                cy.wrap(text).click({force:true})
                cy.url().should('contain',response[index])
              }
        })
    })
    //     it('Validate the each tab link', () => {
    //         let arr = []
    //         cy.get('#main-menu>ul>li').find('a:first').each((el) => {
    //             let href = el.attr('href');
    //             // cy.log(href)
    //             arr.push(href)
    //         })
    //             .then(() => {
    //                 cy.get('#main-menu>ul>li').each((ele, index) => {
    //                     let text = ele.find('a:first')
    //                     // cy.log(text)
    //                     if (text.attr('href').startsWith('/')) {
    //                         cy.wrap(text).click({ force: true })
    //                         cy.url().should('contain', arr[index])
    //                         cy.go('back')
    //                     }
    //                 })
    //             })
    //     })
})
