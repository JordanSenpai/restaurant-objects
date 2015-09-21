var Fooditem = function(name, calories, vegan, glutenFree, citrusFree) {
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
}


Fooditem.prototype.stringify = function() {
	var vegan = this.vegan ? "is" : "is not";
	var glutenFree = this.glutenFree ? "is" : "is not";
	var citrusFree = this.citrusFree ? "is" : "is not";


	console.log("The dishes name is " + this.name + ". It contains " + this.calories + " calories." + "It " + vegan + " vegan. It " + glutenFree + " gluten free. It " + citrusFree + " citrus free. Enjoy!" )
}


var taco = new Fooditem('Taco', 1000, false, false, true)
var chickenBurrito = new Fooditem('Chicken Burrito', 2000, true, true, true)
var nachos = new Fooditem('Nachos', 5000, false, true, false)

// console.log(taco.stringify(), chickenBurrito.stringify(), nachos.stringify())

var Drink = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
}


var Plate = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
}



var Order = function(plates) {
	this.plates = plates;
}

var Menu = function(plates) {
	this.plates = plates;
}

var Restaurant = function(name, description, Menu) {
	this.name = name;
	this.description = description;
	this.Menu = Menu;
}

var Customer = function(dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
}


var fizzySugar = new Drink('fizzy sugar', 'It is fizzy.', 2, ['high fructose corn syrup','water', 'poop', 'doodoo'])
// console.log(fizzySugar.stringify())


Drink.prototype.stringify = function() {
	console.log("The name of your drink is " + this.name + "." + this.description + " It's ingredients are: " + this.ingredients.join(", ") + ".")
}

Plate.prototype.stringify = function() {
	console.log("The name of your plate is " + this.name + "." + this.description + " It's ingredients are: " + this.ingredients)
}

Order.prototype.stringify = function() {
	console.log("Your order consists of: " + this.plates.join(", ") + ".")	
}

Menu.prototype.stringify = function() {
	console.log("The menu is: " + this.plates.join(", ") + ".")
}

Restaurant.prototype.stringify = function() {
	console.log("The name of the resturant is: " + this.name + "." + this.description + ". Our menu is: " + this.Menu)
}

Customer.prototype.stringify = function() {
	console.log("your dumb restrictions are: " + this.dietaryPreference)
}


var mexicanPlate = new Plate("mexican plate", "this is a mexican plate", 100, [taco.stringify(), chickenBurrito.stringify(), nachos.stringify()])

console.log(mexicanPlate.stringify())

