import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import calculatorReducer from './reducers/index';
import CalcuForm from './components/CalcuForm';
import './index.css';

const store = createStore(calculatorReducer);

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const returnValue = rawDispatch(action);
    console.log('c% next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

store.dispatch = addLoggingToDispatch(store);

render(
  <Provider store={store}>
    <CalcuForm />
  </Provider>,
  document.getElementById('root')
);
