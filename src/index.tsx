import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { DAppProvider } from '@usedapp/core';

import App from 'app';

import { config } from 'helpers/config';
import './index.css';
import { store } from 'store_toolkit';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/test">
        <DAppProvider config={config}>
          <App />
        </DAppProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
