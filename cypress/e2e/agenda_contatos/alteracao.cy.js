

describe('Teste para alteração dos dados cadastrados', () =>{
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
})

    it('Deve permitir editar as informações do contato e salvar após alterações', () => {
        cy.get('.edit').first().click()
        cy.get('.alterar').first().click()


    })
})