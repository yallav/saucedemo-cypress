class ProductModel {
  constructor() {
    this.name = "";
    this.description = "";
    this.price = 0;
  }

  set set_name(name) {
    this.name = name;
  }
  get get_name() {
    return this.name;
  }

  set set_description(description) {
    this.description = description;
  }
  get get_description() {
    return this.description;
  }

  set set_price(price) {
    this.price = price;
  }
  get get_price() {
    return this.price;
  }
}

export default ProductModel;
