import React from 'react'
import NavbarHome from '../navegacion/NavbarHome'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <div>
        <NavbarHome/>
        <section className="u-clearfix u-image u-section-2" id="carousel_0e21">
            <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
                <div className="u-layout">
                    <div className="u-layout-row">
                        <div className="u-container-style u-layout-cell u-left-cell u-size-29 u-layout-cell-1">
                            <div className="u-container-layout u-container-layout-1 my-5">
                                <h4 className="u-align-left u-custom-font u-font-pt-sans u-text u-text-1">Kidsgramming</h4>
                                <h1 className="u-align-left u-custom-font u-font-roboto-condensed u-text u-text-palette-4-base u-text-2">Tus hijos son nuestro futuro <br/>
                                </h1>
                                <p className="u-align-left u-text u-text-3">Kidsgramming es una plataforma 
                                educativa donde niños de 8 a 12 años podrán incursionar un viaje increible
                                hacia temas que contribuirán a su desarrollo.</p>

                                <div className="mt-3">
                                    <Link to="/login" className="form-submit mb-2 me-4" >Iniciar sesión</Link>
                                    <Link to="/registro" className="form-submit"> Registrarse</Link>
                                </div>
                            </div>
                             
                        </div>
                        <div className="u-align-right u-container-style u-image u-layout-cell u-right-cell u-size-31 u-image-1">
                            
                        </div>
                      
                    </div>
                </div>
            </div>
        </section>
    </div>
    
  )
}

export default Inicio