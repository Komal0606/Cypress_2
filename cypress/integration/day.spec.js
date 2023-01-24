///<reference types="cypress"/>

describe('Login functionality', function(){
    it.only('TC_01 login with correct credendials', function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[type="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
    })

    it('TC_02 login with invalid credendials', function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[type="password"]').type('admin1234')
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-alert-content.oxd-alert-content--error').should('be.visible')
    })
})


// <h1 class = flower id = plant name = rose> Komal Palke </h1>
// class = .flower
// id =    #plant
// tagname   = h1
// common formula == h1[name = "rose"], h1[class = flower]