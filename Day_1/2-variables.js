//old way of declaring variable
//do not use it
var x = 10;
var x1 = '10';
var x2 = false;

//var has two scopes
// 1. function scoped
// 2. gloabla scoped


function changeX() {
    var x = 'a';            //this is a new variable and will stay only in changeX
    console.log(x);
}

function anotherChangeX() {
    x = 'b';
    console.log(x);
}


changeX();          //this will print a
console.log(x);     //this will print 10

anotherChangeX();   //this will print b
console.log(x);     //this will print b


function someFunction(){
    console.log(z);     //will be undefined as z is defined after the console.log
    var z = 'Gary';
    //even if var is defined in a if block, still it will be undefiend
    //the reason being once we declare a variable anywhere - it will get hoisted to the top.
    //in the process of hoisting - only declartion is done
    //in the process of hoisting - values will not be assigned, thus it will print undefined.
}

someFunction();


//var will re-declare it self
var x = 20;
console.log(x); //prints 20, not 10



//let is better than var
//let will not re-declare itself 
//let is hoisted, but we cannot assign value after its called
//unlike var - let cannot be defined in if block
//definig let in if block will give us an error

/*
function someOtherFunction(){
    console.log(a); //this will give us error, as a was declared after its called
    let a = 'a';
}

someOtherFunction();

*/


function someOtherOtherFunction(){
    let a; 
    console.log(a); //this will compile, but value will be undefined, as the value was given after its being called
    a = 'a';
}

someOtherOtherFunction();




//const 
//it is same as let, but it makes the variable constant
//you cannot change the value of const

const fName = 'Vishu';
//fName = 'something else'; //this will give us error




//some other cool fact

/*
var name = 'vishu' ----- Okay
var name = 'something' -------Okay

let name = 'vishu' ------ Okay
let name = 'something' ------ Not Okay

const name = 'vishu' ----- Okay
const name = 'something' ---- Not Okay

var name = 'vishu' ----- Okay
let name = 'something' ----- Not Okay

let name = 'vishu' ------ Okay
var name = 'something' ----- Not Okay
*/

