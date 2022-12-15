class Home {
    static visit() {
        cy.visit(Cypress.config("baseUrl"));
    }
    
    static takeCountry() {
        cy.get('#ac-ls-dropdown-select').click();
        cy.contains('Other country or region').click();
        cy.get('#ac-ls-continue').click();
    }

    static closeCountry() {
        cy.get('#ac-ls-close').click();
    }
    
    static openSearch() {
        cy.get('#ac-gn-link-search').click();
        
    }

    static searchInfo() {
        cy.get('#ac-gn-searchform-input').type("Iphone14");
        cy.contains('iPhone 14 Pro and iPhone 14 Pro Max').click();
        cy.url().should('eq', 'https://www.apple.com/iphone-14-pro/');
    }

    static openSelectMenu() {
        cy.get('#ac-gn-bag').click();
    }

    static openBag() {
        cy.get('[data-ac-autom="gn-bagview-link-bag"]').click();
    }
}

export default Home;