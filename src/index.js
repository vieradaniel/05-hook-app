import React from 'react';
import ReactDOM from 'react-dom';
import { MultipleCustomHooks } from './components/examples/MultipleCustomHooks';
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
//import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
//import { CounterApp } from './components/CounterApp';
//import { HookApp } from './HookApp';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <MultipleCustomHooks />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
