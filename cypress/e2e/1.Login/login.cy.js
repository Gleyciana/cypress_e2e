/// <reference types="cypress" />

describe('Testes Funcional de Login', () => {

    it('Login com sucesso', () => {
        cy.login_teste('standard_user','secret_sauce')
        cy.titulo('Products');

    });

    it('Login com Username inválido', () => {
        cy.login_teste('Gleyci','secret_sauce')
        cy.msg_error('Epic sadface: Username and password do not match any user in this service')
    
    });

    it('Login com password inválida', () => {
        cy.login_teste('standard_user','1234567')
        cy.msg_error('Epic sadface: Username and password do not match any user in this service')

    });

    it('Login com Username e password inválidos', () => {
        cy.login_teste('standard','1234567')
        cy.msg_error('Epic sadface: Username and password do not match any user in this service')

    });
});