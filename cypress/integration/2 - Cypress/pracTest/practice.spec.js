import obj from "../../../../cypress/fixtures/contactUs.json"
import { Ohrm } from "../../../support/orangeHRM"
let data = new Ohrm()

describe('practice', ()=>{
    it('TC_01 checkbox', ()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="option-1"]').click().should('be.checked')
        cy.get('[value="option-1"]').click().should('not.be.checked')
        cy.get('[value="option-1"]').check().should('be.checked')
        cy.get('[value="option-1"]').uncheck().should('not.be.checked')
        cy.get('[value="option-1"]').check().should('be.checked')
        cy.get('[value="option-1"]').check().should('be.checked')
    })

    it('TC_02 radioButton', ()=>{
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="green"]').click().should('be.checked')
        cy.get('[value="blue"]').should('not.to.be.checked')
       
    })

    it('TC_03 DropDown', ()=>{ 
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('java').should('contain', 'JAVA')
        cy.get('#dropdowm-menu-1').select('SQL').should('have.value', 'sql')
        let selectValues = ["SQL","Eclipes","CSS"]
        cy.get('.section-title').first().children('select').each(function(el,index){  // fails
            cy.wrap(el).select(selectValues[i]).should('have.value', ['sql', 'eclipes', 'css'])
        })
    })

    it('TC_04 alert', ()=>{ // using cy.on('', callback function) & cy.on().then(callback function)
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
        cy.on('window:alert', (res)=>{
            expect(res).to.eq('I am an alert box!')
            return true
        })
    })

    it('TC_05 alert', ()=>{ // using cy.on('', callback function) & cy.on().then(callback function)
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
       cy.window().then((res)=>{
        let kkk = res.alert()
        expect(kkk).to.equal(true)
       })
       
    })

    it('TC_05 confirm', ()=>{ // using cy.on('', callback function) & cy.on().then(callback function)
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm', (res)=>{
            expect(res).to.eq('Press a button!')
            return true
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
       
    })

    it('TC_05 confirm', ()=>{ // using cy.on('', callback function) & cy.on().then(callback function)
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm', (res)=>{
             expect(res).to.eq('Press a button!')
             return false
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')    
    })

    
    it('TC_05 confirm', ()=>{ // using cy.on('', callback function) & cy.on().then(callback function)
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')    
        cy.window().then((res)=>{
            cy.stub(res, 'confirm').returns(true)
        }) 
        cy.get('#button4').click()
        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')  
    })

    it('TC_05 prompt', ()=>{
        cy.visit('http://webdriveruniversity.com/Popup-Alerts/index.html')    
        cy.window().then((el)=>{
            cy.stub(el, 'prompt').returns('Komal Palke')
            cy.get('[onclick="jsPrompt()"]').click()
        })
        cy.get('#result').should('contain', 'Komal')    
    })

    let file = 'flower.jpg'

    
    it('TC_05 Upload file', ()=>{
        cy.visit('http://webdriveruniversity.com/File-Upload/index.html')
        cy.get('#myFile').attachFile(file)
       cy.get('#submit-button').click()
        // cy.on('window:alert', (res)=>{
        //     expect(res).to.eq('Your file has now been uploaded!')
        // })
        cy.window().then((res)=>{
            let kk = res.alert()
            expect(kk).to.equal(true)    
        })
    })

    
    it('TC_05 Fixture', ()=>{
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type(obj.firstName);
        cy.get('[name="last_name"]').type(obj.lastName);
        cy.get('[name="email"]').type(obj.emailAddress);
        cy.get('[name="message"]').type(obj.comments);
        cy.get('[value="SUBMIT"]').click();
        cy.get("h1").should("have.text", "Thank You for your Message!");
    })

    it('TC_05 Fixture', ()=>{
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type(obj.firstName);
        cy.get('[name="last_name"]').type(obj.lastName);
        cy.get('[name="email"]').type(obj.emailAddress);
        cy.get('[name="message"]').type(obj.comments);
        cy.get('[value="SUBMIT"]').click();
        cy.get("h1").should("have.text", "Thank You for your Message!");
    })

    it('TC_05 POM', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        data.login("Admin", "admin123")
    })

    it('TC_05 iframe', ()=>{
        cy.visit('http://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function(res){
            cy.wrap(res.contents().find('body')).as('element')
            cy.get('@element').find('.active').last().should('have.text', 'Home')
            // cy.wrap(res.contents().find('body')).as('iframeBody2')
            // cy.get('@iframeBody2').find('.slide-image').first().should('have.id', "slide-image-1")
        })
    })

    
    it('TC_05 iframe', ()=>{
        cy.visit('http://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((res)=>{
            cy.wrap(res.contents().find('body')).as('kokoko')
            cy.get('@kokoko').find('.sub-heading').first().should('have.text','Who Are We?')
        })
    
    })



})