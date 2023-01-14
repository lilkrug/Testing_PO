class SignUp {
    static visit(){
        cy.visit('https://auth.tesla.com/oauth2/v1/register?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email%20phone&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-CA');
    }

    static inputData() {
        cy.get("#form-input-first_name").type('Alexei');
        cy.get("#form-input-last_name").type('Kruglik');
        cy.get("#captcha").type('Gb8n');
        cy.get("#form-step1-next").click(); 
    }

}

export default SignUp;