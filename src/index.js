import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
// import App from './App';
// import Home from './container/Home/Home';
// import Users from './container/Users/Users';
import Test from './container/Test/Test';

/* try another way*/
// const helloWorld = () => {
//   return <p>Hello ReactJS from Arifin</p>
// }

ReactDOM.render(
  <BrowserRouter>
    <Test />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
