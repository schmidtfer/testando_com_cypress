

describe('Teste para alteração dos dados cadastrados', () =>{
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
})

    it('Deve permitir editar as informações do contato e salvar após alterações', () => {
         cy.get('.edit').first().click()
         cy.get('input[type="text"]').clear().type('GIAN SOUZA')
         cy.get('input[type="email"]').clear().type('Gian@gmail.com')
         cy.get('input[type="tel"]').clear().type(11982212878)
        cy.get('.alterar').first().click()


    })
})