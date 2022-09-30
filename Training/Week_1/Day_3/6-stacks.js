

const fn1 = () => {
    return fn2();
}

const fn2 = () => {
    return fn3();
}

const fn3 = () => {
    return 'a';
}

console.log(fn1());

//in this case it will call fn1 first, it will move to the stack
//fn1 will call fn2 in the stack, it will be placed on the stack
//fn2 will call fn3 in the stack, it will be placed on the stack
//fn3 will return a, and move that value to the fn2
//fn3 will be removed from the stcak
//fn2 will return a, and move that value to the fn1
//fn2 will be removed from the stack
//fn1 will return a, and remove itself from the stack

//JS is async, there might be times when one process is taking forever 
//JS will move that process from the stack, and ask Wbe API to handle the process
//while Web API is handling the process - JS stack will move on to do something
//Once Web API is done - it will move the results of process to a callback queue
//and whenever stack in free - callback queue will the result to stack, and stack will print the result
//this way JS doesnt waste time on any long process

//This whole process is called event loop

