// Works the same as require, it's just nicre synatx
// You may use import synatx if your project is a module
// This project is a module thanks to a tool called webpack

import React from 'react';
import ReactDOM from 'react-dom/client';
import SomeComponent,{ x, x as x2 } from './SomeComponent' //.js or .jsx is optional


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  // <React.StrictMode>
  <>
  <SomeComponent />
  <SomeComponent />
  <SomeComponent />
  <SomeComponent />
  </>
  // {/* <App /> */}
  // </React.StrictMode>
);


