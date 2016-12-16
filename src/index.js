import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import calculatorReducer from './reducers/index';
import CalcuForm from './components/CalcuForm';
import './index.css';

const store = createStore(calculatorReducer);

console.log(store.getState());

render(
  <Provider store={store}>
    <CalcuForm />
  </Provider>,
  document.getElementById('root')
);
