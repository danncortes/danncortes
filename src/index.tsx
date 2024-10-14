import React from 'react';
import './styles.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import './i18n';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.Suspense fallback="loading">
    <App />
  </React.Suspense>
);
