import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import { BrowserRouter as Router, Route, Switch  } from 'react'
import { BrowserRouter as Router, Route, Switch, Routes  } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
