import React from 'react'
import { Link } from 'react-router-dom'

const NavbarHome = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light ">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <span className='me-3'>
                    <img src="./educativo1.jpg"/>
                </span>
                Kidsgramming 
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-2">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/curso">Curso</Link>
                        </li>
                    </ul>
                </div>
        </div>
    </nav>
  )
}

export default NavbarHome