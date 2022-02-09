import React from 'react';
import ReactDOM from 'react-dom';
import { MemoHook } from './components/06-memos/MemoHook';
//import { Memorize } from './components/06-memos/Memorize';
//import { Layout } from './components/05-useLayoutEffect/Layout';
//import { RealExampleRef } from './components/04-useRef/RealExampleRef';
//import { FocusScreen } from './components/04-useRef/FocusScreen';
//import { MultipleCustomHooks } from './components/examples/MultipleCustomHooks';
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
//import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
//import { CounterApp } from './components/CounterApp';
//import { HookApp } from './HookApp';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <MemoHook />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
