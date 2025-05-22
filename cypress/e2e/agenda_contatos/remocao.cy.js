


describe('Teste para remoção de um contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
})


it('Deve apagar o primeiro contato da lista', () => {
cy.get('.delete').first().click()

})

})