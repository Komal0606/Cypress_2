import obj from "../../../fixtures/contactUs.json"


describe('Login contactUs', ()=>{

    it('TC_01 login by using fixture', ()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(obj.firstName)
            cy.get('[name="last_name"]').type(obj.lastName)
            cy.get('[name="email"]').type(obj.emailAddress)
            cy.get('[name="message"]').type(obj.comments)
            cy.get('.contact_button').eq(1).click()
            cy.get('#contact_reply').should('contain', 'Thank You')

    })


    it('TC_02 login by using fixture', ()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.fixture('contactUs').then((res)=>{
            cy.get('[name="first_name"]').type(res.firstName)
            cy.get('[name="last_name"]').type(res.lastName)
            cy.get('[name="email"]').type(res.emailAddress)
            cy.get('[name="message"]').type(res.comments)
            cy.get('.contact_button').eq(1).click()
            cy.get('#contact_reply').should('contain', 'Thank You')
        })     
    })

    let Info1;
    before(()=>{
        cy.fixture('contactUs').then((res1)=>{
             Info1 = res1

        })
    })

    it('TC_03 login by using fixture', ()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(Info1.firstName)
            cy.get('[name="last_name"]').type(Info1.lastName)
            cy.get('[name="email"]').type(Info1.emailAddress)
            cy.get('[name="message"]').type(Info1.comments)
            cy.get('.contact_button').eq(1).click()
            cy.get('#contact_reply').should('contain', 'Thank You')

    })



    
})