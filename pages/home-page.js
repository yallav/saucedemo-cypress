class HomePage {
  launchHomePage(applicationUrl) {
    cy.visit("https://www.saucedemo.com/");
    cy.title().should("eq", "Swag Labs");
  }

  login(username, password) {
    cy.xpath('//*[@class="login_logo"]').then((element) => {
      expect(element.text()).to.equal("Swag Labs");
    });

    cy.xpath('//*[@name="user-name"]').clear();
    cy.xpath('//*[@name="user-name"]')
      .type(username)
      .should("have.value", username);
    cy.get('[data-test="password"]').clear();
    cy.get('[data-test="password"]')
      .type(password)
      .should("have.value", password);

    cy.get('[data-test="login-button"]').click();
  }

  /*async loginWithEmptyUsername() {
    expect(this.page.locator('//*[@class="login_logo"]')).toHaveText(
      "Swag Labs"
    );
    this.page.locator('//*[@name="user-name"]').click();
    this.page.locator('[data-test="password"]').click();
    this.page.locator('[data-test="password"]').fill(process.env.PASSWORD);
    this.page.locator('[data-test="login-button"]').click();
    expect(this.page.locator('//*[@data-test="error"]')).toHaveText(
      "Epic sadface: Username is required"
    );
  }

  async loginWithEmptyPawword() {
    expect(this.page.locator('//*[@class="login_logo"]')).toHaveText(
      "Swag Labs"
    );
    this.page.locator('//*[@name="user-name"]').click();
    this.page.locator('//*[@name="user-name"]').fill(process.env.USER_NAME);
    this.page.locator('[data-test="password"]').click();
    this.page.locator('[data-test="login-button"]').click();
    expect(this.page.locator('//*[@data-test="error"]')).toHaveText(
      "Epic sadface: Password is required"
    );
  }

  async loginWithWrongUserOrPawword() {
    expect(this.page.locator('//*[@class="login_logo"]')).toHaveText(
      "Swag Labs"
    );
    this.page.locator('//*[@name="user-name"]').click();
    this.page.locator('//*[@name="user-name"]').fill(process.env.USER_NAME);
    this.page.locator('[data-test="password"]').click();
    this.page
      .locator('[data-test="password"]')
      .fill(process.env.WRONG_PASSWORD);
    this.page.locator('[data-test="login-button"]').click();
    expect(this.page.locator('//*[@data-test="error"]')).toHaveText(
      "Epic sadface: Username and password do not match any user in this service"
    );
  } */
}

const homePage = new HomePage();
export default homePage;
