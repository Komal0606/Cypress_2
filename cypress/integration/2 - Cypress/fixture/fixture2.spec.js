import data from "../../../fixtures/orangeHRM.json"

describe('fixture', () => {
    it('TC_01', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type(data.Username)
        cy.get('[name="password"]').type(data.Password)
        cy.get('[type="submit"]').click()
    })

    it.only('TC_02', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('orangeHRM').then((el)=>{
            cy.get('[name="username"]').type(el.Username)
            cy.get('[name="password"]').type(el.Password)
            cy.get('[type="submit"]').click()
        })   
    })

    let Info2 
    before(()=>{
        cy.fixture('orangeHRM').then((res)=>{
            Info2 = res
        })
    })

    it.only('TC_03', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type(Info2.Username)
        cy.get('[name="password"]').type(Info2.Password)
        cy.get('[type="submit"]').click()
    })
})