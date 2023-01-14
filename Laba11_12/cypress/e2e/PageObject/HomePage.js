class HomePage {
    
    static visit() {
        cy.visit(Cypress.config("baseUrl"));
        cy.title().should('eq','Electric Cars, Solar & Clean Energy | Tesla');
    }
    
    static takeMenu() {
        cy.contains('Menu').click();
    }

    static OpenSupport() {
        cy.get('span[class="tds-site-nav-item-text"]').click();
    }

    static OpenCustomOrder() {
        cy.get('a[class="tds-btn tcl-button tds-btn--primary tcl-button--primary"]').click();
    }
    
}

export default HomePage;