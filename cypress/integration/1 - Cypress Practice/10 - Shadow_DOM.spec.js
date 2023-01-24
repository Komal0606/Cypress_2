// Shadow DOM - DOM inside DOM

/// <reference types="cypress"/>

describe('Verify Shadow DOM', ()=>{
    it('Validate the Shadow DOM element', ()=>{
        cy.visit('file:///C:/Users/komal/OneDrive/Desktop/Cypress/cypress/integration/3%20-%20Cypress%20Practice/shadowdom.html')
        cy.get('#channelname').type('Komal').should('have.value', 'Komal')
    })
})