import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Inicio from './components/paginas/Inicio'
import Login from './components/paginas/Login'
import Registro from './components/paginas/Registro'
import Curso from './components/paginas/Curso'


ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registro" element={<Registro/>} />
        <Route path="/curso" element={<Curso/>} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>
)
