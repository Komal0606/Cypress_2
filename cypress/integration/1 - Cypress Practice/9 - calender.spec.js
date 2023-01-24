/// <reference types="cypress" />

describe('verify the date selection in cypress',function(){

    it('verify the date picker ',function(){
        let date = new Date
        cy.log(date.getFullYear())
        cy.log(date.getMonth())
        cy.log(date.getDate())
        
        let date2 = new Date
        date2.setDate(date2.getDate()+381)

        let year = date2.getFullYear()
        let numberMonth = date2.getMonth()
        let sDate = date2.getDate()
        let sMonth = date2.toLocaleString('default', {month: 'long'})
        cy.log(sDate)
        cy.log(sMonth)
        cy.log(year)


        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()
        function SelectMonthAndDate(){
            // 22 july 2023
            cy.get('.datepicker-switch').first().then((el)=>{
                if(!el.text().includes(year)){
                    cy.get('.next').last().click({force:true})
                    SelectMonthAndDate()
                }
            })
        }

        cy.get('.datepicker-switch').first().then((el)=>{
            if(!el.text().includes(sMonth)){
                cy.get('.next').last().click({force:true})
            }
        })

        function selectDate(){
            cy.contains(sDate).click()
        }

        SelectMonthAndDate()
        selectDate()


    })

})