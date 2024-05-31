import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../../../pages/home-page";
import productsPage from "../../../../pages/products-page";
import cartItemsPage from "../../../../pages/cart-items-page";
import checkoutPage from "../../../../pages/checkout-page";
import checkoutOverviewPage from "../../../../pages/checkout-overviewpage";
import checkoutCompletePage from "../../../../pages/checkout-completepage";

Given("user launches Saucedemo application with {string}", (url) => {
  homePage.launchHomePage(url);
});

When(
  "user enters {string} as user name and {string} as password and clicks login button",
  (username, password) => {
    homePage.login(username, password);
  }
);

And("user adds two random items to cart", () => {
  productsPage.addItemsToCart(2);
});

And("user clicks on cart icon", () => {
  productsPage.openCart();
});

And("user clicks on Checkout button", () => {
  cartItemsPage.validateCart();
  cartItemsPage.openCheckout();
});

And("user fills the form and submit the form", () => {
  checkoutPage.submitTheForm();
});

And("user clicks on Finish button", () => {
  checkoutOverviewPage.validateTheOverviewPage();
  checkoutOverviewPage.finishCheckout();
});

Then("user should see {string}", (verification) => {
  checkoutCompletePage.validateThePage(verification);
  checkoutCompletePage.logout();
});
