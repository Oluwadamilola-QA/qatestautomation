/// <reference types="cypress" />

export class SendMessageToCustomChannelApi {

    postSendMessageToCustomChannel = (authToken, body) => {
        return cy.request({
            method: 'POST',
            url: `/api/v2/custom_channel_messages`,
            headers: { Authorization: 'Bearer ' + authToken },
            body: body
          }).then(resp => {
            expect(resp.status).to.be.equal(200);
          });
    }
}