//generator allows easier way of returning iterables  func*

/**
 * This is Iterable Protocol
 * 
 * 1. Must have Symbol.iterator as a function
 * 2. Must have a next() function
 * 3. next() must return object containing done and value
 */

class Range {

    #count = 0;
    #limit

    constructor(limit){
        this.#limit = limit;
    }

    //this function will be implicitly called by JS when iterating
    next(){
        //this function must return an object
        //done - boolean value
        //value - #count

        this.#count++;

        //if the count is over the limit - we want to stop 
        if(this.#count > this.#limit){
            this.#count = 0;
            return {done: true, value: null};
        } else{
            return {done: false, value: this.#count};
        }
    }


    //I need to tell JS that my object is iterable
    //You can achieve this by using Symbol


    // we will create a function using symbol.iterator
    //but this will only work if we have a function called next
    [Symbol.iterator] = function() {
        return this;
    }
}


//Iterators are "essentially" loops that i can pause execution of
const range10 = new Range(10);
console.log(range10.next());
console.log(range10.next());
console.log(range10.next());
console.log(range10.next());
console.log(range10.next());

//spread and for..of will call this .next() on their own so long as Symbol.iterator is present


//???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
//why is it printing undefined??????
const range2 = new Range(5);
console.log(...range2);







//we will not use the above technique for iteration. It is more for trival knowledge




//----------------------------------------------------------------------------------------------------------------------






//actual generator function 

//generator regular function
function* myGen() {
    // Generator acts as an abstraction over the {done: false, value: 2} syntax
    // yield 1 is essentially returning {done: false, value: 1}

    // Until .next() is called again, this function execution will be paused
    yield 1;
    console.log('About to yield 2')
    yield 2;
    console.log('Almost done, about to yield 3')
    yield 3;
    console.log('Finished! Returning done as true')

    // Once the end of the function is reached, it will return {done: true, value: null}
}

const myItr = myGen(); // myGen() returns an iterable

console.log(myItr.next());
console.log(myItr.next());
console.log(myItr.next());
console.log(myItr.next());
console.log(myItr.next());