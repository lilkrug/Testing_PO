class TeslaPage {

    static visit (){
        cy.visit(`${Cypress.config("baseUrl")}modelx/`);
    }

    static OrderNow(){
        cy.contains('Order Now').click();
    }

    static PotentialSaving() {
        cy.get('#potential_savings').click();
    }
    
    static PurchasePrice() {
        cy.get('#purchase_price').click();
    }

    static selectColor(color) {
        let colorPaint = {
            "$PPSW": 0,
            "$PBSB": 1,
            "$PMNG": 2,
            "$PPSB": 3,
            "$PPMR": 4
        };
        cy.get('div[class="group--detail-container"]').children().eq(colorPaint[color]).click();
    }

    static selectWheels(data){
        let Wheels = {
            "$WX00": '#WHEELS_$WX00',
            "$WX20": '#WHEELS_$WX20'
        }
        cy.get(Wheels[data]).click();
    }

    static selectInterior(color) {
        let Interior = {
            "$IBE00": 0,
            "$IWW00": 1,
            "$ICW00": 2
        }
        cy.get('div[class="group--child-container"]').children().eq(colorPaint[color]).click();
    }

    static Control(data) {
        let Control = {
            "$ST03": '#STEERING_WHEEL_$ST03',
            "$ST0Y": '#STEERING_WHEEL_$ST0Y'
        }
        cy.get(Control[data]).click();
    }
    

    static AddAutopilot(){
        cy.get('#$APPB-add-button').click();
    }

    static FullSelfDrivingCapability(){
        cy.get('#$APF2-add-button').click();
    }

    static ContinueToPayment(){
        cy.get('#continue-to-payment-button').click();
    }
}


export default TeslaPage;
