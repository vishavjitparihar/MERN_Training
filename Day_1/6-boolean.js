//if statement 
if(true){
    //run this code
}
//---------------------------------------------------------------------------------------


//equality operator
// 1. implicit casting to be the same
// 2. compare the value

console.log(2==3);  //false
console.log(2=='2'); //true
console.log(false == 0); //true
//---------------------------------------------------------------------------------------


//strict equality operator
// 1. typeof 2 == typeof '2'
// 2. if that returned true, then coerce the type and compare the value
console.log(2 === '2'); //false
//---------------------------------------------------------------------------------------


//when to use equality operator
//only use == for catching null or undefined
const someVal = undefined;
if(someVal == null){        //this returns true for both null and undefined
    console.log('this value is junk');
} else {
    console.log(someVal);
}
//---------------------------------------------------------------------------------------



/*
    Falsy: when cast to boolean, its type will be false
        false
        0
        -0
        0n
        ''
        undefined
        null
        NaN

    Truthy: anything that is not falsy. Will be true when cast to boolean
        true
        42
        'false'
        ' '
        []
        {}

*/
//---------------------------------------------------------------------------------------



//ternary operator
function calculatePassFail(grade){
    return grade > 70 ? 'p' : 'f';
    //if the condition is true, return what's after ?. Else return whats after :
}
//---------------------------------------------------------------------------------------


//logical assignments
const person = {
    firstName: 'Gary',
    lastName: 'Olsen',
}

//if person.age is truthy, return person.age. Else return 15
//if the person object has a truthy age, use that. If it doesnt 15 is the default value
let age = person.age || 15;
console.log(age);

person.age ||= 15; //logical assignment


//in case of or ||
//  if true print left argument
//  if false print right argument
console.log('here');
console.log(0 || 'Hello World'); //Hello World!


//in case of and &&
//  if true print right
//  if false print left
console.log(0 && 'Hello World'); //0



//Nullish Coalescing Operator
//to nulify null or undefined
//return the left if not null/undefined
//return right if otherwise
console.log(undefined ?? 'Hello world') //hello world
console.log(false ?? 'goodbye') //false
console.log(null ?? undefined) //undefined
console.log(undefined ?? null) //null
