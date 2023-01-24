import obj from "../../fixtures/contactUs.json";

describe("ContactUs with Fixture", () => {

    // Directly using cy.fixture
    // first way 

    it("TC_01 ContactUs with fixture", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.fixture("ContactUs").then((el) => {
            cy.get('[name="first_name"]').type(el.firstName);
            cy.get('[name="last_name"]').type(el.lastName);
            cy.get('[name="email"]').type(el.emailAddress);
            cy.get('[name="message"]').type(el.comments);
            cy.get('[value="SUBMIT"]').click();
            cy.get("h1").should("have.text", "Thank You for your Message!");
        });
    });

    /// By importing file from fixture - import obj from "../../fixtures/contactUs.json"
    // Sencond way

    
    it("TC_02 ContactUs with fixture", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type(obj.firstName);
        cy.get('[name="last_name"]').type(obj.lastName);
        cy.get('[name="email"]').type(obj.emailAddress);
        cy.get('[name="message"]').type(obj.comments);
        cy.get('[value="SUBMIT"]').click();
        cy.get("h1").should("have.text", "Thank You for your Message!");
    });

    // Third way

    let objG;
    before(() => {
        cy.fixture("contactus").then((data) => {
            objG = data;
        });
    });

    it.only ("TC_03 ContactUs with fixture", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type(objG.firstName);
        cy.get('[name="last_name"]').type(objG.lastName);
        cy.get('[name="email"]').type(objG.emailAddress);
        cy.get('[name="message"]').type(objG.comments);
        cy.get('[value="SUBMIT"]').click();
        cy.get("h1").should("have.text", "Thank You for your Message!");
    });

    //  normal method  by creating object 
   let info= {
        "firstName" : "Komal",
        "lastName" : "Palke",
        "emailAddress" : "komalpalke67@gmail.com",
        "comments" : "Hii Good Morning"
    }

    it.only("TC_ 04 ContactUs", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type(info.firstName);
        cy.get('[name="last_name"]').type(info.lastName);
        cy.get('[name="email"]').type(info.emailAddress);
        cy.get('[name="message"]').type(info.comments);
        cy.get('[value="SUBMIT"]').click();
        cy.get("h1").should("have.text", "Thank You for your Message!");
    });

});
