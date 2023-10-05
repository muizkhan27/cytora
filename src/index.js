import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import router from './routes/router';
import {
  RouterProvider,
} from "react-router-dom";

import store from './redux/store'
import { Provider } from 'react-redux'

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
