//we will use ctrl+c to stop the program

//while loop
let i = 0;
while(i<10){
    console.log(`current count ${i}`);
    i++;
}
//-----------------------------------------------


//for loop
for(let i=0; i<10; i++){
    console.log(`current count ${i}`);
}
//-----------------------------------------------


//do-while loop
//does the code once and check the condition
//-----------------------------------------------



//for in loop
//iterates over every enumerable property of the object

const person = {
    firstName: 'Vishu',
    lastName: 'Parihar',
    color: 'Brown'
};

//this loop will go through each property name - that is firstName, lastName, and color
for(let key in person){
    console.log(key);
}

Object.defineProperty(person, 'firstName', {enumerable: false});
//now i will be hiding firstName property of person by setting enumerable to false
console.log('firstName enumberable is set to false!');
for(let key in person){
    console.log(key);
    console.log(person.key); //this will printed undefiend, and it makes sense because there is no property called key in the object person
}

//we will create anothe object called person1 with an added property of key
const person1 = {
    firstName: 'Vishu',
    lastName: 'Parihar',
    color: 'Brown',
    key: 'This is the Key'
};

for(let key in person1){
    //this is accessing the property key
    console.log(person1.key);  //this should print out This is the key 4 times.

    //we can access the key in the for loop by bracket notation (like an array)    
    console.log(person1[key]); //this will print out the values of the properties.
}
//-----------------------------------------------



//for of loop
//iterateed over iterable properties
//objects are not iterable
//arrays are iterable tho

/**
 * This will give me an error
 * 
 * for(let key of person)
 * 
 */

//this is an array
const nums = [6, 1, 32, 9];

//this will give us the values
for(let num of nums){
    console.log(num);  //this will print values of the array
}

//this will give us the index
//arrays are enumberable
for(let index in nums){
    console.log(index); //the enumerable properties of an array are its indices
}
