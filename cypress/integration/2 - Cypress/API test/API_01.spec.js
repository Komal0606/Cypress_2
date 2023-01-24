/// <reference types="cypress" />

describe('API test', ()=>{
    it('TC_01 GET', ()=>{
        cy.request({
            method : "GET",
            url : "https://reqres.in/api/users?page=2",
        }).then(function(res){
            cy.log(res)
            expect(res.body.data).have.length(6)
        })
    })

    it('TC_02 POST', ()=>{
        cy.request({
            method : "POST",
            url : "https://reqres.in/api/users",
            body: {
                "name": "Komal",
                "job": "Medical Biller"
            }
        }).then(function(response){
            //cy.log(response)
            expect(response.status).to.eq(201)
        })
    })

    it('TC_03 PUT', ()=>{
        cy.request({
            method : "PUT",
            url : "https://reqres.in/api/users/2",
            body: {
                "name": "Komal",
                "job": "Software Tester"
            }
        }).then(function(response){
            cy.log(response)
            expect(response.status).to.eq(200)
        })
    })

    it('TC_04 DELETE', ()=>{
        cy.request({
            method : "DELETE",
            url : "https://reqres.in/api/users/2",
        }).then(function(response){
            cy.log(response)
            expect(response.status).to.eq(204)
        })
    })
})