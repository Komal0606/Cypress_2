// token = 3846337c0dd873a0fd3a418f269037ca146828cbeea8b9da5e36c55c8eab7815

describe('API test with Gorest', ()=>{
    it('TC_01 Verify the GET request', ()=>{
        cy.request({
            method : "GET",
            url : "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization : "3846337c0dd873a0fd3a418f269037ca146828cbeea8b9da5e36c55c8eab7815"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.body).to.length(10)
            expect(res.body[1]).have.property('email')
        })
    })

    it.only('TC_02 POST request', ()=>{
        cy.request({
            method : "POST",
            url : "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization : "3846337c0dd873a0fd3a418f269037ca146828cbeea8b9da5e36c55c8eab7815"
            },
            body : {"name":"Komal Palke", "gender":"Female", "email":"komalpalke@47478gmail.com", "status":"active"},
            failOnStatusCode: false
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.equals(401)
        })
    })

    
    it('TC_03 PUT request', ()=>{
        cy.request({
            method : "PUT",
            url : "https://gorest.co.in/public/v2/users/18",
            headers: {
                Authorization : "3846337c0dd873a0fd3a418f269037ca146828cbeea8b9da5e36c55c8eab7815"
            },
            body : {"name":"Vishal Palke", "email":"vishalpalke@47478gmail.com", "status":"active"},
            failOnStatusCode: false
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.equals(401)
        })
    })

    it.only('TC_04 DELETE request', ()=>{
        cy.request({
            method : "DELETE",
            url : "https://gorest.co.in/public/v2/users/18",
            headers: {
                Authorization : "3846337c0dd873a0fd3a418f269037ca146828cbeea8b9da5e36c55c8eab7815"
            },
             failOnStatusCode: false
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.equals(401)
        })
    })

    
})
