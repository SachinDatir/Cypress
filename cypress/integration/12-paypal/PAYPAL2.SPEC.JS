///<reference types="cypress" />

//Basic QWF0RWJSUnlJT2hnd2ctWDRXc3hZVGtZOVZPNUN1WElRc3hYaFpBR25Oa2FXMGpCSDJETzlyRWxhUDRkanMyT1BOTzdMemktV0dyNmlWT2s6RUV1TDhsYnJkekJyM1JLYnQzU1FDb2pEajFiRHRhV0tRaWU5WW1vWk5XUnNuNW5jS2RBYzk2VkZ4YUxCSmZvcmRwSTJPN3pfQUwxZnBXcng=

describe('validate the paypal API', () => {
    token = undefined
    it('validate the generate token API', () => {
        cy.request({
            method: "POST",
            url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
            headers: {
                Authorization: "Basic QWF0RWJSUnlJT2hnd2ctWDRXc3hZVGtZOVZPNUN1WElRc3hYaFpBR25Oa2FXMGpCSDJETzlyRWxhUDRkanMyT1BOTzdMemktV0dyNmlWT2s6RUV1TDhsYnJkekJyM1JLYnQzU1FDb2pEajFiRHRhV0tRaWU5WW1vWk5XUnNuNW5jS2RBYzk2VkZ4YUxCSmZvcmRwSTJPN3pfQUwxZnBXcng="
            },
            body: {
                grant_type: "client_credentials"
            },
            form: true
        }).then((res) => {
            //cy.log(res)
            token = res.body.access_token
            cy.log(res.body.access_token)
        })
    })

    it.only('validate get invoice api', () => {
        cy.request({
            method: "GET",
            url: "https://api-m.sandbox.paypal.com/v2/invoicing/invoices?total_required=true",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic QWF0RWJSUnlJT2hnd2ctWDRXc3hZVGtZOVZPNUN1WElRc3hYaFpBR25Oa2FXMGpCSDJETzlyRWxhUDRkanMyT1BOTzdMemktV0dyNmlWT2s6RUV1TDhsYnJkekJyM1JLYnQzU1FDb2pEajFiRHRhV0tRaWU5WW1vWk5XUnNuNW5jS2RBYzk2VkZ4YUxCSmZvcmRwSTJPN3pfQUwxZnBXcng="
            },
        }).then((res) => {
            //cy.log(res)
            expect(res.status).to.eql(200)
            expect(res.duration).to.be.within(100, 1000)
            expect(res.body).to.have.keys(["total_pages", "total_items"])
        })
    })

    it('validate PUT invoice api',()=>{
        cy.request({
            method:"PUT",
            url:""
        })
    })
})