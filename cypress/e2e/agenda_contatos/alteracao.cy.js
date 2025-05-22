

describe('Teste para alteração dos dados cadastrados', () =>{
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
})

    it('Deve permitir editar as informações do contato e salvar após alterações', () => {
         cy.get('.edit').first().click()
         cy.get('input[placeholder="Nome"]').clear().type('Maria')
         cy.get('input[placeholder="E-mail"]').clear().type('maria_carla@gmail.com')
         cy.get('input[placeholder="Telefone"]').clear().type(11998124587)
         cy.get('.alterar').first().click()
       

    })
})