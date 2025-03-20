

describe('Teste para incluir um novo contato', () => {
beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
})

    it('Deve ser preenchido os campos e novo contato adicionado com sucesso', () => {
        cy.get('input[type="text"]').type('Rodrigo Santos')
        cy.get('input[type="email"]').type('rodrigos@gmail.com')
        cy.get('input[type="tel"]').type(11982212878)
        cy.get('.adicionar').click()
        cy.get('input').should('have.length', 3)
     
    })

})