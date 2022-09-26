//In JS errors are exceptions


/**
 * Refrence Error - Refrencing something that you cannot. AKA Temporal Dead Zone
 * Range Error - A value exceeds or does not meet some given range
 * Type Error - You try and access some property that deosn't belong to it. AKA using toString on a number
 * SyntaxError - Your program will not compile. Invalid variable name
 */


//custom errors are very useful
class MyError extends Error {

    name = 'My Error'
    constructor(message) {
        //here super is calling the Error's constructors and passes message
        //It also changes the context of 'this' in the Error constructor to refere to the Error object
         super(message)
    }
}

throw new MyError('Something went Wrong!');




//there are no types in JS
//we cannot use catch (type)
//we cannot catch a specific error, thus we can only use catch to catch everything

try {
    throw new MyError('Err.message test');
} catch (err) {
    //since JS is dynamically typed (runtime types), we cannot have multiple catches
    //but if we want to catch multiple errors then we can use switch statements

    switch(err.name){
        case 'TypeError':
            console.log('Handling Type Error');
            console.error(err.message)   //this will work same as console.log, but it will take message from the try 
            break;

        case 'My Error':
            console.log('Handling My Error');
            console.error(err.message)   //this will work same as console.log, but it will take message from the try 
            break;
            break;
        default:
            console.log('Handling any other type of error');
    }

}



//errors have name, and we can access them by typing the following
console.log(new TypeError().name);
console.log(new MyError().name);