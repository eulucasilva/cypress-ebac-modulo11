/// <reference types="cypress"/>

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
})

describe('Funcionalidade Página de produtos', () => {
    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"').eq(3).click
    });

    it.only('Deve adicionar um produto ao carrinho', () => {

        var quantidade = 2

        cy.get('[class="product-block grid"')
        .contains('Abominable Hoodie').click()

        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });
})