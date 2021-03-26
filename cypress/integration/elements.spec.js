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

    it("Hooks", () => {

    })
})
