import { Orm } from "../../../support/Orm"
let data = new Orm()

describe('pom', ()=>{
    it('pom', ()=>{
      data.visitUrl()
    })

    it('pom', ()=>{
        data.login('Admin', 'admin123')
      })
})