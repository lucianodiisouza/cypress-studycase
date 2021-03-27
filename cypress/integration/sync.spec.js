describe("Wait...", () => {
  before(() => {
    cy.visit("http://wcaquino.me/cypress/componentes.html");
  });

  beforeEach(() => {
    cy.reload();
  });

  it("Wait for element availability", () => {
    cy.get("#novoCampo").should("not.exist");
    cy.get("#buttonDelay").click();
    cy.get("#novoCampo").should("not.exist");
    cy.get("#novoCampo").should("exist");
    cy.get("#novoCampo").type("working");
  });

  it("I need to retry", () => {
    cy.get("#buttonDelay").click();
    cy.get("#novoCampo").should("not.exist").should("exist");
  });

  it.only("Uso do find", () => {
    cy.get("#buttonList").click();

    cy.get("#lista li").find("span").should("contain", "Item 1");
    
	/*
     * This dont work cause the find command has limited scope to the first item
     */

    // cy.get("#lista li").find("span").should("contain", "Item 2");

    cy.get("#lista li span").should("contain", "Item 2");
  });
});
