import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { I18nProvider } from './context/i18nContext'
import { DarkModeProvider } from './context/darkModeContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </I18nProvider>
  </React.StrictMode>
);

