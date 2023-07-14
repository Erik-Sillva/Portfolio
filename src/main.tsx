import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './scss/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

export default root;