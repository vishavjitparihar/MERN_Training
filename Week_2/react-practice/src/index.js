// Works the same as require, it's just nicre synatx
// You may use import synatx if your project is a module
// This project is a module thanks to a tool called webpack

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import SomeComponent,{ x, x as x2 } from './SomeComponent' //.js or .jsx is optional

//this file App is incharge of mounting the app and setting up any other providers
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
  <>
  <App />
  <SomeComponent />
  <SomeComponent />
  <SomeComponent />
  <SomeComponent />
  </>
  // {/* <App /> */}
  </React.StrictMode>
);


