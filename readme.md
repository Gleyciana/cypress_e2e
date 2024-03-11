# Teste E2E - Realizando a compra de produtos com sucesso! 🛒

Este é um teste E2E automatizado que realiza o fluxo de compra de produtos em um site de comércio eletrônico. O teste foi implementado usando Cypress.

## Site Utilizado

O teste foi realizado no site [Sauce Demo](https://www.saucedemo.com/).

## Recursos Utilizados

- As aulas do canal [Alexo Soares no YouTube](https://www.youtube.com/@alexosoares/videos) foram utilizadas como referência para a criação deste teste.

## Cenários de teste

| Número | Cenários                                                             |
|--------|---------------------------------------------------------------------|
| 1      | ✔️ **Login bem-sucedido**: O teste inicia com um login bem-sucedido usando credenciais de usuário válidas. |
| 2      | 🛒 **Ordenação de produtos**: Os produtos são ordenados do menor para o maior preço. |
| 3      | 🔄 **Validação da ordenação**: Verifica se os três primeiros produtos na lista estão corretamente ordenados. |
| 4      | ➕ **Adição de produtos ao carrinho**: Três produtos específicos são adicionados ao carrinho. |
| 5      | 🛒 **Verificação da quantidade de produtos no carrinho**: Verifica se a quantidade de produtos no carrinho é correta. |
| 6      | ✅ **Verificação dos produtos no carrinho**: Verifica se os produtos adicionados estão corretamente listados no carrinho. |
| 7      | 🛒 **Checkout**: Realiza o processo de checkout, preenchendo os dados de cliente necessários. |
| 8      | 💵 **Verificação do valor total**: Verifica se o valor total no checkout corresponde ao esperado. |
| 9      | 🎉 **Finalização da compra**: Finaliza a compra clicando no botão de finalização. |
| 10     | 📩 **Verificação da mensagem de agradecimento**: Verifica se a mensagem de agradecimento pela compra é exibida corretamente. |
| 11     | 🏠 **Retorno para a página inicial**: Retorna à página inicial após a conclusão da compra. |
| 12     | 🔐 **Logout**: Realiza o logout da conta do usuário. |

## Pré-requisitos

Antes de executar o teste, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/): Ambiente de execução JavaScript.
- [Visual Studio Code](https://code.visualstudio.com/): Editor de código-fonte.
- [Cypress](https://www.cypress.io/): Ferramenta de automação de teste de front-end.

## Elaborado por

Este projeto foi desenvolvido 💜 por Gleyciana Campelo 👋 &nbsp;[Meu LinkedIn](https://www.linkedin.com/in/gleyciana-campelo/)



