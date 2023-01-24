export class ApiTest{
    selector ={
        url : "https://example.cypress.io/commands/network-requests",
        getButton : ".network-btn.btn.btn-primary",
        alias : "@getMethod",
        getMessage : ".network-comment"

    }
   visitUrl(){
    cy.visit(this.selector.url)
    cy.get(this.selector.getButton).click()
    cy.wait(this.selector.alias)
    cy.get(this.selector.getMessage).should('contain', "accusantium")
   }


}