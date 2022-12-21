/// <reference types="cypress" />


export class CreateCustomChannelPage{

    connectCustomChannelButton = () => cy.get('button:contains("Connect Custom channel")');
    internalNameTextField = () => cy.get('.form-control').eq(0);
    teamsSearchableDropdown = () => cy.get('.multiselect').eq(0);
    createCustomChannelButton = () => cy.get('button:contains("Create channel")');
    dropDownResultAfterSearch = () => cy.get('.multiselect__content-wrapper')

    visitCustomChannelPage = () => {
        cy.visit('/admin/channels2/custom');
    };

    clickconnectCustomChannelButton = () => {
        return this.connectCustomChannelButton().click();
    };

    enterNameOfChannel = (nameOfChannel) => {
        this.internalNameTextField().clear();
        this.internalNameTextField().type(nameOfChannel);
    };

    enterTeams = (teams) => {
        for(const team of teams){
            this.teamsSearchableDropdown().type(team);
            this.dropDownResultAfterSearch().eq(0).click();
        }     
    };

    clickCreateCustomSectionButton = () => {
        return this.createCustomChannelButton().click();
    };

    interceptPostChannelCreationRequest = nameOfAliasForIntercept => {
        return cy
          .intercept(
            'POST',
            '/api/v2/channels'
          )
          .as(nameOfAliasForIntercept);
    };

    getChannelIdAndUserName = (nameOfAliasForIntercept) => {
        let channelId;
        let username;
        cy.get(`@${nameOfAliasForIntercept}`).then(intercept => {
            channelId = intercept.response.body.id;
            username = intercept.response.body.username;
            cy.wrap(channelId).as('channelIdMain');
            cy.wrap(username).as('username');
        });
    };


    checkThatSuccessMessageIsDisplayed = () => {
        cy.contains('The channel has been created successfully.').should('be.visible');
    }

    checkThatThePageRedirectsToTheCustomChannelDetailsPage = (channelId) => {
        cy.url().should('include', `/admin/channels2/custom/${channelId}`);
    }
}