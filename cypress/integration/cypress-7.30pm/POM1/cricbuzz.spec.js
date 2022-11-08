///<reference types="cypress" />
import CRIC from "../../cypress-7.30pm/POM1/crictestcase"
let cric = new CRIC()
describe('cricbuzz functionnality', () => {
    it('TC01', () => {
        cric.visitCricbuzz()
        cric.livescore()
    })
})
