import { expect } from "chai";
import helper from "../utils/helper";
import ProductModel from "../models/product-model";

class ProductsPage {
  constructor() {
    this.selectedProducts = new Array();
  }

  addItemsToCart(itemsCount) {
    let numOfOrders = 0;
    let randomOrderMap = new Map();
    cy.xpath('//*[@data-test="inventory-item"]').should("have.length.gt", 0);

    cy.writeFile("./cypress/fixtures/sorted-product-items.json", "");

    cy.xpath('//*[@data-test="inventory-item"]').then((elements) => {
      numOfOrders = elements.length;
      if (itemsCount <= 0) {
        itemsCount = 1;
      } else if (itemsCount > numOfOrders) {
        itemsCount = numOfOrders;
      }

      for (let index = 0; index < itemsCount; index++) {
        const randomIdx = helper.getRandomIndex(0, numOfOrders);

        if (randomOrderMap.has(randomIdx)) {
          continue;
        } else {
          randomOrderMap.set(randomIdx, randomIdx);
          var element = elements[randomIdx];
          const selectedProduct = new ProductModel();

          cy.wrap(element).within(() => {
            cy.get('[class="inventory_item_name "]').then((ele) => {
              selectedProduct.set_name = ele.text().trim();
            });

            cy.get('[data-test="inventory-item-desc"]').then((ele) => {
              selectedProduct.set_description = ele.text().trim();
            });

            cy.get('[data-test="inventory-item-price"]').then((ele) => {
              selectedProduct.set_price = ele.text().trim();
            });

            cy.get("button").click();

            cy.get("[data-test*='remove-']").should("have.text", "Remove");
          });
          this.selectedProducts.push(selectedProduct);
        }
      }
    });

    let sortedProducts = this.selectedProducts.sort((first, second) => {
      first.set_name - second.set_name;
    });

    cy.writeFile(
      "./cypress/fixtures/sorted-product-items.json",
      sortedProducts
    );

    cy.xpath('//*[@data-test="shopping-cart-badge"]').then((element) => {
      const count = element.text();
      expect(parseInt(count)).not.equal(0);
    });
  }

  openCart() {
    cy.get('[data-test="shopping-cart-link"]').should("be.visible");
    cy.get('[data-test="shopping-cart-link"]').click();
  }
}

const productsPage = new ProductsPage();
export default productsPage;
