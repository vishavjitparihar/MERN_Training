# What is REACT?
- React is a JavaScript UI library (framework)
- Component based system
- Utilizes the Virtual DOM

## Virtual DOM
- React's core philosphy is that the user interface (UI) should be a function of the application's state
    - UI = f(state)
- Whenever the "state" changes in React, React will automatically update the page on your behalf
- The virtual DOM is a JavaScript, in-memory representation of the actual DOM
    - As such, it it faster to interact with
- React will read the virtual DOM, and if anything has changed when state chnages, it will redraw the changes to the actual DOM
    - The virtual DOM is React's way of interfacing with the native DOM
- React will intelligently only re-render/redraw elements that have changes
    - When a change is made, it looks at the old copy  of the tree and the new copy of the tree, and only makes changes where things have changed

## JSX
- JavaScript and XML
- It allows us to type HTML in our JavaScript. Technically, it is not HTML though, it is JSX
- <div></div> -> React.creatElement("div);
    - React.createElement will call document.createElement for us. It is another abstraction
- JSX is converted to JS using a tool called Babel
    - Newer JS is "transpiled" back to an older version of JS
    - We can write the modern, bleeding-edge JS and still have it be supported by browser that only support 2008 JS (Internet Explorer)
    - Browser cannot understand JSX, but they can understand React.createElement()

## Components
- Allows us to organize our logic into bits of reusable code that each hangle their own internal state
- Allows for a layer of sepration in our app where each

## Webpack
- creates-react-app (CRA) generates and menages a webpack config for you
- this is a build tool responsible for injecting values into the enviroment, enter prodcution mode, hot module reloading (HME), bundling and minifying your JS for optimal build (puts it through babel, removes unused code, comments, and also "optimizes your code")
    - The code function the exact same, but it will be vastly smaller in terms of memory