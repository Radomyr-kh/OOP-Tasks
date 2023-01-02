# Task 1

Create a **_Movie class_**, the constructor of which accepts 3 parameters:

- **_name_** - movie name,
- **_category_** - movie genre,
- **_startShow_** - movie start year

The class has a **_watchMovie()_** method that returns a phrase and adds a movie name name parameter to it at the end. **For example**, "I watch the movie Avatar!"

Create an instance of the **_movie_** class with the title of the movie "Avatar", the genre "sci-fi" and 2009 release.  
Create an instance of the **_movie_** class with the title of the movie "Batman", the genre "action" and the 2022 release.

# Task 2

Implement the **_Student_** class, the constructor of which accepts 2 parameters:

- **_fullName_** - the name and surname of the student,
- **_direction_** - the direction in which he studies.

Create a **_showFullName()_** method that returns the student's first and last name.  
Create a **_nameIncludes(data)_** method that, using the **_showFullName()_** method, checks for the text data argument in the student’s name and returns true if a match is found or false if not found.  
Create a static **_studentBuilder()_** method that returns a new instance of the class named ‘Ihor Kohut’ and the direction ‘qc’.  
Create a getter and setter **_direction()_** to read and specify the direction field.  
Create an instance of class **_stud1_** named 'Ivan Petrenko' and direction 'web'.  
Create an instance of class **_stud2_** named 'Sergiy Koval' and direction 'python'.  
Create an instance of the **_stud3_** class named ‘Ihor Kohut’ and the direction ‘qc’ using the static **_studentBuilder()_** method.  

**Usage example:**
const stud1 = new Student('Ivan Petrenko', 'web');  
stud1.nameIncludes('Ivan'); // true  
stud1.nameIncludes('Denysenko'); // false  

# Task 3

Please, fill in missed lines of code.  
Product constructor should provide a generation of unique product id within the application no matter how many products are created.  
Distributor can store information about products in its products property and has an ability to add and remove a product.  

- **_addProduct_** adds a new property to products with name of product id and value - product name.
- **_removeProduct_** removes a property with specified id from **_products_**.

Please, use _Symbol_ data type.

# Task 4

Implement the **_getMin(arr)_** function, which takes an array of numbers arr and returns the smallest number of the array. To solve the problem, you must use one of the methods to specify the context of this. It is forbidden to use any cycles.

# Task 5

We have the **_product()_** function, you can see it on the snapshot below. This **_product()_** function finds the product of its arguments and also uses **_this_** object for the initial value of the product.
Please, create a new function **_getProduct()_** that, no matter how it is called, will be always bound to a particular this value. **_getProduct()_** should be created from the original **_product()_** function and work with the same logic, but should pass two additional arguments – 2 and 3 – to the original function, every time **_getProduct()_** is called.
Object **_this_** for **_getProduct()_** function you should also define by yourself. Look at snapshot for clues what it should be.

# Task 6

Implement the **_Plane_** class, the constructor of which accepts 3 parameters:

- **_model_** - model of the plane,
- **_fuelSupply_** - capacity of a stock of fuel of the plane,
- **_fuelConsumption_** - average fuel consumption in liters on 100 km of flight.

1. Create a method of class **_calcFlightRange()_** , which determines the range of the plane by the formula **_fuelSupply / fuelConsumption \* 100_** and returns it.

2. Create a static method of class **_sortFlightRange(planesArray)_** , which takes an array of instances of class **_planesArray_**, sorts the flight range of plane in ascending order
   and outputs the result to the console in the format **_plane_model: range_**.

3. Create a **_TransportPlane_** class, which is inherited from the **_Plane_** class, the constructor of which takes 5 parameters:

- **_model_** - plane model,
- **_fuelSupply_** - the amount of fuel,
- **_fuelConsumption_** - the average fuel consumption in liters per 100 km,
- **_cargo_** - maximum tonnage,
- **_addTank_** - about additional tanks of the plane

In this class, you need to override the **_calcFlightRange()_** method to take into account that the **_fuelSupply_** has increased the amount of fuel added by the **_addTank_**.

4. Create a class **_PassengerPlane_**, which is inherited from the class **_Plane_**, whose constructor accepts 5 parameters:

- **_model_**,
- **_fuelSupply_**,
- **_fuelConsumption_**,
- **_passengers_** - the maximum number of passengers,
- **_refueling_** - the amount of additional fuel received in the refueling.

In this class, you need to override the **_calcFlightRange()_** method to take into account that the **_fuelSupply_** has increased refueling.

5. Create a **_WarPlane_** class, which is inherited from the **_Plane_** class, the constructor of which accepts 5 parameters:

- **_model_**,
- **_fuelSupply_**,
- **_fuelConsumption_**,
- **_missiles_** - the number of missile weapons,
- **_aerodynamicsKoef_** - the coefficient of aerodynamics of the plane.

In this class, you need to override the **_calcFlightRange()_** method in such
a way as to take into account that the flight range of the plane increases in proportion to the value of the aerodynamics coefficient of **_aerodynamicsKoef_**.
 
