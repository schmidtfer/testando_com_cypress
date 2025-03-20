


describe('Teste para remoção de um contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
})


it('Deve apagar todo os dados do contato', () => {
cy.get('.delete').first().click()

})

})