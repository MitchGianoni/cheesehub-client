import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import CheeseList from './components/cheese-list';
import registerServiceWorker from './registerServiceWorker';
import { cheeseReducer } from './reducers/cheese';

const store = createStore(cheeseReducer, applyMiddleware(thunk));
store.getState();

ReactDOM.render(
  <Provider store={store}>
    <CheeseList />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();