import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
/*  useEffect se renderiza 2 veces en mode dev */
  <React.StrictMode>
    <App />
  </React.StrictMode>

  //  <App />
   
)
