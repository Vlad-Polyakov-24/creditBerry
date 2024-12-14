import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { ErrorBoundary } from '@app/providers/ErrorBoundary';
import App from '@app/App';
import 'react-toastify/dist/ReactToastify.css';
import '@app/styles/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
      <ToastContainer theme={'light'}/>
    </ErrorBoundary>
  </StrictMode>,
);