**Usage example:**  
_console.log("Unsorted range of planes:");  
const plane1 = new TransportPlane("An-225 Mriya", 105000, 5000, 500, 300000);  
console.log("An-225 Mriya: ", plane1.calcFlightRange());  
const plane2 = new PassengerPlane("Boeing-747", 193000, 2500, 410, 90000);  
console.log("Boeing-747:", plane2.calcFlightRange());  
const plane3 = new WarPlane("F-22 Raptor", 8200, 320, 20, 1.2);  
console.log("F-22 Raptor:", plane3.calcFlightRange());  
console.log("Sorted range of planes:");  
const planesArray = [plane1, plane2, plane3];  
Plane.sortFlightRange(planesArray);_ 

**Output in console:**  
_Unsorted range of planes:  
An-225 Mriya: 8100  
Boeing-747: 11320  
F-22 Raptor: 3075  
Sorted range of planes:  
F-22 Raptor: 3075  
An-225 Mriya: 8100  
Boeing-747: 11320_  

# Task 7

Implement the **_PizzaMaker_** class, which allows you to create pizza of different types, with different ingredients, calculate the price and calorie content of pizza.

The pizza comes in **3 sizes**: S, M and L.

There are **4 types of pizza** available:

- meat,
- fish,
- cheese,
- vegetarian.

When creating a new pizza, be sure to specify the size and appearance.

**Additional ingredients** are available that can be added to the pizza at the customer's request: tomatoes, peppers, bacon and olives.

Each element that makes up pizza has its own name, price and calorie content. All of this data is contained in the pizzaMenu object.

The **_PizzaMaker_** class has a number of methods for generating pizza:

- **_addIngredient(ingredient)_** method adds an additional ingredient to the pizza. A new ingredient is added if it is not included in the pizza, and the message
  "ingredient_name has been added" is displayed in the console. If such an ingredient has already been added, the message "Such an ingredient already exists!" Is
  generated.
- **_deleteIngredient(ingredient)_** method removes the specified ingredient from the list of existing ingredients, displays the message "ingredient_name has been deleted"
  to the console.
- **_getIngredients()_** method returns a list of the attached ingredients with their name, price, calorie content.
- **_getSize()_** method returns the size of the pizza.
- **_getKind()_** method returns the type of pizza.
- **_calculatePrice()_** method calculates and returns the total cost of a pizza, which consists of the sum of the values of all its components.
- **_calculateCalories()_** method calculates and returns the total calorie content of a pizza, which consists of the sum of the calories of all its components

**Usage example:**  
_const pizzaMenu = {  
SIZE_S: {param: "SIZE_S", price: 60, calorie: 300},  
SIZE_M: {param: "SIZE_M", price: 90, calorie: 450},  
SIZE_L: {param: "SIZE_L", price: 110, calorie: 600},  
KIND_MEAT: {param: "KIND_MEAT", price: 55, calorie: 230},  
KIND_FISH: {param: "KIND_FISH", price: 70, calorie: 150},  
KIND_CHEESE: {param: "KIND_CHEESE", price: 50, calorie: 200},  
KIND_VEGETARIAN: {param: "KIND_VEGETARIAN", price: 35, calorie: 50},  
INGREDIENT_TOMATOES: {param: "INGREDIENT_TOMATOES", price: 15, calorie: 5},  
INGREDIENT_PEPPER: {param: "INGREDIENT_PEPPER", price: 18, calorie: 5},  
INGREDIENT_BACON: {param: "INGREDIENT_BACON", price: 25, calorie: 40},  
INGREDIENT_OLIVES: {param: "INGREDIENT_OLIVES", price: 20, calorie: 0}  
};
// my PizzaMaker class implementation  
const pizza = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);  
console.log("Size:", pizza.getSize());   
console.log("Kind:", pizza.getKind());  
console.log("calculatePrice:", pizza.calculatePrice());  
console.log("calculateCalories:", pizza.calculateCalories());  
console.log("getIngredients:", pizza.getIngredients());  
pizza.addIngredient(pizzaMenu.INGREDIENT_TOMATOES);  
pizza.addIngredient(pizzaMenu.INGREDIENT_BACON);  
console.log("getIngredients:", pizza.getIngredients());  
pizza.deleteIngredient(pizzaMenu.INGREDIENT_TOMATOES);  
console.log("getIngredients:", pizza.getIngredients());  
console.log("calculatePrice:", pizza.calculatePrice());  
console.log("calculateCalories:", pizza.calculateCalories());_

**Output in console:**  
_Size: SIZE_M  
Kind: KIND_MEAT  
calculatePrice: 145  
calculateCalories: 680  
getIngredients: []  
INGREDIENT_TOMATOES has been added  
INGREDIENT_BACON has been added  
getIngredients: [  
{ param: 'INGREDIENT_TOMATOES', price: 15, calorie: 5 },  
{ param: 'INGREDIENT_BACON', price: 25, calorie: 40 }  
]  
INGREDIENT_TOMATOES has been deleted  
getIngredients: [ { param: 'INGREDIENT_BACON', price: 25, calorie: 40 } ]  
calculatePrice: 170  
calculateCalories: 720_  
