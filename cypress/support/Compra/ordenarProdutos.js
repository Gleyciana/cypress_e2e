/// <reference types="cypress" />

Cypress.Commands.add('Ordenar',(ordem)=>{
    cy.get('[data-test="product_sort_container"]')
      .select(ordem)
    
});

Cypress.Commands.add('OrdenarPrimeiros',()=>{
  cy.get(':nth-child(1) > .inventory_item_description').should('contain','Sauce Labs Onesie');
  cy.get(':nth-child(2) > .inventory_item_description').should('contain','Sauce Labs Bike Light');
  cy.get(':nth-child(3) > .inventory_item_description').should('contain','Sauce Labs Bolt T-Shirt');

});

Cypress.Commands.add('VerificarProdutos',()=>{
  cy.get('.cart_list > :nth-child(3)').should('contain','Sauce Labs Onesie');
  cy.get('.cart_list > :nth-child(4)').should('contain','Sauce Labs Bike Light');
  cy.get('.cart_list > :nth-child(5)').should('contain','Sauce Labs Bolt T-Shirt');

});


