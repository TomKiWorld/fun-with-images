import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { imageUrlInputValue, userInformation } from './reducers';
import 'tachyons';
import './index.css';

const rootReducer = combineReducers({ imageUrlInputValue, userInformation });
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
