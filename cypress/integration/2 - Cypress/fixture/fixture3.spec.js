// Login functionality using Fixture and POM

//Cypress fixtures are added to maintain and hold the test data for automation. 
//The fixtures are kept inside the fixtures folder (example. json file) in the Cypress project.
// Basically, it helps us to get the data input from external files.

///<reference types="cypress" />
import obj from "../../../fixtures/orangeHRM.json"
import {Ohrm} from "../../../support/orangeHRM"

let data = new Ohrm()

describe("Fixture",()=>{
    it("Login OHRM", ()=>{
           data.visitSite('/')
           data.login(obj.Username, obj.Password)
    })

    it("TC_02", ()=>{
        data.visitSite('/')
        cy.fixture('orangeHRM').then(function(str){
            data.login(str.Username, str.Password)

        })
    })

    let info;
    before('fixture data', ()=>{
        cy.fixture('orangeHrm').then(function(res){
            info = res
        })
    })

    it.only('TC_03', ()=>{
        data.visitSite('/')
        data.login(info.Username, info.Password)
    })

})