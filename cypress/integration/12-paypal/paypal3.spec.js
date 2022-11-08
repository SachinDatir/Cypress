//A21AAIooO_jsv0zpvVeb8nluGGCcyhXifXjTBeYs5z5gHHMcddHeaH0Rhv2y8LGrRCNbWOiXWLAGaR2iXjCh8aywdT6MSLofQ

// Basic QVpybzcwV0JNRXRYb25ORWF1QzVYZ0hUYTRZZlVEbDlzN3VBTmtRWGl1ZzhTZGlaa29sUUtNWjRRaFI1UURIMTREeDd6aTIzVWZwZEtZbWc6RUZnR1BsRGxhOHlDbFM4b0F2dkJZV2stRHFRVlRmT2dWNTlWVTdkNXVfWVVOajNFd2hpSUY3M2ZfRzRZUmFNWG9LME0zS2hTaFhVc2RtaEk=

describe('validate the paypal API', () => {
    let token = undefined
    it('validate the generate token API', () => {
        cy.request({
            method: "POST",
            url: 'https://api-m.sandbox.paypal.com/v1/oauth2/token',
            headers: {
                Authorization: "Basic QVpybzcwV0JNRXRYb25ORWF1QzVYZ0hUYTRZZlVEbDlzN3VBTmtRWGl1ZzhTZGlaa29sUUtNWjRRaFI1UURIMTREeDd6aTIzVWZwZEtZbWc6RUZnR1BsRGxhOHlDbFM4b0F2dkJZV2stRHFRVlRmT2dWNTlWVTdkNXVfWVVOajNFd2hpSUY3M2ZfRzRZUmFNWG9LME0zS2hTaFhVc2RtaEk="
            },
            body: {
                grant_type: "client_credentials"
            },
            form: true

        }).then((res) => {
            cy.log(res)
            token = res.body.access_token
            cy.log(res.body.access_token)
            expect(res.status).to.eql(200)
        })
    })

    it('validate the get token API', () => {
        cy.request({
            method: 'GET',
            url: 'https://api-m.sandbox.paypal.com/v2/invoicing/invoices?total_required=true',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic QVpybzcwV0JNRXRYb25ORWF1QzVYZ0hUYTRZZlVEbDlzN3VBTmtRWGl1ZzhTZGlaa29sUUtNWjRRaFI1UURIMTREeDd6aTIzVWZwZEtZbWc6RUZnR1BsRGxhOHlDbFM4b0F2dkJZV2stRHFRVlRmT2dWNTlWVTdkNXVfWVVOajNFd2hpSUY3M2ZfRzRZUmFNWG9LME0zS2hTaFhVc2RtaEk="
            },
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.duration).to.be.within(100, 2000)
            expect(res.body).to.have.keys(["total_items", "total_pages"])
        })
    })
})