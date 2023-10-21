/// <reference types="cypress"/>

const { faker } = require('@faker-js/faker')

describe('Funcionalidade pré-cadastro', () => {

    beforeEach(()=>{
        cy.visit('minha-conta/')
    })
    it('Deve completar o pré-cadastro com sucesso', () => {

        let emailFaker = faker.internet.email()

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type('Lucas')
        cy.get('#account_last_name').type('Silva')
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
        

    });
});