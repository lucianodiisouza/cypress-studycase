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

  it("Find use-case", () => {
    cy.get("#buttonList").click();

    cy.get("#lista li").find("span").should("contain", "Item 1");

    /*
     * This dont work cause the find command has limited scope to the first item
     */

    // cy.get("#lista li").find("span").should("contain", "Item 2");

    cy.get("#lista li span").should("contain", "Item 2");
  });

  it("Timeout use-case", () => {
    // cy.get("#buttonDelay").click();
    // cy.get("#novoCampo", { timeout: 1000}).should("exist");

    // cy.get("#buttonListDOM").click();
    // Avoid use wait, because wait stops application,
    // instead it use timeout inside the assert, cause timeout will
    // wait until the specified time, while wait will stop application
    // for the specified time.

    // cy.wait(5000);
    // cy.get("#lista li span", { timeout: 30000 }).should("contain", "Item 2");

    cy.get("#buttonListDOM").click();
    cy.get("#lista li span", { timeout: 30000 }).should("have.length", 1);
  });

  it("Click retry", () => {
    cy.get("#buttonCount").click().click().should("have.value", "111");
  });

  it.only("Should vs Then", () => {
    cy.get("#buttonListDOM").click();
    cy.get("#lista li span").then(($el) => {
      expect($el).to.have.length(1);
    });
  });
});
