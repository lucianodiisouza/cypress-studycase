describe('Work with basic elements', () => {
    before(() => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        // cy.visit('http://wcaquino.me/cypress/componentes.html')
        cy.reload()
    })

    it('Text', () => {

        // searching in entire page body
        cy.get('body')
            .should('contain', 'Cuidado onde clica, muitas armadilhas...')

        // finding by html element: span
        cy.get('span').should('contain', 'Cuidado')

        // Using javascript querySelector to find a specific class
        cy.get('.facilAchar').should('contain', 'Cuidado')

        // Applying should have text
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () => {

        cy.get('[href="#"]').click()
        // cy.get('a').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload();
        cy.get('#resultado').should('not.have.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it("TextFields", () => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')

        cy.get('#elementosForm\\:sugestoes')
            .type('Textarea Test')
            .should('have.value', 'Textarea Test')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('Luciano')
            .should('have.value', 'Luciano')

        cy.get('[data-cy=dataSobrenome]')
            .type('Teste12345{backspace}{backspace}')
            .should('have.value', 'Teste123')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', { delay: 100})
            .should('have.value', 'acerto')
    })

    it.only('RadioButton', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')

        cy.get('#formSexoMasc')
            .should('not.be.checked')

        cy.get("[name='formSexo']")
        .should('have.length', 2)
    })
})
