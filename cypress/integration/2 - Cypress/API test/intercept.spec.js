///<reference types="cypress"/>
// Intercept - Spy and stub network requests and responses.
// Syntax - 

 //  1. spying only
// cy.intercept(url)
// cy.intercept(method, url)
// cy.intercept(routeMatcher)

// 2. spying and response stubbing
// cy.intercept(url, staticResponse)
// cy.intercept(method, url, staticResponse)
// cy.intercept(routeMatcher, staticResponse)
// cy.intercept(url, routeMatcher, staticResponse)

// 3. spying, dynamic stubbing, request modification, etc.
// cy.intercept(url, routeHandler)
// cy.intercept(method, url, routeHandler)
// cy.intercept(routeMatcher, routeHandler)
// cy.intercept(url, routeMatcher, routeHandler)


describe('check functionality of intercept', ()=>{
    it('TC_01 Intercept (Routing)', ()=>{
        cy.visit(Cypress.env('url')) // set the url into cypress.json file.
        cy.intercept({ path: "/posts"}).as('intercept1')
        cy.get('a[href="/posts"]').eq(0).click()
        cy.wait('@intercept1').then(function(res){
            cy.log(res)
            expect(res.response.body).have.length(100)
            expect(res.response.body[0]).have.property("title")
        })      
    }) 

       //  1. spying only
       // cy.intercept(url)
       // cy.intercept(method, url)
       // cy.intercept(routeMatcher)
    it('1. Spying by using cy.intercept(url)', ()=>{
        cy.visit(Cypress.env('url'))
        cy.intercept('/posts').as('spying01')
        cy.get('a[href="/posts"]').eq(0).click()
        cy.wait('@spying01').then(function(res){
            cy.log(res)
            expect(res.response.body).have.length(100)
        })
    })
    it('2. Spying by using cy.intercept(method, url)', ()=>{
        cy.visit(Cypress.env('url'))
        cy.intercept('GET','/posts').as('spying02')
        cy.get('a[href="/posts"]').eq(0).click()
        cy.wait('@spying02').then(function(res){
            cy.log(res)
            expect(res.response.body).have.length(100)
        })
        
    })
    /// routeMatcher = routeMatcher is an object used to match the incoming HTTP requests with this intercepted route.
    // ex - headers, hostname,https, path
    it('3. Spying by using cy.intercept(routeMatcher)', ()=>{
        cy.visit(Cypress.env('url'))
        cy.intercept({path:'/posts'}).as('spying01')
        cy.get('a[href="/posts"]').eq(0).click()
        cy.wait('@spying01').then(function(res){
            cy.log(res)
            expect(res.response.body).have.length(100)
        })
    })

    // 2. spying and response stubbing
    // cy.intercept(url, staticResponse)
    // cy.intercept(method, url, staticResponse)
    // cy.intercept(routeMatcher, staticResponse)
    // cy.intercept(url, routeMatcher, staticResponse)
    it('4. spying and response stubbing by using cy.intercept(url, staticResponse)', ()=>{ // pending
        cy.visit(Cypress.env('url'))
        cy.intercept("/posts", {fixture:"intercept"}).as('resStub')
        cy.get('a[href="/posts"]').eq(0).click()
       
        cy.wait('@resStub').then(function(res){
            cy.log(res)
            //expect(res.response.body).have.length(100)
            //expect(res.response.body[0]).have.property("title")
        })  
       
    })

    it('5. spying and response stubbing by using cy.intercept(method, url, staticResponse)',()=>{
        cy.intercept('GET', '/posts', {name: 'komal', city:'pune'}).as('resStub_1')
        cy.visit(Cypress.env('url'))
        cy.get('a[href="/posts"]').eq(0).click()
        cy.wait('@resStub_1').then(function(res){
            cy.log(res)
            expect(res.response.body.name).have.value('komal')
            
        }) 
    })

    
    it('6. spying and response stubbing by using cy.intercept(routeMatcher, staticResponse)',()=>{
        cy.intercept({path:'/posts'}, {name: 'komal', city:'pune'}).as('resStub_1')
        cy.visit(Cypress.env('url'))
        cy.get('a[href="/posts"]').eq(0).click()
        cy.wait('@resStub_1').then(function(res){
            cy.log(res)
            expect(res.response.body.name).to.eq('komal')     
        }) 
    })

        
    it.only('7. spying and response stubbing by using cy.intercept(url, routeMatcher, staticResponse)',()=>{
        cy.intercept('/posts',{path:'/posts'}, {name: 'komal', city:'pune'}).as('resStub_1')
        cy.visit(Cypress.env('url'))
        cy.get('a[href="/posts"]').eq(0).click()
        cy.wait('@resStub_1').then(function(res){
            cy.log(res)
            expect(res.response.body.name).to.eq('komal')     
        }) 
    })

    // 3. spying, dynamic stubbing, request modification, etc.
   // cy.intercept(url, routeHandler)
   // cy.intercept(method, url, routeHandler)
   // cy.intercept(routeMatcher, routeHandler)
   // cy.intercept(url, routeMatcher, routeHandler)

   it.only('8. spying, dynamic stubbing, request modification using cy.intercept(url, routeHandler)',()=>{
    cy.intercept('/posts',{path:'/posts'}, {name: 'komal', city:'pune'}).as('resStub_1')
    cy.visit(Cypress.env('url'))
    cy.get('a[href="/posts"]').eq(0).click()
    cy.wait('@resStub_1').then(function(res){
        cy.log(res)
        expect(res.response.body.name).to.eq('komal')     
    }) 
})


    // it('mocking with intercept', () => {
        
    //     cy.intercept(
    //         'GET',
    //         'posts',
    //         {
    //             name: 'Gayatri',
    //             city:'dhule'
    //         }).as('mock1')
    //         cy.visit(Cypress.env('url'))
    //     cy.get('a[href="/posts"]').eq(0).click()
    //     cy.wait('@mock1').then((res)=>{
    //         //cy.log(res)
    //         expect(res.response.body.name).to.eq('Gayatri')
    //     })
    // })
})