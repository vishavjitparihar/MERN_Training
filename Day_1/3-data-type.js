/*
    Primitive Data Types
        int, short, float, double belongs to data type NUMBER
        STRING data type includes both char and strings
        BOOLEAN data type
        UNDEFINED data type
        NULL data type
        BIGINT data type for huge numbers
        SYMBOL data type is used internally with JS

    Non-Primitive Data Types
        anything that is not primitive is an object
        objects can be objects, arrays, functions, and they all are non primitive data type
*/

// typeof will return the type of a given varibale
let x = [];
console.log(typeof x);

function addTwoNums(x, y){
    if(typeof x != 'number' || typeof y != 'number'){
        return null;
    }
    return x/y;
}

console.log(addTwoNums(1));


//casting
console.log(typeof 1);              //prints number

//we will be doing explicit casting
console.log(typeof String(1));      //prints string