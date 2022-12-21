/// <reference types="cypress" />

export class LoginPage{
    // /client-api/me/token

    emailTextfield = () => cy.get('input[name="email"]');
    passwordTextfield = () => cy.get('input[name="password"]');
    loginButton = () => cy.get('button:contains("Login")');

    visitLoginPage = () => {
        cy.visit('/auth/login');
    }

    getClientToken = nameOfAliasForIntercept => {
        return cy
          .intercept(
            'GET',
            '/client-api/me/token'
          )
          .as(nameOfAliasForIntercept);
      };
    
      waitForInterceptedResponse = (nameOfAliasFromIntercept, statusCode) => {
        return cy
          .wait(`@${nameOfAliasFromIntercept}`, { timeout: 30000 })
          .its('response.statusCode')
          .should('eq', statusCode);
      };

    loginMethod = (email, password) => {
        this.emailTextfield().type(email);
        this.passwordTextfield().type(password);
        this.getClientToken("clientTokenRequest");
        this.loginButton().click();
        this.waitForInterceptedResponse("clientTokenRequest", 200);
        cy.get(`@clientTokenRequest`).then(intercept => {
            let token = intercept.response.body.access_token;
            cy.wrap(token).as('token');
        });
    };


}