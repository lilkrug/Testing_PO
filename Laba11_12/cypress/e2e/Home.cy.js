import common from '../support/utils/common'
import home from './PageObject/Home'

describe('HomePage features', () => {

  beforeEach(() => {
    common.go_to_url();
  })

  it('visit homepage apple', () =>{
     cy.url().should('eq','https://www.apple.com/');
  })

  it('choose a country', () => {
    home.takeCountry();
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}choose-country-region/`)
  });

  it("close choose a country", () => {
    home.closeCountry();
  });

  it("find iphone 14", () => {
    home.openSearch();
    home.searchInfo();
  });

  it("see my bag", () => {
    home.openSelectMenu();
    home.openBag();
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}shop/bag`)
  })
})