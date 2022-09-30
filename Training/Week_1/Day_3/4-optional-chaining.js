//optional chainig  ?.

const person = {
    fullName: {
        first: 'Greg',
        last: 'Smith'
    },
    age: 25
}

console.log(person.fullName.first);


//imagine this case
const person2 = {
    age: 25
}
console.log(person2.fullName.first);

//because person2.fullName will give us undefined
//but what will undefined.first will give us?
//it will throw an error
//to get over this problem we can use the following synatx

console.log(person.fullName ?.firstName); //This is better because it will check if fullName is part of person object
//if its null or undefined - then just return undefined, don't even bother checking for .firstName



