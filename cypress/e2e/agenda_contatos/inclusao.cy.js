

describe('Teste para incluir um novo contato', () => {
beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
})

    it('Deve ser preenchido os campos e novo contato adicionado com sucesso', () => {
        cy.get('input[type="text"]').type('Jorge')
        cy.get('input[type="email"]').type('jorge@gmail.com')
        cy.get('input[type="tel"]').type(5199875452)
        cy.get('.adicionar').click()
        cy.get('input').should('have.length', 3)
     
    })

})