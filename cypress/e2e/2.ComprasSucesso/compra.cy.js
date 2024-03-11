/// <reference types="cypress" />

describe('Teste E2E- Realizando a compra de produtos com sucesso', () => {

 
    it('Fluxo da compra de produtos', () => {
        cy.login_teste('standard_user','secret_sauce')
        cy.titulo('Products');

      // Ordenação de produtos de menor para maior valor
       cy.Ordenar('Price (low to high)')

      // Validação da ordenação dos tres primeiros produtos
      cy.OrdenarPrimeiros()
      
      //Adicionando produtos ao carrinho
      cy.adicionarProduto1('Sauce Labs Onesie')

      cy.adicionarProduto2('Sauce Labs Bike Light')

      cy.adicionarProduto3('Sauce Labs Bolt T-Shirt')

    
      //Checagem da quantidade de produtos adicionados no carrinho
      cy.checarProduto('3')

      //Check no carrinho de produtos
      cy.get('.shopping_cart_link').click()
      cy.VerificarProdutos()

      //Checkout
      cy.get('[data-test="checkout"]').click()

      //Preenchendo dados de cliente
      cy.get('[data-test="firstName"]').type('Gleyciana')
      cy.get('[data-test="lastName"]').type('Sombra')
      cy.get('[data-test="postalCode"]').type('12345678')
      cy.get('[data-test="continue"]').click()

      //Verificando produtos no checkout
      cy.VerificarProdutos()

      //Checagem valor total
      cy.get('.summary_total_label').should('have.text','Total: $36.69')

      //Finalizando a compra
      cy.get('[data-test="finish"]').click()

      //Checkando a mensagem de agradecimento pela compra
      cy.get('.complete-header').should('contain','Thank you for your order!')

      //Retornando para Home
      cy.get('[data-test="back-to-products"]').click()

      //Saindo da página
      cy.get('#react-burger-menu-btn').click()
      cy.get('#logout_sidebar_link').click()

  })

})