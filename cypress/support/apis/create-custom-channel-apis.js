/// <reference types="cypress" />

export class CreateCustomChannelApi {

    postCreateCustomChannel = (authToken, body) => {
        return cy.request({
            method: 'POST',
            url: `/api/v2/channels`,
            headers: { Authorization: 'Bearer ' + authToken },
            body: body
          }).then(resp => {
            let channelId = resp.body.id;
            let username = resp.body.username;
            cy.wrap(channelId).as('channelIdMain');
            cy.wrap(username).as('username');
          });
    }
}