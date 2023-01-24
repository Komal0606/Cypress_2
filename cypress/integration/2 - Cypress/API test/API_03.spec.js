describe("API test with", () => {
    it.only("TC_01 GET request", () => {
        cy.intercept({
            method: "GET",
            url: "https://example.cypress.io/commands/network-requests",
        }).as("getComment");

       cy.visit("https://example.cypress.io/commands/network-requests");
        cy.get('[class="network-btn btn btn-primary"]').click();
        cy.wait("@getComment");
        cy.get('[class="network-comment"]').should(
            "contain",
            "laudantium enim quasi est"
        );
    });

    it("TC_02 POST request", () => { 
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments",
        }).as("postComment");

        cy.get('[class="network-post btn btn-success"]').click();
        cy.wait('@postComment').then(function(res){
            cy.log(res)
            cy.get('[class="network-post-comment"]').should('contain', 'POST successful!')
            expect(res.requestWaited).to.eq(true)
        })
    });
});
