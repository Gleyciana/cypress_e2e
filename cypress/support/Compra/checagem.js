/// <reference types="cypress" />

Cypress.Commands.add('checarProduto',(quantidade)=>{
    cy.get('.shopping_cart_link').should('have.text',quantidade)
    
});