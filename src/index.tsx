import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'app';

import { BrowserRouter } from 'react-router-dom';
import { DAppProvider } from '@usedapp/core';
import { config } from 'helpers/config';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DAppProvider config={config}>
        <App />
      </DAppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
