import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./styles/globalStyles";
import { Provider } from "react-redux";
import {  persistor,store } from "./app/store";
import { PersistGate } from 'redux-persist/integration/react';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <App />
        </PersistGate>
    </Provider>
  </React.StrictMode>
);
