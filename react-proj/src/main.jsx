import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '../../my-components/dist/my-lib.es'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
