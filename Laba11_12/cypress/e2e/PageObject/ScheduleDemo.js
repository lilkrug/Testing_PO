class ScheduleDemo {

    static visit() {
        cy.visit(Cypress.config("baseUrl"));
    }
    
    static ScheduleDemoOpen() {
        cy.contains('Schedule a Demo Drive').click();
    }

    static CarSection() {
        cy.contains('Model S').click();
    }

    static ContactInformation() {
        cy.get("#edit-firstname-td").type('Alexei');
        cy.get("#edit-lastname-td").type('Kruglik');
        cy.get("#edit-method-of-contact-td").type('test111@mail.ru');
        cy.get("#edit-countries-td").type('United States');
        cy.get("#edit-zipcode-td").type('222666');
        cy.get("#edit-submit-td-ajax0").click();
    }
    
}

export default ScheduleDemo;