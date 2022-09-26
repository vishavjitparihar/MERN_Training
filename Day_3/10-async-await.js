/**
 * Promises solved alot of issue with async code compared to callbacks, but it wasn't perfect
 * 
 * async/await solves all those issues that promises cannot solve
 */


//async goes to a function, and make it async
//adding async to a function makes it a async function
//anything returned from it will become a fullfilled promise
//anything thrown from it will be rejected promise

const myAsyncFunction = async () => {
    return 'Hello Async';
}

console.log(myAsyncFunction());  //this will print the Promise of Hello Async


//this is the first way to get rid of the promise status
myAsyncFunction().then(data => console.log(data));


//IIFE - Immediately Invoked Function Execution AKA a function that calls itself

(() => {console.log('Hello')})();


//AIFE - Async Invoked Function Execution
//cheesy way of getting rid of the Promise status
(async () => {
    
    //await awaits on the promise to resolve. Once it has, it will resume by unpacking the payload
    const data = await myAsyncFunction();
    console.log(data);
})();






//lets have 2 Async function call each other



//to to go to movies
//  - clean dished
//  - walk the dog

//this one works but it doenst have try catch in it

// const goToMovies = async () => {
//     //here await is waiting to get conformation from the function
//     const conformationOfDishes = await cleanDishes();
//     console.log(conformationOfDishes);

//     const conformationOfDog = await walkDog();
//     console.log(conformationOfDog);

//     console.log('Going to the movies now!')
// }

// const walkDog = async () => {
//     //forces it to pause here
//     //await is making us wait to get resolved promise out
//     return await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Walking the dog.')
//         },1000)
//     })
// }

// const cleanDishes = async () => {
//     //forces it to pause here
//     //await is making us wait to get resolved promise out
//     return await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Cleaning the dishes')
//         },3000)
//     })
// }


// goToMovies();








//try catch

//what if there is a promise that is rejected?
//we will solve that problem this way

// const goToMovies = async () => {
//     try{  //this is .then
//         //here await is waiting to get conformation from the function
//         const conformationOfDishes = await cleanDishes();
//         console.log(conformationOfDishes);

//         const conformationOfDog = await walkDog();
//         console.log(conformationOfDog);

//         console.log('Going to the movies now!')
//     } catch (err) { //this is .catch

//         console.error(err);
//     } finally {
//         //this is .finally
//     }
// }

// const walkDog = async () => {
//     //forces it to pause here
//     //await is making us wait to get resolved promise out
//     return await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Walking the dog.')
//         },1000)
//     })
// }

// const cleanDishes = async () => {
//     //forces it to pause here
//     //await is making us wait to get resolved promise out
//     return await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('Cleaning the dishes')
//         },3000)
//     })
// }


// goToMovies();






//what if I want to multiple things at once
//let's say mow the lawn and walk the dog at the same time.


const goToMovies = async () => {
    try{  //this is .then
        //here await is waiting to get conformation from the function
        const conformationOfDishes = await cleanDishes();
        
        const conformationOfDog = await walkDog();

        const conformationOfLawn = await mowLawn();
        
        //walk the dog and mow the lawn
        Promise.all(conformationOfDog, conformationOfLawn)
        console.log(conformationOfDishes);

        

        console.log('Going to the movies now!')
    } catch (err) { //this is .catch

        console.error(err);
    } finally {
        //this is .finally
    }
}

const walkDog = async () => {
    //forces it to pause here
    //await is making us wait to get resolved promise out
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Walking the dog.')
        },1000)
    })
}

const cleanDishes = async () => {
    //forces it to pause here
    //await is making us wait to get resolved promise out
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Cleaning the dishes')
        },3000)
    })
}


const mowLawn = async() => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('mowing the lawn')
        }, 7000)
    })
}

goToMovies();