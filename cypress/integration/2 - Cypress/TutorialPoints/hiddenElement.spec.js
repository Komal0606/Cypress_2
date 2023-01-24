describe("Validate all functionality of Tutorial points", () => {
  it("TC_01 Validate the functionality of Hiddent Element", () => {
    cy.visit("https://www.amazon.com/");
    //click hidden element
    cy.contains("Sign").click({force:true});
  });
  it.only('TC_02 Validate the hidden elements', ()=>{
    cy.visit('https://courses.letskodeit.com/practice')
    cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Reload').click()
  })
});
