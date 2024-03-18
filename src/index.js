import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <TonConnectUIProvider manifestUrl="https://demoton.netlify.app/tonconnect-manifest.json">
      <App />
    </TonConnectUIProvider>
    
  </React.StrictMode>
);

reportWebVitals();


// tonconnect-manifest.json