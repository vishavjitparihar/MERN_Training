//Arrow function   ()=>{}
//a lightweight, anonymous function

//() => {}


const number = [1,2,3];

number.forEach(function(num){
    console.log(num);
});


//using arrow method
number.forEach(num => { console.log(num)});



/**
 * Arrow function Rule:
 * 
 *  - if there are no parameter - you must start with ()
 *  - if there is exactly one parameter - () are optional
 *  - if there are two or more parameter - () are required
 *  - if the function body is one line long - {} are optional
 *  - i dont have to  return anything if function body is one line
 *  - If you do use {}, and want to return, then use return keyword
 * 
 */



//good and bad examples

/**
 * name => name.toUpperCase();                  Valid
 * 
 * x,y => return x+y;                           Invalid - (x,y) => {return x+y}
 * 
 * obj => {obj};                                Invalid - obj => {return obj}
 * 
 * (firstName) => {firstName : firstName};      Technically valid - as firstName: firstName is an object here
 *
 * => 1                                         Invalid - () => 1
 */


const myFunc = (firstName) => ({firstName: firstName});
console.log(myFunc('mark'));



//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
//how do i know that (firstName) => {firstName : firstName};      Technically valid - as firstName: firstName is an object here
//just because firstName: firstName is declared as a property????
//and why this will not work (firstName) => {{firstName: firstName}} won't work??
//and how (firstName) => {return {firstName: firstName}} work??



//----------------------------------------------------------------------------------------------------------------------









//giving an arrow function a name
const myArrowFunction = () => {};

const myRegularFunction = function(){};


//remember this keyword doesnt work well with arrow functions
//here is an example

const obj = {
    name: 'Vishu',
    test: () => { return 1},
    regFunc: function() { console.log(this.name)},
    arrFucn: () => {console.log(this.name)}
}


obj.regFunc();   //Vishu
obj.arrFucn();   //Undefined

console.log(obj.test());