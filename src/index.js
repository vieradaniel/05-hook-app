import React from 'react';
import ReactDOM from 'react-dom';
import { Padre } from './components/07-tarea-memo/Padre';
//import { CallbackHook } from './components/06-memos/CallbackHook';
//import { MemoHook } from './components/06-memos/MemoHook'; (este me hace buckle inf xD)
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
    < Padre />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
