class CheckoutPage {
  submitTheForm() {
    cy.title().should("eq", "Swag Labs");
    cy.get('[data-test="title"]').should(
      "contain",
      "Checkout: Your Information"
    );
    cy.get('[data-test="cancel"]').should("be.visible");

    cy.get('[data-test="firstName"]').clear();
    cy.get('[data-test="firstName"]').type("Vijay");
    cy.get('[data-test="lastName"]').clear();
    cy.get('[data-test="lastName"]').type("Yalla");
    cy.get('[data-test="postalCode"]').clear();
    cy.get('[data-test="postalCode"]').type("LU11RT");

    cy.get('[data-test="cancel"]').should("be.visible");
    cy.get('[data-test="continue"]').should("be.visible");
    cy.get('[data-test="continue"]').click();
  }
}

const checkoutPage = new CheckoutPage();
export default checkoutPage;
