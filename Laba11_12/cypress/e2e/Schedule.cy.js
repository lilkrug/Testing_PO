import common from '../support/utils/common'
import sch from './PageObject/ScheduleDemo'

describe('Schedule', () => {

    beforeEach(() => {
        common.go_to_url();
    })

    it('Schedule Demo Drive', () => {
      cy.url().should('eq','https://www.tesla.com/');
      sch.ScheduleDemoOpen();
      cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}drive`)
    });

    it('Information', () => {
      sch.ScheduleDemoOpen();
      sch.CarSection();
      sch.ContactInformation();
    })

})

