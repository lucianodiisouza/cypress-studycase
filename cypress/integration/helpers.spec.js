describe("Helpers", () => {
  it("Wrap", () => {
    const obj = { nome: "user", idade: 22 };
    // expect(obj).to.have.property("nome");

    cy.wrap(obj).should("have.property", "nome");

    cy.visit("http://wcaquino.me/cypress/componentes.html");
    cy.get("#formNome").type("Teste Luciano");

    // Com jquery
    cy.get("#formNome").then(($el) => {
      $el.val("Teste Luciano 2");
    });

    cy.get("#formNome")
      .clear()
      .then(($el) => {
        cy.wrap($el).type("Funciona via cypress");
      });

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(10);
      }, 500);
    });

    cy.get("#buttonSimple").then(() => console.log("Achei o 1o."));
    // Não teremos controle sobre a ordem de execução
    // promise.then((num) => console.log(num));

	// o wrap tras os recursos do cypress para um elemento
    cy.wrap(promise).then((num) => console.log(num));

    cy.get("#buttonList").then(() => console.log("Achei o 2o."));
  });
});
