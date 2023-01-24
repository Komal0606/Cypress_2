/// <reference types="cypress" />

describe("Verify Alert, Confirm and Prompt", () => {
  it("TC_01 Js alert", () => {
    cy.visit("http://webdriveruniversity.com/Popup-Alerts/index.html");
    cy.get("#button1").click();
    cy.on("window:alert", (el) => {
      expect(el).to.eq("I am an alert box!");
      return true;
    });
  });

  it("TC_02 Js alert with window", ()=>{
    cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
    cy.window().then((el)=>{
        let alert = el.alert()
        expect(alert).eq(true)

    })
  })

  it("TC_03 Js confirm", ()=>{
    cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
    cy.get('#button4').click()
    cy.on('window:confirm', function(ele){
        expect(ele).to.eq('Press a button!')
        return true
    })
    cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')  
  })

  it("TC_04 Js confirm", ()=>{
    cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
    cy.window().then((el)=>{
        cy.stub(el, 'confirm').returns(true)
    })
    cy.get('#button4').click()
    cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')  
  })

  it.only("TC_04 Js Prompt", ()=>{
    cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
    cy.window().then((el)=>{
        cy.stub(el, 'prompt').returns('')
        cy.get('[onclick="jsPrompt()"]').click()
    })
    cy.get('#result').should('have.text', 'You entered: ')
  })
});
