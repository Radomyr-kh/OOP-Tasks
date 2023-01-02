import Movie from './Tasks/task-1.js';
import Student from './Tasks/task-2.js';
import {Distributor, MyProduct} from './Tasks/task-3.js';
import getMin from './Tasks/task-4.js';
import {getProduct} from './Tasks/task-5.js';
import Plane, {
  PassengerPlane,
  TransportPlane,
  WarPlane,
} from './Tasks/task-6.js';
import pizzaMenu from './Tasks/task-7-menu.js';
import PizzaMaker from './Tasks/task-7.js';

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
const localDistributor = new Distributor();

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
console.log(getMin([12, 6, 22, 13, 7, 1])); //6
console.log(getMin([15, 26, 2, -3, 3, 33])); // -3

// !Task-5
console.log(getProduct(4, 5)); // 1200
console.log(getProduct(6, 7)); // 2520

// !Task-6
const plane1 = new TransportPlane('An-225 Mriya', 105000, 5000, 500, 300000);
const plane2 = new PassengerPlane('Boeing-747', 193000, 2500, 410, 90000);
const plane3 = new WarPlane('F-22 Raptor', 8200, 320, 20, 1.2);

console.log('Sorted range of planes:');

const planesArray = [plane1, plane2, plane3];
Plane.sortFlightRange(planesArray);

// !Task-7
const pizza = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
console.log('calculatePrice:', pizza.calculatePrice());
