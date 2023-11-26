
///<reference types="cypress" />

let token = "Bearer 05444f3633908fde3a89ee5b83686903ca07870388fd342d5da2959597c984a5"

describe('verifying gorest API', function () {
    it('verify GET method', function () {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                authorization: token

            }
        }).then(function (response) {
            //cy.log(response)
            expect(response.status).to.eql(200)
            expect(response.body.length).to.eql(10)
            response.body.forEach(element => {
                expect(element).to.have.keys(["id", "gender", "name", "email", "status"])
            })

        })
    })
    it.only('verify POST(create),put(update),delete(passing same id', function () {
        cy.request({
            method: "POST",
            url: `https://gorest.co.in/public/v2/users`,
            headers: {
                Authorization: token
            },
            body: {
                "name": "Sachin datir",
                "gender": "male",
                "email": `${Math.random()}sdatir@gmail.com`,
                "status": "active"
            }

        }).then(function (response) {
            //cy.log(response)
            let id = response.body.id
            return id


        }).then(function (id) {
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                headers: {
                    Authorization: token
                },
                body: {
                    "name": "sachin datir",
                    "email": `${Math.random(6)}sachin@gmail.com`,
                    "status": "active"
                }

            }).then(function (response) {
                //cy.log(response)
                let id = response.body.id
                return id
            }).then(function (id) {
                cy.request({
                    method: "DELETE",
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        Authorization: token
                    }
                }).then(function (response) {
                    //cy.log(response)
                    expect(response.status).to.equal(204)
                })
            })
        })
    })
})