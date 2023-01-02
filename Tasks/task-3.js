export class Distributor {
  constructor() {
    this.products = {};
  }
  addProduct(id, name) {
    // add a property to products with name equal to product id and value equal to product name
    this.id = id;
    this.products[id] = name;
  }
  removeProduct(id) {
    // remove a property from products with name equal to specified id
    delete this.products[id];
  }
}

export class MyProduct {
  constructor(name, id) {
    //generate unique product id; define id and name fields
    this.name = name;
    this.id = Symbol(name);
  }
  distribute(distributor) {
    distributor.addProduct(this.id, this.name);
  }
}
