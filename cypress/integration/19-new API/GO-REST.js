///<reference types="cypress" />

let token = "Bearer 05444f3633908fde3a89ee5b83686903ca07870388fd342d5da2959597c984a5"

describe('vrify GO-REST api', () => {
    it('verify the GET api', () => {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: token
            }

        }).then((res) => {
            //cy.log(res)
            expect(res.status).to.eql(200)
            res.body.forEach((element) => {
                expect(element).to.have.keys(["id", "email", "status", "name", "gender"])
            })
        })
    })

    it.only("verify the gorest end to end ", () => {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: token
            },
            body: {
                "name": "sachin datir",
                "gender": "male",
                "email": `sachin.amakrishna@${Math.random() * 6}15ce.com`,
                "status": "active"
            }
        }).then((res) => {
            let id = res.body.id
            return id
        }).then((id) => {
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                headers: {
                    Authorization: token
                },
                body: {
                    "name": "sachin datir1",
                    "email": `lasani.peddana@${Math.random()*6}15ce.com`,
                    "status": "active"
                }
            }).then((res)=>{
                let id = res.body.id
                return id 
            }).then((id)=>{
                cy.request({
                    method:"DELETE",
                    url:`https://gorest.co.in/public/v2/users/${id}`,
                    headers:{
                        Authorization:token
                    }
                }).then((res)=>{
                    cy.log(res)
                })
            })
        })
    })
})