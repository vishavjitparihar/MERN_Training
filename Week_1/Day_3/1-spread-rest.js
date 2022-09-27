// JS is ever evolving due to ECMAScript committee

/**
 * Newer Operators
 * 
 * ??           - Nullish Coalescing
 * ?.           - Optional Chaining
 * ...          - Spread/Rest
 * {}/[]        - Object/Array destructing
 * () => {}     - Arrow Function
 * 
 */




//Spread Operator on objects
const obj = {
    color: 'blue',
    food: 'pizza',
    city: 'NYC'
}

//let say i want a new object that has all the same properties as that of obj, but one property is diffrent
//we can use spread to do that

//if i do this
const newObj = obj;
console.log(obj); //{ color: 'blue', food: 'pizza', city: 'NYC' }
console.log(newObj); //{ color: 'blue', food: 'pizza', city: 'NYC' }

newObj.newProp = 'new prop';
console.log(obj); //{ color: 'blue', food: 'pizza', city: 'NYC', newProp: 'new prop' }
console.log(newObj); //{ color: 'blue', food: 'pizza', city: 'NYC', newProp: 'new prop' }

//as we can see - adding new poperty to the object newObj also add's property to the original object obj
//this is stupid
//that is why we will use spread

//fanning out all of the props of object and adding them to the new obj2
const obj2 = {...obj};   //this is how we use spread
console.log(obj2);

//if i want to add a new property of some obj3 that is a copy of obj then I can do this
const obj3 = {...obj, someProp: 'someProp'};  //this will add someProp property to the only obj3
console.log(obj3);

//one thing to keep in mind is that - ...obj will only copy the enumarable properties

//spread can also overwrite some property, but again it will not make changes to the original object
const obj4 = {...obj, city: 'Delano'};
console.log(obj4); //it will change NYC to Delnao


//but it wont overwrite if i do this
const obj5 = {city: 'Delano', ...obj};
console.log(obj5);
//----------------------------------------------------------------------------------------------------------------------



//spread on Arrays
//it will also fan out arrays

const word = 'Hello World';
console.log(...word);


//creating array out of a string
//take a word and turn into a char array
const charArray = [...word];
console.log(charArray);
//----------------------------------------------------------------------------------------------------------------------




//adding an item to the end of an array without mutating it
const charArrayWithExclamationAtTheEnd = [...charArray, '!'];
console.log(charArrayWithExclamationAtTheEnd);

const charArrayWithExclamationAtTheBegining = ['!', ...charArray];
console.log(charArrayWithExclamationAtTheBegining);




//what am i doing wrong here??
//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
//trying to insert '!' in the middle on an array
const middleInsertion = [...charArray.splice(0,4), 'x', charArray.splice(0,4)];
console.log(middleInsertion);
//----------------------------------------------------------------------------------------------------------------------





//rest operator
//it is related to spread operator
//instead of fanning it out - rest combines the rest of things together

function printMovies(movie1, movie2, movie3, ...otherMovies){
    console.log(otherMovies);
}

printMovies('End Game', 'Top Gun', 'Nope', 'x', 'y', 'z');