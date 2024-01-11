import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './Home'
import './index.css'
import Dashboard from './Dashboard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Home />
    <Dashboard />
  </React.StrictMode>,
)
