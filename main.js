
var Fooditem = function( name, calories, vegan, glutenFree, citrusFree ){

	this.name       = name;
	this.calories   = calories;
	this.vegan      = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
	// this.stringify=stringify

}
// console.log(obj.name + ' ' + obj.calories + ' ' +  'is this vegan? ' +  obj.vegan + ' ' + obj.glutenFree + ' ' + obj.citrusFree)

Fooditem.prototype.stringify = function(){

	console.log((this.name + ' ' + this.calories + ' ' +  'is this vegan? ' +  this.vegan + ' ' + this.glutenFree + ' ' + this.citrusFree))

}


 var burrito          = new Fooditem( 'burrito', 500, false, false, true)
 var chickenBurrito   = new Fooditem('Chicken Burrito', 600, true, true, true)
 var nachos           = new Fooditem( 'Nachos', 1000, false, true, false)


var Drink = function( name, description, price, ingredients){

	this.name        = name;
	this.description = description;
	this.price       = price;
	this.ingredients = ingredients;
}

Drink.prototype.stringify = function(){

console.log((this.name + ' ' + this.description + ' ' + this.price + ' ' + this.ingredients))




}


var Plate = function( name, description, price, ingredients){

	this.name        = name;
	this.description = description;
	this.price       = price;
	this.ingredients = ingredients;

}



Plate.prototype.stringify = function(){

console.log((this.name + ' ' + this.description + ' ' + this.price + ' ' + this.ingredients))

}



var margaritaDrink = new Drink ('bad drink', 'alot will get you drunk', 2, ['water', 'lime'])

var guacamolePlate = new Plate ('guacamole', ' best guacamole ever', 15, ['shell', 'meat', 'guacamole', 'sauce'])

var burritoPlate   = new Plate ('burrito', 'pants overload goodness', 18,['chicken', 'beans', 'hot sauce', 'mystery meat'])




//=-=-=-=--=-=-=-=-=-=-=ORDER-=-=-=-=-=\\


var Order = function(plate){
	this.plate = plate;


}

Order.prototype.stringify = function(){


}

var myOrder = new Order([guacamolePlate, burritoPlate])

myOrder.stringify()



//=-=-=-=-=-=-=-=-=-=-menu=-=-=-=-=-=-=-=\\

var Menu = function(plate){
	this.plate = plate;


}

Menu.prototype.stringify = function(){


}

var myMenu = new Menu([guacamolePlate, burritoPlate, margaritaDrink])

myMenu.stringify()


//=-=-=-=-=-=-=-=-=-=-Restaurant-==-=-=-=-//
