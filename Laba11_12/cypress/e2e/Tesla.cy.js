import common from '../support/utils/common'
import TeslaPage from "./PageObject/TeslaPage";

describe('TeslaPage', () => {

  beforeEach(() => {
     cy.visit(`${Cypress.config("baseUrl")}modelx/`);
  })
  
  it('visit TeslaModelX', () => {
    cy.url().should('eq','https://www.tesla.com/modelx');
  });

  it('Order Now', () => {
    TeslaPage.OrderNow();
  });

  it('Price Car', () => {
    TeslaPage.PotentialSaving();
    TeslaPage.PurchasePrice();
  });

  it('select color for car', () => {
    TeslaPage.OrderNow();
    TeslaPage.selectColor('$PPSW');
    TeslaPage.selectColor('$PBSB');
    TeslaPage.selectColor('$PMNG');
    TeslaPage.selectColor('$PPSB');
    TeslaPage.selectColor('$PPMR');

  })

  it('select Wheels in car', () => {
    TeslaPage.OrderNow();
    TeslaPage.selectColor('$PPSW');
    TeslaPage.selectWheels('$WX20');
  })

  it('make orderByTesla', () => {
    TeslaPage.OrderNow();
    TeslaPage.selectColor('$PPMR');
    TeslaPage.selectWheels('WX00');
    TeslaPage.selectInterior('IWW00');
    TeslaPage.AddAutopilot();
    TeslaPage.Control('ST03');
    TeslaPage.ContinueToPayment();
    TeslaPage.FullSelfDrivingCapability();
  })

})