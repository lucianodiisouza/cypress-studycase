describe('Work with basic elements', () => {
    it('Text', () => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')

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
})
