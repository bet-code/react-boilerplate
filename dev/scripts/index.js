import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise) (createStore);

ReactDOM.render(
    <App/>,
  document.getElementById('app'));