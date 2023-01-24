// Fixture

/// <reference types="cypress" />

describe('Learn fixture',()=>{
    it('Login Orange HRM', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('orangeHRM').then((data)=>{
            cy.get('[name="username"]').type(data.Username)
            cy.get('[name="password"]').type(data.Password)
            cy.get('[type="submit"]').click()
        })
    })
})
