/// <reference types="cypress" />
import {LoginPage, CreateCustomChannelPage, CustomChannelMessagesPage} from './../../support/pages/index';
import { userDetails, 
  newTeamsToAdd, 
  customChannelMessageRequestBody } from '../../fixtures/constants/data-for-project';
import { SendMessageToCustomChannelApi } from '../../support/apis/index';

const loginPage = new LoginPage();
const createCustomChannelPage = new CreateCustomChannelPage();
const customChannelMessagesPage = new CustomChannelMessagesPage();

const sendMessageToCustomChannelApi = new SendMessageToCustomChannelApi();

let randomNumber = Math.floor(Math.random() * 10000);

describe('Create Custom Channel Tests', () => {
  beforeEach(() => {
    loginPage.visitLoginPage();
    loginPage.loginMethod(userDetails.email, userDetails.password);  
  });

  it('Ensure we can create a custom channel', () => {
    createCustomChannelPage.visitCustomChannelPage();
    cy.wait(5000);
    createCustomChannelPage.clickconnectCustomChannelButton();
    cy.wait(3000);
    createCustomChannelPage.enterNameOfChannel(`Custom channel - ${randomNumber}`);
    createCustomChannelPage.enterTeams(newTeamsToAdd);
    createCustomChannelPage.interceptPostChannelCreationRequest('postChannelCreationIntercept');
    createCustomChannelPage.clickCreateCustomSectionButton();
    loginPage.waitForInterceptedResponse('postChannelCreationIntercept', 201);
    createCustomChannelPage.getChannelIdAndUserName('postChannelCreationIntercept');
    createCustomChannelPage.checkThatSuccessMessageIsDisplayed();
    cy.get('@channelIdMain').then(channelId => {
      createCustomChannelPage.checkThatThePageRedirectsToTheCustomChannelDetailsPage(channelId);
    });

  });

  it('Ensure we can see a message sent to a custom channel', () => {
    cy.get('@token').then(token => {
      let message = `hi team - ${randomNumber}`;
      sendMessageToCustomChannelApi.postSendMessageToCustomChannel(token, customChannelMessageRequestBody("custom-1234579279283", message, "01Cu2YInFq6Vv5SjMsZ8aa3Gj"));
      cy.wait(3000);
      customChannelMessagesPage.checkThatMessageSentTochannelIsOnTheChannel(message);
  
    });
  });

  
})