import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
// for redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// initial states
const firstReducerInitialState = 0;

const firstReducer = ( state = firstReducerInitialState, action ) =>{
  console.log( 'in firstReducer:', 'state:', state, 'action:', action );
  if(action.type === 'pickup'){
    console.log('picking up', action.payload);
    state = state + action.payload
    return state;
  }
  else if(action.type === 'drop'){
    console.log('dropping', action.payload); 
    state = state - action.payload
    return state;
  }
  else if (action.type === 'scoop') {
    console.log('scooping', action.payload);
    state = state + action.payload
    return state;
  }
  return state;
} // firstReducer

// create a storage space for redux data, tell it to use our reducer
const storeInstance = createStore( firstReducer );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ storeInstance }><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
