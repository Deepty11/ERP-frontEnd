import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import { PrimeReactProvider } from 'primereact/api'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider>
      <Router>
        <App />
      </Router>
    </PrimeReactProvider>
  </StrictMode>,
)
