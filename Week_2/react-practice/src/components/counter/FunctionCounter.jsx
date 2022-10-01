import { useState, useEffect } from 'react';  // to get the state of the function, this is performed using hooks

/**
 * Class are "classical" component because they are old school/legacy
 *
 * Function are "functional" components because that is how we do our job in 2022
 */

// You can use the function keyword or use an arrow function
// Does not matter becuase we won't use "this"

let x = {}; // this variable is JavaScript's territory

export const FunctionCounter = () => {
    // React hooks must be used top level of the component (not inside an if block or any other block)
    // React hooks are adding those lifecycle hooks from class components to our function component

    // useState is a hook that allows us to add states to a function component (did not exist before hooks)
    // useState returns an array where the 0th index is state itself, and 1st index is the setter for it.
    // const counterState = useState(); // the param to useState is the intial state
    // this one is kind of inefficent, so we would rather do this
    const [count, setCount] = useState(0);


    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);


    // useEffect allows us to run side-effect on our component
    // React does not know about things external to it such as APIs or connecting via web services
    // useEffect is a synchronus tool between React and third party entity that you are talking to

    // useEffect is effectively the three lifecycle hooks from class components wrapped into one
    // The syntax is very similar to setTimeout and setInterval
    useEffect( () => {
        // this useEffect will run everytime the component renders
        console.log('This useEffect will run everytime a render occurs');
    }); 


    // This useEffect with an empty array is effectively "componentDidMount"
    useEffect( () => {
        console.log('This use effect only gets called on component mount')
    }, []) // this array is a 'dependency array'. Whenever its content changes, the useEffect triggers


    //
    useEffect( () => {
        console.log('This useEffect is running . Count is : ' + count);
        // Please do not setCount in here
    }, [count]) // this useEffect is called on mount and whenever count changes



    // "componentWillUnmount" kinda
    // if you return a function from a useEffect, React will run that function on unmount
    useEffect( () => {
        let key = setInterval( () => console.log(Date.now()), 1000);
        return () => {
            clearInterval(key);
        }
    }, [])




    // Whatever returned from here in JSX will be rendered
    
    // Classes are isolated by virtue of being a class
    // But our function componnet are alos isolated due to closures

    let y = {}; // this variable is React's territory

    return (
        <>
            <h2>Hello Function Component</h2>
            <h3>Count: {count}</h3>
            <button onClick={ increment }>+</button>
            <button onClick={ () => decrement() }>-</button>   {/* will work same as decrement */}
            
        </>
    )

}




