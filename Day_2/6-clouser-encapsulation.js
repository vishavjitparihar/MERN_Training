//counter

//instead of making a class or constructor function, I will just create a regular function

function counter(intialCount){

    //make sure intialCount is a number, if not set the value to 0 for intialCount
    let count = typeof intialCount === 'number' ? intialCount : 0;


    //by default all of these methods and variables are private, and can only be used inside the function 
    //Incrememt the count
    function increment() {
        count++;
    }

    //Decrement the count
    //logic to prevent negatives
    function decrement() {
        if(count -1 < 0){
            return;
        }
        count--;
    }

    //View the count
    function getCount() {
        return count;
    }


    //since these functions inside function counter cannot be accessed by anything outside of function counter
    //but we can make them return something and save it as an object inside the function counter

    //since there are no key value- by deafult it will asume same key and same value.
    return {
        increment,
        decrement,
        getCount
    }

}



//?????????????????????????????????????????????????????????????????????????????????????????????????
//why were the function greet in the function greeter in 5-clouser was not darkened???

let x = 10;
const y = 5;



const myCounter = counter();
console.log(myCounter.getCount()); //0
myCounter.increment();
console.log(myCounter.getCount()); //1
console.log(myCounter.count); //this will not work


