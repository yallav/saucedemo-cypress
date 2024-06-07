class HomePage {
  launchHomePage(applicationUrl) {
    cy.visit("https://www.saucedemo.com/");
    cy.title().should("eq", "Swag Labs");
  }

  login(username, password) {
    cy.xpath('//*[@class="login_logo"]').then((element) => {
      expect(element.text()).to.equal('Swag Labs');
    });

    cy.xpath('//*[@name="user-name"]').clear();
    cy.xpath('//*[@name="user-name"]')
      .type(username)
      .should('have.value', username);
    cy.get('[data-test="password"]').clear();
    cy.get('[data-test="password"]')
      .type(password)
      .should('have.value', password);

    cy.get('[data-test="login-button"]').click();
  }
}

const homePage = new HomePage();
export default homePage;
