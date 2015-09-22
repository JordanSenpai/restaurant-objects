var FoodItem = function  (name, calories, vegan, glutenFree, citrusFree) {
	this.name       = name;
	this.calories   = calories;
	this.vegan      = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Food Item-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=\\
FoodItem.prototype.stringify = function(){
	var str = ' name: ' + this.name + ', calories: ' + this.calories + ', vegan: ' + this.vegan + ', Gluten Free: ' + this.glutenFree + ', Citrus Free: ' + this.citrusFree + ' '
	return str

}

var guacamole = new FoodItem('guacamole', 100, true, true, false)
var liquor = new FoodItem('tequila', 200 , true, true, true)


var burritos = new FoodItem('Big Burrito',2000,false,false,false)
var taco     = new FoodItem('taco Tuesday',10000,false,false,false)
var salad    = new FoodItem('Salad',200,true,true,true)
console.log(burritos.stringify())
console.log(taco.stringify())
console.log(salad.stringify())

//=-=-=-=-=-=-=-=-=-=-=-=-Drink=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\\

var Drink = function(name, description, price, ingredients){
	this.name        = name;
	this.description = description;
	this.price       = price;
	this.ingredients = ingredients;
}

Drink.prototype.stringify = function(){
	var str = 'name: ' + this.name + ', description: ' + this.description + ", price: " + this.price + ', ingredients: ' + this.ingredients 
	return str

}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=Plate=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\\

var Plate = function(name, description, price, ingredients){
	this.name        = name;
	this.description = description;
	this.price       = price;
	this.ingredients = ingredients;
}

Plate.prototype.stringify = function(){
	var str = 'name: ' + this.name + ', description: ' + this.description + ", price: " + this.price + ', ingredients: ' + this.ingredients 
	return str

}

Plate.prototype.isVegan = function(){
	for (var i = 0; i < this.ingredients.length; i++) {
		if (this.ingredients[i].vegan === false) {
			return false;
		}else{
			return true;
		};
	};
}

Plate.prototype.isGlutenFree = function(){
	for (var i = 0; i < this.ingredients.length; i++) {
		if (this.ingredients[i].glutenFree === false) {
			return false;
		}else{
			return true;
		};
	};
}

Plate.prototype.isCitrusFree = function(){
	for (var i = 0; i < this.ingredients.length; i++) {
		if (this.ingredients[i].citrusFree === false) {
			return false;
		}else{
			return true;
		};
	};
}
 
var burritoPlate = new Plate('burrito','delicious', 10, [burritos.stringify()])
var guacamolePlate = new Plate('Guacamole','delicious', 10, [guacamole.stringify()])
var tequilaDrink = new Drink('tequila','Lime Flavor', 10, [liquor.stringify()])

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Order-=-=-=-=-=-=-=-=-=-=-=-\\

var Order = function(plates){
	this.plates = plates;
}

Order.prototype.stringify = function(){
	var str = "Plates: " + this.plates
	return str
}

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-menu-=-=-=-=-=-=-=-=-=-=-=-=-=\\

var Menu = function(plates){
	this.plates = plates;
}
var mexicanMenu = new Menu([burritoPlate.stringify(), guacamolePlate.stringify(),tequilaDrink.stringify()])

Menu.prototype.stringify = function(){
	var str = "Menu: " 
	for (var i = 0; i < this.plates.length; i++) {
		str += this.plates[i]
	};
	return str
}

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=Restaurant-=-=-=-=-=-=-=-=-=-=-\\

var Restaurant = function(name, description, menu){
	this.name = name;
	this.description = description;
	this.menu = menu;
}

Restaurant.prototype.stringify = function(){
	var str = 'name: ' + this.name + ', description: ' + this.description + ', Menu: ' + this.menu 
	return str

}

var mexicanRestaurant = new Restaurant("Mexican land ", 'mexican food', mexicanMenu.stringify())
var Customer = function(restrictions){
	this.restrictions = restrictions;
}
Customer.prototype.stringify = function(){
	var str = "Customer restrictions: " + this.restrictions
	return str
}


console.log(mexicanRestaurant.stringify())

