
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {GlobalStyles} from "./styles/globalStyles";
import {Provider} from "react-redux";
import store from './app/store'
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>

          <GlobalStyles/>
          <App />

    </Provider>
  </React.StrictMode>
);

