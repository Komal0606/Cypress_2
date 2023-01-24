import { Utility } from "../../support/utility";
//import { orangeHRM }  from "../../fixtures/orangeHRM.json"
let data = new Utility()

describe('Login OrangeHRM site by using POM method', ()=>{
    it.only('TC_01 Login OrangeHRM site', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        data.login("Admin", "admin123")

    })
    it.only('TC_02 Login OrangeHrm site by using POM and Fixture', ()=>{
        cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('orangeHRM').then((info)=>{
            data.login(info.Username, info.Password)
        })     
    })
})


