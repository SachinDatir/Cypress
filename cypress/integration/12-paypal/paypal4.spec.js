//A21AAKVBq6-jDD1qe4kYUtrzxnLgRnMQZ8Cti6o8CEtwZ4jg7J2PgUEVQTcOF6renjBpnl5r-yLp7fz7SGVwyif0HZCXy27_A

// Basic QWJZUDlyNnNua0FTR1otYl90MVAtM2R2cG9qaXpmdHJSMGY3U2wtNkdQbl9ma3RYbWJsa3pBc0dkeFZ0aDdHYlZsRHFzdlMwMWRYQUNteEY6RUpES3hab3NMU1NpTmNHSDdDWnh4a2RnX0tfOVpGYUFYSThmR05RVDRpbWgzYk1VT1oyMk5pNjRsNlFvMzJJWTlsVUh0UkFMTTdlZ0JwZlQ=


describe('validate the paypal API', () => {
    let token = undefined
    it('validate the generate token API', () => {
        cy.request({
            method: 'POST',
            url: 'https://api-m.sandbox.paypal.com/v1/oauth2/token',
            headers: {
                Authorization: "Basic QWJZUDlyNnNua0FTR1otYl90MVAtM2R2cG9qaXpmdHJSMGY3U2wtNkdQbl9ma3RYbWJsa3pBc0dkeFZ0aDdHYlZsRHFzdlMwMWRYQUNteEY6RUpES3hab3NMU1NpTmNHSDdDWnh4a2RnX0tfOVpGYUFYSThmR05RVDRpbWgzYk1VT1oyMk5pNjRsNlFvMzJJWTlsVUh0UkFMTTdlZ0JwZlQ=",
            },
            body: {
                grant_type: "client_credentials"
            },
            form: true
        }).then((res) => {
            cy.log(res)
            token = res.body.access_token
            cy.log(res.body.access_token)
            expect(res.status).to.eq(200)
            expect(res.duration).to.be.within(100, 2000)
        })
    })

    it('validate the get token API', () => {
        cy.request({
            method: "GET",
            url: "https://api-m.sandbox.paypal.com/v2/invoicing/invoices?total_required=true",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Basic QWJZUDlyNnNua0FTR1otYl90MVAtM2R2cG9qaXpmdHJSMGY3U2wtNkdQbl9ma3RYbWJsa3pBc0dkeFZ0aDdHYlZsRHFzdlMwMWRYQUNteEY6RUpES3hab3NMU1NpTmNHSDdDWnh4a2RnX0tfOVpGYUFYSThmR05RVDRpbWgzYk1VT1oyMk5pNjRsNlFvMzJJWTlsVUh0UkFMTTdlZ0JwZlQ='
            },
        }).then((res) => {
            cy.log(res)
            expect(res.body).to.have.keys('total_items', 'total_pages')
        })
    })
})