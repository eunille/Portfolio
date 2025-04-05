import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Global error handler for storage access issues
window.addEventListener('error', (event) => {
  if (event.message.includes('Access to storage is not allowed')) {
    console.warn('Suppressed storage access error:', event.message);
    event.preventDefault();
  }
});

window.addEventListener('unhandledrejection', (event) => {
  if (event.reason && event.reason.message.includes('Access to storage is not allowed')) {
    console.warn('Suppressed storage access error:', event.reason.message);
    event.preventDefault();
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)