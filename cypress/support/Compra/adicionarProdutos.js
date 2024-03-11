/// <reference types="cypress" />

Cypress.Commands.add('adicionarProduto1',(produto1)=>{
    cy.contains(produto1).click()
    cy.get('.btn_primary').click()
    cy.get('[data-test="back-to-products"]').click()
    
});

Cypress.Commands.add('adicionarProduto2',(produto2)=>{
    cy.contains(produto2).click()
    cy.get('.btn_primary').click()
    cy.get('[data-test="back-to-products"]').click()
    
});

Cypress.Commands.add('adicionarProduto3',(produto3)=>{
    cy.contains(produto3).click()
    cy.get('.btn_primary').click()
    cy.get('[data-test="back-to-products"]').click()
    
});

