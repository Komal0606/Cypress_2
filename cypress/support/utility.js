export class Utility{
     element={
        userName : '[name="username"]' ,
        passWord : '[name="password"]',
        button : '[type="submit"]'
    }

    login(username,password){
        cy.get(this.element.userName).type(username)
        cy.get(this.element.passWord).type(password)
        cy.get(this.element.button).click()
    }
}




