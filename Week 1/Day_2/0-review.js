//boolean

//||
// first evaluate the left side, if it's tre, returns the left side. If it's false returns the right

//&&
// first evaluate the left side, if it's false, returns the left side. If it's true resturns left

//??
// first evaluate the left side, if it is null or undefined, returns the right side. Else, returns the left side



console.log([] || 'Hello World'); //[]
console.log('' || 'Goodbye'); //'Goodbye'
console.log(0 || 'false'); //false

console.log({} && false); //false
console.log(0 && ''); //0
console.log('false' && 'true'); //true

console.log(0 ?? 'Hello World'); //0
console.log(undefined ?? null); //null
console.log({firstName: null} ?? []); //{firstName: Null}



//for..in
//Enumerables
//Looping over properties, keys of an object that is enumerable


//for..of
//Iterables
//objects are not iterable in JS
//we will use this for arrays

//playing with objects
const obj = {
    fullName: {
        firstName: 'Jhon',
        lastName: 'Doe'
    },
    age: 30,
    color: 'brown',
    friend: ['mark', 'sally', 'doug']
};

for(let thing in obj){
    //print the key
    console.log(thing);

    //print all the value
    console.log(obj[thing]);

    //print specific value
    console.log(obj.fullName.lastName);
    console.log(obj.age);

}