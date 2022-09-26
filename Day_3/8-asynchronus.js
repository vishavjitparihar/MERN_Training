//setTimeout



console.log('Log 1');


//setTimeout takes a callback function and a time
//after the given time has elapsed, it will call the callback function
setTimeout(() => { return console.log('Log 2')}, 0);

console.log('Log 3');


//This will print Log 1 then Log 3 and then Log 2
//JS will moved setTimeout to the web api and move on to the log 3
//JS will deal with log 3, while web api is dealing with setTimeout
//once JS will be done with log 3 - web api will still deal with setTimeout
//JS will stay still and wait for web API - as there is nothing else to do here
//Once web api is done - it will move the result to queue
//Queue will notice how stack is empty, and it will push the result to the stack
//JS will notice something on the stack, and it will process that something - thus it will print log 2 at last


//what if i do this
setTimeout(() => { return console.log('Log 4')}, 5000);

//in this case 
//Log 1 will move to the stack first
//Log 2 will move to the API
//Log 2 will move to the queue (as it only stays at API for 0 seconds)
//Log 1 will pop off from the stack
//Log 3 will move to the stack
//Log 3 will pop off the stack
//Log 4 will move to the API
//stack will be empty
//Queue will move Log 2 to the stack
//Log 2 will pop off from the stack
//Log 4 will stay at API for 5 seocnds
//stack will be empty 
//Log 4 will move to the queue after 5 seconds of being staying at API
//since stakc is empty - Log 4 will move to the stack
//Log 4 will move off the stack
//final result -- Log 1 Log 3 Log 2 Log 4
//----------------------------------------------------------------------------------------------------------------------







//like setTimeout - we also have setInterval
//it runs the function once everytime the time elapses

setInterval( () => console.log(new Date()), 1000);

let count = 0;
const countKey = setInterval( () => {
    console.log(++count);

    //if i want the inerval to stop when count is 10
    if(count >= 10){
        clearInterval(countKey);  //takes an interval key
    }
}, 1000)
//----------------------------------------------------------------------------------------------------------------------






//But this whole thing is a mess - and we dont use this kind of callbacks funtion now
// we use promises





