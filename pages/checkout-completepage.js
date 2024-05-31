class CheckoutCompletePage {
  validateThePage(verification) {
    cy.get('[data-test="title"]').should("have.text", "Checkout: Complete!");
    cy.xpath('//*[@data-test="complete-header"]').should(
      "have.text",
      verification
    );
    cy.xpath('//*[@data-test="complete-text"]').should(
      "have.text",
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
  }

  logout() {
    cy.get('[data-test="back-to-products"]').should('be.visible');
    cy.get('body').type('{upArrow}');
    cy.xpath('//*[@id="react-burger-menu-btn"]').should('be.visible');
    cy.xpath('//*[@id="react-burger-menu-btn"]').click();
    cy.get('[data-test="logout-sidebar-link"]').should('contain', 'Logout');
    cy.get('[data-test="logout-sidebar-link"]').click();
  }
}

const checkoutCompletePage = new CheckoutCompletePage();
export default checkoutCompletePage;
