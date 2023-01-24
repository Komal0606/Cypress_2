describe('LonavalaCab', ()=>{
    it('TC_01 DatePicker to choose upcoming date', ()=>{ 
        let date = new Date()
        date.setDate(date.getDate()+200)
        let year = date.getFullYear()
        let numMonth = date.getMonth()
        let WordMonth = date.toLocaleString('default', {month : 'long'})
        let sdate = date.getDate()
        cy.log(date)
        cy.log(year)
        cy.log(numMonth)
        cy.log(WordMonth)
        cy.log(sdate)
        cy.visit('https://www.lonavalacab.com/')
        cy.get('[class="form-control gj-textbox-md"]').click()

        function GetYear(){
            cy.get('[role="period"]').then((el)=>{
                if(!el.text().includes(year)){
                    cy.get('[class="gj-icon chevron-right"]').click()
                    GetYear()
                }
            })     
        }

        function GetMonth(){
            cy.get('[role="period"]').then((el)=>{
                if(!el.text().includes(WordMonth)){
                    cy.get('[class="gj-icon chevron-right"]').click()
                    GetMonth()
                }
            })
        }

        function SelectDate(){
            cy.get(sdate)//.should('have.value', 2023-05-20)
           // cy.get(selected).should('have.value', 2023-05-20)
            
        }
        GetYear()
        GetMonth()
        SelectDate()

    })

    it.only('TC_02 Choose Previous date', ()=>{
        let date1 = new Date()
        date1.setDate(date1.getDate()-380)
        let year1 = date1.getFullYear()
        let sMonth1 = date1.toLocaleString('default', {month : 'long'})
        let sdate1 = date1.getDate()
        cy.log(sdate1)
        cy.log(date1)

        cy.visit('https://www.lonavalacab.com/')
        cy.get('.form-control.gj-textbox-md').click()
        function GetYear1(){
            cy.get('[role="period"]').then((el)=>{
                if(!el.text().includes(year1)){
                    cy.get('.gj-icon.chevron-left').click()
                    GetYear1()
                    
                }
            })
        }

        function GetMonth1(){
            cy.get('[role="period"]').then((el)=>{
                if(!el.text().includes(sMonth1)){
                    cy.get('.gj-icon.chevron-left').click()
                    GetMonth1()
                }
            })
        }

        function GetDate1(){
            cy.get(sdate1)
        }


        GetYear1()
        GetMonth1()
        GetDate1()
    })
})