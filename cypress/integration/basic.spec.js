// resource: http://wcaquino.me/cypress/componentes.html

describe('Cypress Basics', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')

        /**
         * This dont work, because all cypress actions runs as
         * asynchronous requests, you need to use promise models
         * to return data.
         */

        // const title = cy.title()
        // console.log(title)

        cy.title().then(res => console.log(res))


        /**
         *  This works
         */

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        /**
         * The content of should above is the same of below
         * basically, i'm avoiding to redo the same request.
         *
         */

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contain', 'Campo')

        /**
         * the code below is a pretty way to do the same thing...
         */

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')
    })
})