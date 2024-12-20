import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import GreetingElement from './myGreeting';
import GreetingElementWithProps from './mygreetingwithprops';

import AppColor from './AppbackgroundColor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppColor heading="This is the first Element" lbl='Name :' color='pink'/>
    <AppColor heading="This is the second Element" lbl='Name :' color='lavender' />
    <AppColor heading="This is the third Element" lbl='Name :' color='powderblue' />
    <AppColor heading="This is the fourth Element" lbl='Name :' color='brown' />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

