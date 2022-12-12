import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Apiprovider } from './context/UsseContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Apiprovider>
    <App/>
    </Apiprovider>
  </React.StrictMode>
)
