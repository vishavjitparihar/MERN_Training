//objects in JS are key value pairs
//they are like hash maps

//defining an object in JS
const student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 21,
    classes: ['Math', 'Science', 'History']
};

//adding properties to student
student.major = 'Science';
console.log('just printing the student object with all of it\'s properties');
console.log(student);



//if you dont any one to change anytthing in the object 
//we can use the following
//I will be commenting it out
//Object.freeze(student);     locks down the object and prevents modifications
//student.pet = 'Spot';
//console.log(student);


//locking a certain property of the object
//Defining object property
Object.defineProperty(student, 'lastName', {writable: false}); //prevents modifictaion in lastName that means lastName value cannot be changed. 
student,lastName = 'Change that';
console.log('trying to change the lastName property of object student. But I can not as writable is false.');
console.log(student);


Object.defineProperty(student, 'age', {enumerable: false}); //prevents it from showing in prints or loops
console.log('trying to  hide the age property of the student object');
console.log(student);

console.log('age can be still accessed from the student object');
console.log(student.age);


Object.defineProperty(student, 'lastName', {configurable: false}); //prevents future changes to lastName, such that even if i change writable to true after line 26 - it wont work

/*
    This will give me an error.
Object.defineProperty(student, 'lastName', {writable: true}); //since writable is true - that means i can change the lastName property now?
                                                              //but since in line 43 I changed lastName configurable to false - now it doesn't matter if turn lastName writable true. It will not change

student,lastName = 'Change that';
console.log('trying to change the lastName property of object student. But I can not as writable is true, but configurable is false.');
console.log(student);
*/



//-----------------------------------------------


//some use of Bracket notations in the object

console.log(student); //just regular student object

//adding new property using bracket notation
//this way we can get over the naming convention restrictions in JS
student['first name'] = 'Brad';
console.log(student);


const school = 'BMPS';

//new object
const anotherStudent ={
    [school] : 'some value',
    schoolName: school
}

console.log(anotherStudent);