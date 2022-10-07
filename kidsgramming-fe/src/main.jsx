import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { KidsgrammingApp } from './KidsgrammingApp'
import { store } from './store/store'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <KidsgrammingApp />
    </BrowserRouter>
  </Provider>
)
