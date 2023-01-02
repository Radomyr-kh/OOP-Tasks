import Movie from './Tasks/task-1.js';
import Student from './Tasks/task-2.js';
// import Movie from './Tasks/task-2.js';
// import Movie from './Tasks/task-3.js';
// import Movie from './Tasks/task-4.js';
// import Movie from './Tasks/task-5.js';
// import Movie from './Tasks/task-6.js';
// import Movie from './Tasks/task-7.js';

// !Task-1
const movie1 = new Movie('Titanic', 'drama', 1997);
const movie2 = new Movie('Troya', 'historical', 2004);

console.log(movie1);
console.log(movie2);
console.log(movie1.watchMovie());
console.log(movie2.watchMovie());

// !Task-2
const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koval', 'python');
const stud3 = Student.studentBuilder();

let a = stud1.nameIncludes('Ivan'); // true
let b = stud1.nameIncludes('Denysenko'); // false

console.log(a);
console.log(b);
console.log(stud3);

// !Task-3
class Distributor {
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

const localDistributor = new Distributor();

class MyProduct {
  constructor(name, id) {
    //generate unique product id; define id and name fields
    this.name = name;
    this.id = Symbol(name);
  }

  distribute(distributor) {
    distributor.addProduct(this.id, this.name);
  }
}

// 1
const product1 = new MyProduct('butter');
product1.distribute(localDistributor);
console.log(localDistributor.products);

// 2
new MyProduct('bread').distribute(localDistributor);
new MyProduct('bread').distribute(localDistributor);
console.log(localDistributor.products);

// 3
localDistributor.removeProduct(product1.id);
console.log(localDistributor.products);

// !Task-4
function getMin(arr) {
  const foo = (array) => Math.min(...array);
  return foo.apply(this, [arr]);
}

console.log(getMin([12, 6, 22, 13, 7, 1])); //6
console.log(getMin([15, 26, 2, -3, 3, 33])); // -3

// !Task-5
const product = function () {
  return [].reduce.call(
    arguments,
    function (res, elem) {
      return res * elem;
    },
    this.product
  );
};

const contextObj = {
  product: 10,
};

const getProduct = function (a, b) {
  return product.call(contextObj, 2, 3, a, b);
};

console.log(getProduct(4, 5)); // 1200
console.log(getProduct(6, 7)); // 2520

// !Task-6
class Plane {
  constructor(model, fuelSupply, fuelConsumption) {
    this.model = model;
    this.fuelSupply = fuelSupply;
    this.fuelConsumption = fuelConsumption;
  }

  calcFlightRange() {
    return (this.fuelSupply / this.fuelConsumption) * 100;
  }

  static sortFlightRange(planesArray) {
    planesArray.sort(function (a, b) {
      return a.calcFlightRange() - b.calcFlightRange();
    });

    planesArray.forEach((el) =>
      console.log(`${el.model}: ${el.calcFlightRange()}`)
    );
  }
}

class TransportPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, cargo, addTank) {
    super(model, fuelSupply, fuelConsumption);
    this.cargo = cargo;
    this.addTank = addTank;
  }
  calcFlightRange() {
    // override the calcFlightRange() method to take into account that the fuelSupply has increased the amount of fuel added by the addTank
    return ((this.fuelSupply + this.addTank) / this.fuelConsumption) * 100;
  }
}

class PassengerPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, passengers, refueling) {
    super(model, fuelSupply, fuelConsumption);
    this.passengers = passengers;
    this.refueling = refueling;
  }
  calcFlightRange() {
    // override the calcFlightRange() method to take into account that the fuelSupply has increased refueling
    return ((this.fuelSupply + this.refueling) / this.fuelConsumption) * 100;
  }
}

class WarPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, missiles, aerodynamicsKoef) {
    super(model, fuelSupply, fuelConsumption);
    this.missiles = missiles;
    this.aerodynamicsKoef = aerodynamicsKoef;
  }
  calcFlightRange() {
    // override the calcFlightRange() method in such a way as to take into account that the flight range of the plane increases in proportion to the value of the aerodynamics coefficient of aerodynamicsKoef
    return (
      (this.fuelSupply / this.fuelConsumption) * 100 * this.aerodynamicsKoef
    );
  }
}

const plane1 = new TransportPlane('An-225 Mriya', 105000, 5000, 500, 300000);
const plane2 = new PassengerPlane('Boeing-747', 193000, 2500, 410, 90000);
const plane3 = new WarPlane('F-22 Raptor', 8200, 320, 20, 1.2);

console.log('Sorted range of planes:');

const planesArray = [plane1, plane2, plane3];
Plane.sortFlightRange(planesArray);

// !Task-7
const pizzaMenu = {
  SIZE_S: {param: 'SIZE_S', price: 60, calorie: 300},
  SIZE_M: {param: 'SIZE_M', price: 90, calorie: 450},
  SIZE_L: {param: 'SIZE_L', price: 110, calorie: 600},

  KIND_MEAT: {param: 'KIND_MEAT', price: 55, calorie: 230},
  KIND_FISH: {param: 'KIND_FISH', price: 70, calorie: 150},
  KIND_CHEESE: {param: 'KIND_CHEESE', price: 50, calorie: 200},
  KIND_VEGETARIAN: {param: 'KIND_VEGETARIAN', price: 35, calorie: 50},

  INGREDIENT_TOMATOES: {param: 'INGREDIENT_TOMATOES', price: 15, calorie: 5},
  INGREDIENT_PEPPER: {param: 'INGREDIENT_PEPPER', price: 18, calorie: 5},
  INGREDIENT_BACON: {param: 'INGREDIENT_BACON', price: 25, calorie: 40},
  INGREDIENT_OLIVES: {param: 'INGREDIENT_OLIVES', price: 20, calorie: 0},
};

class PizzaMaker {
  constructor(size, kind, ingredients) {
    this.size = size;
    this.kind = kind;
    this.ingredients = [];
  }

  addIngredient(ingredient) {
    if (this.ingredients.some((el) => el.param === ingredient.param)) {
      console.log('Such an ingredient already exists!');
    } else {
      this.ingredients.push(ingredient);
      console.log(`${ingredient.param} has been added`);
    }
  }

  deleteIngredient(ingredient) {
    let index = this.ingredients.indexOf(ingredient);
    this.ingredients.splice(index, 1);
    console.log(`${ingredient.param} has been deleted`);
  }
  getIngredients() {
    return this.ingredients;
  }
  getSize() {
    return this.size.param;
  }
  getKind() {
    return this.kind.param;
  }
  calculatePrice() {
    let IngredientsPrice = 0;
    if (this.ingredients.length > 0) {
      IngredientsPrice = this.ingredients.reduce(
        (total, current) => (total.price += current.price)
      );
    }

    return IngredientsPrice + this.size.price + this.kind.price;
  }
  calculateCalories() {
    let IngredientsCalories = 0;
    if (this.ingredients.length > 0) {
      IngredientsCalories = this.ingredients.reduce(
        (total, current) => (total.calorie += current.calorie)
      );
    }
    return IngredientsCalories + this.size.calorie + this.kind.calorie;
  }
}

const pizza = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
console.log('calculatePrice:', pizza.calculatePrice());
