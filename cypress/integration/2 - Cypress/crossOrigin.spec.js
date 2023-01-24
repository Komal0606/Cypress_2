

describe('',()=>{
    it('TC_01', ()=>{
        cy.visit('https://www.netlify.com/')
       // cy.get(".icon-hamburger").click({ force: true });
        cy.get('#mainNav-login').last().click()
        cy.get('.tw-flex.tw-justify-center.tw-flex-nowrap.tw-items-center').first().click()
        cy.origin('https://github.com/', ()=>{
          cy.get('#login_field').type('komalpalke47@gmail.com')
          cy.get('#password').type('Komal@47478')
          cy.get('[value="Sign in"]').click()
          // should login to netlify and open dashboard
         cy.url().should("contain", "https://app.netlify.com/");
        })
       })
})