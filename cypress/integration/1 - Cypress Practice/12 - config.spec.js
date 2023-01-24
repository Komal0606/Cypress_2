// read data from cypress.json file


/// <reference types="cypress" />

describe('Learn fixture',()=>{
    it('Login Orange HRM', ()=>{
        cy.visit("")
            // cy.get('[name="username"]').type()
            // cy.get('[name="password"]').type(cypress.config().Username)
            // cy.get('[type="submit"]').click()
        
    })
})

// retrise = its configuration setting  , run mode  - command line and open mode  - UI browser line
// flaky test - Flaky test - when we run test its fails but we run again and its pass, dynamic elments gives problem
// cy.wrap = its container which used for changed other element into cypress element 
// if u have dropdown list when u click on that it will shows option  when we click on any particular optionits invisible so 
// how to assert that element select(:selected).should(be.checked)
// when we trigeer an event it will request to the server for response, that means it is network layer that listen network call.


