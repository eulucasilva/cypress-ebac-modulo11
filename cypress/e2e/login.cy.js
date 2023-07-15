/// <reference types="cypress"/>

context('Funcionalidade Login', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  })

  afterEach(() => {
    cy.screenshot()
  })
  it('Deve fazer login com sucesso', () =>{
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.page-title').should('contain', 'Minha conta')
  })

  it('Login sem sucesso com usuário inválido', () =>{
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('ebacf@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
  })

  it('Login sem sucesso com senha inválida', () =>{
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('error@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
  })
})