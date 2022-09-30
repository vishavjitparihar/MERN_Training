// The JSX extension works the same as js
// The jsx extension carries more semantic meaning

/**
 * Class Components are the old school way of defining components in React
 * 
 * You should not write new code using class component 
 * 
 * Why did we start with class components?
 * Function components have always existed, as have class components, but class components used to be the only one that could handle the state
 * 
 * Function used to be "dumb" or UI components only. Any logic or state would be a job for a class component
 * 
 * In react 16.8 hooks were addede which brought state and the other features of class component to function component
 * This effectively killed class components
 * 
 * React themselve still support class component, but a lot of modern libraries for React do not
 */

import React from "react";

// For a class to be seen as a React component
class ClassCounter extends React.Component {

    constructor() {
        super();

        //I am going to define the intial state for my React component

        this.state = {
            count: 0
        }

        //we need to bind the definition of this, to the function
        //it will allow these function to read 'this' in it
        this.increment = this.increment.bind(this);
        this.decriment = this.decriment.bind(this);
    }


    increment() {
        //setState()
        //setState comes from React and it is our way pf changing the state

        /**
         * In React, state is immutable, we can only change it using their setters.
         * 
         * The reason for this, is because that setState is also going to trigger the re-render process and talk to the virtual DOM
         */

        //update state to be a new object with count set to the old count+1
        this.setState({count: this.state.count+1});
    }

    decriment() {
        this.setState({count: this.state.count-1});
    }

    /**
     * unlike function component where what is returned is what is displayed
     * 
     * Class componnets have a render method that will be called
     */

    render() {
        return (
            <>
            {/* only the HTML elements will get rendered to the page: Fragments or Components */}
                <h2>Hello Class Component</h2>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decriment}>-</button>
            </>
        )
    }



    /**
     * Class componnet have desiganated lifecycle method in them
     * 
     * A lifecycle method is a function that React will automatically call on your behalf at various stages of a component's lifecycle
     * 
     * 
     */

    /**
     * This function runs ONCE once the componnet has first been mounted to the DOM(on the page)
     */

    componentDidMount() {
        //this was a good place to fetch data
        console.log('component is born');
        // setInterval(() => {
        //     console.log(new Date());
        // }, 1000);       //if not cleaned up, this inteval will continue to run 
    }


    /**
     * This function is called jsut before a componnet will be unmounted from the DOM
     */
    
    componentWillUnmount() {
        //This is where all cleanup should go

        //If i was doing web sockets, sever connection here
        //if i established any intervals or events listeners, cancel them here

        console.log('Component is Unborn!');
    }
}


export default ClassCounter;