/// <reference types="cypress" />

Cypress.Commands.add('VerificarProdutos',()=>{
  cy.get('.cart_list > :nth-child(3)').should('contain','Sauce Labs Onesie');
  cy.get('.cart_list > :nth-child(4)').should('contain','Sauce Labs Bike Light');
  cy.get('.cart_list > :nth-child(5)').should('contain','Sauce Labs Bolt T-Shirt');

});