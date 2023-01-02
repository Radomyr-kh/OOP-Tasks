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
const avatar = new Movie('Avatar', 'sci-fi', 2009);
const batman = new Movie('Batman', 'action', 2022);

console.log(avatar);
console.log(batman);
console.log(avatar.watchMovie());
console.log(batman.watchMovie());

// !Task-2
const ivan = new Student('Ivan Petrenko', 'web');
const sergiy = new Student('Sergiy Koval', 'python');
const defaultStudent = Student.studentBuilder();

let a = ivan.nameIncludes('Ivan'); // true
let b = sergiy.nameIncludes('Denysenko'); // false

console.log(a);
console.log(b);
console.log(defaultStudent);

// !Task-3
const localDistributor = new Distributor();

// 1
const butter = new MyProduct('butter');
butter.distribute(localDistributor);
console.log(localDistributor.products);

// 2
new MyProduct('bread').distribute(localDistributor);
console.log(localDistributor.products);

// 3
localDistributor.removeProduct(butter.id);
console.log(localDistributor.products);

// !Task-4
console.log(getMin([12, 6, 20, 18, 8, 3])); // 3
console.log(getMin([15, 26, 2, -3, 3, 33])); // -3

// !Task-5
console.log(getProduct(4, 5)); // 1200
console.log(getProduct(6, 7)); // 2520

// !Task-6
const mriya = new TransportPlane('An-225 Mriya', 106000, 4000, 600, 280000);
const boeing = new PassengerPlane('Boeing-767', 192000, 2300, 320, 90000);
const falcon = new WarPlane('F-16 Falcon', 8200, 230, 20, 1.3);

console.log('Sorted range of planes:');

const planesArray = [mriya, boeing, falcon];
Plane.sortFlightRange(planesArray);

// !Task-7
const pizza = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
console.log('calculatePrice:', pizza.calculatePrice());
