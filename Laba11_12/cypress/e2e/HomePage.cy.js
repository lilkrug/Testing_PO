import common from '../support/utils/common'
import home from './PageObject/HomePage'

describe('HomePage', () => {

  beforeEach(() => {
    common.go_to_url();
  })

  it('visit homepage Tesla.com', () =>{
     cy.url().should('eq','https://www.tesla.com/');
  });

  it('View Menu', () => {
    home.takeMenu();
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}`)
  });

  it('Open Support', () => {
    home.OpenSupport();
  });

  it('CustomOrder', () => {
    home.OpenCustomOrder();
  });

})
