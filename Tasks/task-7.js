export default class PizzaMaker {
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
