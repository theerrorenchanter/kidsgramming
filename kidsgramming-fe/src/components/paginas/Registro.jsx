import React from 'react'

import registerimg from '../../../public/register-img.jpeg'
import { Link } from 'react-router-dom'
import NavbarHome from '../navegacion/NavbarHome'

const Register = () => {
  return (
    <div>
       <NavbarHome/>
       <section className="signup m-5">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Registrarse</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="identification"><i className="fa fa-address-card"></i></label>
                                <input type="number" name="identification" id="identification" placeholder="Ingrese la identificación"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name"><i className="fa fa-user"></i></label>
                                <input type="text" name="name" id="name" placeholder="Ingrese el nombre"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname1"><i className="fa fa-user"></i></label>
                                <input type="text" name="lastname1" id="lastname1" placeholder="Ingrese el primer apellido"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname2"><i className="fa fa-user"></i></label>
                                <input type="text" name="lastname2" id="lastname2" placeholder="Ingrese el segundo apellido"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username"><i className="fa fa-user-circle-o"></i></label>
                                <input type="text" name="username" id="username" placeholder="Ingrese el nombre de usuario"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass"><i className="fa fa-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Ingrese la contraseña"/>
                            </div>
                            
                            <div className="form-group">
                              <Link to="/login" className="signup-image-link">¿Ya tienes una cuenta? Inicia sesión</Link>
                            </div>
                            <div className="pb-4">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Registrarse"/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure>
                          <img id="imgregister" src={registerimg} alt="sing up image"/>
                        </figure>
                    
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Register