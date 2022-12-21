/// <reference types="cypress" />


export class CustomChannelMessagesPage{

    connectCustomChannelButton = () => cy.get('button:contains("Connect Custom channel")');
    
    visitCustomChannelTicketPage = () => {
        cy.visit('/tickets/531865479');
    };

    checkThatMessageSentTochannelIsOnTheChannel = (message) => {
        cy.contains(message).should('be.visible');
    }
}