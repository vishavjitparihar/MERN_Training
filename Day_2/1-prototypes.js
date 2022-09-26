/**
 * Prototype are JS's way of implementing inheritance
 * Prototypal Inheritance
 * 
 * 2 Types of prototype
 * 
 *  1. Function Prototype
 *      An object attached to function/class that you use to make object
 * 
 *  2. Object Prototype
 *      __proto__
 *      It is a pointer to the function prototype it was created with
 * 
 */
//----------------------------------------------------------------------------------------------------------




//define a function here
//this is a constructor function 
function IceCream(flavor, price){
    //this function behaves like a constructor

    //this refers to the newly created iceCream object
    this.flavor = flavor;
    this.price = price;
}
//----------------------------------------------------------------------------------------------------------





/**
 * new keyword:
 * 
 * 1. creates a new JavaScript object{}
 * 2. Add a __proto__ property to it that points to the IceCream function's prototype
 * 3. Binds all the refrences of 'this' newly created object
 * 4. Returns this
 */

const iceCream = new IceCream('chocolate', 5.00);
console.log(iceCream);


//__proto__ of iceCream will be same as prototype of IceCream
//__prorto__ of IceCream will be same as prototype of Object
//by default every object's __proto__ points towards the prototype of Object
//you can manually change the __proto__ if you want
//----------------------------------------------------------------------------------------------------------





//prototype chaining
console.log('IceCream as a String: ' + iceCream.toString());   //output is [objcet, object]

//toString is a function defined in the global Object, and we are just using it as iceCream is deriving methods from global Object
//we will override toString, by defining a new toString for iceCream object
//rembeber iceCream was created from IceCream object

IceCream.prototype.toString = function() {
    console.log('it works!');
    return `${this.flavor}`;
}

console.log('IceCream as a String: ' + iceCream.toString());