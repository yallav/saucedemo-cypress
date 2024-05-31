import helper from "../utils/helper";
import ProductModel from "../models/product-model";

class CheckoutOverviewPage {
  constructor() {
    this.lineItems = new Array();
  }

  validateTheOverviewPage(cartItems) {
    let lineItemName = "";
    let lineItemDesc = "";
    let lineItemPrice = 0;

    cy.xpath('//*[@data-test="inventory-item"]').should("have.length.gt", 0);
    //cy.writeFile("./cypress/fixtures/sorted-line-items.json", "");

    cy.xpath('//*[@data-test="inventory-item"]').then((elements) => {
      let numOfLineItems = elements.length;

      for (let index = 0; index < numOfLineItems; index++) {
        var lineItem = elements[index];

        const selectedProduct = new ProductModel();

        cy.wrap(lineItem).within(() => {
          cy.get('[class="inventory_item_name"]').then((ele) => {
            selectedProduct.set_name = ele.text().trim();
          });

          cy.get('[data-test="inventory-item-desc"]').then((ele) => {
            selectedProduct.set_description = ele.text().trim();
          });

          cy.get('[data-test="inventory-item-price"]').then((ele) => {
            selectedProduct.set_price = ele.text().trim();
          });

          this.lineItems.push(selectedProduct);
        });
      }

      let sortedListOfItems = this.lineItems.sort((first, second) => {
        first.set_name - second.set_name;
      });

      cy.writeFile(
        "./cypress/fixtures/sorted-line-items.json",
        sortedListOfItems
      );

      /*       expect(this.lineItems.length).toEqual(cartItems.length);
      expect(this.lineItems).toEqual(cartItems); */
    });
  }

  finishCheckout() {
    cy.get("body").type("{downArrow}");
    cy.get("body").type("{downArrow}");
    cy.get("body").type("{downArrow}");
    cy.get('[data-test="cancel"]').should("be.visible");
    cy.get('[data-test="finish"]').should("be.visible");
    cy.get('[data-test="finish"]').click();
  }
}

const checkoutOverviewPage = new CheckoutOverviewPage();
export default checkoutOverviewPage;
