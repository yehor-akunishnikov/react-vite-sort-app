import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import {StoreProvider} from './store/StoreProvider.tsx';
import App from './App.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>,
);
