///<reference types="cypress"/>

describe('Learn fixture',()=>{
    it('Login Orange HRM', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.get('[name="username"]').type('')
            cy.get('[name="password"]').type('hello{backspace}')
          //  cy.get('[type="submit"]').type('{enter}')
        })

        it.only('', ()=>{
            cy.visit('https://example.cypress.io/commands/actions')
            cy.get('.action-div').rightclick().should('be.visible')
            cy.get('.action-input-hidden').should('not.be.visible')

            
        })
    
})