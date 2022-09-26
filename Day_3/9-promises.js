//before promises we used callback exclusely
//callbacks were fine, but did not allow us to cleanly handle success/eroor cases

//Promises get priority queue


/**
 * Promises represent the eventual success or failure of an asynchronous operation 
 * 
 * Promise States:
 * 
 * -Fulfiled (the request is finished, and successful)
 * -Rejected (the request is finished, and failed)
 * -Settled (the request is finished and has been processed - for better or worse)
 * -Pending (The request is not finsihed yet. cant be processed)
 */




//Creating a promise
const promise = new Promise( (resolve, reject) => {
    resolve('promise resolved');
});

console.log(promise);

//----------------------------------------------------------------------------------------------------------------------






//.then()       handles the fulfilled promise state
//.catch()      handles the rejected promise state

promise
        .then(data => console.log('Yay_1'))
        .catch(err => console.error('Boo_1'));

//in this case promise is resolved
//thus only then statement will run
//catch will only be triggered if reject was working



//just another case
const promise2 = new Promise( (resolve, reject) => {
    reject('promise rejected')
});

promise2
        .then(data => console.log('Yay_2'))
        .catch(err => console.log('Boo_2'));






//Important thing to remember
//.then and .catch are both returning something
//once they return something it will act as a promise
//thus order matters
//take this example

const promise3 = new Promise( (resolve, reject) => {
    reject('promise rejected')
});

promise3
        .catch(err => console.log('This is a promise from .catch'))         //this will return Boo_2, and since it is a promise it self. .then will consider this as a success
        .then(data => console.log('This is working as well'));        //since .catch returned something and was sucessfull .then will also activate









//?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
//run this program
//why did promise 3 worked before promise 2????







//-------------------------------------------------------------------------------------------------------------------------------------------------
//using promises and callBack functions together in a HOF

const greet = (name, msg) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (name === 'Brad'){
                reject(`get out of here ${name}`);
             } else {
                resolve(`welocme! ${name}. ${msg}`);
            }
        }, 3000)
    })
}



greet('Joe', 'what\'s up')
.then(msg => console.log(msg))
.catch(err => console.log(err));



greet('Brad', 'what\'s up')
.then(msg => console.log(msg))
.catch(err => console.log(err));







//-------------------------------------------------------------------------------------------------------------------------------------------------

//chain promise

//in this case
//since promise.resolved is resolver -- .then will be triggered and .then will print 1 and return 2
//since .then was a success -- it will be considered as resolved promise
//and .catch will not do anything about a resolved promise. 

Promise.resolve(1)
.then(num => {console.log(num); return num+1})
.catch(num => { console.log(num) })


//in this case
//since promise.resolved is resolver -- .then will be triggered and .then will print 1 and return 2
//since .then was a success -- it will be considered as resolved promise
//and .then will kick in, and print 2 which was the return of first .then
Promise.resolve(1)
.then(num => {console.log(num); return num+1})
.then(num => { console.log(num) })


//in this case
Promise.resolve(1)
.then(num => {console.log(num); return num+1}) //1
.then(num => { console.log(num) }) //2
.then(num => {console.log(num)}) //undefined -- as no return from second then



//in this case
Promise.resolve(1)
.then(num => {console.log(num); return num+1}) //1
.then(num => { console.log(num) }) //2
.then(num => {console.log(num); return 5}) //undefined -- as no return from second then, but also return 5
.catch(num => {console.log(num)}) //nothing has failed so will not trigger
.then(num => {console.log(num+5)}) //10



//in this case
//since it was a rejected promise, then it will not trigger .then
//only .catch will be triggered
//'Hello' as a string will be sent as an argumnet
//.catch will print it out
//since .catch resulted in a resolved promise
//the next .then will be triggered with string 'Goodbye' as the input
Promise.reject('Hello')
.then(msg => {console.log(msg)}) //will not trigger
.catch(err => {console.error(err); return 'Goodbye'}) //will print hello and also return string 'Goodbye' 
.then(data => {console.log(data); throw data})  //will print Goodbye, and since throw data it will result in rejected promise
.catch(err => {console.error(err)});    //since there was a throw data - this catch will be triggered and it will print string goodbye, since that was thrown out by the previous .then



//return in .then or .catch is a resolved promise
//throw in .then or .catch is a rejected promise


//there is also .finally -- it will return no matter what the status of the promise is

Promise.reject('Hello')
.then(msg => {console.log(msg)}) //will not trigger
.catch(err => {console.error(err); return 'Goodbye'}) //will print hello and also return string 'Goodbye' 
.then(data => {console.log(data); throw data})  //will print Goodbye, and since throw data it will result in rejected promise
.catch(err => {console.error(err)})   //since there was a throw data - this catch will be triggered and it will print string goodbye, since that was thrown out by the previous .then
.finally(data => {console.log(data)}); //undefined since the last .catch did not return anything, and itself will return string aye


//-------------------------------------------------------------------------------------------------------------------------------------------------







//some default properties of promises that can be very useful



//Promise.all

const timePromise = (time, name) => {
    return new Promise( (res, rej) => {
        setTimeout( () => {
            res(`${name} Promise resolved`);  
        }, time)
    })
}

//now we will create some timePromises

const fast = timePromise(2000, 'fast');
const medium = timePromise(4000, 'medium');
const slow = timePromise(6000, 'slow');


//i want all of them to finish before i proceed
//I want all of them to resolve and none of them fails

//if any one fail - all of them will fail
Promise.all([fast, medium, slow])
.then(data => console.log(data))
.catch(err => console.error(err));
//They all should pass





//let's add a twist to see how it will react

const timePromiseTwist = (time, name) => {
    return new Promise( (res, rej) => {
        setTimeout( () => {
            if(name === 'fast'){
                rej(`${name} Promise failed`);
            }
            res(`${name} Promise resolved`);  
        }, time)
    })
}

//now we will create some timePromisesTwist

const fastTwist = timePromiseTwist(2000, 'fast');
const mediumTwist = timePromiseTwist(1000, 'medium');
const slowTwist = timePromiseTwist(600, 'slow');


//i want all of them to finish before i proceed
//I want all of them to resolve and none of them fails

//if any one fail - all of them will fail
Promise.all([fastTwist, mediumTwist, slowTwist])
.then(data => console.log(data))
.catch(err => console.error(err));
//fast should fail - thus all of them should fail






//Promise.allSettled is similar to Promise.all but it will evaluate evey promise, and then give the result
//Promise.all will stop and give result if any one promise fails



//Promise.race - it will check which one is faster, and it will show the result of the fastest promise
Promise.race([fastTwist, mediumTwist, slowTwist])
.then(data => console.log(data))
.catch(err => console.error(err));



//Promise.any - it will check the promises - the first one to resolve will be the result
Promise.any([fastTwist, mediumTwist, slowTwist])
.then(data => console.log(data))
.catch(err => console.error(err));
