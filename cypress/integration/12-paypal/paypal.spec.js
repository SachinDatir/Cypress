///<reference types="cypress" />
//https://developer.paypal.com/api/rest/authentication/

//Basic QWNLWTRoWjdNY0JVNFRPSzFGLURmQXJ4N3RBUmdhTHMwSlp4TVdUY0s3ZkgwbW9BdW16WlRQWW5rS2NjaGFRNEUyQ3RuRFlPSS1tcWZ6X0Y6RUQxeHdGTXcwVXptdy02QWhxTVNmdjBjRnh3bWgybTl3V0drLVMyVE4zcmZURWlHUnlvTDBwZkp6OE05S2xZcldSSGtWMHpsM2E4WTVMUlY=

describe('validate the paypal API', () => {
    let token = undefined
    it('validate the Generate token API', () => {
        cy.request({
            method: "POST",
            url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
            headers: {
                Authorization: "Basic QWNLWTRoWjdNY0JVNFRPSzFGLURmQXJ4N3RBUmdhTHMwSlp4TVdUY0s3ZkgwbW9BdW16WlRQWW5rS2NjaGFRNEUyQ3RuRFlPSS1tcWZ6X0Y6RUQxeHdGTXcwVXptdy02QWhxTVNmdjBjRnh3bWgybTl3V0drLVMyVE4zcmZURWlHUnlvTDBwZkp6OE05S2xZcldSSGtWMHpsM2E4WTVMUlY="
            },
            body: {
                grant_type: 'client_credentials'
            },
            form: true
        }).then((res) => {
            //cy.log(res)
            token = res.body.access_token
            cy.log(res.body.access_token)
        })
    })

    it.only('validate the GET invoice API', () => {
        cy.request({
            method: "GET",
            url: " https://api-m.sandbox.paypal.com/v2/invoicing/invoices?total_required=true ",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic QWNLWTRoWjdNY0JVNFRPSzFGLURmQXJ4N3RBUmdhTHMwSlp4TVdUY0s3ZkgwbW9BdW16WlRQWW5rS2NjaGFRNEUyQ3RuRFlPSS1tcWZ6X0Y6RUQxeHdGTXcwVXptdy02QWhxTVNmdjBjRnh3bWgybTl3V0drLVMyVE4zcmZURWlHUnlvTDBwZkp6OE05S2xZcldSSGtWMHpsM2E4WTVMUlY="
            }
        }).then((res) => {
            // cy.log(res)
           expect(res.status).to.eql(200)
           expect(res.duration).to.be.within(100,1000)
           expect(res.body).to.have.keys(["total_pages","total_items"])
        })
    })
})