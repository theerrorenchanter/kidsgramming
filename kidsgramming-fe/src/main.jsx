import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { KidsgrammingApp } from './KidsgrammingApp'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <KidsgrammingApp />
    </BrowserRouter>
  </React.StrictMode>
)
