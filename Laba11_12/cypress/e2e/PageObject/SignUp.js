import common from "../../support/utils/common";

class SignUp {
    static visit(){
        cy.visit('https://appleid.apple.com/account/');
    }

    static inputPersonData() {
        cy.get('first-name-input').type("Egor");
        cy.get("last-name-input").type("Drachan");
        cy.get("wc-birthday").type("13122003");
        cy.get("email-input").type("Egor@gmail.com");
        cy.get("new-password").type("A1BL2kkksfffff{enter}");
        cy.get("confirm-password").type("A1BL2kkkksfffff");
        cy.get("phone-number").type("+375295359685");
    }

}

export default SignUp;