/// <reference types="cypress" />

Cypress.Commands.add('msg_error',(msg)=>{
    cy.get('[data-test="error"]')
           .should('contain',msg);

});

Cypress.Commands.add('titulo',(tituloPage)=>{
    cy.get('.title').should('have.text',tituloPage);

});

           
     