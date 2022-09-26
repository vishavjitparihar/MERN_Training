
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


//if i do this

while(true){ }

//everything will happen similarly - but when after log 3 printing 
//JS will move on to infinite while loop
//while api is dealing with log 2
//once api is done it will put on log 2 on the stack
//stack will start dealing with while loop
//since it is an infinte loop - stack will never get free
//thus queue will never get a chance to put log 2 on the stack
//hence the result will be log 1 then log 3 and then infinite loop

